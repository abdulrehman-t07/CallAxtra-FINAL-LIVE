import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "primary" | "secondary" | "accent";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
  className,
}: FeatureCardProps) {
  // "primary" uses the high-contrast inverted tile; the others use a soft tile.
  const iconStyles = {
    default: "icon-tile-soft",
    primary: "icon-tile",
    secondary: "icon-tile-soft",
    accent: "icon-tile-soft",
  };

  return (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-card-hover",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className={cn(
          "mb-5 h-12 w-12 transition-transform duration-300 group-hover:scale-105",
          iconStyles[variant]
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
