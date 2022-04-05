import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavigationBar>
      <LeftItem to="/css-animations">Home</LeftItem>
      <RightItems>
        <MyLink to="/slide">Slide</MyLink>
        <MyLink to="/reveal">Reveal</MyLink>
      </RightItems>
    </NavigationBar>
  );
}

export default Navigation;

const NavigationBar = styled.nav`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2c2cff;
`;

const MyLink = styled(Link)`
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 2px;
  padding: 5px 10px;
  transition: all 500ms ease;
  &:hover {
    border-radius: 10px;
    background-color: #3c3c3c;
  }
`;

const LeftItem = styled(MyLink)`
  margin-left: 20px;
  font-size: 20px;
`;

const RightItems = styled.div`
  margin-right: 20px;
`;
