import Link from "next/link";
import { IconExternal } from "./icons";
import React from "react";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "default" | "light";
  plainIcon?: boolean;
  stacked?: boolean;
};

export default function LinkButton({ href, children, icon, variant = "default", plainIcon = false, stacked = false }: LinkButtonProps) {
  const isExternal = href.startsWith("http");
  const base = `card group relative isolate ${
    stacked
      ? "flex flex-col items-center justify-center gap-3 p-5 text-center"
      : "card-link"
  } transition-transform will-change-transform hover:scale-[1.01] focus-visible:focus-ring`;
  const variantClasses = variant === "primary" ? "cta-primary" : variant === "light" ? "card-light" : "";
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      className={`${base} ${variantClasses}`}
    >
      <span className={`flex ${stacked ? "flex-col items-center" : "items-center"} gap-3 text-[15px] font-medium`}>
        {icon && (plainIcon ? <span aria-hidden>{icon}</span> : <span className="icon-badge" aria-hidden>{icon}</span>)}
        <span>{children}</span>
      </span>
      {!stacked && (
        <span aria-hidden className={`text-[13px] group-hover:translate-x-0.5 transition-transform ${variant === "light" ? "text-[#4b5563]" : "text-[color:var(--muted)]"}`}>
          {isExternal ? <IconExternal /> : "→"}
        </span>
      )}
    </Link>
  );
}


