import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  disabled = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "text-white hover:opacity-90"
      : "border border-brand-border text-brand-primary hover:border-brand-accent hover:text-brand-accent";

  const primaryStyle =
    variant === "primary"
      ? { background: "linear-gradient(135deg, #2563EB, #06B6D4)" }
      : {};

  if (href) {
    return (
      <Link href={href} className={`${base} ${styles} ${className}`} style={primaryStyle}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
      style={primaryStyle}
    >
      {children}
    </button>
  );
}
