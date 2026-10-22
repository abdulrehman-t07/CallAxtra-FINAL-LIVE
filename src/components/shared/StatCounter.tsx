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
    <div ref={ref} className="px-4 py-7 text-center">
      <p className="font-heading text-4xl font-extrabold tracking-tight text-foreground tabular-nums md:text-5xl">
        {display}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {label}
      </p>
    </div>
  );
};
