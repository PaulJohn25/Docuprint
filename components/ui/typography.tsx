import { montserrat } from "@/app/ui/fonts";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        `${montserrat.className} scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl`,
        className
      )}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        `${montserrat.className} scroll-m-20 text-2xl sm:text-3xl font-bold tracking-tight first:mt-0`,
        className
      )}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3
      className={cn(
        `${montserrat.className} scroll-m-20 text-2xl font-semibold tracking-tight`,
        className
      )}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4
      className={cn(
        `${montserrat.className} scroll-m-20 text-xl font-semibold tracking-tight`,
        className
      )}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        `${montserrat.className} leading-6 md:text-xl font-medium max-w-[60ch]`,
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn(`text-lg font-semibold`, className)}>{children}</div>
  );
}
