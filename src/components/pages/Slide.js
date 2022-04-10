import React from "react";
import Container from "./components/Container";
import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import styled from "styled-components";
// import Button from "./components/Button";

function Slide() {
  return (
    <Container>
      <PageHeader>Slide</PageHeader>
      <main>
        <Section>
          <p>Set class equal to your desired animation.</p>
        </Section>
        <Section>
          <MyCodeContainer>
            <SlideDIV className="slide-in-from-top normal">
              class="slide-in-from-top"
            </SlideDIV>
            <SlideDIV className="slide-in-from-left normal">
              class="slide-in-from-left"
            </SlideDIV>
            <SlideDIV className="slide-in-from-right normal">
              class="slide-in-from-right"
            </SlideDIV>
            <SlideDIV className="slide-in-from-bottom normal">
              class="slide-in-from-bottom"
            </SlideDIV>
          </MyCodeContainer>
        </Section>
        <Section>
          <p>To increase the speed of the animation:</p>
          <MyCodeContainer>
            <SlideDIV className="slide-in-from-top-fast">
              class="slide-in-from-top-fast"
            </SlideDIV>
            <SlideDIV className="slide-in-from-left-fast">
              class="slide-in-from-left-fast"
            </SlideDIV>
            <SlideDIV className="slide-in-from-right-fast">
              class="slide-in-from-right-fast"
            </SlideDIV>
            <SlideDIV className="slide-in-from-bottom-fast">
              class="slide-in-from-bottom-fast"
            </SlideDIV>
          </MyCodeContainer>
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

export default Slide;

const MyCodeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

const SlideDIV = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  height: 30px;
  margin: 10px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
`;
