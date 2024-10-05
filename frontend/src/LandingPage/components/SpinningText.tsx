import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { FontLoader } from 'three-stdlib';
import { TextGeometry } from 'three-stdlib';
import * as THREE from 'three';

const SpinningText: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const fontLoader = new FontLoader();
  
    useEffect(() => {
      fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const geometry = new TextGeometry('SavvyCSV', {
          font: font,
          size: 2,  // Adjust size if necessary
          height: 0.5,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.1,
        });
  
        const material = new THREE.MeshBasicMaterial({ color: '#0D0D0D' });
        if (meshRef.current) {
          meshRef.current.geometry.dispose();
          meshRef.current.geometry = geometry;
          meshRef.current.material = material;
        }
      });
    }, [fontLoader]);
  

    useFrame(() => {
        if (meshRef.current) {
          meshRef.current.rotation.y += 0.01; // Spin the text
        }
      });
    
      return <mesh ref={meshRef} />;
    };

export default SpinningText