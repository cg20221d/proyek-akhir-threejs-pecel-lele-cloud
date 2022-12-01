import { Suspense } from "react";
import Three from "./component/three";
import "./App.css";

/** Person */
import { Sky } from "@react-three/drei";
import BaseScene from "./ui/BaseScene";
import ThreeModel from "./component/ThreeModel";
import BaseCharacter from "./ui/BaseCharacter";
import Rumah from "./component/Home/Rumah";
// import Home from "./component/Home/Home";
// import House from "/Home/HouseProject";

import { useState, useEffect } from "react";

// time

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  return (
    <>
      {/* <Suspense> */}
      <BaseScene>
        <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
        <Rumah />
        <ambientLight args={["#ffffff", 0.25]} />

        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} />
        <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} />
        <Sky />
      </BaseScene>
      {/* </Suspense> */}
    </>
  );
}

export default App;
