import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import type { CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  to?: string;
  type?: "button" | "submit" | "reset";
  style?: CSSProperties;
}

export function Button({
  children,
  color = "primary",
  size = "medium",
  onClick,
  to,
  type = "button",
  style,
}: ButtonProps) {
  const className = `${styles.button} ${styles[color]} ${styles[size]}`;

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        style={style}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
