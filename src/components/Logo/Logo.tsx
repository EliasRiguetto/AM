import logo from "../../images/logo.svg";
import logoMini from "../../images/logo_mini.svg";
import logoFooter from "../../images/logo_footer.svg";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

export const Logo = ({ variant = "default" }) => {
  if (variant === "footer") {
    return (
      <a href="/">
        <img src={logoFooter} alt="Logo" className={styles.logo} />
      </a>
    );
  }

  return (
    <Link to="/">
      <picture>
        <source media="(max-width: 576px)" srcSet={logoMini} />

        <img src={logo} alt="Logo" className={styles.logo} />
      </picture>
    </Link>
  );
};
