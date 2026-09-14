import { cn } from "@/lib/utils";

interface HandwrittenTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "span" | "h1" | "h2" | "h3";
}

export function HandwrittenText({
  children,
  className,
  as: Component = "span",
}: HandwrittenTextProps) {
  return (
    <Component
      className={cn(
        "font-handwriting text-slate-800",
        className
      )}
    >
      {children}
    </Component>
  );
}
