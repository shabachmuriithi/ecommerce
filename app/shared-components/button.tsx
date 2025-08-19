import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button = ({ children, href, onClick, variant = "primary", style, type = "button" }: ButtonProps) => {
  const buttonVariants = () => {
    switch (variant) {
      case "primary":
        return "bg-pink-500 text-white hover:bg-pink-600";
      case "secondary":
        return "bg-white text-pink-500 hover:bg-gray-100";
      case "outline":
        return "transparent text-black hover:bg-pink-400 border border-black";
      default:
        return "transparent text-black hover:bg-pink-600 border-black-500";
    }
  };

  const variantStyles = buttonVariants();
  const baseStyles = "px-5 py-4 rounded-md font-medium transition-colors duration-200";

  
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variantStyles}`} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;