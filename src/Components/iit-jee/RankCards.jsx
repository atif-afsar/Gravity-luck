import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

const rankData = [
  { rank: 14, name: 'Aditya Sharma', exam: 'JEE Advanced 2026', num: '01', tag: 'JEE' },
  { rank: 9, name: 'Priya Nair', exam: 'NEET UG 2026', num: '02', tag: 'NEET' },
  { rank: 27, name: 'Ishani Gupta', exam: 'NEET UG 2026', num: '03', tag: 'NEET' },
  { rank: 89, name: 'Rohan Mehta', exam: 'JEE Advanced 2026', num: '04', tag: 'JEE' },
  { rank: 42, name: 'Sneha Patel', exam: 'NEET UG 2026', num: '05', tag: 'NEET' },
  { rank: 112, name: 'Ananya Singh', exam: 'NEET UG 2026', num: '06', tag: 'NEET' },
]

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const controls = animate(0, value, {
        duration: 1.5,
        ease: 'easeOut',
        onUpdate: (v) => setDisplay(Math.round(v)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}

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
            <p className="text-white/50 mt-2 text-[13px] sm:text-base">Elite JEE &amp; NEET rank holders from our 2026 session.</p>
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
                  card.tag === 'NEET' 
                    ? 'bg-[#AAC840]/20 text-[#AAC840]' 
                    : 'bg-white/10 text-white/70'
                }`}>
                  {card.tag}
                </span>
                <span className="text-[#AAC840] font-bold text-[28px] sm:text-[32px] md:text-[40px] block mb-1 sm:mb-2">
                  AIR <AnimatedNumber value={card.rank} />
                </span>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-1">{card.name}</p>
                <p className="text-white/50 text-[11px] sm:text-[12px] font-semibold">{card.exam}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
