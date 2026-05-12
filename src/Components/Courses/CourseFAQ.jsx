import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "What is the admission process for Gravity Classes?",
    answer:
      "Admissions are based on a scholarship-cum-entrance test conducted at our centers. Students can register online or visit any of our Lucknow centers to book a test slot. Based on the test performance, students are offered admission with applicable scholarship benefits.",
  },
  {
    question: "Can a student prepare for both JEE and NEET simultaneously?",
    answer:
      "We recommend choosing a dedicated track (JEE or NEET) for focused preparation. However, students in Class 11 can explore both tracks during the first month before finalizing their stream. Our counselors help students identify the right path based on aptitude and interests.",
  },
  {
    question: "What is the batch size and student-to-teacher ratio?",
    answer:
      "Our batch sizes are capped at 40–60 students depending on the program. The effective student-to-teacher ratio is maintained at 1:30, ensuring every student gets personal attention during doubt sessions and mentorship meetings.",
  },
  {
    question: "Are there scholarship programs available?",
    answer:
      "Yes, we offer merit-based scholarships ranging from 25% to 100% fee waiver based on performance in our entrance test, board exam scores, or results in national-level competitions like NTSE, Olympiads, KVPY, and previous JEE/NEET attempts.",
  },
  {
    question: "What study material is provided?",
    answer:
      "Every enrolled student receives comprehensive study modules covering the entire syllabus, chapter-wise practice sheets, previous year question compilations (15+ years), formula booklets, and access to our digital test platform with 200+ full-length mock tests.",
  },
  {
    question: "Do you provide hostel facilities?",
    answer:
      "While Gravity Classes does not directly operate hostels, we have tie-ups with verified PG accommodations and hostels near our Hazratganj center. Our admin team assists outstation students in finding safe and comfortable accommodation.",
  },
];

export default function CourseFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-[60px] bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px]">
          {/* Left */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-3 sm:mb-4 lg:sticky lg:top-28">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed lg:sticky lg:top-[11.5rem]">
              Got questions about our programs? Here are answers to the most
              common queries from students and parents.
            </p>
          </motion.div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full text-left bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#c4c7c8]/30 premium-shadow cursor-pointer transition-all hover:border-[#AAC840]/30"
                  >
                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#1c1b1b]">
                        {faq.question}
                      </h4>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px] shrink-0"
                      >
                        expand_more
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#444748] text-[13px] sm:text-[14px] leading-relaxed pt-3 sm:pt-4 border-t border-[#c4c7c8]/20 mt-3 sm:mt-4">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
