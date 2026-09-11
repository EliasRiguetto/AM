import { Container } from "../components/Container";
import React from "react";
import { Heading } from "../components/Heading";
import { BgImage } from "../components/BgImage/BgImage";
import { Flex } from "./../components/FlexCenter";
import { Form } from "./../components/Form";
import { Social } from "../components/SocialMedia";
import { Section } from "./../components/Section";

export const Contact = () => {
  return (
    <section>
      <BgImage>
        <Container>
          <Flex align="center" justify="flex-start" direction="row">
            <Heading title="Contato" />
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
