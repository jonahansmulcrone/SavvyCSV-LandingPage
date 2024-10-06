import { RGBELoader } from 'three-stdlib'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  Center,
  Text3D,
  Environment,
  Lightformer,
  OrbitControls,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { useEffect, useRef } from 'react';
import { Mesh, Vector3 } from 'three';

interface TextProps {
  children: React.ReactNode;
  config: Record<string, any>;
  font?: string;
  [key: string]: any;
}

const Text: React.FC<TextProps> = ({ children, config, font = 'fonts/helvetiker_regular.typeface.json', ...props }) => {
  const texture = useLoader(RGBELoader, 'src/assets/pink_sunrise_4k.hdr')
  const ref = useRef<Mesh>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.geometry.computeBoundingBox();
      const boundingBox = ref.current.geometry.boundingBox;
      const center = new Vector3();

      if (boundingBox) {
        boundingBox.getCenter(center);
      }

      ref.current.geometry.translate(-center.x, -center.y, -center.z);
      ref.current.position.set(15, 0, 0)
    }
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta
    }
  })

  return (
    <>
      <group>
        <Center position={[0, 1, 0]} rotation={[-Math.PI / 12, Math.PI / 12, 0]}>
          <Text3D
            ref={ref}
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={0.01}
            height={0.8}
            bevelSize={0.04}
            bevelSegments={25}
            bevelThickness={0.05}>
            {children}
            <MeshTransmissionMaterial {...config} background={texture} />
          </Text3D>
        </Center>
      </group>
    </>
  )
}

const SavvyLogo: React.FC = () => {
  const text = 'SavvyCSV';
  const config = {
    backside: true,
    backsideThickness: 0.3,
    samples: 8,
    resolution: 1024,
    transmission: 0.8,
    clearcoat: 1,
    clearcoatRoughness: 0.0,
    thickness: 0.3,
    chromaticAberration: 5,
    anisotropy: 0.3,
    roughness: 0,
    distortion: 0.5,
    distortionScale: 0.1,
    temporalDistortion: 1.2,
    ior: 1.5,
    color: '#ffffff',
  };

  return (
    <Canvas shadows orthographic camera={{ position: [0, 10, 5], zoom: 18 }} >
      <color attach="background" args={['#0D0D0D']} />
      <Text config={config} rotation={[150, 0, 0]} position={[0, 0, 5]}>
        {text}
      </Text>
      <OrbitControls
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={18}
        maxZoom={18}
        enablePan={false}
        dampingFactor={0.01}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={25} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={25} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
          <Lightformer intensity={4} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[20, 0.1, 1]} />
          <Lightformer rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[20, 0.5, 1]} />
          <Lightformer rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 1, 1]} />
        </group>
      </Environment>
    </Canvas>
  )
}

export default SavvyLogo
