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
        "group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-card-hover",
        className
      )}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary-light opacity-50 transition-transform duration-300 group-hover:scale-150" />
      
      <div className="relative">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl gradient-hero">
          <Icon className="h-7 w-7 text-primary-foreground" />
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
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
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
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
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
