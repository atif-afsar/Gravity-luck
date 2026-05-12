import { motion } from 'framer-motion';

const headingWords = ['Ready', 'to', 'start', 'your', 'journey', 'to', 'the', 'top?'];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.08, duration: 0.4 },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8 + i * 0.15,
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  }),
};

export default function CTASection() {
  return (
    <section className="py-[60px] px-5 md:px-10">
      <motion.div
        className="max-w-[1280px] mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="bg-[#AAC840] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden relative">
          {/* Texture overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 20px)',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-[24px] sm:text-[32px] md:text-[64px] font-bold text-[#1c1b1b] mb-5 sm:mb-8 leading-tight">
              {headingWords.slice(0, 4).map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  className="inline-block mr-[0.3em]"
                  variants={wordVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
              <br className="hidden sm:block" />
              {headingWords.slice(4).map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  className="inline-block mr-[0.3em]"
                  variants={wordVariants}
                  custom={i + 4}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <motion.p
              className="text-[#1c1b1b]/80 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto mb-8 sm:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Join Lucknow&apos;s most successful academic community and turn your dreams into reality.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <motion.button
                className="bg-[#1c1b1b] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[14px] sm:text-base shadow-xl"
                variants={buttonVariants}
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Book a Free Session
              </motion.button>
              <motion.button
                className="bg-[#fcf8f8] text-[#1c1b1b] px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-[14px] sm:text-base border border-[#1c1b1b]/10"
                variants={buttonVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Download Syllabus
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
