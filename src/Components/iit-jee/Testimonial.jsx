import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Gravity didn't just teach me formulas; they taught me how to think under pressure. The simulated tests were harder than the actual JEE, which made the final exam feel like just another day at the center.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCosA0QkgjlUSZnjSpQ-ktVmF6ZXAXe5Xwlg028oXOAA5B7K5Utw9_URI_9g1emX-VAWxBfco0oynrTsSaEQnVS1u-QTBP106aFtN0iSY80t4bfFIgVQZUTm-A0YARW0FUMiTOZr3LnjP1wyYpBDVE7yR80lyF-3XyYjjOjK5wwbTr0OCJu6Q1MK-0jC1Ro2b2OmTRTBQmORxgXWRuwDFZRBEm7GGLXA6qhxdMAj0azvsAgJXXoibuH3prsUW1cBdOP9kXeg3qCfaK-",
    name: "Vikram Malhotra",
    detail: "AIR 42, JEE Advanced 2026 | Currently at IIT Bombay",
    tag: "JEE",
  },
  {
    quote:
      "The Biology faculty at Gravity is exceptional. Dr. Elena's way of breaking down Human Physiology and Genetics made NCERT concepts crystal clear. The NEET mock tests were spot-on with the actual paper pattern — I walked into the exam hall with zero anxiety.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc",
    name: "Priya Nair",
    detail: "AIR 9, NEET UG 2026 | Currently at AIIMS Delhi",
    tag: "NEET",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-[60px] bg-[#f1edec]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[12px] sm:text-[13px] font-semibold transition-all ${
                active === i
                  ? "bg-[#111111] text-white"
                  : "bg-white text-[#444748] hover:bg-[#ddd9d9]"
              }`}
            >
              {item.tag} Student
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className="material-symbols-outlined text-[#AAC840] text-[40px] sm:text-[52px] md:text-[64px] mb-5 sm:mb-8 block"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            format_quote
          </span>

          <h2 className="text-[18px] sm:text-[22px] md:text-[32px] font-bold italic text-[#111111] leading-snug sm:leading-tight mb-8 sm:mb-12 px-2">
            &ldquo;{t.quote}&rdquo;
          </h2>

          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-3 sm:mb-4 ring-2 ring-[#AAC840]">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                t.tag === "NEET"
                  ? "bg-[#AAC840]/15 text-[#AAC840]"
                  : "bg-[#111111]/10 text-[#111111]"
              }`}
            >
              {t.tag}
            </span>
            <p className="font-bold text-[#111111] text-[14px] sm:text-base">{t.name}</p>
            <p className="text-[11px] sm:text-[12px] font-semibold text-[#444748]">
              {t.detail}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
