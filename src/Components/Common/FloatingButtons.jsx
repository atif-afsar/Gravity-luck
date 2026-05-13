import { motion } from 'framer-motion'

const PHONE = '918400002983'
const WHATSAPP_MSG = encodeURIComponent('Hi, I would like to know more about Gravity Classes.')

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp — bottom-left */}
      <motion.a
        href={`https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 cursor-pointer"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 3.2C9.04 3.2 3.38 8.86 3.38 15.82c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.88-1.8a12.56 12.56 0 006 1.52h.01c6.96 0 12.62-5.66 12.62-12.62 0-3.37-1.31-6.54-3.7-8.92A12.54 12.54 0 0016.004 3.2zm0 23.08a10.43 10.43 0 01-5.33-1.46l-.38-.23-3.96 1.04 1.06-3.86-.25-.4a10.4 10.4 0 01-1.6-5.55c0-5.78 4.7-10.48 10.48-10.48 2.8 0 5.43 1.09 7.41 3.07a10.42 10.42 0 013.07 7.42c0 5.78-4.7 10.48-10.48 10.48l-.02-.03zm5.75-7.84c-.32-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1.01 1.24-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.5.14-.65.14-.14.32-.37.47-.55.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.61s1.13 3.03 1.29 3.24c.16.21 2.22 3.39 5.38 4.76.75.33 1.34.52 1.8.67.75.24 1.44.21 1.98.13.6-.09 1.87-.76 2.13-1.5.26-.74.26-1.37.18-1.5-.08-.14-.29-.22-.6-.38z" />
        </svg>
      </motion.a>

      {/* Call — bottom-right */}
      <motion.a
        href={`tel:+${PHONE}`}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.4, type: 'spring', stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#AAC840] flex items-center justify-center shadow-lg shadow-[#AAC840]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#AAC840]/40 transition-all duration-300 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[#1c1b1b] text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          call
        </span>
      </motion.a>
    </>
  )
}
