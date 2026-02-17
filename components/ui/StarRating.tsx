import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // 0-5
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
}

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = true,
}: StarRatingProps) {
  const sizes = {
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <Star
            key={i}
            className={`${sizes[size]} ${
              filled
                ? "fill-gold-400 text-gold-400"
                : partial
                ? "fill-gold-200 text-gold-400"
                : "fill-slate-100 text-slate-300"
            }`}
          />
        );
      })}
      {showNumber && (
        <span className="ml-1 text-sm font-medium text-slate-700">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
