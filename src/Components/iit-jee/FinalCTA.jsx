import { motion } from "framer-motion";

const heading = "Your Seat at the Top Awaits.";

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

function FinalCTA() {
  const words = heading.split(" ");

  return (
    <section className="py-[60px] sm:py-[80px] text-center">
      <div className="max-w-3xl mx-auto px-5 md:px-10">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#111111] mb-5 sm:mb-8">
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
          className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Admissions open for 2026-27 JEE &amp; NEET batches. Limited seats
          for our intensive scholarship program across both tracks.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
          <motion.button
            className="bg-[#111111] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-[12px] font-bold text-[13px] sm:text-[14px] hover:scale-105 transition-transform"
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Book a Free Demo Class
          </motion.button>

          <motion.button
            className="bg-[#AAC840] text-[#111111] px-8 sm:px-12 py-4 sm:py-5 rounded-[12px] font-bold text-[13px] sm:text-[14px] hover:scale-105 transition-transform"
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
    </section>
  );
}

export default FinalCTA;
