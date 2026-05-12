import { motion } from "framer-motion";

const milestones = [
  { year: "2010", title: "The Beginning", description: "Gravity Classes founded in Hazratganj, Lucknow with a single classroom and 30 students. The vision: world-class competitive exam coaching in Lucknow.", icon: "flag" },
  { year: "2013", title: "First IIT Selection", description: "3 students clear JEE Advanced in our first graduating batch. The foundation of trust is laid.", icon: "military_tech" },
  { year: "2016", title: "NEET Track Launched", description: "Dedicated NEET coaching division established with specialized Biology faculty from AIIMS. 45 medical selections in the first year.", icon: "biotech" },
  { year: "2018", title: "100+ IIT Selections", description: "Crossed the landmark of 100+ IIT selections in a single session. Gomti Nagar center inaugurated to meet growing demand.", icon: "celebration" },
  { year: "2020", title: "Digital Transformation", description: "Seamless transition to hybrid learning during the pandemic with zero compromise on quality. Online test platform launched with 200+ mock tests.", icon: "devices" },
  { year: "2023", title: "Expansion Era", description: "Third center opened in Aliganj. Crossed 400+ IIT and 900+ NEET total selections. AI-powered adaptive testing introduced.", icon: "rocket_launch" },
  { year: "2025", title: "Record-Breaking Year", description: "AIR 5 in JEE Advanced, AIR 7 in NEET. 500+ IIT and 1200+ NEET total selections. New state-of-the-art Hazratganj campus inaugurated.", icon: "emoji_events" },
  { year: "2026", title: "Best Result in the Country", description: "771 out of 814 students cracked JEE Main — the best result in the country. Lucknow City Topper Ojas Singhal scored 99.973 percentile. 33+ students scored above 99 percentile. Recognized as India's top coaching institute.", icon: "workspace_premium" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }),
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: (i) => ({ scaleY: 1, transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" } }),
};

export default function ResultsTimeline() {
  return (
    <section className="py-[60px] bg-white">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-3 sm:mb-4">Our Journey of Excellence</h2>
          <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto">
            From a single classroom to Lucknow&apos;s leading coaching institute — every milestone is a story of dedication.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#c4c7c8]/40 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:py-8"
                >
                  {/* Center Dot — desktop only */}
                  <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-10">
                    <motion.div
                      custom={i}
                      variants={lineVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#AAC840] flex items-center justify-center shadow-lg shadow-[#AAC840]/20"
                    >
                      <span className="material-symbols-outlined text-[#1c1b1b] text-[18px] sm:text-[20px]">{item.icon}</span>
                    </motion.div>
                  </div>

                  {/* Desktop left content */}
                  <div className={`hidden md:block ${isLeft ? "text-right pr-12" : "order-2 pl-12"}`}>
                    {isLeft && (
                      <div>
                        <span className="inline-block text-[#AAC840] font-bold text-[13px] sm:text-[14px] uppercase tracking-widest mb-2">{item.year}</span>
                        <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#1c1b1b] mb-2 sm:mb-3">{item.title}</h3>
                        <p className="text-[#444748] text-[14px] sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Desktop right content */}
                  <div className={`hidden md:block ${isLeft ? "order-2 pl-12" : "order-1 text-right pr-12"}`}>
                    {!isLeft && (
                      <div>
                        <span className="inline-block text-[#AAC840] font-bold text-[13px] sm:text-[14px] uppercase tracking-widest mb-2">{item.year}</span>
                        <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#1c1b1b] mb-2 sm:mb-3">{item.title}</h3>
                        <p className="text-[#444748] text-[14px] sm:text-base leading-relaxed">{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden">
                    <div className="flex items-center gap-3 sm:gap-4 mb-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#AAC840] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#1c1b1b] text-[16px] sm:text-[18px]">{item.icon}</span>
                      </div>
                      <div>
                        <span className="text-[#AAC840] font-bold text-[12px] sm:text-[13px] uppercase tracking-widest">{item.year}</span>
                        <h3 className="text-[17px] sm:text-[20px] font-semibold text-[#1c1b1b]">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#444748] text-[13px] sm:text-[14px] leading-relaxed pl-12 sm:pl-14">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
