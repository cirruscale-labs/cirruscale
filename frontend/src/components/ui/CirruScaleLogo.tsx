interface CirruScaleLogoProps {
  variant?: "full" | "icon";
  className?: string;
  height?: number;
}

export default function CirruScaleLogo({
  variant = "full",
  className = "",
  height = 36,
}: CirruScaleLogoProps) {
  const iconSize = height;
  const textScale = height / 36;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Icon mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cs-grad-a" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>

        {/* Cloud body — bumpy top, flat bottom */}
        <circle cx="15" cy="23" r="7" fill="url(#cs-grad-a)" />
        <circle cx="23" cy="20" r="9" fill="url(#cs-grad-a)" />
        <circle cx="31" cy="24" r="6" fill="url(#cs-grad-a)" />
        <rect x="8" y="24" width="29" height="9" fill="url(#cs-grad-a)" />

        {/* Upward arrow — "scale up" */}
        <path
          d="M20 31 L20 19 M15.5 23.5 L20 19 L24.5 23.5"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Wordmark */}
      {variant === "full" && (
        <svg
          width={Math.round(112 * textScale)}
          height={Math.round(22 * textScale)}
          viewBox="0 0 112 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="CirruScale"
        >
          <defs>
            <linearGradient id="cs-text-grad" x1="0" y1="0" x2="112" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          {/* "Cirru" white + "Scale" gradient — no space between */}
          <text
            x="0"
            y="17"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="-0.5"
          >
            <tspan fill="white">Cirru</tspan><tspan fill="url(#cs-text-grad)">Scale</tspan>
          </text>
        </svg>
      )}
    </span>
  );
}
