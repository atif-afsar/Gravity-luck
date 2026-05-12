import { motion } from "framer-motion";

const ITEMS = [
  {
    title: "Precision Engineering of Potential",
    body: "We believe that competitive exams are not just a test of intelligence, but of strategy and mental fortitude. Our curriculum is mapped to the latest NTA patterns for both JEE and NEET, ensuring every hour spent studying is an hour spent moving toward your goal. At Gravity, we don't just teach subjects; we engineer success through meticulous planning and expert execution.",
  },
  {
    title: "The Cognitive Edge",
    body: "Beyond the textbooks, we integrate cognitive science into our learning process. Spaced repetition, active recall, and rigorous simulation testing form the backbone of our pedagogy. This approach ensures that information is not just memorized, but deeply understood and readily accessible under exam pressure.",
  },
  {
    title: "NEET-Focused Medical Track",
    body: "Our dedicated NEET vertical goes beyond standard Biology coaching. From mastering NCERT-level conceptual clarity to advanced problem-solving in Zoology, Botany, and Human Physiology — we prepare students for every curveball the NTA throws. Our Physics and Chemistry modules for NEET are specifically calibrated to the medical entrance difficulty level, not borrowed from JEE prep.",
  },
  {
    title: "Dual-Track, Unified Excellence",
    body: "Whether you're aiming for IIT or AIIMS, our integrated classroom ecosystem fosters healthy competition. JEE aspirants sharpen their problem-solving speed while NEET students deepen conceptual understanding — and both tracks share the same commitment to rank-level performance.",
  },
];

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2 + i * 0.2,
      ease: "easeOut",
    },
  }),
};

const borderVariants = {
  hidden: { scaleY: 0 },
  visible: (i) => ({
    scaleY: 1,
    transition: {
      duration: 0.5,
      delay: 0.2 + i * 0.2,
      ease: "easeOut",
    },
  }),
};

export default function WhyGravity() {
  return (
    <section className="bg-[#f6f3f2] py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[24px]">
        {/* LEFT */}
        <div className="md:col-span-4">
          <motion.h2
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#111111] md:sticky md:top-24"
          >
            Why Gravity for Competitive Exams?
          </motion.h2>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-8 space-y-8 sm:space-y-12">
          {ITEMS.map((item, i) => (
            <div key={item.title} className="relative pl-6 sm:pl-8">
              <motion.div
                custom={i}
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute left-0 top-0 h-full w-[2px] bg-[#AAC840] origin-top"
              />

              <motion.div
                custom={i}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#111111] mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] leading-[1.6]">
                  {item.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
