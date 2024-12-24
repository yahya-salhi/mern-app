import React from "react";
import { cn } from "@/lib/utils"; // Utility function for merging class names

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// A simple container component
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", // Default container styles
          className // Allow for customization via props
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };
