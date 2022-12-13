import sun from "./Sun/Sun"

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight penumbra={0.5} position={sun.position} castShadow />
    </>
  );
};

export default Lights;
