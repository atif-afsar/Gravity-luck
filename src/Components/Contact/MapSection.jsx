import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-[60px] bg-[#f6f3f2]">
      <motion.div
        className="max-w-[1280px] mx-auto px-5 md:px-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="bg-[#1c1b1b] rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Panel */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12 lg:w-[38%]">
            <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-3 sm:mb-4">
              Find Us in<br /><span className="text-[#AAC840]">Lucknow</span>
            </h2>
            <p className="text-white/50 mb-6 sm:mb-8 md:mb-10 text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
              Our main campus is located in the heart of Lucknow at Hazratganj. Walk-in visits welcome during office hours.
            </p>

            <div className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8 md:mb-10">
              {[
                { icon: "directions_walk", title: "Walk-in Hours", desc: "Mon – Sat, 9:00 AM – 7:00 PM" },
                { icon: "directions_bus", title: "Nearest Landmark", desc: "Hazratganj Crossing, 2 min from Metro Station" },
                { icon: "local_parking", title: "Parking Available", desc: "Free two-wheeler & car parking at basement" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10">
                  <span className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px]">{item.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-[12px] sm:text-[14px]">{item.title}</p>
                    <p className="text-white/50 text-[11px] sm:text-[12px]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Hazratganj+Lucknow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-[#AAC840] font-semibold text-[13px] sm:text-base hover:gap-4 transition-all"
            >
              Open in Google Maps
              <span className="material-symbols-outlined text-[18px] sm:text-[20px]">north_east</span>
            </a>
          </div>

          {/* Right Panel — Map Visualization */}
          <div className="lg:w-[62%] h-[280px] sm:h-[350px] md:h-[400px] lg:h-[500px] relative bg-[#111111] overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />

            {/* Main marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#AAC840] rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#AAC840]/30">
                <span className="material-symbols-outlined text-[#1c1b1b] text-[20px] sm:text-[24px] md:text-[28px]">location_on</span>
              </div>
              <div className="mt-1.5 sm:mt-2 bg-[#1c1b1b] border border-white/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                <span className="text-white text-[10px] sm:text-xs font-medium">Hazratganj (Main)</span>
              </div>
            </div>

            {/* Secondary marker — Gomti Nagar */}
            <div className="absolute top-[32%] left-[68%] flex flex-col items-center opacity-70 z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#AAC840]/60 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#1c1b1b] text-[14px] sm:text-[16px] md:text-[18px]">location_on</span>
              </div>
              <div className="mt-1 bg-[#1c1b1b]/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                <span className="text-white/70 text-[8px] sm:text-[10px]">Gomti Nagar</span>
              </div>
            </div>

            {/* Secondary marker — Aliganj */}
            <div className="absolute top-[65%] left-[30%] flex flex-col items-center opacity-60 z-10">
              <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#AAC840]/50 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#1c1b1b] text-[14px] sm:text-[16px] md:text-[18px]">location_on</span>
              </div>
              <div className="mt-1 bg-[#1c1b1b]/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                <span className="text-white/70 text-[8px] sm:text-[10px]">Aliganj</span>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 sm:w-28 md:w-36 h-24 sm:h-28 md:h-36 border border-[#AAC840]/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 sm:w-52 md:w-64 h-44 sm:h-52 md:h-64 border border-[#AAC840]/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border border-[#AAC840]/5 rounded-full" />

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="50" x2="68" y2="32" stroke="rgba(170,200,64,0.15)" strokeWidth="0.3" strokeDasharray="2,2" />
              <line x1="50" y1="50" x2="30" y2="65" stroke="rgba(170,200,64,0.15)" strokeWidth="0.3" strokeDasharray="2,2" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
