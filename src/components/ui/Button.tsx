import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "default" | "sm" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  withArrow?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  type?: "button" | "submit";
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--accent)] active:bg-[var(--accent-deep)]",
  secondary:
    "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-deep)]",
  ghost:
    "bg-transparent text-[var(--ink)] hover:text-[var(--accent)]",
  outline:
    "bg-transparent text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)]",
};

const sizeStyles: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  default: "text-sm px-6 py-3",
  lg: "text-base px-8 py-4",
};

export function Button({
  children,
  variant = "primary",
  size = "default",
  href,
  onClick,
  className,
  withArrow = false,
  disabled,
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 font-medium tracking-tight transition-all duration-200 rounded-lg",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(base, "group")} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(base, "group")}
    >
      {content}
    </button>
  );
}
