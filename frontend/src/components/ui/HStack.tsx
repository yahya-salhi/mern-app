import React from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

export interface HStackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: string; // Tailwind spacing class for gap
  align?: "start" | "center" | "end" | "stretch"; // Alignment of items
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"; // Justify content
}

const HStack: React.FC<HStackProps> = ({
  gap = "gap-4",
  align = "center",
  justify = "start",
  className,
  children,
  ...props
}) => {
  const stackClasses = cn(
    "flex",
    gap, // Adds gap between children
    align === "start"
      ? "items-start"
      : align === "center"
      ? "items-center"
      : align === "end"
      ? "items-end"
      : "items-stretch", // Vertical alignment
    justify === "start"
      ? "justify-start"
      : justify === "center"
      ? "justify-center"
      : justify === "end"
      ? "justify-end"
      : justify === "between"
      ? "justify-between"
      : justify === "around"
      ? "justify-around"
      : "justify-evenly", // Horizontal spacing
    className // Additional custom classes
  );

  return (
    <div className={stackClasses} {...props}>
      {children}
    </div>
  );
};

export { HStack };
