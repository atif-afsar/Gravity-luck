import { motion } from "framer-motion";

const HERO_IMG = `/Images/${encodeURIComponent("Untitled design (13).png")}`;

const headingWords = "Mastering the Science of Success.".split(" ");

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-[28px] items-center">
        {/* LEFT SIDE */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
            <motion.span
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex bg-[#f1edec] text-[#1c1b1b] px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold"
            >
              IIT-JEE Coaching
            </motion.span>
            <motion.span
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="inline-flex bg-[#AAC840]/15 text-[#AAC840] border border-[#AAC840]/30 px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-[12px] uppercase tracking-widest font-semibold"
            >
              NEET Preparation
            </motion.span>
          </div>

          <h1 className="text-[30px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-bold text-[#111111] mb-5 sm:mb-8 leading-[1.1] tracking-tight">
            {headingWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.07,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] mb-8 sm:mb-10 max-w-2xl leading-[1.6]"
          >
            Gravity Classes offers elite IIT-JEE (Main &amp; Advanced) and NEET-UG coaching in Lucknow since 2012. With our School Integrated Programs (SIP), 771 out of 814 students cracked JEE Main 2026 — the best result in India. Our methodology combines analytical precision with psychological momentum to crack India&apos;s toughest exams.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
              className="bg-[#AAC840] text-[#111111] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[12px] font-bold text-[13px] sm:text-[14px] hover:shadow-lg cursor-pointer transition-shadow"
            >
              Enroll for 2026-27
            </motion.button>
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
              className="border border-[#c4c7c8] text-[#111111] px-8 sm:px-10 py-3.5 sm:py-4 rounded-[12px] font-bold text-[13px] sm:text-[14px] hover:bg-[#f1edec] cursor-pointer transition-colors"
            >
              Download Prospectus
            </motion.button>
          </div>
        </div>

        {/* RIGHT — logo (Framer only; no GSAP on same transform) */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="
              w-full max-w-[min(100%,280px)] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[420px]
              aspect-square
              shrink-0
              rounded-[20px] sm:rounded-[24px]
              bg-white border border-[#e8e8e8]
              shadow-[0_12px_40px_rgba(0,0,0,0.06)]
              flex items-center justify-center
              p-6 sm:p-8 md:p-10
            "
          >
            <img
              src={HERO_IMG}
              alt="Gravity Classes — Orienting Intelligence. IIT-JEE and NEET coaching institute logo, Lucknow"
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
              draggable={false}
              sizes="(max-width:640px) 72vw,(max-width:1024px) 38vw, 420px"
              className="w-full h-full object-contain object-center select-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
