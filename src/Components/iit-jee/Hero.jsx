import { useRef } from "react";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAy5wnqjEYeEXHUIDUhZ1hQsHAzrW088EyCL5mXYsufzNBKk_CqwlRM_kTQeyguEGuMg2GH23xmugUJoo1ClgzbSeGWj5usdOCJ0uvryHFimJsIbEYuRLySqnUBxv_kqIayP2J64dsdI5KdduTIU9X7CujW1oewZIfJDl1WRgkK1JhAJUwTLlwwC8v2NfP66M1T95L3tFtQ11LRm0cvMxZuLMSb40K28xn1qG_9RNb6pY__i84xaq6y0xFbWKZ6Kw151kPhnK7QmNXl";

const headingWords = "Mastering the Science of Success.".split(" ");

export default function Hero() {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        y: -12,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="overflow-hidden">
      <div
        ref={containerRef}
        className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 md:py-[60px] grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-[24px] items-center"
      >
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
            Gravity Classes offers an elite academic environment for both
            IIT-JEE and NEET aspirants. From advanced Physics &amp; Maths for 
            engineering to comprehensive Biology &amp; Chemistry for medical 
            entrance — our methodology combines analytical precision with 
            psychological momentum to crack India&apos;s toughest exams.
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

        {/* RIGHT SIDE */}
        <div className="lg:col-span-5">
          <motion.div
            ref={imgRef}
            initial={{ x: 60, opacity: 0, scale: 0.95 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-[20px] sm:rounded-[24px] overflow-hidden"
          >
            <img
              src={HERO_IMG}
              alt="Gravity Classes IIT-JEE & NEET coaching"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
