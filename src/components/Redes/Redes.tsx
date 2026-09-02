import React from "react";
import styles from "./Redes.module.css";
import { FaInstagram, FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";

export const Redes = () => {
  return (
    <div className={styles.redes}>
      <ul>
        <li>
          <FaRegEnvelope />
          <a href="mailto:amarques@amadvassessoria.com.br">amarques@amadvassessoria.com.br</a>
        </li>
        <li>
          <FaWhatsapp />
          <a href="">11 97173-4754</a>
        </li>
        <li>
          <FaInstagram />
          <a href="">Am.advocaciajus</a>
        </li>
      </ul>
    </div>
  );
};
