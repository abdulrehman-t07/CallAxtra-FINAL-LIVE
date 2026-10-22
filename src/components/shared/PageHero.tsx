import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  size?: "default" | "lg";
  /** Load the hero image eagerly (use for the first screen of the page). */
  eager?: boolean;
  className?: string;
}

/**
 * Image hero with a dark overlay. The overlay and text colors are fixed (not theme
 * tokens) so the hero looks identical — and readable — in both light and dark mode.
 */
export function PageHero({
  image,
  imageAlt,
  badge,
  title,
  description,
  children,
  size = "default",
  eager = true,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-zinc-950 text-white",
        size === "lg" ? "py-20 md:py-28 lg:py-36" : "py-16 md:py-24",
        className,
      )}
    >
      <div className="absolute inset-0 -z-10" aria-hidden>
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
        {/* Readability layers: dark tint + vignette + soft bottom fade */}
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,9,11,0.65)_75%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-grid-inverse opacity-30 mask-fade-y" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_theme(colors.emerald.400)]" />
              {badge}
            </span>
          )}
          <h1
            className={cn(
              "text-balance font-heading font-extrabold tracking-tight text-white",
              size === "lg" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl md:text-5xl",
            )}
          >
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-200 md:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
