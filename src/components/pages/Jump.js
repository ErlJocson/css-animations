import React from "react";
import Container from "./components/Container";
import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import CodeContainer from "./components/CodeContainer";
import styled from "styled-components";
// import Button from "./components/Button";

function Jump() {
  return (
    <Container>
      <PageHeader>Jump</PageHeader>
      <main>
        <Section>
          <p>
            Set class equal to "jump" to add a jump animation on your project.
          </p>
        </Section>
        <Section>
          <CodeContainer>
            <JumpDIV className="jump">class="jump"</JumpDIV>
          </CodeContainer>
        </Section>
        <Section>
          <p>To increase the speed of the animation:</p>
          <CodeContainer>
            <JumpDIV className="jump-fast">class="jump-fast"</JumpDIV>
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

export default Jump;

const JumpDIV = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  height: 30px;
  margin: 10px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
`;
