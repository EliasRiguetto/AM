import React from "react";
import { BgImage } from "../components/BgImage/BgImage";
import { Container } from "../components/Container";
import { Flex } from "../components/FlexCenter";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import imageBG from "../images/about_bg.jpg";
import { AboutMe } from "../components/AboutMe";
import { Reveal } from "../components/Reveal";

export const About = () => {
  return (
    <>
      <BgImage src={imageBG}>
        <Container>
          <Flex align="center" justify="center">
            <Reveal direction="up">
              <Heading title="Sobre" variant="dark" />
            </Reveal>
          </Flex>
        </Container>
      </BgImage>
      <Section>
        <Container>
          <AboutMe />
        </Container>
      </Section>
    </>
  );
};
