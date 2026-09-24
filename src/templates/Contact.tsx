import { Container } from "../components/Container";
import React from "react";
import { Heading } from "../components/Heading";
import { BgImage } from "../components/BgImage/BgImage";
import { Flex } from "./../components/FlexCenter";
import { Form } from "./../components/Form";
import { Social } from "../components/SocialMedia";
import { Section } from "./../components/Section";
import imageBG from "../images/contact_bg.jpg"

export const Contact = () => {
  return (
    <section>
      <BgImage src={imageBG}>
        <Container>
          <Flex align="center" justify="center" >
            <Heading title="Contato" variant="dark" />
          </Flex>
        </Container>
      </BgImage>
      <Container>
        <Flex gap={"6rem"} justify="space-around">
          <Section>
            <Form />
          </Section>
          <Section>
            <Social variant="dark" />
          </Section>
        </Flex>
      </Container>
    </section>
  );
};
