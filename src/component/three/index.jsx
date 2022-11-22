import { angleToRadians } from "../../utils/angle";
import { PerspectiveCamera, OrbitControls, Environment, useTexture, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import gsap from "gsap";
import Camera from "../Camera/index";
import Object from "../Object/index";
import Floor from "../Floor/index";
import SunSphereGeometry from "../Sun/index";
// import Home from "../Home/index";
import ModelViewer from "../Home/ModelViewer";
import Rumah from "../Home/Rumah";
export class ThirdPersonCamera {
  constructor(params) {
    this._params = params;
    thid._camera = camera;
  }
}
export default function Three() {
  // Code to move the camera around
  const orbitControlsRef = useRef(null);
  useFrame((state, delta, xrFrame, yrFrame) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setAzimuthalAngle((y + 0.5) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  requestAnimationFrame(() => {});

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  const ballRef = useRef(null);
  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);
      // timeline
      const timeline = gsap.timeline({ paused: true });

      // [x] axis motion
      timeline.to(ballRef.current.position, {
        x: 1,
        duration: 2,
        ease: "power2.out",
      });

      // // [y] axis motion
      // timeline.to(ballRef.current.position, {
      //   y: 0.5,
      //   duration: 0.5,
      //   ease: "power2.in"
      // }, "<")

      // const coefficient = 0.8
      // for (let i = 1; i <= 4; i++) {
      //   // Going Up
      //   timeline.to(ballRef.current.position, {
      //     y: Math.pow(coefficient, i) * 1.5,
      //     duration: 0.2,
      //     ease: "power2.out"
      //   }, ">")

      //   // Going Down
      //   timeline.to(ballRef.current.position, {
      //     y: 0.5,
      //     duration: 0.2,
      //     ease: "power2.in"
      //   }, ">")
      // }

      // [y] axis motion
      timeline.to(
        ballRef.current.position,
        {
          y: 0.5,
          duration: 1,
          ease: "bounce.out",
        },
        "<"
      );
      // timeline play
      timeline.play();
    }
  }, [ballRef.current]);

  const texture = useLoader(TextureLoader, "texture/cloud.jpeg");
  return (
    <>
      <Camera orbitControlsRef={orbitControlsRef} />
      {/* <SunSphereGeometry /> */}
      {/* <ModelViewer scale="40" modelPath="Home/Rumah.glb" /> */}
      <Rumah />
      {/* <Object ballRef={ballRef} /> */}
      {/* <Floor /> */}
      <ambientLight args={["#ffffff", 0.25]} />
      <spotLight args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]} position={[-6, 4, 1]} castShadow />
      <Environment background>
        <mesh>
          <sphereGeometry args={[50, 100, 100]} />
          {/* <meshBasicMaterial side={THREE.BackSide} map={texture} /> */}
          <meshBasicMaterial color="#2266cc" side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
}
