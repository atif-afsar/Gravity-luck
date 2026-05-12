import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: "all", label: "All Programs" },
  { id: "jee", label: "IIT-JEE" },
  { id: "neet", label: "NEET" },
  { id: "foundation", label: "Foundation" },
];

const courses = [
  {
    title: "IIT-JEE Integrated (11th–12th)",
    description:
      "Two-year comprehensive program covering JEE Main & Advanced syllabus with daily problem-solving sessions, weekly tests, and personalized mentorship.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD6uQ-oaXea5jIVFZaQ0EhH6tftCd26F-UhvfeRamuyaCMu3FliML_rkj59JdbKezNdiUrkZKE_OeLTDGXv3ekfhHKOFHsUTf4F09z4I2TNdemS9M48GsxrZTwaA1domj9nEIZLz_H-UXcYDYgeP-gZaEyt5UpGiCBZ27veirI1lEklAljBBAG9yDEwBoKvQd4A6pA-IjGcY1QRWgYx7IlviUwJNMBIZA61FgpWaEogna-qpNiYCBQv296cYDfHwaBe-1kSNWUTur-",
    category: "jee",
    badge: "IIT-JEE",
    badgeColor: "bg-[#AAC840] text-[#1c1b1b]",
    duration: "2 Years",
    subjects: "Physics, Chemistry, Mathematics",
    batchStart: "Sep 1, 2026",
    seats: "60 per batch",
  },
  {
    title: "JEE Dropper Batch",
    description:
      "Intensive one-year program for repeaters targeting JEE Main & Advanced with accelerated revision, advanced problem banks, and exam temperament training.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy5wnqjEYeEXHUIDUhZ1hQsHAzrW088EyCL5mXYsufzNBKk_CqwlRM_kTQeyguEGuMg2GH23xmugUJoo1ClgzbSeGWj5usdOCJ0uvryHFimJsIbEYuRLySqnUBxv_kqIayP2J64dsdI5KdduTIU9X7CujW1oewZIfJDl1WRgkK1JhAJUwTLlwwC8v2NfP66M1T95L3tFtQ11LRm0cvMxZuLMSb40K28xn1qG_9RNb6pY__i84xaq6y0xFbWKZ6Kw151kPhnK7QmNXl",
    category: "jee",
    badge: "Dropper",
    badgeColor: "bg-[#1c1b1b] text-white",
    duration: "1 Year",
    subjects: "Physics, Chemistry, Mathematics",
    batchStart: "Jul 1, 2026",
    seats: "40 per batch",
  },
  {
    title: "NEET Integrated (11th–12th)",
    description:
      "In-depth Biology-focused curriculum with intensive practice in Physics & Chemistry. NCERT mastery combined with advanced problem-solving for NEET aspirants.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXgv-BnnvgVVJn7rzL-P9Olo_qeq3UtKXO38gcxhTILY6olOy_yxnnsr71LpC3J7h-Oqx3OoOiP6w7MhMJBJsdeb6CgDgUOB8QBRNT7MIfno_uVA_fkTilsPZ0Tu-Ia7Nxy8InordmfFgxAMKtJvaPCGKFI7SM89RqoDhbbmSo71bhDhXzPdqCNndSFmUCCsVMGRA-pd3Y46NBScnP9hlDsEj1ugvmzRaAdMgOEU6z21aG-wg7DkXZ6qL9kRw4g3R1XSWYnjIiqJ4U",
    category: "neet",
    badge: "NEET",
    badgeColor: "bg-[#AAC840] text-[#1c1b1b]",
    duration: "2 Years",
    subjects: "Biology, Physics, Chemistry",
    batchStart: "Aug 15, 2026",
    seats: "60 per batch",
  },
  {
    title: "NEET Dropper Batch",
    description:
      "Focused one-year program for NEET repeaters with daily biology marathons, chapter-wise NCERT drills, and NTA-pattern simulation tests every weekend.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXgv-BnnvgVVJn7rzL-P9Olo_qeq3UtKXO38gcxhTILY6olOy_yxnnsr71LpC3J7h-Oqx3OoOiP6w7MhMJBJsdeb6CgDgUOB8QBRNT7MIfno_uVA_fkTilsPZ0Tu-Ia7Nxy8InordmfFgxAMKtJvaPCGKFI7SM89RqoDhbbmSo71bhDhXzPdqCNndSFmUCCsVMGRA-pd3Y46NBScnP9hlDsEj1ugvmzRaAdMgOEU6z21aG-wg7DkXZ6qL9kRw4g3R1XSWYnjIiqJ4U",
    category: "neet",
    badge: "Dropper",
    badgeColor: "bg-[#1c1b1b] text-white",
    duration: "1 Year",
    subjects: "Biology, Physics, Chemistry",
    batchStart: "Jul 15, 2026",
    seats: "40 per batch",
  },
  {
    title: "Foundation Course (Class 9–10)",
    description:
      "Building strong conceptual foundations for future competitive exams while excelling in school boards, NTSE, and Olympiads through structured learning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfT31CDgNPqTGcMQTnZtRJgv5r-QIRdJNrMF25prMkVpixZNnk1x0H1oTxIcLGfmUfjzaPlI8FAZt_NHYvL7dtAwglZh1U0Web0s4a-4y-9twZjMkR2-W0o8qbpXM18-8PedfB5pDF7B7x3CjrZs9FwDfVm0vdx5WJdFGPRdXSnjr3dUFKR9351vHGW1vvjGVXGV2t1H_buD53MF3oRKYEuIxCO5fKD3afLfIeW6ip9ma_XZdmZ8dy_cYD47Hg6_4h6G8bxvtP-E0h",
    category: "foundation",
    badge: "Foundation",
    badgeColor: "bg-[#f1edec] text-[#1c1b1b]",
    duration: "2 Years",
    subjects: "Science, Mathematics, Mental Ability",
    batchStart: "Sep 10, 2026",
    seats: "50 per batch",
  },
  {
    title: "Pre-Foundation (Class 8)",
    description:
      "Early start program to develop scientific thinking and mathematical aptitude. Prepares students for a smooth transition into competitive exam preparation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfT31CDgNPqTGcMQTnZtRJgv5r-QIRdJNrMF25prMkVpixZNnk1x0H1oTxIcLGfmUfjzaPlI8FAZt_NHYvL7dtAwglZh1U0Web0s4a-4y-9twZjMkR2-W0o8qbpXM18-8PedfB5pDF7B7x3CjrZs9FwDfVm0vdx5WJdFGPRdXSnjr3dUFKR9351vHGW1vvjGVXGV2t1H_buD53MF3oRKYEuIxCO5fKD3afLfIeW6ip9ma_XZdmZ8dy_cYD47Hg6_4h6G8bxvtP-E0h",
    category: "foundation",
    badge: "Pre-Foundation",
    badgeColor: "bg-[#ddd9d9] text-[#1c1b1b]",
    duration: "1 Year",
    subjects: "Science, Mathematics",
    batchStart: "Sep 15, 2026",
    seats: "50 per batch",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AllCourses() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? courses
      : courses.filter((c) => c.category === active);

  return (
    <section className="py-[60px] bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6"
        >
          <div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-2 sm:mb-3">
              Explore All Programs
            </h2>
            <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] max-w-xl">
              Structured academic programs for every stage — from early
              foundations to advanced competitive exam preparation.
            </p>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[12px] sm:text-[14px] font-semibold transition-all duration-300 cursor-pointer ${
                active === cat.id
                  ? "bg-[#1c1b1b] text-white shadow-lg"
                  : "bg-white text-[#444748] border border-[#c4c7c8]/50 hover:bg-[#e5e2e1]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[24px]">
          {filtered.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-[#c4c7c8]/30 overflow-hidden premium-shadow hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-44 sm:h-52 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span
                  className={`absolute top-3 left-3 sm:top-4 sm:left-4 ${course.badgeColor} px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-[12px] font-semibold`}
                >
                  {course.badge}
                </span>
              </div>

              <div className="p-5 sm:p-7">
                <h3 className="text-[17px] sm:text-[20px] font-semibold text-[#1c1b1b] mb-2 sm:mb-3">
                  {course.title}
                </h3>
                <p className="text-[#444748] text-[13px] sm:text-[14px] leading-relaxed mb-4 sm:mb-5">
                  {course.description}
                </p>

                <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[12px] sm:text-[13px]">
                    <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">
                      schedule
                    </span>
                    <span className="text-[#444748]">
                      <strong className="text-[#1c1b1b]">Duration:</strong>{" "}
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[12px] sm:text-[13px]">
                    <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">
                      menu_book
                    </span>
                    <span className="text-[#444748]">
                      <strong className="text-[#1c1b1b]">Subjects:</strong>{" "}
                      {course.subjects}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[12px] sm:text-[13px]">
                    <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">
                      event
                    </span>
                    <span className="text-[#444748]">
                      <strong className="text-[#1c1b1b]">Starts:</strong>{" "}
                      {course.batchStart}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-[12px] sm:text-[13px]">
                    <span className="material-symbols-outlined text-[#AAC840] text-[16px] sm:text-[18px]">
                      groups
                    </span>
                    <span className="text-[#444748]">
                      <strong className="text-[#1c1b1b]">Batch Size:</strong>{" "}
                      {course.seats}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 sm:pt-5 border-t border-[#c4c7c8]/30">
                  <Link
                    to="/contact"
                    className="flex-1 text-center bg-[#1c1b1b] text-white py-2.5 sm:py-3 rounded-xl text-[12px] sm:text-[13px] font-semibold hover:bg-[#111111] transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <button className="px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-[#c4c7c8] text-[#1c1b1b] hover:bg-[#f1edec] transition-colors">
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
