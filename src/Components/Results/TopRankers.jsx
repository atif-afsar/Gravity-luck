import { motion } from "framer-motion";
import { useState } from "react";

const filters = [
  { id: "all", label: "All Toppers" },
  { id: "lucknow", label: "Lucknow Center" },
  { id: "residential", label: "Residential Program" },
];

const rankers = [
  { percentile: 99.973, name: "Ojas Singhal", exam: "JEE Main 2026", tag: "lucknow", badge: "Lucknow City Topper", subtitle: "2 Year SIP" },
  { percentile: 99.96, name: "Ayan", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.90, name: "Vinod", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.90, name: "Janeshwar", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.87, name: "Shiva", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.86, name: "Neeraj", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.86, name: "Krishna", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.85, name: "Aayush", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.83, name: "Saksham", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.78, name: "Ganesh", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.71, name: "Amogh", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.70, name: "Nishant", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.69, name: "Naman", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.67, name: "Prashant", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.67, name: "Abhishek", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.66, name: "Adnan", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.65, name: "Atharva", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.63, name: "Ritika", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.62, name: "Piyush", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.61, name: "Biranchi", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.60, name: "Vansh", exam: "JEE Main 2026", tag: "residential", badge: "Residential Program", subtitle: "" },
  { percentile: 99.46, name: "Arjun", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.43, name: "Jasman", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.41, name: "Ravindra", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.29, name: "Wadud", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.27, name: "Aditya", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.25, name: "Kamalkant", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.24, name: "Raunak", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.15, name: "Arifuddin", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.13, name: "Atulya", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.12, name: "Divyansh", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.11, name: "Ali", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
  { percentile: 99.08, name: "Jumid", exam: "JEE Main 2026", tag: "lucknow", badge: "", subtitle: "" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function TopRankers() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? rankers : rankers.filter((r) => r.tag === active);

  return (
    <section className="bg-[#111111] py-[60px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-2 sm:mb-3">JEE Main 2026 Toppers</h2>
            <p className="text-white/50 text-[14px] sm:text-[16px] md:text-[18px]">771 out of 814 students cracked JEE Main — Best Result in the Country.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
                active === f.id
                  ? "bg-[#AAC840] text-[#1c1b1b]"
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
          {filtered.map((card, i) => (
            <motion.div
              key={card.name + card.percentile}
              className="bg-white/5 border border-white/10 rounded-[18px] sm:rounded-[24px] text-white overflow-hidden group hover:border-[#AAC840]/30 transition-colors"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="p-4 sm:p-6">
                <div className="flex items-end justify-between mb-3 sm:mb-4">
                  <div>
                    <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 sm:mb-3 ${
                      card.badge === "Lucknow City Topper"
                        ? "bg-[#AAC840]/20 text-[#AAC840]"
                        : card.tag === "residential"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-white/10 text-white/70"
                    }`}>
                      {card.badge || "Lucknow Center"}
                    </span>
                    <span className="text-[#AAC840] font-bold text-[28px] sm:text-[36px] md:text-[40px] block leading-none">
                      {card.percentile}<span className="text-[14px] sm:text-[18px]"> %ile</span>
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#AAC840]/30 text-[48px] sm:text-[64px] group-hover:text-[#AAC840]/50 transition-colors">
                    workspace_premium
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/10">
                  <p className="text-[15px] sm:text-[18px] font-semibold">{card.name}</p>
                  <p className="text-white/40 text-[11px] sm:text-[12px] font-semibold">{card.exam}</p>
                  {card.subtitle && <p className="text-white/30 text-[10px] sm:text-[11px] mt-1">{card.subtitle}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
