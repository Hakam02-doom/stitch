import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center rounded-lg font-bold transition-opacity hover:opacity-90";
  
  const variantStyles = {
    primary: "bg-primary text-black",
    secondary: "bg-gray-200 text-black dark:bg-gray-700 dark:text-white",
    outline: "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-5 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

