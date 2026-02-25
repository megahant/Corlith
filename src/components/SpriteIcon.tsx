import corlithIcons from "@/assets/corlith-icons.png";

interface SpriteIconProps {
  row: number; // 0-3
  col: number; // 0-3
  size?: number;
  className?: string;
}

/**
 * Renders a single icon from the 4x4 Corlith icons sprite sheet.
 * row/col are 0-indexed grid positions.
 */
export function SpriteIcon({ row, col, size = 48, className = "" }: SpriteIconProps) {
  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(${corlithIcons})`,
        backgroundSize: "400% 400%",
        backgroundPosition: `${(col / 3) * 100}% ${(row / 3) * 100}%`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}
