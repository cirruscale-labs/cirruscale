import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: Props) {
  return (
    <div className={`bg-brand-light rounded-2xl border border-brand-border overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
