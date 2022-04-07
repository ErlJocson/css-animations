import React from "react";
import Container from "./components/Container";
import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import CodeContainer from "./components/CodeContainer";
import styled from "styled-components";
function Spin() {
  return (
    <Container>
      <PageHeader>Spin</PageHeader>
      <main>
        <Section>
          <p>
            Set class equal to "spin" to add a spin animation on your project.
          </p>
        </Section>
        <Section>
          <CodeContainer>
            <SpinDIV className="spin">class="spin"</SpinDIV>
          </CodeContainer>
        </Section>
        <Section>
          <p>To increase the speed of the animation:</p>
          <CodeContainer>
            <SpinDIV className="spin-fast">class="spin-fast"</SpinDIV>
          </CodeContainer>
        </Section>
        <Section>
          <p>
            Clone the github repo{" "}
            <a
              href="https://github.com/ErlJocson/CSS-Animation"
              target={"_blank"}
            >
              here
            </a>{" "}
            and take what you need.
          </p>
        </Section>
      </main>
    </Container>
  );
}

export default Spin;

const SpinDIV = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  height: 30px;
  margin: 10px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
`;
