import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = ({ variant = "default" }) => {
  return (
    <nav className={`${styles.nav} ${styles[variant]}`}>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>

        <li>
          <Link to="/sobre">Sobre</Link>
        </li>

        <li>
          <Link to="/areas">Área de Atuação</Link>
        </li>

        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
