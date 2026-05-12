import { motion } from "framer-motion";

const courses = [
  {
    title: "Engineering Focus (11th-12th)",
    description:
      "Two-year comprehensive program for Mains & Advanced with dedicated problem-solving sessions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD6uQ-oaXea5jIVFZaQ0EhH6tftCd26F-UhvfeRamuyaCMu3FliML_rkj59JdbKezNdiUrkZKE_OeLTDGXv3ekfhHKOFHsUTf4F09z4I2TNdemS9M48GsxrZTwaA1domj9nEIZLz_H-UXcYDYgeP-gZaEyt5UpGiCBZ27veirI1lEklAljBBAG9yDEwBoKvQd4A6pA-IjGcY1QRWgYx7IlviUwJNMBIZA61FgpWaEogna-qpNiYCBQv296cYDfHwaBe-1kSNWUTur-",
    badge: "IIT-JEE",
    badgeColor: "bg-[#AAC840] text-[#1c1b1b]",
    date: "Starts Sep 1st",
  },
  {
    title: "Medical Excellence (11th-12th)",
    description:
      "In-depth Biology-focused curriculum with intensive practice in Physics & Chemistry for NEET aspirants.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDXgv-BnnvgVVJn7rzL-P9Olo_qeq3UtKXO38gcxhTILY6olOy_yxnnsr71LpC3J7h-Oqx3OoOiP6w7MhMJBJsdeb6CgDgUOB8QBRNT7MIfno_uVA_fkTilsPZ0Tu-Ia7Nxy8InordmfFgxAMKtJvaPCGKFI7SM89RqoDhbbmSo71bhDhXzPdqCNndSFmUCCsVMGRA-pd3Y46NBScnP9hlDsEj1ugvmzRaAdMgOEU6z21aG-wg7DkXZ6qL9kRw4g3R1XSWYnjIiqJ4U",
    badge: "NEET",
    badgeColor: "bg-[#1c1b1b] text-white",
    date: "Starts Aug 15th",
  },
  {
    title: "Foundation (8th-10th)",
    description:
      "Building strong basics for competitive exams while excelling in school boards and NTSE/Olympiads.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCfT31CDgNPqTGcMQTnZtRJgv5r-QIRdJNrMF25prMkVpixZNnk1x0H1oTxIcLGfmUfjzaPlI8FAZt_NHYvL7dtAwglZh1U0Web0s4a-4y-9twZjMkR2-W0o8qbpXM18-8PedfB5pDF7B7x3CjrZs9FwDfVm0vdx5WJdFGPRdXSnjr3dUFKR9351vHGW1vvjGVXGV2t1H_buD53MF3oRKYEuIxCO5fKD3afLfIeW6ip9ma_XZdmZ8dy_cYD47Hg6_4h6G8bxvtP-E0h",
    badge: "Foundation",
    badgeColor: "bg-[#ddd9d9] text-[#1c1b1b]",
    date: "Starts Sep 10th",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function PremierCourses() {
  return (
    <section className="py-[60px] px-5 md:px-10 bg-[#fcf8f8]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-16 gap-6 sm:gap-8"
        >
          <div>
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold mb-3 md:mb-4">Premier Courses</h2>
            <p className="text-[#444748] text-[15px] md:text-[18px]">
              Specialized programs tailored for different academic stages.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="p-2.5 sm:p-3 rounded-full border border-[#c4c7c8] hover:bg-[#e5e2e1] transition-colors">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">arrow_back</span>
            </button>
            <button className="p-2.5 sm:p-3 rounded-full bg-[#1c1b1b] text-white">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">arrow_forward</span>
            </button>
          </div>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-[24px]">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group bg-[#fcf8f8] rounded-2xl md:rounded-3xl premium-shadow border border-[#c4c7c8]/30 overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span
                  className={`absolute top-3 left-3 sm:top-4 sm:left-4 ${course.badgeColor} px-3 sm:px-4 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold`}
                >
                  {course.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-3 md:mb-4">
                  {course.title}
                </h3>
                <p className="text-[#444748] text-[14px] md:text-base mb-5 md:mb-6">{course.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#c4c7c8]/30">
                  <span className="text-[13px] sm:text-[14px] font-medium">{course.date}</span>
                  <a
                    href="#"
                    className="flex items-center gap-1 group-hover:gap-2 transition-all text-[13px] sm:text-[14px] font-medium"
                  >
                    Details
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PremierCourses;
