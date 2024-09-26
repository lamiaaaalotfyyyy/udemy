import React from "react";

const StarRating = ({
  rating,
  starCount = 5,
  width = 70,
  height = 40,
  starColor = "rgb(195, 127, 0)",
  starOutlineColor = "rgb(195, 127, 0)",
  className = "",
}) => {
  const filledWidth = `${(rating / starCount) * 100}%`;
  const maskId = `star-rating-mask-${Math.random()}`;
  const starMargin = 4.5;

  return (
    <svg
      aria-hidden="true"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 90 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <mask id={maskId}>
        <rect x="0" y="0" width={filledWidth} height="100%" fill="white" />
      </mask>

      <g className="star-filled" mask={`url(#${maskId})`}>
        {[...Array(starCount)].map((_, index) => (
          <path
            key={index}
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.157L12 18.897l-7.334 3.857 1.4-8.157L.132 9.21l8.2-1.192L12 .587z"
            transform={`translate(${
              index * (14 + starMargin)
            }, 0) scale(0.5833)`}
            fill={starColor}
          />
        ))}
      </g>

      <g fill="transparent" stroke={starOutlineColor} strokeWidth="1">
        {[...Array(starCount)].map((_, index) => (
          <path
            key={index}
            d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.157L12 18.897l-7.334 3.857 1.4-8.157L.132 9.21l8.2-1.192L12 .587z"
            transform={`translate(${
              index * (14 + starMargin)
            }, 0) scale(0.5833)`}
          />
        ))}
      </g>
    </svg>
  );
};

export default StarRating;
