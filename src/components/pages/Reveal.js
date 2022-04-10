import React from "react";
import styled from "styled-components";
import Container from "./components/Container";
import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import CodeContainer from "./components/CodeContainer";
// import Button from "./components/Button";

function Reveal() {
  return (
    <Container>
      <PageHeader>Reveal</PageHeader>
      <main>
        <Section>
          <p>
            Set class equal to "reveal" to add a reveal animation to your
            project.
          </p>
        </Section>
        <Section>
          <CodeContainer>
            <RevealDIV className="reveal">class="reveal"</RevealDIV>
          </CodeContainer>
        </Section>
        <Section>
          <p>To increase the speed of the animation:</p>
          <CodeContainer>
            <RevealDIV className="reveal-fast">class="reveal-fast"</RevealDIV>
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

export default Reveal;

const RevealDIV = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  height: 30px;
  margin: 10px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
`;
