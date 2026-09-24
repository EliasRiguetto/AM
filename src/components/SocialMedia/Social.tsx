import React from "react";
import styles from "./Social.module.css";
import { FaInstagram, FaWhatsapp, FaRegEnvelope  } from "react-icons/fa";

export const Social = ({variant = "default"}) => {
  return (
    <div  className={`${styles.redes} ${styles[variant]}`}>
      <ul>
        <li>
          <FaRegEnvelope />
          <a href="mailto:amarques@amadvassessoria.com.br">amarques@amadvassessoria.com.br</a>
        </li>
        <li>
          <FaWhatsapp />
          <a href="https://wa.me/5511971734754?text=Ol%C3%A1%21+Gostaria+de+saber+mais+informa%C3%A7%C3%B5es.">11 97173-4754</a>
        </li>
        <li>
          <FaInstagram />
          <a href="">Am.advocaciajus</a>
        </li>
      </ul>
    </div>
  );
};


