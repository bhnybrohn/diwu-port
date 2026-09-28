import type { ReactNode } from "react";

export default function SectionLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`font-mono text-[12px] text-accent ${className}`}>
      {children}
    </div>
  );
}
