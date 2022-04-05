import React from "react";
import styled from "styled-components";

function PageHeader(props) {
  return <PageTitle>{props.children}</PageTitle>;
}

export default PageHeader;

const PageTitle = styled.h2`
  margin: 20px 30px;
  text-align: center;
  border-bottom: 1px solid gray;
  text-transform: uppercase;
`;
