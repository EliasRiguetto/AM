import React from "react";
import styles from "./Values.module.css";
import { Container } from "../Container";
import { ScaleIcon, TargetIcon, StarIcon, HandshakeIcon } from "lucide-react";
import { Section } from "./../Section";
import { Reveal } from "../Reveal";

export const Values = () => {
  return (
    <Section>
      <div className={styles.values}>
        <Container>
          <div className={styles.valuesContent}>
            <h2>Nossos Valores</h2>
            <ul className={styles.valuesList}>
              <Reveal direction="right">
                <li>
                  <ScaleIcon />
                  <h4>Ética</h4>
                  <p>
                    Atuamos com integridade e transparência em todas as nossas
                    ações.
                  </p>
                </li>
              </Reveal>
              <Reveal direction="right">
                <li>
                  <HandshakeIcon />
                  <h4>Compromisso</h4>
                  <p>
                    Dedico tempo e esforço para alcançar as melhores soluções.
                  </p>
                </li>
              </Reveal>
              <Reveal direction="left">
                <li>
                  <StarIcon />
                  <h4>Excelência</h4>
                  <p>Busco a excelência técnica em cada caso que assumo.</p>
                </li>
              </Reveal>
              <Reveal direction="left">
                <li>
                  <TargetIcon />
                  <h4>Resultados</h4>
                  <p>
                    Focado em gerar resultados concretos e segurança jurídica
                    para os clientes.
                  </p>
                </li>
              </Reveal>
            </ul>
          </div>
        </Container>
      </div>
    </Section>
  );
};
