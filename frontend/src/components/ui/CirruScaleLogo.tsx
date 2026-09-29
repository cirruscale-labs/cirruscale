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
          <linearGradient id="cs-grad-b" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Cloud arcs — three stacked wisps (cirrus) */}
        <path
          d="M8 26 Q10 18 20 18 Q30 18 32 26"
          stroke="url(#cs-grad-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M5 31 Q8 21 20 21 Q32 21 35 31"
          stroke="url(#cs-grad-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Top node cluster — 3 dots suggesting scale/network */}
        <circle cx="20" cy="10" r="3.5" fill="url(#cs-grad-a)" />
        <circle cx="10" cy="16" r="2.5" fill="url(#cs-grad-a)" opacity="0.8" />
        <circle cx="30" cy="16" r="2.5" fill="url(#cs-grad-a)" opacity="0.8" />

        {/* Connector lines */}
        <line x1="20" y1="13.5" x2="10" y2="16" stroke="url(#cs-grad-b)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="13.5" x2="30" y2="16" stroke="url(#cs-grad-b)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="16" x2="30" y2="16" stroke="url(#cs-grad-b)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 2" />
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
          {/* "Cirru" in white */}
          <text
            x="0"
            y="17"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="-0.5"
            fill="white"
          >
            Cirru
          </text>
          {/* "Scale" in gradient blue */}
          <text
            x="55"
            y="17"
            fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="-0.5"
            fill="url(#cs-text-grad)"
          >
            Scale
          </text>
        </svg>
      )}
    </span>
  );
}
