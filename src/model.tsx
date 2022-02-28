import * as React from "react";
import * as Drei from "@react-three/drei";

const Model: React.FC = () => {
    
    const { scene } = Drei.useGLTF( "static/hamburger.glb");

  return (
      <group dispose={null}>
        <primitive scale={[1, 1, 1]} object={scene} />
      </group>
    )
};

export default Model;