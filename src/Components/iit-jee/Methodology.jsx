import { motion } from 'framer-motion'

const cards = [
  {
    icon: 'analytics',
    title: 'Adaptive Analytics',
    description:
      'Personalized performance tracking for JEE (Physics, Chemistry, Maths) and NEET (Biology, Physics, Chemistry) — identifying granular weaknesses and providing real-time course correction.',
    className:
      'md:col-span-2 md:row-span-2 bg-white p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[24px] shadow-[0px_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-end group hover:-translate-y-1 transition-transform',
    iconColor: 'text-[#AAC840]',
    iconSize: 'text-[36px] sm:text-[48px]',
    render: (card) => (
      <>
        <span className={`material-symbols-outlined ${card.iconColor} ${card.iconSize} mb-auto`}>
          {card.icon}
        </span>
        <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#111111] mb-3 md:mb-4">{card.title}</h3>
        <p className="text-[#444748] text-[13px] sm:text-[14px] md:text-base">{card.description}</p>
      </>
    ),
  },
  {
    icon: 'timer',
    title: 'JEE & NEET Simulations',
    description: 'Full-length NTA-pattern mock tests for both JEE and NEET, mirroring real exam conditions to build focus and time management.',
    className:
      'md:col-span-2 bg-[#111111] p-6 sm:p-8 md:p-10 rounded-[20px] md:rounded-[24px] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:-translate-y-1 transition-transform',
    render: (card) => (
      <>
        <div>
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-2">{card.title}</h3>
          <p className="text-white/60 text-[13px] sm:text-[14px] md:text-base">{card.description}</p>
        </div>
        <span className="material-symbols-outlined text-[32px] sm:text-[40px] text-[#AAC840] shrink-0">{card.icon}</span>
      </>
    ),
  },
  {
    icon: 'biotech',
    title: 'NEET Biology Lab',
    className:
      'bg-[#f1edec] p-6 sm:p-8 rounded-[20px] md:rounded-[24px] flex flex-col justify-center items-center text-center hover:-translate-y-1 transition-transform',
    render: (card) => (
      <>
        <span className="material-symbols-outlined text-[28px] sm:text-[32px] mb-3 sm:mb-4">{card.icon}</span>
        <h4 className="text-[13px] sm:text-[14px] font-medium">{card.title}</h4>
        <p className="text-[#444748] text-[11px] sm:text-[12px] mt-1">Practical-oriented NCERT mastery</p>
      </>
    ),
  },
  {
    icon: 'psychology',
    title: 'Dual-Track Mentorship',
    className:
      'bg-[#AAC840] p-6 sm:p-8 rounded-[20px] md:rounded-[24px] flex flex-col justify-center items-center text-center text-[#111111] hover:-translate-y-1 transition-transform',
    render: (card) => (
      <>
        <span className="material-symbols-outlined text-[28px] sm:text-[32px] mb-3 sm:mb-4">{card.icon}</span>
        <h4 className="text-[13px] sm:text-[14px] font-medium">{card.title}</h4>
        <p className="text-[#111111]/70 text-[11px] sm:text-[12px] mt-1">Separate JEE & NEET mentors</p>
      </>
    ),
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Methodology() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#111111]">Our Methodology</h2>
          <p className="text-[#444748] mt-3 sm:mt-4 text-[14px] sm:text-base">
            A four-pillar framework designed for peak academic performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-[24px] md:h-[600px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className={card.className}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {card.render(card)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
