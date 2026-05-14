import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SafeStudentImage from "../Common/SafeStudentImage";
import { iitJeeSpotlight, neetAchievers } from "../../data/studentResults";

const listParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function TopRankers() {
  return (
    <section className="bg-[#111111] py-[60px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-14"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-2 sm:mb-3">Student Achievements</h2>
          <p className="text-white/50 text-[14px] sm:text-[16px] md:text-[18px] max-w-3xl">
            771 out of 814 students cracked JEE Main — best result in the country. IIT-JEE and NEET profiles below come
            from our published topper artwork.
          </p>
        </motion.div>

        <div className="space-y-14 md:space-y-16">
          <CategoryBlock icon="engineering" title="IIT-JEE (Main & Advanced)" students={iitJeeSpotlight} />
          <CategoryBlock icon="medication" title="NEET UG" students={neetAchievers} />
        </div>
      </div>
    </section>
  );
}

function CategoryBlock({ icon, title, students }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex items-center gap-3 mb-6 sm:mb-8"
      >
        <span className="material-symbols-outlined text-[#AAC840] text-[28px] sm:text-[32px]">{icon}</span>
        <h3 className="text-[22px] sm:text-[26px] md:text-[30px] font-bold text-white">{title}</h3>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]"
        variants={listParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {students.map((card) => (
          <RankerCard key={card.id} card={card} />
        ))}
      </motion.div>
    </div>
  );
}

function RankerCard({ card }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const glow = Boolean(card.topRanker);

  return (
    <motion.article
      ref={ref}
      variants={cardMotion}
      className={`relative rounded-[18px] sm:rounded-[24px] overflow-hidden border text-white isolation-auto ${
        glow
          ? "border-[#AAC840]/50 bg-white/[0.07] shadow-[0_0_0_1px_rgba(170,200,64,0.2),0_20px_50px_rgba(0,0,0,0.35)]"
          : "border-white/10 bg-white/[0.05] shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
      } backdrop-blur-md group`}
      whileHover={{
        y: -6,
        borderColor: glow ? "rgba(170, 200, 64, 0.65)" : "rgba(170, 200, 64, 0.35)",
        transition: { type: "spring", stiffness: 400, damping: 26 },
      }}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgba(170,200,64,0.35)_120deg,transparent_240deg)] blur-sm"
        aria-hidden
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(170,200,64,0.12),transparent_55%)]"
        animate={inView && glow ? { opacity: [0.5, 0.85, 0.5] } : { opacity: 0.5 }}
        transition={{ duration: 4, repeat: glow ? Infinity : 0, ease: "easeInOut" }}
      />

      <div className="relative p-4 sm:p-6 flex gap-4 sm:gap-5">
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.45 }}
          style={{ perspective: 800 }}
        >
          <motion.div
            className="relative"
            whileHover={{ rotateY: -6, rotateX: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <div
              className={`absolute inset-0 rounded-full scale-110 blur-xl ${glow ? "bg-[#AAC840]/35" : "bg-[#AAC840]/18"}`}
              aria-hidden
            />
            <SafeStudentImage
              src={card.image}
              alt={card.imageAlt}
              className={`relative h-[100px] w-[100px] sm:h-[116px] sm:w-[116px] rounded-2xl object-cover ring-2 ${
                glow ? "ring-[#AAC840]/70 shadow-lg shadow-black/40" : "ring-white/15"
              }`}
              sizes="(max-width: 640px) 100px, 116px"
            />
          </motion.div>
        </motion.div>

        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <span
            className={`inline-flex self-start px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
              glow ? "bg-[#AAC840]/25 text-[#AAC840]" : "bg-white/10 text-white/75"
            }`}
          >
            {card.cardBadge}
          </span>
          <span className="text-[#AAC840] font-bold text-[26px] sm:text-[32px] md:text-[36px] leading-none tracking-tight">
            {card.headline}
            <span className="text-[13px] sm:text-[16px] font-semibold text-white/80">{card.headlineSuffix ?? ""}</span>
          </span>
          {card.subline ? <p className="text-white/45 text-[11px] sm:text-[12px] font-medium mt-1">{card.subline}</p> : null}
          <div className="mt-3 pt-3 border-t border-white/10">
            <p className="text-[15px] sm:text-[17px] font-semibold leading-snug">{card.name}</p>
            <p className="text-white/40 text-[11px] sm:text-[12px] font-semibold mt-0.5">{card.exam}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
