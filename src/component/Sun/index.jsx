import React from "react";

const SunSphereGeometry = () => {
  return (
    <mesh position={[-2, 1.75, 0]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.2} />
    </mesh>
  );
};

export default SunSphereGeometry;
