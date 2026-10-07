import { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = ({ variant = "default" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${styles[variant]}`}>
        {variant === "default" && (
          <button
            className={`${styles.menuButton} ${isOpen ? styles.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        <ul className={isOpen ? styles.open : ""}>
          <li>
            <Link to="/" onClick={handleCloseMenu}>
              Início
            </Link>
          </li>

          <li>
            <Link to="/sobre" onClick={handleCloseMenu}>
              Sobre
            </Link>
          </li>

          <li>
            <Link to="/areas" onClick={handleCloseMenu}>
              Áreas de Atuação
            </Link>
          </li>

          <li>
            <Link to="/contato" onClick={handleCloseMenu}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div
          className={styles.overlay}
          onClick={handleCloseMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};
