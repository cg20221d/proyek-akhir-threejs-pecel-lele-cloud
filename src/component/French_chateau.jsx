/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: dylanheyes (https://sketchfab.com/dylanheyes)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/french-chateau-7d5cc18a5ce04463b7befd212b43f8e7
title: French Château
*/

import React, { useRef } from 'react'
import { useBox } from "@react-three/cannon";
import { useGLTF } from '@react-three/drei';

export default function Model({ ...props }) {
  const { nodes, materials } = useGLTF('/french_chateau.glb')

  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 1,
    args: props.args,
    position: props.position,

    ...props,
  }));

  return (
    <group ref={ref} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group position={[0, -2303.63, 900]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={100}>
            <mesh geometry={nodes.Circle001_Window_0.geometry} material={materials.Window} />
            <mesh geometry={nodes.Circle001_Grass_0.geometry} material={materials.Grass} />
            <mesh geometry={nodes.Circle001_Roof_0.geometry} material={materials.Roof} />
            <mesh geometry={nodes.Circle001_Wall001_0.geometry} material={materials['Wall.001']} />
            <mesh geometry={nodes.Circle001_Wall_0.geometry} material={materials.Wall} />
            <mesh geometry={nodes.Circle001_Material003_0.geometry} material={materials['Material.003']} />
            <mesh geometry={nodes.Circle001_House_0.geometry} material={materials.House} />
            <mesh geometry={nodes.Circle001_Concrete_0.geometry} material={materials.Concrete} />
            <mesh geometry={nodes.Circle001_Chimney_0.geometry} material={materials.Chimney} />
            <mesh geometry={nodes.Circle001_Sky_0.geometry} material={materials.material} />
            <mesh geometry={nodes.Circle001_Wall002_0.geometry} material={materials['Wall.002']} />
            {/* <mesh geometry={nodes.Circle001_Hedges_0.geometry} material={materials.Hedges} />
            <mesh geometry={nodes.Circle001_Hedges_0_1.geometry} material={materials.Hedges} />
            <mesh geometry={nodes.Circle001_Hedges_0_2.geometry} material={materials.Hedges} />
            <mesh geometry={nodes.Circle001_Hedges_0_3.geometry} material={materials.Hedges} /> */}
            <mesh geometry={nodes.Circle001_Bushes_0.geometry} material={materials.Bushes} />
            <mesh geometry={nodes.Circle001_Bushes_0_1.geometry} material={materials.Bushes} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/french_chateau.glb')
