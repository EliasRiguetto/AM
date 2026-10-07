import { useEffect, useState } from "react";

interface TypingTextProps {
  children: string;
  speed?: number;
}

export function TypingText({ children, speed = 50 }: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayText(children.slice(0, index));

      if (index >= children.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [children, speed]);

  return <span>{displayText}</span>;
}