import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const [phase, setPhase] = useState("text");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 1600);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete?.();
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const isSplit = phase === "split";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Top panel */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-[#AAC840] origin-top"
            animate={isSplit ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Bottom panel */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1/2 bg-[#AAC840] origin-bottom"
            animate={isSplit ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Centered text layer */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            animate={isSplit ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeIn" }}
          >
            <motion.span
              className="text-[#1c1b1b] text-[48px] md:text-[64px] font-bold tracking-tight leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              Gravity
            </motion.span>

            <motion.div
              className="w-12 h-[2.5px] bg-[#1c1b1b]/30 rounded-full my-3"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            />

            <motion.span
              className="text-[#1c1b1b] text-[14px] md:text-[16px] font-medium tracking-[0.25em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              Orienting Intelligence
            </motion.span>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
