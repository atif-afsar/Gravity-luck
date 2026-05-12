import { motion } from "framer-motion";

const batches = [
  {
    program: "IIT-JEE Integrated",
    classes: "11th–12th",
    timing: "7:00 AM – 1:00 PM",
    days: "Mon – Sat",
    tests: "Every Sunday",
    color: "border-l-[#AAC840]",
  },
  {
    program: "NEET Integrated",
    classes: "11th–12th",
    timing: "7:00 AM – 1:00 PM",
    days: "Mon – Sat",
    tests: "Every Sunday",
    color: "border-l-[#AAC840]",
  },
  {
    program: "JEE Dropper Batch",
    classes: "12th Pass",
    timing: "8:00 AM – 3:00 PM",
    days: "Mon – Sat",
    tests: "Wed & Sun",
    color: "border-l-[#1c1b1b]",
  },
  {
    program: "NEET Dropper Batch",
    classes: "12th Pass",
    timing: "8:00 AM – 3:00 PM",
    days: "Mon – Sat",
    tests: "Wed & Sun",
    color: "border-l-[#1c1b1b]",
  },
  {
    program: "Foundation Course",
    classes: "9th–10th",
    timing: "3:00 PM – 7:00 PM",
    days: "Mon – Fri",
    tests: "Saturday",
    color: "border-l-[#c4c7c8]",
  },
  {
    program: "Pre-Foundation",
    classes: "8th",
    timing: "4:00 PM – 6:30 PM",
    days: "Mon – Fri",
    tests: "Saturday",
    color: "border-l-[#c4c7c8]",
  },
];

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function BatchSchedule() {
  return (
    <section className="py-[60px] bg-[#1c1b1b] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-[60px] items-start">
          {/* Left Column */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-4 sm:mb-6">
              Batch Schedule
              <br />
              <span className="text-[#AAC840]">& Timings</span>
            </h2>
            <p className="text-white/50 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 sm:mb-10">
              Structured timetables designed to maximize learning efficiency
              while leaving room for self-study and revision.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#AAC840] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#1c1b1b] text-[20px] sm:text-[24px]">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-[14px] sm:text-base">Hazratganj Center</p>
                  <p className="text-white/50 text-[12px] sm:text-[13px]">
                    Main campus, all programs
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px]">
                    call
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-[14px] sm:text-base">+91 98765 43210</p>
                  <p className="text-white/50 text-[12px] sm:text-[13px]">
                    Call for fee details
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Schedule Table */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            {/* Header */}
            <div className="hidden md:grid grid-cols-5 gap-4 px-6 pb-4 border-b border-white/10">
              {["Program", "Class", "Timing", "Days", "Test Days"].map(
                (h) => (
                  <span
                    key={h}
                    className="text-[12px] text-white/40 uppercase tracking-widest font-semibold"
                  >
                    {h}
                  </span>
                )
              )}
            </div>

            {/* Rows */}
            {batches.map((batch, i) => (
              <motion.div
                key={batch.program}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`bg-white/5 border border-white/10 ${batch.color} border-l-[3px] rounded-xl p-4 sm:p-6 hover:bg-white/[0.08] transition-colors`}
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 sm:gap-4 items-center">
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-white font-semibold text-[13px] sm:text-[15px]">
                      {batch.program}
                    </p>
                    <span className="md:hidden text-white/40 text-[11px] sm:text-[12px]">
                      {batch.classes}
                    </span>
                  </div>
                  <span className="hidden md:block text-white/70 text-[14px]">
                    {batch.classes}
                  </span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="material-symbols-outlined text-[#AAC840] text-[14px] sm:text-[16px]">
                      schedule
                    </span>
                    <span className="text-white text-[12px] sm:text-[14px]">
                      {batch.timing}
                    </span>
                  </div>
                  <span className="text-white/70 text-[12px] sm:text-[14px]">
                    {batch.days}
                  </span>
                  <span className="text-[#AAC840] text-[12px] sm:text-[14px] font-medium">
                    {batch.tests}
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white/30 text-[12px] sm:text-[13px] pt-3 sm:pt-4 text-center"
            >
              * Timings may vary by center. Contact us for the latest schedule.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
