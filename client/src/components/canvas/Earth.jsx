import { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Loader from '../Loader';
import ErrorBoundary from '../ErrorBoundary';
import { baseUrl } from '../../constants'

const Earth = () => {
  const earth = useLoader(
    GLTFLoader,
    `${baseUrl}api/model/planet/scene.gltf` // Your backend endpoint
  );

  return (
    <primitive 
      object={earth.scene} 
      scale={2.5}
      position-y={0}
      rotation-y={0}
    />
  );
}

const EarthCanvas = () => {
  return (
    <ErrorBoundary>
      <Canvas
        shadows
        frameloop='demand'
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <OrbitControls 
            autoRotate
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <Earth />
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;