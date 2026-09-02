import React from "react";
import styles from "./Copyright.module.css";

export const Copyright = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.copy}>
      <p>&copy;{year} AM Advocacia e Assessoria Jurídica. Todos os direitos reservados.</p>
    </div>
  );
};
