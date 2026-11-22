import { useId } from 'react';

/**
 * Custom brand mark: a faceted hexagon with a monogram "W" cut out of it.
 * Drawn as inline SVG so it stays crisp at every size and needs no image asset.
 * The gradient id is unique per instance: the logo is rendered more than once
 * per page (header and footer), and duplicate ids would be invalid HTML.
 */
export default function Logo({ size = 42, showWordmark = true }) {
  const gradientId = `logo-fill-${useId().replace(/[:]/g, '')}`;

  return (
    <span className="logo-lockup" aria-label="WuYi logo">
      <svg
        className="logo-mark"
        width={size}
        height={size}
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0b45a" />
            <stop offset="100%" stopColor="#c67b26" />
          </linearGradient>
        </defs>
        <polygon
          points="24,2 43,13 43,35 24,46 5,35 5,13"
          fill={`url(#${gradientId})`}
        />
        <polygon
          points="24,8 37.5,16.5 37.5,31.5 24,40 10.5,31.5 10.5,16.5"
          fill="#0d1117"
          opacity="0.92"
        />
        <path
          d="M14 17 L18.6 31 L24 22.4 L29.4 31 L34 17"
          fill="none"
          stroke="#f2c47c"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showWordmark && (
        <span className="logo-wordmark">
          WU<span>YI</span>
        </span>
      )}
    </span>
  );
}
