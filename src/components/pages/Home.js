import React from "react";
import Container from "./components/Container";
import PageHeader from "./components/PageHeader";
import Section from "./components/Section";
import styled from "styled-components";

function Home() {
  return (
    <Container>
      <PageHeader>Home</PageHeader>
      <main>
        <Section>
          <p>
            This are my CSS animations. Try to use this to add animations to
            your website.
          </p>
        </Section>
        <MySection>
          <h3>The animations includes:</h3>
          <ul>
            <li>Slide</li>
            <li>Reveal</li>
            <li>Jump</li>
            <li>Spin</li>
          </ul>
        </MySection>
        <Section>
          <p>
            Clone the github repository <a href="#">here.</a>
          </p>
        </Section>
      </main>
    </Container>
  );
}

export default Home;

const MySection = styled.div`
  background-color: #ffffe5;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 40px;
  box-shadow: 0 2px 6px rgb(38, 38, 38);
  ul {
    margin: 10px;
    li {
      margin: 10px;
    }
  }
`;
