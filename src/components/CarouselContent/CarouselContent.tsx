import React from "react";
import { Container } from "../Container";
import image from "../../images/image.png";
import styles from "./CarolselContent.module.css";
import { Button } from "../Button";

export const CarouselContent = () => {
  return (
    <main>
      <Container>
        <div className={styles.carouselContent}>
          <div>
            <h2>Advocacia e assessoria jurídica</h2>
            <h1>Direito com Excelência. Atendimento que entende você.</h1>
            <p>
              Soluções jurídicas personalizadas para proteger seus direitos e
              oferecer segurança em cada decisão.
            </p>
            <Button color="primary" size="large">
              Fale Conosco
            </Button>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </Container>
    </main>
  );
};
