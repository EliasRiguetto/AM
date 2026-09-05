import { Container } from "../components/Container";
import React from "react";
import { Heading } from "../components/Heading";
import { BgImage } from "../components/BgImage/BgImage";
import { Flex } from "./../components/FlexCenter";
import { Form } from "./../components/Form";

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
        <Flex gap={'6rem'} justify="space-around">
            <h1>olá</h1>
            <h1>Mundo</h1>
        </Flex>
      </Container>
    </section>
  );
};
