import React from "react";
import styled from "styled-components";

function Container(props) {
  return <MyContainer>{props.children}</MyContainer>;
}

export default Container;

const MyContainer = styled.div`
  min-height: calc(100vh - 50px);
  position: absolute;
  width: 100%;
`;
