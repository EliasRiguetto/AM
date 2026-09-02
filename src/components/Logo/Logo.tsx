import logo from "../../images/logo.svg";
import logoFooter from "../../images/logo_footer.svg";

export const Logo = ({ variant = "default" }) => {
  const logos = {
    default: logo,
    footer: logoFooter,
  };

  return (
    <a href="/">
      <img src={logos[variant]} alt="Logo" />
    </a>
  );
};
