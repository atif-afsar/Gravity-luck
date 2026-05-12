import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote: "Gravity didn't just teach me formulas; they taught me how to think under pressure. The simulated tests were harder than the actual JEE, which made the final exam feel like just another day at the center.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCosA0QkgjlUSZnjSpQ-ktVmF6ZXAXe5Xwlg028oXOAA5B7K5Utw9_URI_9g1emX-VAWxBfco0oynrTsSaEQnVS1u-QTBP106aFtN0iSY80t4bfFIgVQZUTm-A0YARW0FUMiTOZr3LnjP1wyYpBDVE7yR80lyF-3XyYjjOjK5wwbTr0OCJu6Q1MK-0jC1Ro2b2OmTRTBQmORxgXWRuwDFZRBEm7GGLXA6qhxdMAj0azvsAgJXXoibuH3prsUW1cBdOP9kXeg3qCfaK-",
    name: "Vikram Malhotra", detail: "AIR 42, JEE Advanced 2026", college: "IIT Bombay — Computer Science", tag: "JEE",
  },
  {
    quote: "The Biology faculty at Gravity is exceptional. Dr. Elena's way of breaking down Human Physiology and Genetics made NCERT concepts crystal clear. The NEET mock tests were spot-on with the actual paper pattern — I walked into the exam hall with zero anxiety.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc",
    name: "Priya Nair", detail: "AIR 9, NEET UG 2026", college: "AIIMS Delhi — MBBS", tag: "NEET",
  },
  {
    quote: "What sets Gravity apart is the personal attention. My mentor tracked my weekly progress in every subject and adjusted my study plan accordingly. That level of care is rare and made all the difference in my preparation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADO7o_wx7cbcK8TUli5xaqzHsP9H84C-JgZ4oUnYs-NW6FMYxU7Zy1ODCcw2cu3EXbm0eNqOAeQE3y4W8fsorv6ySIoyehlh2mJ0dt7P1feIRptV9lTHYdaPVtc8haKFkDpa6ItMfDAUL35lrddS_cXl0Pp_-jmJUXFTLwgtiD_vesM8jxZVtVK_e2tH00F2EUXpvjbEepDPcgI2L37SBPEez92wTm5B9iSCtABKXrdfB4f4bxqefnOLp9B2Nu31I2TXci1dxnR5W5",
    name: "Aditya Sharma", detail: "AIR 14, JEE Advanced 2026", college: "IIT Bombay — Electrical Engineering", tag: "JEE",
  },
  {
    quote: "I was a dropper and felt lost after my first attempt. Gravity's dropper batch gave me a structured plan, daily tests, and most importantly the confidence that I could crack NEET. The result speaks for itself — I'm at AIIMS Jodhpur now.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc",
    name: "Ishani Gupta", detail: "AIR 27, NEET UG 2026", college: "AIIMS Jodhpur — MBBS", tag: "NEET",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-[60px] bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-3 sm:mb-4">Voices of Success</h2>
          <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Hear directly from our students who turned their dreams into reality at Gravity Classes.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all cursor-pointer ${
                active === i
                  ? "bg-[#1c1b1b] text-white shadow-lg"
                  : "bg-white text-[#444748] border border-[#c4c7c8]/50 hover:bg-[#e5e2e1]"
              }`}
            >
              <img src={item.image} alt={item.name} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" />
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">{item.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Testimonial Card */}
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-14 premium-shadow border border-[#c4c7c8]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-[#AAC840]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <span
              className="material-symbols-outlined text-[#AAC840] text-[40px] sm:text-[48px] md:text-[56px] mb-4 sm:mb-6 block relative z-10"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>

            <p className="text-[16px] sm:text-[20px] md:text-[24px] font-medium italic text-[#1c1b1b] leading-relaxed mb-6 sm:mb-10 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pt-5 sm:pt-8 border-t border-[#c4c7c8]/30 relative z-10">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#AAC840] shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1 ${t.tag === "NEET" ? "bg-[#AAC840]/15 text-[#AAC840]" : "bg-[#1c1b1b]/10 text-[#1c1b1b]"}`}>
                    {t.tag}
                  </span>
                  <p className="font-bold text-[#1c1b1b] text-[14px] sm:text-base">{t.name}</p>
                  <p className="text-[11px] sm:text-[12px] text-[#444748] font-semibold">{t.detail}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-[#f6f3f2] px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl">
                <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">school</span>
                <span className="text-[12px] sm:text-[13px] font-medium text-[#1c1b1b]">{t.college}</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${active === i ? "bg-[#AAC840] w-8" : "bg-[#c4c7c8] hover:bg-[#444748]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
