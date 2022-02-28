import * as React from "react";
import * as Fiber from '@react-three/fiber';

const DrawCanvas: React.FC = () => {

  return (
    <React.Suspense fallback={<span>loading...</span>}>
      <Fiber.Canvas>
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default DrawCanvas;