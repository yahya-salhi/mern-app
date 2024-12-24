import React from "react";
import { cn } from "@/lib/utils"; // Utility to merge class names

interface VStackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: string; // Tailwind spacing class for vertical gap
  align?: "start" | "center" | "end" | "stretch"; // Alignment options
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"; // Justify options
}

const VStack: React.FC<VStackProps> = ({
  spacing = "gap-4", // Default spacing
  align = "stretch", // Default alignment
  justify = "start", // Default justify
  className,
  children,
  ...props
}) => {
  const alignClass =
    align === "start"
      ? "items-start"
      : align === "center"
      ? "items-center"
      : align === "end"
      ? "items-end"
      : "items-stretch";

  const justifyClass =
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
      : "justify-evenly";

  const vStackClasses = cn(
    "flex flex-col",
    spacing,
    alignClass,
    justifyClass,
    className
  );

  return (
    <div className={vStackClasses} {...props}>
      {children}
    </div>
  );
};

export default VStack;
