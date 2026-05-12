import { motion } from "framer-motion";

const heading = "Start Your Preparation Today.";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6 + i * 0.15,
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  }),
};

export default function CourseCTA() {
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
        <div className="bg-[#AAC840] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)",
            }}
          />

          <div className="relative z-10">
            <h2 className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px] font-bold text-[#1c1b1b] mb-5 sm:mb-8 leading-tight">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-[0.3em]"
                  variants={wordVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              className="text-[#1c1b1b]/70 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Take the first step toward IIT, AIIMS, or top engineering and
              medical colleges. Book a free counseling session or take our
              scholarship test to begin.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                className="bg-[#1c1b1b] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[13px] sm:text-base shadow-xl hover:scale-105 transition-transform cursor-pointer"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                Book Free Counseling
              </motion.button>
              <motion.button
                className="bg-[#fcf8f8] text-[#1c1b1b] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[13px] sm:text-base border border-[#1c1b1b]/10 hover:scale-105 transition-transform cursor-pointer"
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
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
