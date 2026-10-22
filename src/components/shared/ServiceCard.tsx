import { LucideIcon, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features = [],
  className,
}: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:border-foreground/20 hover:shadow-card-hover",
        className
      )}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-muted transition-transform duration-300 group-hover:scale-150" />
      
      <div className="relative">
        <div className="icon-tile mb-4 h-14 w-14 rounded-xl">
          <Icon className="h-7 w-7" />
        </div>
        
        <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {features.length > 0 && (
          <>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-foreground/70"
            >
              {isExpanded ? "Show Less" : "Learn More"}
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  isExpanded && "rotate-90"
                )}
              />
            </button>

            {isExpanded && (
              <ul className="mt-4 space-y-2 border-t border-border pt-4">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
