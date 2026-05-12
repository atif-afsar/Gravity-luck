import { motion } from "framer-motion";

const headingWords = "Get in Touch with Gravity.".split(" ");

const quickInfo = [
  { icon: "call", label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "mail", label: "Email", value: "info@gravityclasses.com", href: "mailto:info@gravityclasses.com" },
  { icon: "schedule", label: "Office Hours", value: "Mon – Sat, 8 AM – 8 PM", href: null },
];

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-8 sm:pt-[40px] pb-[60px]">
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-[#AAC840]/10 border border-[#AAC840]/20 rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8"
          >
            <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>waving_hand</span>
            <span className="text-[#AAC840] font-medium text-[12px] sm:text-[14px]">We&apos;d Love to Hear from You</span>
          </motion.div>

          <h1 className="text-[28px] sm:text-[36px] md:text-[52px] lg:text-[64px] font-bold tracking-tight leading-[1.1] mb-5 sm:mb-8">
            {headingWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: [0.33, 1, 0.68, 1] }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="text-[14px] sm:text-[16px] md:text-[18px] text-[#444748] leading-[1.6] max-w-2xl"
          >
            Whether you&apos;re looking for admission details, course information, or have any queries — our team is here to help you take the first step toward your dream college.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-[24px]"
        >
          {quickInfo.map((item) => {
            const Tag = item.href ? "a" : "div";
            return (
              <Tag
                key={item.label}
                {...(item.href ? { href: item.href } : {})}
                className="flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-[#c4c7c8]/30 premium-shadow hover:-translate-y-1 transition-transform group"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#AAC840]/10 flex items-center justify-center shrink-0 group-hover:bg-[#AAC840]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#AAC840] text-[22px] sm:text-[28px]">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[11px] sm:text-[12px] text-[#444748] uppercase tracking-widest font-semibold mb-0.5 sm:mb-1">{item.label}</p>
                  <p className="text-[14px] sm:text-[16px] font-semibold text-[#1c1b1b]">{item.value}</p>
                </div>
              </Tag>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
