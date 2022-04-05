import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <NavigationBar>
      <LeftItem onClick={() => setShowBurger(false)} to="/css-animations">
        Home
      </LeftItem>
      <BurgerNav show={showBurger}>
        <ListOFLink>
          <MyLink onClick={() => setShowBurger(!showBurger)} to="/slide">
            Slide
          </MyLink>
          <MyLink onClick={() => setShowBurger(!showBurger)} to="/reveal">
            Reveal
          </MyLink>
          <MyLink onClick={() => setShowBurger(!showBurger)} to="/jump">
            Jump
          </MyLink>
          <MyLink onClick={() => setShowBurger(!showBurger)} to="/spin">
            Spin
          </MyLink>
        </ListOFLink>
      </BurgerNav>
      <Burger onClick={() => setShowBurger(!showBurger)}>
        <Lines />
        <Lines />
        <Lines />
      </Burger>
      <RightItems>
        <MyLink to="/slide">Slide</MyLink>
        <MyLink to="/reveal">Reveal</MyLink>
        <MyLink to="/jump">Jump</MyLink>
        <MyLink to="/spin">Spin</MyLink>
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

  @media screen and (max-width: 700px) {
    & {
      font-size: 13px;
    }
  }
`;

const LeftItem = styled(MyLink)`
  margin-left: 20px;
  font-size: 20px;
`;

const RightItems = styled.div`
  margin-right: 20px;
  @media screen and (max-width: 600px) {
    & {
      display: none;
    }
  }
`;

const ListOFLink = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  margin-bottom: 10px;
`;

const BurgerNav = styled.div`
  display: none;
  position: absolute;
  background-color: #2c2cff;
  top: 50px;
  width: 100%;
  min-height: 50px;
  z-index: 1;
  @media screen and (max-width: 600px) {
    & {
      display: ${(props) => (props.show ? "inline" : "none")};
    }
  }
`;

const Burger = styled.div`
  display: none;
  margin-right: 20px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    & {
      display: inline;
    }
  }
`;

const Lines = styled.div`
  height: 4px;
  border-radius: 10px;
  width: 30px;
  margin: 2px 0;
  background-color: black;
`;
