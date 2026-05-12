import { motion } from "framer-motion";

const highlights = [
  {
    icon: "inventory_2",
    title: "Premium Study Material",
    description:
      "Comprehensive chapter-wise modules, formula sheets, and previous year question compilations updated for the latest NTA pattern.",
    className:
      "sm:col-span-2 sm:row-span-2 bg-[#1c1b1b] p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[24px] flex flex-col justify-end text-white group hover:-translate-y-1 transition-transform",
  },
  {
    icon: "timer",
    title: "Weekly Mock Tests",
    description:
      "Full-length simulations under exam conditions with detailed performance analytics and rank prediction.",
    className:
      "bg-[#AAC840] p-5 sm:p-6 md:p-8 rounded-[20px] md:rounded-[24px] flex flex-col justify-between text-[#1c1b1b] hover:-translate-y-1 transition-transform",
  },
  {
    icon: "support_agent",
    title: "Doubt Resolution",
    description:
      "Daily dedicated doubt-clearing sessions with subject experts. One-on-one access for complex problems.",
    className:
      "bg-[#f1edec] p-5 sm:p-6 md:p-8 rounded-[20px] md:rounded-[24px] flex flex-col justify-between hover:-translate-y-1 transition-transform",
  },
  {
    icon: "psychology",
    title: "Personal Mentorship",
    description:
      "Assigned mentors track your progress, build custom study plans, and provide motivational guidance throughout your journey.",
    className:
      "sm:col-span-2 bg-white border border-[#c4c7c8]/30 p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[24px] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 premium-shadow hover:-translate-y-1 transition-transform",
  },
];

const smallFeatures = [
  { icon: "assessment", label: "Performance Analytics" },
  { icon: "video_library", label: "Recorded Lectures" },
  { icon: "quiz", label: "Topic-wise Tests" },
  { icon: "school", label: "Board Exam Prep" },
  { icon: "workspace_premium", label: "Scholarship Tests" },
  { icon: "family_restroom", label: "Parent-Teacher Meets" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function CourseHighlights() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-3 md:mb-4">
            What&apos;s Included
          </h2>
          <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Every Gravity program comes packed with resources and support
            systems designed for peak performance.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-[24px] mb-10 md:mb-16">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              className={item.className}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {i === 0 ? (
                <>
                  <span className="material-symbols-outlined text-[#AAC840] text-[36px] sm:text-[42px] md:text-[48px] mb-auto">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold mb-2 sm:mb-3">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-[13px] sm:text-[14px] md:text-base">{item.description}</p>
                  </div>
                </>
              ) : i === 3 ? (
                <>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-[#AAC840]/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#AAC840] text-[24px] sm:text-[28px] md:text-[32px]">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-[18px] md:text-[20px] font-semibold text-[#1c1b1b] mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#444748] text-[13px] sm:text-[14px]">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <span
                    className={`material-symbols-outlined text-[26px] sm:text-[28px] md:text-[32px] mb-3 sm:mb-4 ${
                      i === 1 ? "text-[#1c1b1b]" : "text-[#1c1b1b]"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold mb-1.5 sm:mb-2">
                      {item.title}
                    </h4>
                    <p
                      className={`text-[12px] sm:text-[13px] ${
                        i === 1 ? "text-[#1c1b1b]/70" : "text-[#444748]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* Small Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4"
        >
          {smallFeatures.map((feat) => (
            <div
              key={feat.label}
              className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#f6f3f2] border border-[#c4c7c8]/20 text-center"
            >
              <span className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px]">
                {feat.icon}
              </span>
              <span className="text-[11px] sm:text-[12px] font-semibold text-[#1c1b1b]">
                {feat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
