import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "cream" | "card";
  id?: string;
}

export function SectionContainer({
  children,
  className,
  innerClassName,
  variant = "default",
  id,
}: SectionContainerProps) {
  const variantStyles = {
    default: "",
    cream: "bg-cream",
    card: "bg-cream border border-slate-200",
  };

  return (
    <section
      id={id}
      className={cn(
        "w-full py-16 md:py-24",
        variantStyles[variant],
        className
      )}
    >
      <div className={cn("container mx-auto px-4 md:px-6 max-w-7xl", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
