import { motion } from "framer-motion";

const heading = "Still Have Questions?";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" } }),
};

const actions = [
  { icon: "call", title: "Call Us Directly", description: "Talk to our admission counselor right now.", cta: "+91 98765 43210", href: "tel:+919876543210", style: "bg-[#1c1b1b] text-white", iconBg: "bg-[#AAC840]", iconColor: "text-[#1c1b1b]", ctaStyle: "bg-[#AAC840] text-[#1c1b1b] hover:shadow-lg hover:shadow-[#AAC840]/20" },
  { icon: "chat", title: "WhatsApp Us", description: "Quick replies on WhatsApp for instant support.", cta: "Chat Now", href: "https://wa.me/919876543210", style: "bg-white border border-[#c4c7c8]/30 premium-shadow", iconBg: "bg-[#AAC840]/10", iconColor: "text-[#AAC840]", ctaStyle: "bg-[#1c1b1b] text-white hover:bg-[#111111]" },
  { icon: "event", title: "Book a Visit", description: "Schedule a campus tour and free demo class.", cta: "Book Appointment", href: "#", style: "bg-white border border-[#c4c7c8]/30 premium-shadow", iconBg: "bg-[#AAC840]/10", iconColor: "text-[#AAC840]", ctaStyle: "bg-[#1c1b1b] text-white hover:bg-[#111111]" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.3 + i * 0.12, duration: 0.6, ease: "easeOut" } }),
};

export default function ContactCTA() {
  const words = heading.split(" ");

  return (
    <section className="py-[60px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto text-center">
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#1c1b1b] mb-3 sm:mb-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.3em]"
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-xl mx-auto mb-8 sm:mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Reach out through any channel — we&apos;re available 6 days a week to assist you.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-[24px]">
          {actions.map((action, i) => (
            <motion.div
              key={action.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${action.style} rounded-[18px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 flex flex-col items-center text-center hover:-translate-y-1 transition-transform`}
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl ${action.iconBg} flex items-center justify-center mb-3 sm:mb-4 md:mb-5`}>
                <span className={`material-symbols-outlined ${action.iconColor} text-[22px] sm:text-[24px] md:text-[28px]`}>{action.icon}</span>
              </div>

              <h3 className={`text-[17px] sm:text-[18px] md:text-[20px] font-semibold mb-1.5 sm:mb-2 ${i === 0 ? "text-white" : "text-[#1c1b1b]"}`}>{action.title}</h3>
              <p className={`text-[12px] sm:text-[13px] md:text-[14px] mb-4 sm:mb-5 md:mb-6 ${i === 0 ? "text-white/50" : "text-[#444748]"}`}>{action.description}</p>

              <a
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-auto w-full py-3 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-[13px] sm:text-[14px] transition-all cursor-pointer block text-center ${action.ctaStyle}`}
              >
                {action.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
