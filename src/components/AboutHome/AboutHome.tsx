import React from "react";
import styles from "./AboutHome.module.css";
import about_image from "./../../images/about_image.png";
import { Heading } from "../Heading";
import { Container } from "./../Container";
import { Link} from "./../Link";

export const AboutHome = () => {
  return (
    <Container>
      <section className={styles.about}>
        <div>
          <img src={about_image} alt="" />
        </div>
        <div className={styles.aboutText}>
         <Heading title="Sobre" className={styles.aboutHeading} />
          <div>
            <p>
              O Alberto Marques Advocacia atua na assessoria e consultoria
              jurídica de empresas e empresários, oferecendo soluções
              personalizadas para decisões mais seguras e estratégicas.
            </p>
            <p>
              Nossa atuação combina conhecimento técnico, visão empresarial e
              atendimento próximo, com o objetivo de compreender cada negócio e
              oferecer soluções jurídicas eficientes, objetivas e alinhadas aos
              seus objetivos.
            </p>
            <p>
              Pautados pela ética, confiança, transparência e excelência,
              buscamos construir relações de longo prazo e atuar como parceiros
              estratégicos de nossos clientes.
            </p>
            <p>
              Mais do que prestar serviços jurídicos, contribuímos para que
              empresas possam crescer, tomar decisões com segurança e
              desenvolver seus negócios de forma sustentável.
            </p>
          </div>
          <Link className={styles.aboutLink} />
        </div>
      </section>
    </Container>
  );
};
