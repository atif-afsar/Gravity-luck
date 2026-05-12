import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

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

  const display = target.includes('.') ? count.toFixed(1) : Math.floor(count);
  return <span ref={ref}>{display}</span>;
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

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
              Our results speak louder than words. Every year, our students
              consistently secure top ranks in India&apos;s toughest exams.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#AAC840] rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#1c1b1b] text-2xl sm:text-3xl">
                    workspace_premium
                  </span>
                </div>
                <div>
                  <h4 className="text-[18px] sm:text-[24px] font-semibold">JEE Main 2026</h4>
                  <p className="text-white/70 text-[13px] sm:text-base">771 out of 814 Cracked JEE Main</p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#AAC840] text-2xl sm:text-3xl">
                    medication
                  </span>
                </div>
                <div>
                  <h4 className="text-[18px] sm:text-[24px] font-semibold">NEET UG 2026</h4>
                  <p className="text-white/70 text-[13px] sm:text-base">85% Success Rate for our regular batches</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="grid grid-cols-2 gap-3 sm:gap-[24px]">
            <div className="space-y-3 sm:space-y-[24px]">
              <motion.div
                className="bg-[#fcf8f8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-48 sm:h-64 flex flex-col justify-end text-[#1c1b1b]"
                variants={cardVariants}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-4xl sm:text-6xl font-bold text-[#AAC840]">
                  99.973
                </span>
                <span className="uppercase tracking-widest text-[11px] sm:text-[14px] text-[#444748]">Percentile</span>
                <span className="text-[16px] sm:text-[24px]">JEE Main 2026</span>
              </motion.div>

              <motion.div
                className="bg-[#AAC840] rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-36 sm:h-48 flex flex-col justify-center text-[#1c1b1b]"
                variants={cardVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-2xl sm:text-4xl font-bold">771/814</span>
                <span className="text-[12px] sm:text-[14px]">Cracked JEE Main</span>
              </motion.div>
            </div>

            <div className="space-y-3 sm:space-y-[24px] pt-6 sm:pt-12">
              <motion.div
                className="bg-[#f1edec] p-4 sm:p-6 rounded-2xl sm:rounded-3xl h-36 sm:h-48 flex flex-col justify-center text-[#1c1b1b]"
                variants={cardVariants}
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="text-2xl sm:text-4xl font-bold">City #1</span>
                <span className="text-[12px] sm:text-[14px]">Lucknow Topper</span>
              </motion.div>

              <motion.div
                className="bg-[#fcf8f8] rounded-2xl sm:rounded-3xl p-4 sm:p-6 h-48 sm:h-64 flex flex-col justify-end text-[#1c1b1b]"
                variants={cardVariants}
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
