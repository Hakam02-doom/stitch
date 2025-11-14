/**
 * Custom hook for rendering star ratings
 * Returns an array of JSX elements representing stars
 */
export function useStars(rating: number): JSX.Element[] {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars: JSX.Element[] = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span
        key={i}
        className="material-symbols-outlined !text-base !font-bold"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        star
      </span>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <span key="half" className="material-symbols-outlined !text-base">
        star_half
      </span>
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="material-symbols-outlined !text-base">
        star
      </span>
    );
  }

  return stars;
}
