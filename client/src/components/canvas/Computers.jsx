import { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Loader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";
import { baseUrl } from "../../constants";

const Computers = ({ isMobile }) => {
  const computer = useLoader(
    GLTFLoader,
    `${baseUrl}api/model/desktop_pc/scene.gltf`
  );

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -4, -2] : [0, -4.5, -1]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 512px)');
    setIsMobile(mediaQuery.matches);

    const handler = (event) => setIsMobile(event.matches);

    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <ErrorBoundary>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<Loader />}>
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default ComputersCanvas;