import { motion } from "framer-motion";

const centers = [
  { name: "Hazratganj Center", address: "9A, Shahnajaf Road, opp. Saint Francis College, Hazratganj, Lucknow 226001", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "All Programs", active: true },
  { name: "Indira Nagar (Head Office)", address: "D-3221, near Munshipulia, Indira Nagar, Lucknow 226016", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "All Programs", active: false },
  { name: "Gomti Nagar Center", address: "CP/72, opp. Sahara Hospital Building, Viraj Khand-4, Gomti Nagar, Lucknow 226010", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "JEE & NEET Integrated", active: false },
  { name: "Aliganj Center", address: "B1/8, 3rd Floor, Ved Plaza, Kapoorthala, Aliganj, Lucknow 226024", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "Foundation & JEE/NEET", active: false },
  { name: "Alambagh Center", address: "Shri Pratap Mall, Alambagh, Lucknow", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "Foundation Courses", active: false },
  { name: "Ansal Center", address: "Ansal, Lucknow", phone: "+91 84000 02983", email: "info@gravityclasses.com", programs: "JEE & NEET", active: false },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }),
};

export default function ContactInfo() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-3 sm:mb-4">Visit Our Centers</h2>
          <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto">
            Six centers across Lucknow — walk in anytime during office hours for a campus tour and counseling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
          {centers.map((center, i) => (
            <motion.div
              key={center.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`rounded-[18px] sm:rounded-[24px] p-5 sm:p-6 md:p-8 border transition-all hover:-translate-y-1 ${
                center.active ? "bg-[#1c1b1b] text-white border-[#1c1b1b]" : "bg-white border-[#c4c7c8]/30 premium-shadow"
              }`}
            >
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-6">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${center.active ? "bg-[#AAC840]" : "bg-[#AAC840]/10"}`}>
                  <span className={`material-symbols-outlined text-[18px] sm:text-[20px] ${center.active ? "text-[#1c1b1b]" : "text-[#AAC840]"}`}>location_on</span>
                </div>
                {center.active && (
                  <span className="bg-[#AAC840] text-[#1c1b1b] px-2.5 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">Main Campus</span>
                )}
              </div>

              <h3 className={`text-[17px] sm:text-[18px] md:text-[20px] font-semibold mb-2 sm:mb-3 ${center.active ? "text-white" : "text-[#1c1b1b]"}`}>{center.name}</h3>

              <div className="space-y-2.5 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px] mt-0.5">pin_drop</span>
                  <p className={`text-[12px] sm:text-[13px] leading-relaxed ${center.active ? "text-white/60" : "text-[#444748]"}`}>{center.address}</p>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">call</span>
                  <a href={`tel:${center.phone.replace(/\s/g, "")}`} className={`text-[12px] sm:text-[13px] font-medium ${center.active ? "text-white hover:text-[#AAC840]" : "text-[#1c1b1b] hover:text-[#AAC840]"} transition-colors`}>{center.phone}</a>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">mail</span>
                  <a href={`mailto:${center.email}`} className={`text-[12px] sm:text-[13px] font-medium truncate ${center.active ? "text-white hover:text-[#AAC840]" : "text-[#1c1b1b] hover:text-[#AAC840]"} transition-colors`}>{center.email}</a>
                </div>
              </div>

              <div className={`pt-4 sm:pt-5 border-t ${center.active ? "border-white/10" : "border-[#c4c7c8]/30"}`}>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#AAC840] text-[14px] sm:text-[16px]">school</span>
                  <span className={`text-[11px] sm:text-[12px] font-semibold ${center.active ? "text-white/50" : "text-[#444748]"}`}>{center.programs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
