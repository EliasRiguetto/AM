import React from "react";
import { Container } from "../Container";
import image from "../../images/image.png";
import styles from "./CarolselContent.module.css";
import { Button } from "../Button";
import { Flex } from "../FlexCenter";

export const CarouselContent = () => {
  return (
    <main className={styles.carouselContent}>
      <Container>
        <Flex align="center" justify="center">
          <div className={styles.title}>
            <h2>Advocacia e assessoria jurídica</h2>
            <h1>Direito com Excelência. Atendimento que entende você.</h1>
            <p>
              Soluções jurídicas personalizadas para proteger seus direitos e
              oferecer segurança em cada decisão.
            </p>
            <Button color="primary" size="medium" to="/contato"  style={{ marginTop: "2.8rem" }}>
              Fale Conosco
            </Button>
          </div>
          <div className={styles.image}>
            <img src={image} alt="" />
          </div>
        </Flex>
      </Container>
    </main>
  );
};
