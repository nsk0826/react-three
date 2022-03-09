import * as React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import Model from "./model";

const DrawCanvas: React.FC = () => {

  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas>
      
      <Drei.PerspectiveCamera makeDefault={true} />
      <Drei.OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Drei.Stage>
        <Model />
      </Drei.Stage>
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default DrawCanvas;