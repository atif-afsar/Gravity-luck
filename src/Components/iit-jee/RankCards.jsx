import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SafeStudentImage from "../Common/SafeStudentImage";
import { iitJeeSpotlight, neetAchievers } from "../../data/studentResults";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function ResultCardGrid({ cards, numberingOffset = 0 }) {
  return (
    <>
      {cards.map((card, i) => {
        const num = String(numberingOffset + i + 1).padStart(2, "0");
        const accent = Boolean(card.topRanker);
        return (
          <motion.div
            key={card.id}
            className={`relative rounded-[16px] sm:rounded-[20px] text-white overflow-hidden group border backdrop-blur-sm ${
              accent
                ? "bg-gradient-to-br from-white/[0.09] to-white/[0.03] border-[#AAC840]/40 shadow-[0_0_30px_-5px_rgba(170,200,64,0.35)]"
                : "bg-white/[0.05] border-white/10"
            }`}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              transition: { type: "spring", stiffness: 420, damping: 28 },
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(ellipse_at_30%_0%,rgba(170,200,64,0.15),transparent_50%)]"
              aria-hidden
            />

            <div className="flex flex-row sm:flex-col gap-4 p-5 sm:p-6 md:p-8 relative z-[1]">
              <span
                className="absolute font-bold text-[52px] sm:text-[72px] text-white/[0.04] group-hover:text-[#AAC840]/[0.07] transition-colors pointer-events-none sm:right-4 sm:top-2 right-3 top-3"
                aria-hidden
              >
                {num}
              </span>

              <div className="flex sm:flex-col items-center sm:items-start gap-4 shrink-0">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="relative"
                >
                  <div
                    className={`absolute inset-0 rounded-2xl blur-lg scale-105 ${accent ? "bg-[#AAC840]/40" : "bg-[#AAC840]/15"}`}
                    aria-hidden
                  />
                  <SafeStudentImage
                    src={card.image}
                    alt={card.imageAlt}
                    className={`relative h-[88px] w-[88px] sm:h-[100px] sm:w-[100px] rounded-2xl object-cover ${
                      accent ? "ring-2 ring-[#AAC840]/60" : "ring-1 ring-white/15"
                    }`}
                    sizes="(max-width: 640px) 88px, 100px"
                  />
                </motion.div>

                <div className="flex-1 min-w-0 sm:w-full">
                  <span
                    className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${
                      accent ? "bg-[#AAC840]/25 text-[#AAC840]" : "bg-white/10 text-white/70"
                    }`}
                  >
                    {card.examTrack === "neet" ? "NEET UG" : accent ? "Top rank" : card.exam}
                  </span>
                  <span className="text-[#AAC840] font-bold text-[26px] sm:text-[30px] md:text-[36px] block mb-1 sm:mb-2 leading-none">
                    {card.headline}
                    <span className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold text-white/75">
                      {card.headlineSuffix ?? ""}
                    </span>
                  </span>
                  <p className="text-[15px] sm:text-[17px] md:text-[18px] font-semibold mb-1">{card.name}</p>
                  <p className="text-white/50 text-[11px] sm:text-[12px] font-semibold">{card.exam}</p>
                  {card.subline ? <p className="text-white/35 text-[10px] sm:text-[11px] mt-2">{card.subline}</p> : null}
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}

export default function RankCards() {
  return (
    <section className="bg-[#111111] py-[60px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-12">
          <div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white">The Results of Rigor</h2>
            <p className="text-white/50 mt-2 text-[13px] sm:text-base">
              771 out of 814 students cracked JEE Main 2026 — best result in the country. Featured IIT-JEE and NEET faces
              from our published topper creatives.
            </p>
          </div>
          <Link
            to="/results"
            className="text-[#AAC840] flex items-center gap-2 text-[13px] sm:text-[14px] font-medium shrink-0 hover:gap-3 transition-all"
          >
            View All Results
            <span className="material-symbols-outlined text-[18px] sm:text-[24px]">arrow_forward</span>
          </Link>
        </div>

        <div className="space-y-12 md:space-y-14">
          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="material-symbols-outlined text-[#AAC840] text-[28px]">engineering</span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white">IIT-JEE (Main &amp; Advanced)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
              <ResultCardGrid cards={iitJeeSpotlight} numberingOffset={0} />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="material-symbols-outlined text-[#AAC840] text-[28px]">medication</span>
              <h3 className="text-[20px] sm:text-[24px] font-bold text-white">NEET UG</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
              <ResultCardGrid cards={neetAchievers} numberingOffset={iitJeeSpotlight.length} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
