// /*
// Auto-generated by: https://github.com/pmndrs/gltfjsx
// */

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export default function Rumah() {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("/Home/Rumah-transformed.glb");
//   return (
//     <group ref={group} dispose={null}>
//       <group position={[0.19, 0.86, 0.19]}>
//         <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Material} />
//         <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} />
//       </group>
//       <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={nodes.Plane.material} scale={5.65} />
//       <mesh castShadow receiveShadow geometry={nodes.Icosphere.geometry} material={nodes.Icosphere.material} position={[-3.48, 1.63, -0.46]} scale={0.3} />
//       <mesh castShadow receiveShadow geometry={nodes.Icosphere001.geometry} material={nodes.Icosphere001.material} position={[-3.73, 1.35, -0.44]} scale={0.39} />
//       <mesh castShadow receiveShadow geometry={nodes.Icosphere002.geometry} material={nodes.Icosphere002.material} position={[-3.26, 1.45, -0.32]} scale={0.33} />
//       <mesh castShadow receiveShadow geometry={nodes.Silinder.geometry} material={nodes.Silinder.material} position={[-3.46, 0.65, -0.42]} scale={[0.11, 0.7, 0.11]} />
//     </group>
//   );
// }

// useGLTF.preload("/Home/Rumah-transformed.glb");

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Rumah() {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Home/home.glb')
  return (
    <group ref={group} dispose={null}>
      <mesh geometry={nodes.Icosphere001.geometry} material={materials.Material} position={[5.88, 3.44, 3.86]} rotation={[Math.PI, 0, Math.PI]} scale={0.83}>
        <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.006']} position={[0.65, 0.73, -0.07]} scale={0.76} />
        <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.004']} position={[1.22, 0.25, 0.3]} scale={0.85} />
        <mesh geometry={nodes.Silinder.geometry} material={materials['Material.008']} position={[0.69, -1.8, 0.04]} scale={[0.27, 1.81, 0.27]} />
      </mesh>
      <mesh geometry={nodes.Plane002.geometry} material={materials.sofa} position={[0.82, 0.57, -1.3]} rotation={[0, Math.PI / 2, 0]} scale={[2.68, 0.87, 0.87]}>
        <mesh geometry={nodes.Plane003.geometry} material={materials['bantal sofa']} />
      </mesh>
      <group position={[-0.84, 0.44, -1.25]} rotation={[Math.PI, 0, Math.PI]} scale={3}>
        <mesh geometry={nodes.Plane010.geometry} material={materials.Dinding} />
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.lantai} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials['pintu.001']} />
        <mesh geometry={nodes.Plane010_3.geometry} material={materials['pintu.002']} />
        <mesh geometry={nodes.Plane010_4.geometry} material={materials.window} />
        <mesh geometry={nodes.Plane010_5.geometry} material={materials['Material.016']} />
      </group>
      <group position={[3.04, -14.69, -18.47]} rotation={[Math.PI, 0, Math.PI]} scale={[1.69, 1.9, 1.85]}>
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials['atap luar']} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.atap1} />
        <mesh geometry={nodes.Cube001_4.geometry} material={materials.atap2} />
        <mesh geometry={nodes.Cube001_5.geometry} material={materials.alas} />
      </group>
      <mesh geometry={nodes.Plane004.geometry} material={nodes.Plane004.material} position={[-3.54, 2.94, 1.64]} rotation={[Math.PI, 0, Math.PI / 2]} />
      <group position={[-0.87, 5.42, -1.25]} rotation={[Math.PI, 0, Math.PI]} scale={[3.13, 1, 4.92]}>
        <mesh geometry={nodes.Plane012_1.geometry} material={materials.atap} />
        <mesh geometry={nodes.Plane012_2.geometry} material={materials.atap_in} />
        <mesh geometry={nodes.Plane006_1.geometry} material={materials['atap.001']} position={[0.01, -0.36, -0.04]} scale={[1.01, 2.9, 1.01]} />
      </group>
      <mesh geometry={nodes.Plane007.geometry} material={materials['Material.022']} position={[0.16, 0, 6.42]} rotation={[0, -Math.PI / 2, 0]} scale={[12.93, 8, 6.63]} />
      <mesh geometry={nodes.Plane008.geometry} material={materials['Material.017']} position={[0.55, 0.49, 6.37]} rotation={[0, -Math.PI / 2, 0]} scale={0.68}>
        <mesh geometry={nodes.Plane074.geometry} material={materials['Material.017']} position={[2.34, 0, 0]} />
        <mesh geometry={nodes.Plane075.geometry} material={materials['Material.017']} position={[4.65, 0, 0]} />
        <mesh geometry={nodes.Plane076.geometry} material={materials['Material.017']} position={[6.99, 0, 0]} />
        <mesh geometry={nodes.Plane077.geometry} material={materials['Material.017']} position={[9.3, 0, 0]} />
        <mesh geometry={nodes.Plane078.geometry} material={materials['Material.017']} position={[11.65, 0, 0]} />
        <mesh geometry={nodes.Plane079.geometry} material={materials['Material.017']} position={[13.95, 0, 0]} />
        <mesh geometry={nodes.Plane080.geometry} material={materials['Material.017']} position={[16.29, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane016.geometry} material={materials.pagar} position={[10.28, 0.95, 8.57]} rotation={[Math.PI, 0, Math.PI]} scale={[1.3, 1, 0.24]}>
        <mesh geometry={nodes.Plane046.geometry} material={materials.pagar} position={[0.42, 0, 0]} />
        <mesh geometry={nodes.Plane047.geometry} material={materials.pagar} position={[0.83, 0, 0]} />
        <mesh geometry={nodes.Plane048.geometry} material={materials.pagar} position={[1.24, 0, 0]} />
        <mesh geometry={nodes.Plane049.geometry} material={materials.pagar} position={[1.66, 0, 0]} />
        <mesh geometry={nodes.Plane050.geometry} material={materials.pagar} position={[2.07, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Icosphere004.geometry} material={materials.Material} position={[5.88, 3.44, 17.21]} rotation={[Math.PI, 0, Math.PI]} scale={0.83}>
        <mesh geometry={nodes.Icosphere003.geometry} material={materials['Material.006']} position={[0.65, 0.73, -0.07]} scale={0.76} />
        <mesh geometry={nodes.Icosphere005.geometry} material={materials['Material.004']} position={[1.22, 0.25, 0.3]} scale={0.85} />
        <mesh geometry={nodes.Silinder001.geometry} material={materials['Material.008']} position={[0.69, -1.8, 0.04]} scale={[0.27, 1.81, 0.27]} />
      </mesh>
      <mesh geometry={nodes.Icosphere007.geometry} material={materials.Material} position={[-3.36, 3.44, 17.21]} rotation={[Math.PI, 0, Math.PI]} scale={0.83}>
        <mesh geometry={nodes.Icosphere006.geometry} material={materials['Material.006']} position={[0.65, 0.73, -0.07]} scale={0.76} />
        <mesh geometry={nodes.Icosphere008.geometry} material={materials['Material.004']} position={[1.22, 0.25, 0.3]} scale={0.85} />
        <mesh geometry={nodes.Silinder002.geometry} material={materials['Material.008']} position={[0.69, -1.8, 0.04]} scale={[0.27, 1.81, 0.27]} />
      </mesh>
      <mesh geometry={nodes.Plane019.geometry} material={materials['Material.018']} position={[4.84, 1.99, 10.46]} rotation={[0, 0, -2.21]} scale={[0.75, 1, 0.17]}>
        <mesh geometry={nodes.Plane017.geometry} material={materials['Material.018']} position={[0.99, -0.12, 0]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane018.geometry} material={materials['kursi.001']} position={[0.53, 0.1, -6.06]} rotation={[0, 0, 2.22]} scale={[0.16, 1.22, 8.34]} />
        <mesh geometry={nodes.Plane022.geometry} material={materials['Material.018']} position={[0, 0, -2]} />
        <mesh geometry={nodes.Plane023.geometry} material={materials['Material.018']} position={[0, 0, -4]} />
        <mesh geometry={nodes.Plane024_1.geometry} material={materials['Material.018']} position={[0, 0, -6]} />
        <mesh geometry={nodes.Plane025.geometry} material={materials['Material.018']} position={[0, 0, -8]} />
        <mesh geometry={nodes.Plane026.geometry} material={materials['Material.018']} position={[0, 0, -9.99]} />
        <mesh geometry={nodes.Plane027_1.geometry} material={materials['Material.018']} position={[0, 0, -11.99]} />
        <mesh geometry={nodes.Plane028.geometry} material={materials['Material.018']} position={[0.99, -0.12, -2]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane029.geometry} material={materials['Material.018']} position={[0.99, -0.12, -4]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane030.geometry} material={materials['Material.018']} position={[0.99, -0.12, -6]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane031.geometry} material={materials['Material.018']} position={[0.99, -0.12, -8]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane032.geometry} material={materials['Material.018']} position={[0.99, -0.12, -9.99]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane033.geometry} material={materials['Material.018']} position={[0.99, -0.12, -11.99]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
      </mesh>
      <mesh geometry={nodes.Plane013.geometry} material={materials['Material.018']} position={[-3.75, 1.99, 8.39]} rotation={[Math.PI, 0, 0.93]} scale={[0.75, 1, 0.17]}>
        <mesh geometry={nodes.Plane010_6.geometry} material={materials['kursi.001']} position={[0.53, 0.1, -6.06]} rotation={[0, 0, 2.22]} scale={[0.16, 1.22, 8.34]} />
        <mesh geometry={nodes.Plane014_1.geometry} material={materials['Material.018']} position={[0, 0, -2]} />
        <mesh geometry={nodes.Plane034.geometry} material={materials['Material.018']} position={[0, 0, -4]} />
        <mesh geometry={nodes.Plane035.geometry} material={materials['Material.018']} position={[0, 0, -6]} />
        <mesh geometry={nodes.Plane036.geometry} material={materials['Material.018']} position={[0, 0, -8]} />
        <mesh geometry={nodes.Plane037_1.geometry} material={materials['Material.018']} position={[0, 0, -9.99]} />
        <mesh geometry={nodes.Plane038.geometry} material={materials['Material.018']} position={[0, 0, -11.99]} />
        <mesh geometry={nodes.Plane039.geometry} material={materials['Material.018']} position={[0.99, -0.12, 0]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane040.geometry} material={materials['Material.018']} position={[0.99, -0.12, -2]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane041.geometry} material={materials['Material.018']} position={[0.99, -0.12, -4]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane042.geometry} material={materials['Material.018']} position={[0.99, -0.12, -6]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane043.geometry} material={materials['Material.018']} position={[0.99, -0.12, -8]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane044.geometry} material={materials['Material.018']} position={[0.99, -0.12, -9.99]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
        <mesh geometry={nodes.Plane045.geometry} material={materials['Material.018']} position={[0.99, -0.12, -11.99]} rotation={[0, 0, 2.36]} scale={[0.89, 1.17, 1]} />
      </mesh>
      <mesh geometry={nodes.Plane015.geometry} material={materials.pagar} position={[2.37, 0.95, 8.57]} rotation={[Math.PI, 0, Math.PI]} scale={[1.3, 1, 0.24]}>
        <mesh geometry={nodes.Plane051.geometry} material={materials.pagar} position={[0.42, 0, 0]} />
        <mesh geometry={nodes.Plane052.geometry} material={materials.pagar} position={[0.83, 0, 0]} />
        <mesh geometry={nodes.Plane053.geometry} material={materials.pagar} position={[1.24, 0, 0]} />
        <mesh geometry={nodes.Plane054.geometry} material={materials.pagar} position={[1.66, 0, 0]} />
        <mesh geometry={nodes.Plane055.geometry} material={materials.pagar} position={[2.07, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane020.geometry} material={materials.pagar} position={[-4.01, 0.95, 3.38]} rotation={[0, -Math.PI / 2, 0]} scale={[1.3, 1, 0.24]}>
        <mesh geometry={nodes.Plane056_1.geometry} material={materials.pagar} position={[0.42, 0, 0]} />
        <mesh geometry={nodes.Plane057.geometry} material={materials.pagar} position={[0.83, 0, 0]} />
        <mesh geometry={nodes.Plane058.geometry} material={materials.pagar} position={[1.24, 0, 0]} />
        <mesh geometry={nodes.Plane059.geometry} material={materials.pagar} position={[1.66, 0, 0]} />
        <mesh geometry={nodes.Plane060.geometry} material={materials.pagar} position={[2.07, 0, 0]} />
        <mesh geometry={nodes.Plane061.geometry} material={materials.pagar} position={[2.47, 0, 0]} />
        <mesh geometry={nodes.Plane062_1.geometry} material={materials.pagar} position={[2.88, 0, 0]} />
        <mesh geometry={nodes.Plane063.geometry} material={materials.pagar} position={[3.3, 0, 0]} />
        <mesh geometry={nodes.Plane064.geometry} material={materials.pagar} position={[3.71, 0, 0]} />
      </mesh>
      <mesh geometry={nodes.Plane021.geometry} material={materials.pagar} position={[-17.04, 0.95, 3.38]} rotation={[0, -Math.PI / 2, 0]} scale={[1.3, 1, 0.24]}>
        <mesh geometry={nodes.Plane065.geometry} material={materials.pagar} position={[0.42, 0, 0]} />
        <mesh geometry={nodes.Plane066.geometry} material={materials.pagar} position={[0.83, 0, 0]} />
        <mesh geometry={nodes.Plane067.geometry} material={materials.pagar} position={[1.24, 0, 0]} />
        <mesh geometry={nodes.Plane068.geometry} material={materials.pagar} position={[1.66, 0, 0]} />
        <mesh geometry={nodes.Plane069.geometry} material={materials.pagar} position={[2.07, 0, 0]} />
        <mesh geometry={nodes.Plane070.geometry} material={materials.pagar} position={[2.47, 0, 0]} />
        <mesh geometry={nodes.Plane071.geometry} material={materials.pagar} position={[2.88, 0, 0]} />
        <mesh geometry={nodes.Plane072_1.geometry} material={materials.pagar} position={[3.3, 0, 0]} />
        <mesh geometry={nodes.Plane073.geometry} material={materials.pagar} position={[3.71, 0, 0]} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Home/home.glb')

