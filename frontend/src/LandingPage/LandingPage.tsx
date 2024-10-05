import { RGBELoader } from 'three-stdlib'
import { Canvas, useLoader } from '@react-three/fiber'
import {
  Center,
  Text3D,
  Environment,
  Lightformer,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshTransmissionMaterial
} from '@react-three/drei'

interface TextProps {
    children: React.ReactNode;
    config: Record<string, any>; 
    font?: string; 
    [key: string]: any; 
  }

const Text: React.FC<TextProps> = ({ children, config, font = 'fonts/helvetiker_regular.typeface.json', ...props }) => {
  const texture = useLoader(RGBELoader, 'src/assets/pink_sunrise_4k.hdr')
  return (
    <>
      <group>
        <Center scale={[1, 1, 1]} top bottom {...props}>
          <Text3D
            castShadow
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
      backsideThickness: 0.15,
      samples: 16,
      resolution: 1024,
      transmission: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.0,
      thickness: 0.3,
      chromaticAberration: 0.15,
      anisotropy: 0.25,
      roughness: 0,
      distortion: 10,
      distortionScale: 0.1,
      temporalDistortion: 0.60,
      ior: 1.02,
      color: '',
      shadow: '#0D0D0D',
    };

  return (
    <Canvas shadows orthographic camera={{ position: [0, 10, 5], zoom: 18 }} >
      <color attach="background" args={['#0D0D0D']}/>
      <Text config={config} rotation={[150, 0, 0]} position={[0, 0, 5]}>
        {text}
      </Text>
      <OrbitControls
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={20}
        maxZoom={20}
        enablePan={false}
        dampingFactor={0.01}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <Environment resolution={32}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
        <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
          <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />
        </group>
      </Environment>
    </Canvas>
  )
}

export default SavvyLogo
