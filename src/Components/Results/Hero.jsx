import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration * 60);
    let raf;
    const step = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const headingWords = "A Legacy Built on Rank-Level Performance.".split(" ");

const heroStats = [
  { value: 771, suffix: "/814", label: "Cracked JEE Main", icon: "engineering" },
  { value: 99, suffix: ".973%", label: "Top Percentile", icon: "trending_up" },
  { value: 33, suffix: "+", label: "Above 99 %ile", icon: "workspace_premium" },
  { value: 20, suffix: "K+", label: "Students Mentored", icon: "school" },
];

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-8 sm:pt-[40px] pb-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-[#AAC840]/10 border border-[#AAC840]/20 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8"
            >
              <span
                className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                emoji_events
              </span>
              <span className="text-[#AAC840] font-medium text-[12px] sm:text-[14px]">
                Results That Speak for Themselves
              </span>
            </motion.div>

            <h1 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-5 sm:mb-8">
              {headingWords.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + i * 0.07,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] leading-[1.6] max-w-2xl"
            >
              In JEE Main 2026, 771 out of 814 Gravity students cracked the exam — the best
              result in the country. Our Lucknow City Topper Ojas Singhal scored
              99.973 percentile, with 33+ students scoring above 99 percentile.
            </motion.p>
          </div>

          {/* Right — Stats Grid */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className={`p-4 sm:p-6 rounded-[16px] sm:rounded-[20px] flex flex-col ${
                    i === 0
                      ? "bg-[#1c1b1b] text-white"
                      : i === 1
                      ? "bg-[#AAC840] text-[#1c1b1b]"
                      : i === 2
                      ? "bg-[#AAC840] text-[#1c1b1b]"
                      : "bg-[#1c1b1b] text-white"
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[22px] sm:text-[28px] mb-3 sm:mb-4 ${
                      i === 0 || i === 3 ? "text-[#AAC840]" : "text-[#1c1b1b]/60"
                    }`}
                  >
                    {stat.icon}
                  </span>
                  <span className="text-[24px] sm:text-[30px] md:text-[36px] font-bold leading-tight">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1.8} />
                  </span>
                  <span
                    className={`text-[10px] sm:text-[11px] md:text-[12px] uppercase tracking-widest font-semibold mt-1 ${
                      i === 0 || i === 3 ? "text-white/50" : "text-[#1c1b1b]/60"
                    }`}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
