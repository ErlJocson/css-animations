import React from "react";
import styled from "styled-components";

function CodeContainer(props) {
  return <Container>{props.children}</Container>;
}

export default CodeContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 10px auto;
  padding: 10px;
  min-height: 100px;
  border-radius: 10px;
`;
