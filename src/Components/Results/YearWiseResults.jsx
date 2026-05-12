import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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
      if (start >= num) { setCount(num); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{Math.floor(count)}</span>;
}

const yearData = [
  { year: "2026", highlight: true, jee: { top100: 6, top500: 18, top1000: 42, total: 185 }, neet: { top100: 5, top500: 24, top1000: 58, total: 420 } },
  { year: "2025", highlight: false, jee: { top100: 5, top500: 15, top1000: 35, total: 168 }, neet: { top100: 4, top500: 21, top1000: 52, total: 380 } },
  { year: "2024", highlight: false, jee: { top100: 4, top500: 13, top1000: 30, total: 155 }, neet: { top100: 3, top500: 19, top1000: 48, total: 345 } },
  { year: "2023", highlight: false, jee: { top100: 4, top500: 12, top1000: 28, total: 145 }, neet: { top100: 3, top500: 18, top1000: 45, total: 320 } },
  { year: "2022", highlight: false, jee: { top100: 3, top500: 10, top1000: 22, total: 128 }, neet: { top100: 2, top500: 14, top1000: 38, total: 285 } },
];

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" } }),
};

export default function YearWiseResults() {
  return (
    <section className="py-[60px] bg-[#fcf8f8]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px] items-start">
          {/* Left */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-4 sm:mb-6">
              Year-on-Year<br /><span className="text-[#AAC840]">Growth</span>
            </h2>
            <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 sm:mb-10">
              Our selection numbers have consistently grown year after year, reflecting the continuous evolution of our teaching methodology.
            </p>

            <div className="bg-[#1c1b1b] rounded-xl sm:rounded-2xl p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px]">trending_up</span>
                <span className="text-white font-semibold text-[14px] sm:text-base">2026 Highlights</span>
              </div>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-white/50">Total JEE Selections</span>
                  <span className="text-[#AAC840] font-bold"><CountUp target="185" /></span>
                </div>
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-white/50">Total NEET Selections</span>
                  <span className="text-[#AAC840] font-bold"><CountUp target="420" /></span>
                </div>
                <div className="flex justify-between text-[13px] sm:text-[14px]">
                  <span className="text-white/50">Top 100 AIR Combined</span>
                  <span className="text-white font-bold">11</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6">
            {yearData.map((data, i) => (
              <motion.div
                key={data.year}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`rounded-[18px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 border ${data.highlight ? "bg-white border-[#AAC840]/30 premium-shadow" : "bg-white border-[#c4c7c8]/30"}`}
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#1c1b1b]">{data.year}</span>
                    {data.highlight && (
                      <span className="bg-[#AAC840] text-[#1c1b1b] px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">Latest</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[{ key: "jee", label: "IIT-JEE", icon: "engineering", data: data.jee }, { key: "neet", label: "NEET", icon: "medication", data: data.neet }].map((exam) => (
                    <div key={exam.key} className="bg-[#f6f3f2] rounded-lg sm:rounded-xl p-4 sm:p-5">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <span className="material-symbols-outlined text-[#1c1b1b] text-[18px] sm:text-[20px]">{exam.icon}</span>
                        <span className="font-semibold text-[13px] sm:text-[14px] text-[#1c1b1b]">{exam.label}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        {[{ val: exam.data.top100, lbl: "Top 100" }, { val: exam.data.top500, lbl: "Top 500" }, { val: exam.data.top1000, lbl: "Top 1000" }, { val: exam.data.total, lbl: "Total", green: true }].map((s) => (
                          <div key={s.lbl}>
                            <p className={`text-[18px] sm:text-[22px] md:text-[24px] font-bold ${s.green ? "text-[#AAC840]" : "text-[#1c1b1b]"}`}>{s.val}</p>
                            <p className="text-[10px] sm:text-[11px] text-[#444748] uppercase tracking-wider font-semibold">{s.lbl}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
