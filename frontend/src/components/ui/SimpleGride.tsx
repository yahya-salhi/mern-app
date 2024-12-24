import React, { CSSProperties } from "react";

interface SimpleGridProps {
  children: React.ReactNode;
  columns?: { base?: number; md?: number; lg?: number };
  spacing?: number;
  width?: string | number;
}

export const SimpleGrid: React.FC<SimpleGridProps> = ({
  children,
  columns = { base: 1, md: 2, lg: 3 },
  spacing = 4,
  width = "1020",
}) => {
  const baseStyle: CSSProperties = {
    display: "grid",
    gap: `${spacing}rem`,
    width,
  };

  const styles = `
    .simple-grid {
      grid-template-columns: repeat(${columns.base || 1}, minmax(0, 1fr));
    }
    @media (min-width: 768px) {
      .simple-grid {
        grid-template-columns: repeat(${
          columns.md || columns.base
        }, minmax(0, 1fr));
      }
    }
    @media (min-width: 1024px) {
      .simple-grid {
        grid-template-columns: repeat(${
          columns.lg || columns.md || columns.base
        }, minmax(0, 1fr));
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div style={baseStyle} className="simple-grid mx-6  ">
        {children}
      </div>
    </>
  );
};
