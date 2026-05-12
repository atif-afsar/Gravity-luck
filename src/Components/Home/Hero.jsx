import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const IMAGES = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO7o_wx7cbcK8TUli5xaqzHsP9H84C-JgZ4oUnYs-NW6FMYxU7Zy1ODCcw2cu3EXbm0eNqOAeQE3y4W8fsorv6ySIoyehlh2mJ0dt7P1feIRptV9lTHYdaPVtc8haKFkDpa6ItMfDAUL35lrddS_cXl0Pp_-jmJUXFTLwgtiD_vesM8jxZVtVK_e2tH00F2EUXpvjbEepDPcgI2L37SBPEez92wTm5B9iSCtABKXrdfB4f4bxqefnOLp9B2Nu31I2TXci1dxnR5W5",
    alt: "Students celebrating IIT-JEE results",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCYiZihAXyepb04-GRr8Lp9Z_bXNP3P9FoS0m7_0sYUOK806PCmTGPvYavaG3aBU35jBIlRti87VUTgGhALb4Lnmw_vrNjoBBIEPCJK1mjwowkC6vTfZY9_E1US2dbbAJExlawgr7RlNEqRi8xbzaE07tClodQemaY0KcP4YLoQ6MSDE2eRo9xwBuxC5uYDXijt7Khb0kmHk-BdnbrXOes0RLkRD44Br0umVgGnweyFoAIMbIdOyDCas1WiSELbtZ3VUPL5hEUhQjb",
    alt: "Classroom session at Gravity Classes",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c8f1?w=600&h=400&fit=crop",
    alt: "Students in laboratory session",
  },
];

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
            Admissions Open for 2026-27
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
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
              {IMAGES.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="overflow-hidden rounded-[10px] sm:rounded-[14px] md:rounded-[20px]"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[100px] sm:h-[160px] md:h-[240px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
