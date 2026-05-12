import { motion, useInView, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const filters = [
  { id: "all", label: "All Results" },
  { id: "jee", label: "IIT-JEE" },
  { id: "neet", label: "NEET" },
];

const rankers = [
  { rank: 14, name: "Aditya Sharma", exam: "JEE Advanced 2026", tag: "JEE", college: "IIT Bombay — Computer Science", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO7o_wx7cbcK8TUli5xaqzHsP9H84C-JgZ4oUnYs-NW6FMYxU7Zy1ODCcw2cu3EXbm0eNqOAeQE3y4W8fsorv6ySIoyehlh2mJ0dt7P1feIRptV9lTHYdaPVtc8haKFkDpa6ItMfDAUL35lrddS_cXl0Pp_-jmJUXFTLwgtiD_vesM8jxZVtVK_e2tH00F2EUXpvjbEepDPcgI2L37SBPEez92wTm5B9iSCtABKXrdfB4f4bxqefnOLp9B2Nu31I2TXci1dxnR5W5" },
  { rank: 9, name: "Priya Nair", exam: "NEET UG 2026", tag: "NEET", college: "AIIMS Delhi — MBBS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc" },
  { rank: 27, name: "Ishani Gupta", exam: "NEET UG 2026", tag: "NEET", college: "AIIMS Jodhpur — MBBS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCosA0QkgjlUSZnjSpQ-ktVmF6ZXAXe5Xwlg028oXOAA5B7K5Utw9_URI_9g1emX-VAWxBfco0oynrTsSaEQnVS1u-QTBP106aFtN0iSY80t4bfFIgVQZUTm-A0YARW0FUMiTOZr3LnjP1wyYpBDVE7yR80lyF-3XyYjjOjK5wwbTr0OCJu6Q1MK-0jC1Ro2b2OmTRTBQmORxgXWRuwDFZRBEm7GGLXA6qhxdMAj0azvsAgJXXoibuH3prsUW1cBdOP9kXeg3qCfaK-" },
  { rank: 42, name: "Vikram Malhotra", exam: "JEE Advanced 2026", tag: "JEE", college: "IIT Delhi — Electrical Engineering", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCosA0QkgjlUSZnjSpQ-ktVmF6ZXAXe5Xwlg028oXOAA5B7K5Utw9_URI_9g1emX-VAWxBfco0oynrTsSaEQnVS1u-QTBP106aFtN0iSY80t4bfFIgVQZUTm-A0YARW0FUMiTOZr3LnjP1wyYpBDVE7yR80lyF-3XyYjjOjK5wwbTr0OCJu6Q1MK-0jC1Ro2b2OmTRTBQmORxgXWRuwDFZRBEm7GGLXA6qhxdMAj0azvsAgJXXoibuH3prsUW1cBdOP9kXeg3qCfaK-" },
  { rank: 42, name: "Sneha Patel", exam: "NEET UG 2026", tag: "NEET", college: "Maulana Azad Medical College — MBBS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc" },
  { rank: 89, name: "Rohan Mehta", exam: "JEE Advanced 2026", tag: "JEE", college: "IIT Kanpur — Mechanical Engineering", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO7o_wx7cbcK8TUli5xaqzHsP9H84C-JgZ4oUnYs-NW6FMYxU7Zy1ODCcw2cu3EXbm0eNqOAeQE3y4W8fsorv6ySIoyehlh2mJ0dt7P1feIRptV9lTHYdaPVtc8haKFkDpa6ItMfDAUL35lrddS_cXl0Pp_-jmJUXFTLwgtiD_vesM8jxZVtVK_e2tH00F2EUXpvjbEepDPcgI2L37SBPEez92wTm5B9iSCtABKXrdfB4f4bxqefnOLp9B2Nu31I2TXci1dxnR5W5" },
  { rank: 112, name: "Ananya Singh", exam: "NEET UG 2026", tag: "NEET", college: "KGMU Lucknow — MBBS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc" },
  { rank: 156, name: "Kavya Reddy", exam: "JEE Advanced 2026", tag: "JEE", college: "IIT Madras — Chemical Engineering", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCosA0QkgjlUSZnjSpQ-ktVmF6ZXAXe5Xwlg028oXOAA5B7K5Utw9_URI_9g1emX-VAWxBfco0oynrTsSaEQnVS1u-QTBP106aFtN0iSY80t4bfFIgVQZUTm-A0YARW0FUMiTOZr3LnjP1wyYpBDVE7yR80lyF-3XyYjjOjK5wwbTr0OCJu6Q1MK-0jC1Ro2b2OmTRTBQmORxgXWRuwDFZRBEm7GGLXA6qhxdMAj0azvsAgJXXoibuH3prsUW1cBdOP9kXeg3qCfaK-" },
  { rank: 198, name: "Aarav Mishra", exam: "NEET UG 2026", tag: "NEET", college: "JIPMER Puducherry — MBBS", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO7o_wx7cbcK8TUli5xaqzHsP9H84C-JgZ4oUnYs-NW6FMYxU7Zy1ODCcw2cu3EXbm0eNqOAeQE3y4W8fsorv6ySIoyehlh2mJ0dt7P1feIRptV9lTHYdaPVtc8haKFkDpa6ItMfDAUL35lrddS_cXl0Pp_-jmJUXFTLwgtiD_vesM8jxZVtVK_e2tH00F2EUXpvjbEepDPcgI2L37SBPEez92wTm5B9iSCtABKXrdfB4f4bxqefnOLp9B2Nu31I2TXci1dxnR5W5" },
];

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

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
  const filtered = active === "all" ? rankers : rankers.filter((r) => r.tag.toLowerCase() === active);

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
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-2 sm:mb-3">Our Top Rankers</h2>
            <p className="text-white/50 text-[14px] sm:text-[16px] md:text-[18px]">Elite JEE &amp; NEET rank holders who trusted Gravity for their preparation.</p>
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
              key={card.name + card.exam}
              className="bg-white/5 border border-white/10 rounded-[18px] sm:rounded-[24px] text-white overflow-hidden group hover:border-[#AAC840]/30 transition-colors"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 pb-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden ring-2 ring-[#AAC840]/40 shrink-0">
                  <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] sm:text-[18px] font-semibold truncate">{card.name}</p>
                  <p className="text-white/40 text-[11px] sm:text-[12px] font-semibold">{card.exam}</p>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-end justify-between mb-3 sm:mb-4">
                  <div>
                    <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 sm:mb-3 ${card.tag === "NEET" ? "bg-[#AAC840]/20 text-[#AAC840]" : "bg-white/10 text-white/70"}`}>
                      {card.tag}
                    </span>
                    <span className="text-[#AAC840] font-bold text-[28px] sm:text-[36px] md:text-[40px] block leading-none">
                      AIR <AnimatedNumber value={card.rank} />
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#AAC840]/30 text-[48px] sm:text-[64px] group-hover:text-[#AAC840]/50 transition-colors">
                    workspace_premium
                  </span>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#AAC840] text-[14px] sm:text-[16px]">school</span>
                    <p className="text-white/60 text-[12px] sm:text-[13px]">{card.college}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
