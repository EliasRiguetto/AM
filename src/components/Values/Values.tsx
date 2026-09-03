import React from "react";
import styles from "./Values.module.css";
import { Container } from "../Container";
import { ScaleIcon, TargetIcon, StarIcon, HandshakeIcon } from "lucide-react";

export const Values = () => {
  return (
    <section className={styles.values}>
      <Container>
        <div className={styles.valuesContent}>
          <h2>Nossos Valores</h2>
          <ul className={styles.valuesList}>
            <li>
              <ScaleIcon />
              <h4>Ética</h4>
              <p>
                Atuamos com integridade e transparência em todas as nossas
                ações.
              </p>
            </li>
            <li>
              <HandshakeIcon/>
              <h4>Compromisso</h4>
              <p>Dedico tempo e esforço para alcançar as melhores soluções.</p>
            </li>
            <li>
              <StarIcon />
              <h4>Excelência</h4>
              <p>Busco a excelência técnica em cada caso que assumo.</p>
            </li>
            <li>
              <TargetIcon />
              <h4>Resultados</h4>
              <p>
                Focado em gerar resultados concretos e segurança jurídica para
                os clientes.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
