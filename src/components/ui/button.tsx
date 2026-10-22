import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Light: dark bg, light text | Dark: light bg, dark text
        default: "bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-foreground shadow-sm hover:bg-muted hover:border-foreground/25",
        secondary: "border border-border bg-muted text-foreground hover:bg-accent shadow-sm",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        // CTA buttons: Light mode = dark bg with light text, Dark mode = light bg with dark text
        cta: "bg-foreground text-background hover:bg-foreground/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
        hero: "bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
        trust: "bg-muted text-foreground hover:bg-accent shadow-md hover:shadow-lg",
        // For use on always-dark surfaces (hero images, CTA bands) in BOTH themes
        inverse:
          "bg-white text-zinc-950 hover:bg-zinc-100 shadow-lg shadow-black/20 hover:-translate-y-0.5 active:translate-y-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
        "outline-inverse":
          "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/40",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-7 text-base",
        xl: "h-14 rounded-lg px-9 text-base md:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
