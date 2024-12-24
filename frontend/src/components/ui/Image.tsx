import React from "react";
import { cn } from "@/lib/utils"; // Optional: Utility for class merging if needed

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  h?: string | number; // Height in rem, px, %, or Tailwind classes
  w?: string | number; // Width in rem, px, %, or Tailwind classes
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"; // CSS object-fit values
  className?: string; // Additional Tailwind or custom classes
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  h = "auto",
  w = "auto",
  objectFit = "cover",
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        height: typeof h === "number" ? `${h}px` : h,
        width: typeof w === "number" ? `${w}px` : w,
        objectFit: objectFit,
      }}
      className={cn(className)}
      {...props}
    />
  );
};

export default Image;
