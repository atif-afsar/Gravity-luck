import { motion } from "framer-motion";

const heading = "Your Name Could Be Next.";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" } }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.6 + i * 0.15, type: "spring", stiffness: 200, damping: 15 } }),
};

export default function ResultsCTA() {
  const words = heading.split(" ");

  return (
    <section className="py-[60px] px-5 md:px-10">
      <motion.div
        className="max-w-[1280px] mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-[#1c1b1b] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden relative">
          <div className="absolute -top-20 -left-20 w-60 sm:w-80 h-60 sm:h-80 bg-[#AAC840]/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-60 sm:w-80 h-60 sm:h-80 bg-[#AAC840]/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <span className="material-symbols-outlined text-[#AAC840] text-[40px] sm:text-[48px] md:text-[56px] mb-4 sm:mb-6 block">emoji_events</span>

            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white mb-5 sm:mb-8 leading-tight">
              {words.map((word, i) => (
                <motion.span key={i} className="inline-block mr-[0.3em]" variants={wordVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              className="text-white/50 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Join the ranks of Gravity&apos;s top achievers. Take the first step toward your dream college with India&apos;s most result-oriented coaching.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                className="bg-[#AAC840] text-[#1c1b1b] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[13px] sm:text-base shadow-xl hover:scale-105 transition-transform cursor-pointer"
                variants={buttonVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              >
                Start Your Journey
              </motion.button>
              <motion.button
                className="bg-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[13px] sm:text-base border border-white/10 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
                variants={buttonVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              >
                Take Scholarship Test
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
