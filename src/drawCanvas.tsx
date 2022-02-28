import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';

const DrawCanvas: React.FC = () => {

  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas>
      <Drei.PerspectiveCamera makeDefault />
      <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default DrawCanvas;