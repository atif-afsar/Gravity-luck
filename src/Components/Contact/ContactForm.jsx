import { motion } from "framer-motion";
import { useState } from "react";

const programs = [
  "IIT-JEE Integrated (11th–12th)",
  "JEE Dropper Batch",
  "NEET Integrated (11th–12th)",
  "NEET Dropper Batch",
  "Foundation Course (9th–10th)",
  "Pre-Foundation (Class 8)",
  "Other / General Enquiry",
];

const benefits = [
  { icon: "verified", title: "Free Counseling Session", desc: "One-on-one guidance to pick the right program for your goals." },
  { icon: "school", title: "Scholarship Test Info", desc: "Up to 100% fee waiver based on aptitude test performance." },
  { icon: "calendar_month", title: "Free Demo Class", desc: "Attend a live session before enrolling to experience our teaching quality." },
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-[60px] bg-[#f6f3f2]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[60px]">
          {/* Left */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-[#1c1b1b] mb-4 sm:mb-6">
              Enquire About<br /><span className="text-[#AAC840]">Admission</span>
            </h2>
            <p className="text-[#444748] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed mb-8 sm:mb-10">
              Fill in the form and our counselor will reach out within 24 hours with course details, fee structure, and scholarship options.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#AAC840]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[#AAC840] text-[20px] sm:text-[24px]">{b.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1b1b] mb-0.5 sm:mb-1 text-[14px] sm:text-base">{b.title}</h4>
                    <p className="text-[#444748] text-[12px] sm:text-[14px]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 premium-shadow border border-[#c4c7c8]/20 text-center min-h-[400px] sm:min-h-[500px] flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#AAC840]/15 flex items-center justify-center mb-5 sm:mb-6">
                  <span className="material-symbols-outlined text-[#AAC840] text-[32px] sm:text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h3 className="text-[22px] sm:text-[28px] font-bold text-[#1c1b1b] mb-2 sm:mb-3">Thank You!</h3>
                <p className="text-[#444748] text-[14px] sm:text-[16px] max-w-md">
                  We&apos;ve received your enquiry. Our counselor will contact you within 24 hours with all the details.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border border-[#c4c7c8] text-[#1c1b1b] text-[13px] sm:text-[14px] font-semibold hover:bg-[#f1edec] transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-12 premium-shadow border border-[#c4c7c8]/20"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Student Name *</label>
                    <input type="text" required placeholder="Full name" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Parent / Guardian Name</label>
                    <input type="text" placeholder="Parent's name" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Phone Number *</label>
                    <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Email Address *</label>
                    <input type="email" required placeholder="you@example.com" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Current Class *</label>
                    <select required defaultValue="" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select class</option>
                      <option>Class 8</option>
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11</option>
                      <option>Class 12</option>
                      <option>12th Pass (Dropper)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Interested Program *</label>
                    <select required defaultValue="" className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all appearance-none cursor-pointer">
                      <option value="" disabled>Select program</option>
                      {programs.map((p) => (<option key={p}>{p}</option>))}
                    </select>
                  </div>
                </div>

                <div className="mb-5 sm:mb-6">
                  <label className="block text-[12px] sm:text-[13px] font-semibold text-[#1c1b1b] mb-1.5 sm:mb-2">Message (Optional)</label>
                  <textarea rows={3} placeholder="Any specific queries about fees, schedule, scholarship, etc." className="w-full px-3.5 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border border-[#c4c7c8]/50 bg-[#f6f3f2] text-[13px] sm:text-[14px] outline-none focus:border-[#AAC840] focus:ring-2 focus:ring-[#AAC840]/20 transition-all resize-none" />
                </div>

                <button type="submit" className="w-full bg-[#1c1b1b] text-white py-3.5 sm:py-4 rounded-xl font-semibold text-[14px] sm:text-[15px] hover:bg-[#111111] transition-colors cursor-pointer flex items-center justify-center gap-2">
                  Submit Enquiry
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px]">arrow_forward</span>
                </button>

                <p className="text-[11px] sm:text-[12px] text-[#444748] text-center mt-3 sm:mt-4">
                  By submitting, you agree to be contacted by our admission team via phone or email.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
