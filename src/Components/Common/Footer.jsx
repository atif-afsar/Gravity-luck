import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import logo from '../../assets/logo.png'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const quickLinks = [
  { label: 'IIT-JEE Coaching', to: '/iit-jee-neet' },
  { label: 'NEET Prep', to: '/courses' },
  { label: 'Foundation Courses', to: '/courses' },
  { label: 'Scholarship Tests', to: '/courses' },
]

const supportLinks = [
  { label: 'Success Stories', to: '/results' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
  { label: 'FAQs', to: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1c1b1b] w-full">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#AAC840] via-[#AAC840]/60 to-transparent" />

      <motion.div
        className="max-w-[1280px] mx-auto px-5 md:px-10 pt-12 sm:pt-16 pb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[24px]">
          {/* Brand column */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-2 lg:col-span-4">
            <div className="inline-block bg-white rounded-xl p-1.5 mb-5">
              <img src={logo} alt="Gravity Classes" className="h-9 sm:h-10 w-auto" />
            </div>
            <p className="text-white/50 text-[13px] sm:text-[14px] leading-relaxed mb-6 max-w-xs">
              Empowering students through rigorous training and personalized mentorship in Lucknow since 2010.
            </p>
            <div className="flex gap-3">
              {['social_leaderboard', 'share', 'mail'].map((icon) => (
                <div
                  key={icon}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#AAC840]/20 hover:border-[#AAC840]/40 cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-white/60 hover:text-[#AAC840] text-[16px] sm:text-[18px]">{icon}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/50 hover:text-[#AAC840] transition-colors text-[13px] sm:text-[14px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <h4 className="text-white font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider mb-4 sm:mb-6">Support</h4>
            <ul className="space-y-3 sm:space-y-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/50 hover:text-[#AAC840] transition-colors text-[13px] sm:text-[14px]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-2 lg:col-span-3">
            <h4 className="text-white font-semibold text-[13px] sm:text-[14px] uppercase tracking-wider mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#AAC840] text-[18px] mt-0.5 shrink-0">location_on</span>
                <p className="text-white/50 text-[13px] sm:text-[14px]">Hazratganj Center, Lucknow, Uttar Pradesh 226001</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#AAC840] text-[18px] shrink-0">call</span>
                <p className="text-white/50 text-[13px] sm:text-[14px]">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#AAC840] text-[18px] shrink-0">mail</span>
                <p className="text-white/50 text-[13px] sm:text-[14px]">info@gravityclasses.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-[12px] sm:text-[13px]">
            &copy; 2026 Gravity Classes. All rights reserved.
          </p>
          <p className="text-white/30 text-[12px] sm:text-[13px]">
            Orienting Intelligence
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
