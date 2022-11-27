import React from "react";
import styled from "styled-components";

const CrosshairStyle = styled.div`
  height: 5px;
  widht: 5px;
  background-color: white;
  border-radius: 50%;
  border: solid 1px gray;
  margin: auto;
`;

export const Crosshair = () => {
  return <CrosshairStyle />;
};
