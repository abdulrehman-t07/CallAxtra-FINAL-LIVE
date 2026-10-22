import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaBandProps {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** Dark call-to-action panel. Uses fixed dark colors so it stands out in both themes. */
export function CtaBand({ title, description, children, className }: CtaBandProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 px-6 py-14 text-center shadow-xl md:px-12 md:py-20">
          <div className="absolute inset-0 -z-10 bg-grid-inverse opacity-70 mask-fade-y" aria-hidden />
          <div
            className="absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-zinc-400 md:text-lg">{description}</p>
          )}
          {children && (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
