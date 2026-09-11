import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./LearnMore.module.css";

type LearnMoreProps = {
  className?: string;
  to: string;
};

export const LearnMore = ({ className, to }: LearnMoreProps) => {
  return (
    <div className={`${styles.link} ${className ?? ""}`}>
      <Link to={to}>
        Saiba Mais <MoveRight />
      </Link>
    </div>
  );
};
