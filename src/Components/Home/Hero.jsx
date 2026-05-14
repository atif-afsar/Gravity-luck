import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ResultsMarquee from "../Common/ResultsMarquee";

function AnimatedCounter({ target, suffix, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

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

const STATS = [
  { value: 771, suffix: "/814", label: "Cracked JEE Main" },
  { value: 33, suffix: "+", label: "Above 99 %ile" },
  { value: 20, suffix: "K+", label: "Students Mentored" },
];

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-5 md:px-10 py-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[#AAC840]/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8"
        >
          <span
            className="material-symbols-outlined text-[#AAC840] text-[14px] sm:text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-[#3a5a00] font-semibold text-[12px] sm:text-[13px] tracking-wide">
            Best Coaching Institute in Lucknow | Since 2012
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
          className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold tracking-tight leading-[1.1] max-w-4xl px-2"
        >
          Best IIT-JEE &amp; NEET{" "}
          <span className="relative inline-block">
            <span className="absolute -left-2 sm:-left-3 md:-left-4 top-0 bottom-0 flex flex-col items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#AAC840]" />
              <span className="w-[2px] flex-1 bg-[#AAC840]/40" />
            </span>
            <span className="text-[#1c1b1b]">Coaching</span>
            <span className="absolute -right-2 sm:-right-3 md:-right-4 top-0 bottom-0 flex flex-col items-center">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#AAC840]" />
              <span className="w-[2px] flex-1 bg-[#AAC840]/40" />
            </span>
          </span>{" "}
          in Lucknow
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] leading-[1.7] max-w-xl mt-5 sm:mt-6 px-2"
        >
          Unlocking your true academic potential with personalized mentorship,
          rigorous practice modules, and an unparalleled legacy of success.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 w-full sm:w-auto"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 bg-[#AAC840] text-[#1c1b1b] pl-6 sm:pl-7 pr-4 sm:pr-5 py-3 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] shadow-lg shadow-[#AAC840]/20 hover:shadow-[#AAC840]/30 transition-all w-full sm:w-auto"
          >
            Apply Now
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1c1b1b]/10 group-hover:bg-[#1c1b1b]/20 transition-colors">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </span>
          </Link>
          <Link
            to="/courses"
            className="group inline-flex items-center justify-center gap-3 bg-white border border-[#c4c7c8] text-[#1c1b1b] pl-6 sm:pl-7 pr-4 sm:pr-5 py-3 sm:py-3.5 rounded-full font-semibold text-[14px] sm:text-[15px] hover:bg-[#f6f3f2] transition-colors w-full sm:w-auto"
          >
            View Courses
            <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#f6f3f2] group-hover:bg-[#e5e2e1] transition-colors">
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">arrow_forward</span>
            </span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="flex items-center gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-4 sm:gap-6 md:gap-10">
              {i > 0 && <div className="w-[1px] h-8 sm:h-10 bg-[#c4c7c8]" />}
              <div className="flex flex-col items-center">
                <span className="text-[20px] sm:text-[24px] md:text-[30px] font-bold leading-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1.8} />
                </span>
                <span className="text-[#444748] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="w-full max-w-[960px] mt-10 sm:mt-14"
        >
          <div className="rounded-[16px] sm:rounded-[20px] md:rounded-[28px] border-[2px] sm:border-[3px] border-[#AAC840] p-1.5 sm:p-2 md:p-3 bg-[#AAC840]/5">
            <ResultsMarquee />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
