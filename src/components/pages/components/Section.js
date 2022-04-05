import React from "react";
import styled from "styled-components";

function Section(props) {
  return <Sections>{props.children}</Sections>;
}

export default Section;

const Sections = styled.div`
  background-color: #ffffe5;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 40px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
`;
