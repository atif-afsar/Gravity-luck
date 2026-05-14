import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const highlights = [
  { label: "Serving Lucknow", value: "Since 2012" },
  { label: "City presence", value: "6 branches" },
  { label: "JEE Main 2026", value: "771 / 814 qualified" },
  { label: "Student reach", value: "20K+ mentored" },
];

const pillars = [
  {
    icon: "psychology",
    title: "Expert faculty & mentorship",
    body: "Instructors with deep IIT and medical-college pedigrees break down the hardest topics into clear, exam-ready frameworks — not generic lectures.",
    bullets: ["Concept-first teaching", "Exam temperament coaching", "Regular PTMs with parents"],
    variant: "dark",
  },
  {
    icon: "library_books",
    title: "Study systems that match the NTA",
    body: "Structured modules, chapter sheets, and curated archives aligned to the latest JEE Main, Advanced, and NEET patterns.",
    bullets: ["NCERT-to-advanced ladder", "Formula & revision booklets", "15+ years PYQ banks"],
    variant: "lime",
  },
  {
    icon: "analytics",
    title: "Data-backed practice",
    body: "Every test becomes feedback: strength/weakness maps, time management, and targeted remedial drills so gaps close fast.",
    bullets: ["Topic-wise analytics", "Rank & percentile tracking", "Personal improvement plans"],
    variant: "neutral",
  },
  {
    icon: "groups",
    title: "Small batches, real attention",
    body: "Capped sections with a monitored 1:30 ratio so doubts get resolved in class — not left for “later”.",
    stat: "1 : 30",
    statLabel: "effective ratio",
    variant: "glass",
  },
  {
    icon: "edit_note",
    title: "Full-length exam rhythm",
    body: "Weekly and phase tests under exam conditions build stamina, accuracy, and confidence long before the real hall.",
    bullets: ["NTA-style mock papers", "OMR / online parity", "All-India benchmarking"],
    variant: "darkSoft",
  },
];

function GravityEdge() {
  return (
    <section className="relative py-[72px] md:py-[96px] px-5 md:px-10 bg-gradient-to-b from-white via-[#faf9f8] to-[#f3f0ef] overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 w-[min(520px,90vw)] h-[min(520px,90vw)] bg-[#AAC840]/[0.07] blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#1c1b1b]/[0.04] blur-[90px] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1280px] mx-auto relative z-[1]">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#AAC840]/35 bg-[#AAC840]/10 px-4 py-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-widest text-[#3a5a00] mb-5">
              <span className="material-symbols-outlined text-[16px] text-[#AAC840]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              Why Gravity
            </span>
            <h2 className="text-[30px] sm:text-[38px] md:text-[46px] font-bold tracking-tight text-[#1c1b1b] leading-[1.12] mb-4 md:mb-5">
              The Gravity Edge — built for rank-level outcomes
            </h2>
            <p className="text-[#444748] text-[15px] sm:text-[17px] md:text-[18px] leading-[1.65] max-w-xl">
              Lucknow&apos;s IIT-JEE and NEET aspirants choose Gravity for one reason: an end-to-end system where teaching, material, testing, and
              mentorship pull in the same direction — every week of the year.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-[#444748] mb-4">At a glance</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-[#c4c7c8]/40 bg-white/80 backdrop-blur-sm px-4 py-3.5 sm:py-4 premium-shadow"
                >
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wide text-[#747878] font-semibold mb-1">{h.label}</p>
                  <p className="text-[#1c1b1b] font-bold text-[14px] sm:text-[15px] leading-snug">{h.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {/* Column A — flagship */}
          <motion.div variants={fadeUp} className="md:col-span-7 flex flex-col gap-4 md:gap-5">
            <PillarCard {...pillars[0]} className="min-h-[300px] md:min-h-[340px] flex-1" />
          </motion.div>

          {/* Column B — stack */}
          <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
            <motion.div variants={fadeUp}>
              <PillarCard {...pillars[1]} className="min-h-[200px]" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <PillarCard {...pillars[2]} className="min-h-[200px]" />
            </motion.div>
          </div>

          {/* Bottom row */}
          <motion.div variants={fadeUp} className="md:col-span-6">
            <PillarCard {...pillars[3]} className="min-h-[220px] md:min-h-[240px]" />
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-6">
            <PillarCard {...pillars[4]} className="min-h-[220px] md:min-h-[240px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PillarCard({ icon, title, body, bullets, stat, statLabel, variant, className = "" }) {
  const base =
    "relative overflow-hidden rounded-[1.75rem] md:rounded-[2rem] p-7 sm:p-8 md:p-9 transition-[transform,box-shadow] duration-300 group";

  const styles = {
    dark: "bg-[#1c1b1b] text-white shadow-[0_24px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_28px_60px_rgba(0,0,0,0.18)]",
    darkSoft:
      "bg-[#252323] text-white border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.1)] hover:border-[#AAC840]/25",
    lime: "bg-[#AAC840] text-[#1c1b1b] shadow-[0_18px_40px_rgba(170,200,64,0.22)] hover:shadow-[0_22px_48px_rgba(170,200,64,0.28)]",
    neutral: "bg-[#ebe7e7] border border-[#c4c7c8]/50 text-[#1c1b1b] shadow-[0_12px_32px_rgba(0,0,0,0.04)] hover:border-[#AAC840]/25",
    glass:
      "glass-card border border-[#c4c7c8]/45 text-[#1c1b1b] premium-shadow hover:border-[#AAC840]/35 hover:shadow-[0_20px_45px_rgba(170,200,64,0.1)]",
  };

  const iconWrap =
    variant === "dark" || variant === "darkSoft"
      ? "text-[#AAC840]"
      : variant === "lime"
        ? "text-[#1c1b1b]/70"
        : "text-[#AAC840]";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {variant === "dark" && (
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#AAC840]/10 blur-3xl group-hover:bg-[#AAC840]/15 transition-colors"
          aria-hidden
        />
      )}

      <div className="relative z-[1] flex flex-col h-full">
        <span className={`material-symbols-outlined ${iconWrap} text-4xl md:text-[2.75rem] mb-4 md:mb-5`}>{icon}</span>
        <h3 className={`font-semibold text-[19px] sm:text-[21px] md:text-[23px] mb-3 leading-snug ${variant === "dark" || variant === "darkSoft" ? "text-white" : "text-[#1c1b1b]"}`}>
          {title}
        </h3>
        <p
          className={`text-[14px] sm:text-[15px] leading-relaxed mb-4 ${variant === "dark" || variant === "darkSoft" ? "text-white/65" : variant === "lime" ? "text-[#1c1b1b]/82" : "text-[#444748]"}`}
        >
          {body}
        </p>

        {stat != null ? (
          <div className="mt-auto flex items-center gap-5 pt-2">
            <div className="flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center rounded-full border-[3px] border-[#AAC840]/50 bg-[#fcf8f8] shadow-inner">
              <span className="text-[#1c1b1b] font-bold text-2xl sm:text-3xl tracking-tight">{stat}</span>
            </div>
            <p className="text-[13px] sm:text-[14px] font-medium text-[#444748] capitalize">{statLabel}</p>
          </div>
        ) : null}

        {bullets?.length ? (
          <ul className="mt-auto space-y-2 pt-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[13px] sm:text-[14px] leading-snug">
                <span className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${iconWrap}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className={variant === "dark" || variant === "darkSoft" ? "text-white/75" : variant === "lime" ? "text-[#1c1b1b]/88" : "text-[#444748]"}>
                  {b}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.div>
  );
}

export default GravityEdge;
