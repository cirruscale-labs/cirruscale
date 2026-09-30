interface CirruScaleLogoProps {
  variant?: "full" | "icon" | "stacked";
  className?: string;
  height?: number;
}

function CloudIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cloud body: three overlapping circles + filled base */}
      <circle cx="16" cy="31" r="10" fill="#4BAEE8" />
      <circle cx="28" cy="24" r="13" fill="#4BAEE8" />
      <circle cx="40" cy="31" r="9"  fill="#4BAEE8" />
      <rect x="6" y="31" width="44" height="12" fill="#4BAEE8" />

      {/* Solid white upward arrow: wide arrowhead + narrow shaft */}
      <path
        d="M28 12 L20 26 L24 26 L24 44 L32 44 L32 26 L36 26 Z"
        fill="white"
      />
    </svg>
  );
}

function Wordmark({ scale }: { scale: number }) {
  return (
    <span
      style={{
        fontFamily: "ui-sans-serif, system-ui, -apple-system, sans-serif",
        fontSize: `${Math.round(18 * scale)}px`,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.3px",
        userSelect: "none",
      }}
    >
      <span style={{ color: "#ffffff" }}>Cirru</span>
      <span style={{ color: "#4BAEE8" }}>Scale</span>
    </span>
  );
}

export default function CirruScaleLogo({
  variant = "full",
  className = "",
  height = 36,
}: CirruScaleLogoProps) {
  const textScale = height / 36;

  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
        <CloudIcon size={height} />
        <Wordmark scale={textScale} />
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <CloudIcon size={height} />
      {variant === "full" && <Wordmark scale={textScale} />}
    </span>
  );
}
