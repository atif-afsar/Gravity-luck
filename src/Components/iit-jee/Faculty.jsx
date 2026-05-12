import { motion } from "framer-motion";

const facultyData = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAek4ju5lp_VDDhciFC9L7eKtxKAeuITIaIAQnD9EOHlAv0fNyUrHJDCxdlRNGJfEy9VsnDmJNbIVZqyfhZvjMCS_R3eRKqcxPkcGkugj3Zj0A1GwCrkmojfchz2z8O2qGSBMgQN0XcajrRvFXyVN-z6b777LjvZnzMAjcewfGZ3i9FnPBhvs3oFXZvmHR3tufYpa3F16LFEpvueKGCLgcIYok1AqtJElamcYpWF8lDltj_eM35p4Xe8Hy2F6Kj0dGH6tXSI3dzlK-t",
    name: "Dr. Sameer Verma",
    role: "HOD Physics | IIT Kanpur Alum",
    tag: "JEE & NEET",
    description:
      "20+ years of expertise in Classical and Quantum Mechanics. Teaches Physics for both JEE Advanced and NEET.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByFrJwDSPQ7kxiOhfNWDiyymC0veXdvtP4UryEOZThxCIAf6ukMnpLs_Mn3kHSKkvxXlMQnhxHROqb7Y6N9jMzyb1ucvvF4Gh10kJS6hsUY0uXHQHB5VDtsE0kV_5SciAhoeo7XVY7VHr4H89R5hTXtdn4-vtZpXzyw2FsnIG1HkNR0C159R4d9gxjXX0ajZap02bwSxSkTXSs0U_XmXlKnpHKcV_ucJfRasvsb_OUzjq4MGPWaItg--TvjfcALIVc9gwbxmhIB_Oc",
    name: "Dr. Elena Rodriguez",
    role: "Senior Faculty Biology | PhD AIIMS",
    tag: "NEET",
    description:
      "Specialist in Genetics, Molecular Biology & Human Physiology. Architect of our NEET Biology curriculum.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCDDqjTBF1ckj1a95-7SX6Ck44S_h41XYWR9jzOs608YwM0lFnkMSc5VJdh5yzfL1qn36tuLShIsJF_Sy0J45EZACigDihUM9rf9BJzIaMUYcMC1LZVO-BTjIMzladNNQBIHVrS5Fm5ZpPNseXwuQR7U0YVsJ4o8LhKL1OXZLXraSqs6JhT6U2ua-QIIqpyAeSOIutosLwaqgRsNKPPY90DpP1GOagmR0-NIL7w1ytpdh6AzoTa48AxaKFcrn46yl2W687h1ppZ1Wig",
    name: "Prof. Rajesh Khanna",
    role: "HOD Mathematics | IIT Delhi Alum",
    tag: "JEE",
    description:
      "Renowned for simplifying complex Calculus, Trigonometry & Coordinate Geometry for JEE aspirants.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAek4ju5lp_VDDhciFC9L7eKtxKAeuITIaIAQnD9EOHlAv0fNyUrHJDCxdlRNGJfEy9VsnDmJNbIVZqyfhZvjMCS_R3eRKqcxPkcGkugj3Zj0A1GwCrkmojfchz2z8O2qGSBMgQN0XcajrRvFXyVN-z6b777LjvZnzMAjcewfGZ3i9FnPBhvs3oFXZvmHR3tufYpa3F16LFEpvueKGCLgcIYok1AqtJElamcYpWF8lDltj_eM35p4Xe8Hy2F6Kj0dGH6tXSI3dzlK-t",
    name: "Dr. Meera Agarwal",
    role: "HOD Chemistry | NEET & JEE Expert",
    tag: "JEE & NEET",
    description:
      "15+ years specializing in Organic & Inorganic Chemistry. Dual-track expert for both JEE and NEET Chemistry.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function Faculty() {
  return (
    <section className="py-[60px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#111111] mb-3 md:mb-4">
          Mentors for JEE &amp; NEET
        </h2>
        <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] mb-10 md:mb-16 max-w-2xl">Physics, Chemistry, Mathematics &amp; Biology — our faculty covers every subject across both exam tracks.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[24px]">
          {facultyData.map((faculty, i) => (
            <motion.div
              key={faculty.name}
              className="group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="aspect-[3/4] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-4 sm:mb-6 shadow-[0px_10px_30px_rgba(0,0,0,0.04)]">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                faculty.tag === 'NEET'
                  ? 'bg-[#AAC840]/15 text-[#AAC840]'
                  : faculty.tag === 'JEE'
                  ? 'bg-[#111111]/10 text-[#111111]'
                  : 'bg-[#AAC840]/10 text-[#111111]'
              }`}>
                {faculty.tag}
              </span>
              <h4 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#111111]">
                {faculty.name}
              </h4>
              <p className="text-[#AAC840] text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-1 sm:mb-2">
                {faculty.role}
              </p>
              <p className="text-[#444748] text-[12px] sm:text-[13px] md:text-[14px]">{faculty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faculty;
