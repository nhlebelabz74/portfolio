import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load"></span>
      <p className="mt-28 font-medium text-gold text-lg">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
}

export default Loader;