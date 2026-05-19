import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SafeStudentImage from "../Common/SafeStudentImage";
import { homeSpotlightToppers } from "../../data/studentResults";

const cardReveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function headlineDisplay(student) {
  return `${student.headline}${student.headlineSuffix ?? ""}`;
}

function detailLine(student) {
  return student.subline ?? student.exam;
}

export default function ToppersSection() {
  const toppers = homeSpotlightToppers;

  return (
    <section
      className="relative py-[56px] md:py-[72px] px-5 md:px-10 overflow-hidden bg-[#fcf8f8]"
      aria-labelledby="home-toppers-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[320px] w-[320px] rounded-full bg-[#AAC840]/[0.12] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-80px] h-[280px] w-[280px] rounded-full bg-[#c41e3a]/[0.06] blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14"
        >
          <div className="max-w-2xl">
            <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.2em] text-[#AAC840] mb-2">
              Gravity Toppers
            </p>
            <h2 id="home-toppers-heading" className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-[#1c1b1b] leading-tight">
              Faces of{" "}
              <span className="text-[#b91c1c]">excellence</span>
            </h2>
            <p className="mt-3 text-[15px] md:text-[17px] text-[#444748] leading-relaxed">
              Published result creatives from our Lucknow classroom — each profile matches our official topper artwork.
            </p>
          </div>
          <Link
            to="/results"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1c1b1b] px-6 py-3 text-[14px] font-semibold text-[#1c1b1b] hover:bg-[#1c1b1b] hover:text-white transition-colors duration-300"
          >
            View all results
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {toppers.map((student, index) => (
            <motion.article
              key={student.id}
              custom={index}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-24px" }}
              className="group flex flex-col rounded-[22px] bg-white border border-[#e5e2e1] shadow-[0_20px_50px_-18px_rgba(28,27,27,0.14)] hover:shadow-[0_28px_64px_-16px_rgba(170,200,64,0.22)] hover:border-[#AAC840]/35 transition-all duration-500"
            >
              <div className="relative p-4 sm:p-5 pb-0">
                <div
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#faf9f8] ring-2 ring-[#c9a227]/35 ring-offset-2 ring-offset-white"
                  style={{
                    boxShadow: "inset 0 0 0 1px rgba(201,162,39,0.25), 0 12px 40px -12px rgba(28,27,27,0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(170,200,64,0.08),transparent_55%)] pointer-events-none" />
                  <SafeStudentImage
                    src={student.image}
                    alt={student.imageAlt}
                    eager={index === 0}
                    className="relative z-[1] w-full h-auto max-h-[min(420px,52vh)] object-contain object-center mx-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                </div>
              </div>

              <div className="flex flex-col flex-1 px-5 sm:px-6 pt-5 pb-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-[#1c1b1b] leading-snug">{student.name}</h3>
                  <span className="shrink-0 rounded-full bg-[#AAC840]/20 text-[#3d4a1a] text-[11px] sm:text-[12px] font-bold uppercase tracking-wide px-2.5 py-1">
                    {student.cardBadge ?? student.exam}
                  </span>
                </div>
                <p className="text-[15px] sm:text-[16px] font-semibold text-[#b91c1c]">{headlineDisplay(student)}</p>
                <p className="mt-1 text-[13px] sm:text-[14px] text-[#747676]">{detailLine(student)}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
