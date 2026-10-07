import React from "react";
import styles from "./AboutMe.module.css";
import image from "../../images/perfil.png";
import { Section } from "../Section";
import { Reveal } from "../Reveal";
import { Flex } from "../FlexCenter";
import { Container } from "../Container";
import {TypingText} from "../TypingText";

export const AboutMe = () => {
  return (
    <Section>
      <Container>
        <Flex justify="center">
          <div className={styles.textContent}>
            <Reveal direction="right">
              <h1>Fundador</h1>
              <p>
                <TypingText speed={30}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  maiores nulla exercitationem laudantium accusamus facere ullam
                  eos modi, aperiam rem doloremque aliquid voluptatibus ipsum
                  facilis molestiae quod, consequuntur fugit? Minima.
                </TypingText>
              </p>
            </Reveal>
            <div className={styles.imageContent}>
              <Reveal direction="left">
                <img src={image} alt="" />
              </Reveal>
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
};
