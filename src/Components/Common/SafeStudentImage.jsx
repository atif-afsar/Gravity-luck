import { useState } from "react";

/**
 * Portrait for result cards: lazy by default, fixed aspect, graceful fallback.
 */
export default function SafeStudentImage({
  src,
  alt,
  className = "",
  eager = false,
  sizes = "(max-width: 640px) 96px, 112px",
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#1c1b1b] to-[#333] text-[#AAC840]/80 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="material-symbols-outlined text-[clamp(1.5rem,4vw,2.5rem)]">person</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={160}
      height={160}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
