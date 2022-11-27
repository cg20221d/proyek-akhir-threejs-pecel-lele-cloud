import React, { useEffect } from "react";
import { useThree } from "react-three-fiber";
import { CubeTextureLoader } from "three";

export const Skybox = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = new CubeTextureLoader().setPath("texture/skybox/").load(["Left.jpeg", "Right.jpeg", "Top.jpeg", "Bottom.jpeg", "Back.jpeg", "Front.jpeg"]);
  }, [scene]);

  return <></>;
};
