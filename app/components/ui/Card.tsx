import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark/50 transition-shadow ${
        hover ? "hover:shadow-lg dark:hover:shadow-primary/10" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

