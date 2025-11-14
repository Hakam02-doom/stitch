import React from "react";

/**
 * Stars component for displaying ratings
 */
interface StarsProps {
  rating: number;
  className?: string;
  starClassName?: string;
}

export default function Stars({ rating, className = "", starClassName = "" }: StarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars: React.ReactElement[] = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span
        key={i}
        className={`material-symbols-outlined !text-base !font-bold ${starClassName}`}
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className={`material-symbols-outlined !text-base ${starClassName}`}>
        star_half
      </span>
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className={`material-symbols-outlined !text-base ${starClassName}`}>
        star
      </span>
    );
  }

  return <div className={`flex items-center gap-0.5 ${className}`}>{stars}</div>;
}
