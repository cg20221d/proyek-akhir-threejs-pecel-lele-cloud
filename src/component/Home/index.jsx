import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

const index = () => {
  const texture = useLoader(TextureLoader, "Home/Rumah.glb");
  return <ModelViewer scale="40" modelPath={texture} />;
};

export default index;
