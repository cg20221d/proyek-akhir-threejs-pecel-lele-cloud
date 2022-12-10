import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const index = () => {
  const texture = useLoader(TextureLoader, "sun/sun.glb");
  return <ModelViewer scale="2" modelPath={texture} />;
};

export default index;

