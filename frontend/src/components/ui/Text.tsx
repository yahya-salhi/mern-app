import React from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  weight?: "light" | "normal" | "semibold" | "bold";
  color?: string; // Tailwind text color class
  size?: string; // Tailwind text size class
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "p",
      weight = "normal",
      color = "text-black",
      size = "text-base",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = variant as keyof JSX.IntrinsicElements;

    const textClasses = cn(
      color, // Text color
      size, // Text size (e.g., text-lg)
      weight === "light"
        ? "font-light"
        : weight === "semibold"
        ? "font-semibold"
        : weight === "bold"
        ? "font-bold"
        : "font-normal", // Font weight
      className // Custom classes
    );

    return (
      <Tag
        ref={ref as React.Ref<HTMLElement>} // Simplified ref type to avoid complexity
        className={textClasses}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Text.displayName = "Text";

export { Text };
