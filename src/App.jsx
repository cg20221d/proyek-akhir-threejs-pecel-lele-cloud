import { Suspense } from "react";
import Three from "./component/three";
import "./App.css";

/** Person */
import { Sky } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import ThreeModel from "./component/ThreeModel";
import BaseCharacter from "./ui/BaseCharacter";
import Rumah from "./component/Home/Rumah";
import Sun from "./component/Sun/Sun";

function App() {
  return (
    <>
      <BaseScene>
        <BaseCharacter controls position={[0, 2, 0]} args={[2.5]} color="yellow" />
        <Rumah />
        <ambientLight args={["#ffffff", 0.25]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[7, 0, 3]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[5, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-3, 0, 8]} />
        <Sun args={[0.2, 2, 0.2]} scale={0.7} />
        <Sky />
      </BaseScene>
    </>
  );
}

export default App;