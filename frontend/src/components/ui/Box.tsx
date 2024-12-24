import React from "react";
import { cn } from "@/lib/utils"; // Utility for merging class names (comes with ShadCN setup)

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

// A simple reusable Box component
const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-4 rounded-lg bg-white shadow dark:bg-gray-800", // Default styling
          className // Allow users to override styles
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Box.displayName = "Box";

export { Box };
