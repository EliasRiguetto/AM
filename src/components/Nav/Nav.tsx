import styles from "./Nav.module.css";

export const Nav = ({ variant = "default" }) => {
  return (
    <nav className={`${styles.nav} ${styles[variant]}`}>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Área de Atuação</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
};