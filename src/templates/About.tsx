import React from "react";
import { BgImage } from "../components/BgImage/BgImage";
import { Container } from "../components/Container";
import { Flex } from "../components/FlexCenter";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";

export const About = () => {
  return (
    <>
      <BgImage>
        <Container>
          <Flex align="center" justify="center">
            <Heading title="Sobre" variant="dark"/>
          </Flex>
        </Container>
      </BgImage>
      <Section>
        <Container>
            <h1>olá mundo</h1>
        </Container>
      </Section>
    </>
  );
};
