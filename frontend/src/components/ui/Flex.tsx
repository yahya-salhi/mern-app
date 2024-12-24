import React from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: string; // Tailwind gap class (e.g., "gap-4")
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = "row",
      align = "stretch",
      justify = "start",
      gap = "gap-0",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const flexClasses = cn(
      "flex", // Base flexbox class
      `flex-${direction}`, // Direction (row, column, etc.)
      `items-${align}`, // Alignment (align-items)
      `justify-${justify}`, // Justify content
      gap, // Gap between items
      className // Allow custom classes
    );

    return (
      <div ref={ref} className={flexClasses} {...props}>
        {children}
      </div>
    );
  }
);

Flex.displayName = "Flex";

export { Flex };
