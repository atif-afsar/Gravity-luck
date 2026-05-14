import { motion, useReducedMotion } from "framer-motion";
import SafeStudentImage from "./SafeStudentImage";
import { marqueeAchievers } from "../../data/studentResults";

function MarqueeCard({ student }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      className={`relative shrink-0 w-[min(320px,88vw)] sm:w-[380px] md:w-[420px] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] overflow-hidden border-[1.5px] border-[#AAC840]/30 bg-white/92 backdrop-blur-sm shadow-[0_10px_36px_rgba(0,0,0,0.07)] ${
        student.topRanker ? "ring-1 ring-[#AAC840]/45 shadow-[0_12px_40px_rgba(170,200,64,0.18)]" : ""
      }`}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              scale: 1.02,
              boxShadow: "0 20px 50px rgba(170, 200, 64, 0.15), 0 8px 24px rgba(0,0,0,0.08)",
            }
      }
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-70 ${
          student.topRanker
            ? "bg-[radial-gradient(ellipse_at_20%_0%,rgba(170,200,64,0.2),transparent_50%),radial-gradient(ellipse_at_100%_100%,rgba(170,200,64,0.12),transparent_55%)]"
            : "bg-[radial-gradient(ellipse_at_80%_20%,rgba(170,200,64,0.08),transparent_45%)]"
        }`}
      />
      <div className="relative flex items-center gap-4 sm:gap-5 md:gap-6 p-4 sm:p-5 md:p-6">
        <motion.div
          className="relative shrink-0"
          whileHover={reduce ? undefined : { rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 rounded-full bg-[#AAC840]/25 blur-md scale-110" aria-hidden />
          <SafeStudentImage
            src={student.image}
            alt={student.imageAlt}
            eager={false}
            className={`relative z-[1] h-[88px] w-[88px] sm:h-[104px] sm:w-[104px] md:h-[118px] md:w-[118px] rounded-full object-cover ring-[3px] ring-[#AAC840]/35 ${
              student.topRanker ? "ring-[#AAC840]/60 shadow-lg shadow-[#AAC840]/20" : ""
            }`}
          />
        </motion.div>
        <div className="min-w-0 text-left flex-1">
          <p className="text-[11px] sm:text-[12px] font-bold uppercase tracking-wider text-[#AAC840] mb-1">
            {student.cardBadge}
          </p>
          <p className="font-bold text-[#1c1b1b] text-[17px] sm:text-[19px] md:text-[21px] leading-snug truncate" title={student.name}>
            {student.name}
          </p>
          <p className="mt-1.5 text-[26px] sm:text-[30px] md:text-[34px] font-bold text-[#1c1b1b] leading-none tracking-tight">
            {student.headline}
            <span className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#444748]">
              {student.headlineSuffix ?? ""}
            </span>
          </p>
          {student.subline ? (
            <p className="mt-1.5 text-[12px] sm:text-[13px] text-[#444748] font-medium truncate">{student.subline}</p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function ResultsMarquee({ className = "" }) {
  const reduce = useReducedMotion();
  const items = marqueeAchievers;
  const loop = reduce ? items : [...items, ...items];

  return (
    <div className={`relative overflow-hidden rounded-[12px] sm:rounded-[16px] md:rounded-[20px] ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-[2] bg-gradient-to-r from-[#f6fde8] via-[#f6fde8]/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-[2] bg-gradient-to-l from-[#f6fde8] via-[#f6fde8]/80 to-transparent"
        aria-hidden
      />

      <div
        className={`flex gap-4 sm:gap-5 md:gap-7 py-1.5 sm:py-2 ${
          reduce
            ? "overflow-x-auto snap-x snap-mandatory justify-start pb-1"
            : "results-marquee-track w-max hover:[animation-play-state:paused]"
        }`}
        style={reduce ? undefined : { ["--marquee-duration"]: "64s" }}
      >
        {loop.map((student, idx) => (
          <div key={`${student.id}-${idx}`} className={reduce ? "snap-start shrink-0" : undefined}>
            <MarqueeCard student={student} />
          </div>
        ))}
      </div>
    </div>
  );
}
