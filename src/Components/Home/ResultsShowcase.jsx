import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SafeStudentImage from "../Common/SafeStudentImage";
import {
  jeeAdvancedSpotlightStudent,
  jeeMainShowcaseStudent,
  neetShowcaseStudent,
} from "../../data/studentResults";

const jeeMainFeatured = jeeMainShowcaseStudent;
const jeeAdvancedSpotlight = jeeAdvancedSpotlightStudent;
const neetFeatured = neetShowcaseStudent;

function CountUp({ target, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(target);
    if (isNaN(num)) return;

    let start = 0;
    const step = num / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const display = target.includes(".") ? count.toFixed(1) : Math.floor(count);
  return <span ref={ref}>{display}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

/** Image-only featured card — no duplicate text panel */
function ParallaxSpotlightCard({ student, custom }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [12, -12]);

  if (!student) return null;

  return (
    <motion.div
      ref={containerRef}
      className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#c4c7c8]/25 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group min-h-[220px] sm:min-h-[280px]"
      variants={cardVariants}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 28px 60px rgba(170,200,64,0.12)" }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
    >
      <motion.div className="absolute inset-0 bg-[#f0f4e4]" style={{ y }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(170,200,64,0.22),transparent_65%)] z-[1]" />
        <SafeStudentImage
          src={student.image}
          alt={student.imageAlt}
          eager={false}
          className="relative z-[2] w-full h-full min-h-[220px] sm:min-h-[280px] object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function ResultsShowcase() {
  return (
    <section className="py-[60px] px-5 md:px-10 bg-[#1c1b1b] text-white relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#AAC840]/10 blur-[120px] rounded-full" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[80px] items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold mb-5 md:mb-8">
              Legacy of
              <br />
              <span className="text-[#AAC840]">Rank Holders</span>
            </h2>
            <p className="text-white/60 text-[15px] md:text-[18px] mb-8 md:mb-12 max-w-md">
              Our results speak louder than words. Every year, our students consistently secure top ranks in
              India&apos;s toughest exams — including the achievers featured here from our published result artwork.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <Link
                to="/results"
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#AAC840]/35 transition-colors"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl shrink-0 overflow-hidden ring-2 ring-[#AAC840]/40 bg-[#AAC840]/20">
                  {jeeMainFeatured ? (
                    <SafeStudentImage
                      src={jeeMainFeatured.image}
                      alt={jeeMainFeatured.imageAlt}
                      className="w-full h-full object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#1c1b1b] text-2xl sm:text-3xl">
                        workspace_premium
                      </span>
                    </div>
                  )}
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[18px] sm:text-[24px] font-semibold">JEE Main 2026</h4>
                  <p className="text-white/70 text-[13px] sm:text-base">
                    771 out of 814 cracked JEE Main
                    {jeeMainFeatured ? (
                      <>
                        {" "}
                        ·{" "}
                        <span className="text-[#AAC840]/95 font-semibold whitespace-nowrap">
                          {jeeMainFeatured.name}
                        </span>{" "}
                        <span className="opacity-90">({jeeMainFeatured.headline + (jeeMainFeatured.headlineSuffix ?? "")})</span>
                      </>
                    ) : null}
                  </p>
                </div>
              </Link>

              <Link
                to="/results"
                className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#AAC840]/35 transition-colors"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 overflow-hidden ring-2 ring-[#AAC840]/30 bg-white/5">
                  {neetFeatured ? (
                    <SafeStudentImage
                      src={neetFeatured.image}
                      alt={neetFeatured.imageAlt}
                      className="w-full h-full object-cover"
                      sizes="64px"
                    />
                  ) : (
                    <span className="material-symbols-outlined text-[#AAC840] text-2xl sm:text-3xl">medication</span>
                  )}
                </div>
                <div className="min-w-0 text-left">
                  <h4 className="text-[18px] sm:text-[24px] font-semibold">NEET UG</h4>
                  <p className="text-white/70 text-[13px] sm:text-base">
                    {neetFeatured ? (
                      <>
                        <span className="font-semibold text-white/90">{neetFeatured.name}</span>
                        {" · "}
                        {neetFeatured.headline} · {neetFeatured.subline}
                      </>
                    ) : (
                      "Top medical entrance selections"
                    )}
                  </p>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-3 sm:gap-[24px]">
            <div className="space-y-3 sm:space-y-[24px]">
              <ParallaxSpotlightCard student={jeeAdvancedSpotlight} custom={0} />

              <motion.div
                className="bg-[#AAC840] rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-36 sm:h-48 flex flex-col justify-center text-[#1c1b1b] shadow-[0_16px_40px_rgba(170,200,64,0.25)]"
                variants={cardVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-2xl sm:text-4xl font-bold">771/814</span>
                <span className="text-[12px] sm:text-[14px]">Cracked JEE Main</span>
              </motion.div>
            </div>

            <div className="space-y-3 sm:space-y-[24px] pt-6 sm:pt-12">
              <motion.div
                className="bg-[#f1edec] p-4 sm:p-6 rounded-2xl sm:rounded-3xl h-36 sm:h-48 flex flex-col justify-center text-[#1c1b1b] border border-white/5"
                variants={cardVariants}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl sm:text-4xl font-bold">City #1</span>
                <span className="text-[12px] sm:text-[14px]">Lucknow Topper · 99.973 %ile</span>
              </motion.div>

              <motion.div
                className="bg-[#fcf8f8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-48 sm:h-64 flex flex-col justify-end text-[#1c1b1b] border border-[#c4c7c8]/20"
                variants={cardVariants}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                <span className="text-4xl sm:text-6xl font-bold text-[#AAC840]">
                  <CountUp target="33" />+
                </span>
                <span className="uppercase tracking-widest text-[11px] sm:text-[14px] text-[#444748]">Students</span>
                <span className="text-[16px] sm:text-[24px]">Above 99 Percentile</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
