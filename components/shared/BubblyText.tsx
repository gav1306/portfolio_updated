import { cn } from "@/lib/utils";

interface BubblyTextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

export function BubblyText({
  children,
  className,
  style,
  as: Component = "span"
}: BubblyTextProps) {
  return (
    <Component
      className={cn(
        "font-giaza text-pink-400 select-none",
        "relative inline-block",
        className
      )}
      style={{
        textShadow: "2px 2px 0px rgba(232, 154, 199, 0.3)",
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
