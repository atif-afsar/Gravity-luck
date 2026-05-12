import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

function GravityEdge() {
  return (
    <section className="py-[60px] px-5 md:px-10 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold mb-3 md:mb-4">The Gravity Edge</h2>
          <p className="text-[#444748] text-[15px] md:text-[18px] max-w-2xl mb-10 md:mb-16">
            Why thousands of aspirants in Lucknow trust us for their competitive
            exam journey year after year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-[24px]">
          {/* Row 1 */}
          <motion.div
            className="md:col-span-8 bg-[#1c1b1b] p-8 sm:p-10 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group min-h-[260px] md:min-h-[320px] flex flex-col justify-end"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <span className="material-symbols-outlined text-[#AAC840] text-4xl md:text-5xl mb-4 md:mb-6">
              psychology
            </span>
            <h3 className="text-white text-[24px] md:text-[32px] font-semibold mb-3 md:mb-4">
              Expert Faculty Mentorship
            </h3>
            <p className="text-white/60 text-[14px] md:text-base">
              Our educators aren&apos;t just teachers; they are alumni of top
              IITs and medical colleges dedicated to simplifying complex concepts
              for you.
            </p>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXX7YZQZ6PlxxhXJpk_lUiDazlH1bWYUruOqfhodHyYWS_7EJab1iiT-r4sP75beBIgZ3Z0KVhy6qEKiuK_f_OE6HxaMee3c649yBYRAVxwaQhno03aQ2dm2IIn_x8GteEoCNzbuUZ-aW9i2s_3OCc6WanVkcCvA8vuzNAH-uhsQOXflKPpMTLRA7HL7Yj_f85Rmqdvilf_oWZqhl8qAO4LlGgCgJs3QlM8BpT5DO9z-vP1o0Urlc9j7rGr6upgv8WS4I_SWE2C2eV"
              alt="Faculty mentorship"
              className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover rounded-tl-[3rem] opacity-40 group-hover:scale-105 transition-transform duration-700 hidden sm:block"
            />
          </motion.div>

          <motion.div
            className="md:col-span-4 bg-[#AAC840] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between premium-shadow min-h-[240px] md:min-h-[320px]"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <span className="material-symbols-outlined text-[#1c1b1b] text-3xl md:text-4xl">
              inventory_2
            </span>
            <div className="mt-6 md:mt-0">
              <h3 className="text-[#1c1b1b] text-[20px] md:text-[24px] font-semibold mb-2">
                Study Material
              </h3>
              <p className="text-[#1c1b1b]/80 text-[14px] md:text-base">
                Comprehensive, updated modules designed for the latest exam
                patterns.
              </p>
            </div>
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="md:col-span-4 bg-[#ebe7e7] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between border border-[#c4c7c8] min-h-[240px] md:min-h-[320px]"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <span className="material-symbols-outlined text-[#1c1b1b] text-3xl md:text-4xl">
              analytics
            </span>
            <div className="mt-6 md:mt-0">
              <h3 className="text-[#1c1b1b] text-[20px] md:text-[24px] font-semibold mb-2">
                Performance Analytics
              </h3>
              <p className="text-[#444748] text-[14px] md:text-base">
                Detailed test analysis to identify and bridge your learning gaps.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8 glass-card border border-[#c4c7c8] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex items-center gap-6 md:gap-8 premium-shadow min-h-[240px] md:min-h-[320px]"
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex-1">
              <span className="material-symbols-outlined text-[#AAC840] text-3xl md:text-4xl mb-3 md:mb-4">
                group
              </span>
              <h3 className="text-[#1c1b1b] text-[20px] md:text-[24px] font-semibold mb-2">
                Small Batch Sizes
              </h3>
              <p className="text-[#444748] text-[14px] md:text-base">
                Ensuring individual attention to every student for doubt
                clearance and progress monitoring.
              </p>
            </div>
            <div className="hidden sm:flex w-32 h-32 md:w-48 md:h-48 bg-[#ddd9d9] rounded-full items-center justify-center border-4 md:border-8 border-[#fcf8f8] shrink-0">
              <span className="text-[#444748] font-bold text-2xl md:text-4xl">1:30</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GravityEdge;
