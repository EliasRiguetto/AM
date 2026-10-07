import { Container } from "../components/Container";
import React from "react";
import { Heading } from "../components/Heading";
import { BgImage } from "../components/BgImage/BgImage";
import { Flex } from "./../components/FlexCenter";
import imageBG from "../images/contact_bg.jpg";
import { Reveal } from "../components/Reveal";
import { ContactContent } from "../components/Contact";


export const Contact = () => {
  return (
    <section>
      <BgImage src={imageBG}>
        <Container>
          <Flex align="center" justify="center">
            <Reveal direction="up">
              <Heading title="Contato" variant="dark" />
            </Reveal>
          </Flex>
        </Container>
      </BgImage>
      <Container>
        <ContactContent/>
      </Container>
    </section>
  );
};
