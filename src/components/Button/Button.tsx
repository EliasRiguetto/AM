import { type ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export function Button({
  children,
  color = "primary",
  size = "medium",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[color]} ${styles[size]}`}
    >
      {children}
    </button>
  );
}
