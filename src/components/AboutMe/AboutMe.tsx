import React from "react";
import styles from "./AboutMe.module.css";
import image from "../../images/perfil.png";
import { Section } from "../Section";
import { Reveal } from "../Reveal";

export const AboutMe = () => {
  return (
    <>
      <div className={styles.space}></div>
      <Section>
        <div className={styles.about}>
          <div className={styles.imageContent}>
            <Reveal direction="left">
              <img src={image} alt="" />
            </Reveal>
          </div>
          <div className={styles.textContent}>
            <Reveal direction="right">
              <h1>Fundador</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                maiores nulla exercitationem laudantium accusamus facere ullam
                eos modi, aperiam rem doloremque aliquid voluptatibus ipsum
                facilis molestiae quod, consequuntur fugit? Minima.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
};
