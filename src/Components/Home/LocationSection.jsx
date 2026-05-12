import { motion } from 'framer-motion';

const locations = [
  { name: 'Hazratganj Center', address: 'City Heart, MG Road, Lucknow', active: true },
  { name: 'Gomti Nagar', address: 'Patrakarpuram Crossing, Lucknow', active: false },
  { name: 'Aliganj Center', address: 'Sector H, Aliganj, Lucknow', active: false },
];

export default function LocationSection() {
  return (
    <section className="py-[60px] px-5 md:px-10 bg-[#fcf8f8]">
      <motion.div
        className="max-w-[1280px] mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="bg-[#1c1b1b] rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          {/* Left Panel */}
          <div className="p-6 sm:p-8 md:p-12 lg:w-1/3">
            <h2 className="text-white text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-4 md:mb-6">
              Find us in
              <br />
              Lucknow
            </h2>
            <p className="text-white/60 text-[14px] md:text-base mb-8 md:mb-10">
              Premium learning centers across the city, designed for focus and productivity.
            </p>

            <div className="space-y-6 sm:space-y-8">
              {locations.map((loc) => (
                <div key={loc.name} className="flex gap-3 sm:gap-4 group cursor-pointer">
                  <div className="pt-2">
                    <div
                      className={`w-2 h-2 rounded-full transition-colors ${
                        loc.active ? 'bg-[#AAC840]' : 'bg-white/30 group-hover:bg-[#AAC840]'
                      }`}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-[14px] sm:text-base group-hover:text-[#AAC840] transition-colors">
                      {loc.name}
                    </h4>
                    <p className="text-white/50 text-[12px] sm:text-sm">{loc.address}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 text-[#AAC840] font-semibold mt-8 md:mt-12 text-[14px] sm:text-base">
              Get Directions
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">north_east</span>
            </button>
          </div>

          {/* Right Panel - Map Simulation */}
          <div className="lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[500px] relative bg-[#111111] overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Main marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#AAC840] rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#AAC840]/30">
                <span className="material-symbols-outlined text-[#1c1b1b] text-xl sm:text-2xl">
                  location_on
                </span>
              </div>
              <div className="mt-2 bg-[#1c1b1b] border border-white/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
                <span className="text-white text-[10px] sm:text-xs font-medium">Hazratganj (Main)</span>
              </div>
            </div>

            {/* Secondary marker */}
            <div className="absolute top-[35%] left-[65%] flex flex-col items-center opacity-70">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#AAC840]/60 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-[#1c1b1b] text-sm sm:text-lg">
                  location_on
                </span>
              </div>
              <div className="mt-1 bg-[#1c1b1b]/80 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                <span className="text-white/70 text-[8px] sm:text-[10px]">Gomti Nagar</span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border border-[#AAC840]/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 border border-[#AAC840]/10 rounded-full" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
