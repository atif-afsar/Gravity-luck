import { motion } from 'framer-motion'

const rankData = [
  { percentile: 99.973, name: 'Ojas Singhal', exam: 'JEE Main 2026', num: '01', tag: 'TOPPER', subtitle: 'Lucknow City Topper • 2 Year SIP' },
  { percentile: 99.96, name: 'Ayan', exam: 'JEE Main 2026', num: '02', tag: 'RESIDENTIAL', subtitle: 'Residential Program' },
  { percentile: 99.90, name: 'Vinod', exam: 'JEE Main 2026', num: '03', tag: 'RESIDENTIAL', subtitle: 'Residential Program' },
  { percentile: 99.83, name: 'Saksham', exam: 'JEE Main 2026', num: '04', tag: 'JEE', subtitle: '' },
  { percentile: 99.90, name: 'Janeshwar', exam: 'JEE Main 2026', num: '05', tag: 'RESIDENTIAL', subtitle: 'Residential Program' },
  { percentile: 99.87, name: 'Shiva', exam: 'JEE Main 2026', num: '06', tag: 'RESIDENTIAL', subtitle: 'Residential Program' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function RankCards() {
  return (
    <section className="bg-[#111111] py-[60px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 md:mb-16">
          <div>
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-white">The Results of Rigor</h2>
            <p className="text-white/50 mt-2 text-[13px] sm:text-base">771 out of 814 students cracked JEE Main 2026 — Best Result in the Country.</p>
          </div>
          <button className="text-[#AAC840] flex items-center gap-2 text-[13px] sm:text-[14px] font-medium shrink-0">
            View All Results
            <span className="material-symbols-outlined text-[18px] sm:text-[24px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
          {rankData.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white/5 border border-white/10 p-5 sm:p-6 md:p-8 rounded-[16px] sm:rounded-[20px] text-white relative overflow-hidden group"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 font-bold text-[60px] sm:text-[80px] text-white/5 group-hover:text-[#AAC840]/10 transition-colors">
                {card.num}
              </span>
              <div className="relative z-10">
                <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${
                  card.tag === 'TOPPER'
                    ? 'bg-[#AAC840]/20 text-[#AAC840]'
                    : card.tag === 'RESIDENTIAL'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-white/10 text-white/70'
                }`}>
                  {card.tag === 'TOPPER' ? 'City Topper' : card.tag === 'RESIDENTIAL' ? 'Residential' : 'JEE Main'}
                </span>
                <span className="text-[#AAC840] font-bold text-[28px] sm:text-[32px] md:text-[40px] block mb-1 sm:mb-2">
                  {card.percentile}<span className="text-[16px] sm:text-[18px] md:text-[22px]"> %ile</span>
                </span>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-1">{card.name}</p>
                <p className="text-white/50 text-[11px] sm:text-[12px] font-semibold">{card.exam}</p>
                {card.subtitle && <p className="text-white/30 text-[10px] sm:text-[11px]">{card.subtitle}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
