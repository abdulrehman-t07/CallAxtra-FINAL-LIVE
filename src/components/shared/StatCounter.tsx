import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const StatCounter = ({ value, suffix = "", prefix = "", label }: StatCounterProps) => {
  const { ref, display } = useCountUp({ end: value, suffix, prefix, duration: 2000 });

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-card p-6 text-center shadow-card transition-all duration-300 hover:shadow-card-hover"
    >
      <p className="font-heading text-4xl font-bold text-primary">
        {display}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {label}
      </p>
    </div>
  );
};
