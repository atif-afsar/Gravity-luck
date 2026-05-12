import { motion } from "framer-motion";

const headingWords = "Find the Right Course for Your Goal.".split(" ");

const stats = [
  { icon: "school", value: "6+", label: "Programs" },
  { icon: "groups", value: "2000+", label: "Students Enrolled" },
  { icon: "emoji_events", value: "95%", label: "Selection Rate" },
];

export default function Hero() {
  return (
    <section className="pb-[60px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-8 sm:pt-[40px]">
        <div className="max-w-3xl">
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
              auto_awesome
            </span>
            <span className="text-[#AAC840] font-medium text-[12px] sm:text-[14px]">
              2026-27 Admissions Open
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
            className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] leading-[1.6] max-w-2xl mb-8 sm:mb-12"
          >
            From building strong foundations in Class 8 to cracking India&apos;s
            toughest competitive exams — explore programs designed for every
            stage of your academic journey.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-[24px]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#c4c7c8]/30 premium-shadow"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#AAC840]/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#AAC840] text-[22px] sm:text-[28px]">
                  {stat.icon}
                </span>
              </div>
              <div>
                <p className="text-[22px] sm:text-[28px] font-bold text-[#1c1b1b] leading-tight">
                  {stat.value}
                </p>
                <p className="text-[#444748] text-[12px] sm:text-[14px]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
