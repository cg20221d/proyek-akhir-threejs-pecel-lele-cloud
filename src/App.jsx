import { Suspense } from "react";
import Three from "./component/three";
import "./App.css";

/** Person */
import { Sky, Environment } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import ThreeModel from "./component/ThreeModel";
import BaseCharacter from "./ui/BaseCharacter";
import Rumah from "./component/Home/Rumah";
import Sun from "./component/Sun/Sun";
import Lampu from "./component/Lampu";
import Garden from "./component/French_chateau";

function App(props) {
  return (
    <>
      <BaseScene>
        <BaseCharacter controls position={[0, 5, 30]} args={[2.5]} color="yellow" />
        <Rumah />
        {/* <ambientLight args={["#ffffff", 0.25]} /> */}
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, 1]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, 5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, 20]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[3, 0, 20]} />
        <Sun args={[0.2, 2, 0.2]} scale={0.7} />
        <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[4, 0.05, 13]} />
        <Lampu args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0.05, 13]} />
        <Garden args={[0.5, 2, 0.5]} scale={0.5} position={[-1, 0.05, -13.35]} />
        {/* <mesh position={[-2, 1.75, 0]} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
        </mesh> */}
        {/* <ambientLight args={["#ffffff", 0.5]} /> */}
        {/* <group ref={ref} {...props} dispose={null}> */}
        {/* <pointLight args={["#ffffff", 2]} position={[0.2, 10, 0.2]} /> */}
        {/* </group> */}

        <Sky distance={450000} azimuth={1} />
        {/* <Environment background>
          <mesh>
            <sphereGeometry args={[50, 100, 100]} />
            <meshBasicMaterial />
          </mesh>
        </Environment> */}
      </BaseScene>
    </>
  );
}

export default App;
