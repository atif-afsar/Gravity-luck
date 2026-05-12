import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "IIT-JEE & NEET", path: "/iit-jee-neet" },
  { label: "Courses", path: "/courses" },
  { label: "Results", path: "/results" },
  { label: "Contact", path: "/contact" },
];

const navIcons = {
  "/": "home",
  "/iit-jee-neet": "science",
  "/courses": "menu_book",
  "/results": "emoji_events",
  "/contact": "call",
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Top Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#AAC840]/90 backdrop-blur-md shadow-sm"
      >
        <div className="mx-auto flex items-center justify-between h-20 px-5 md:px-10" style={{ maxWidth: 1280 }}>
          <Link to="/" className="select-none">
            <div className="bg-white rounded-xl p-1.5 shadow-sm">
              <img src={logo} alt="Gravity Classes" className="h-11 w-auto" />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className={`relative pb-1 text-[15px] font-semibold transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[#1c1b1b]/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 h-[2.5px] w-full rounded-full bg-white"
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="hidden md:inline-flex px-6 py-3 rounded-xl bg-[#1c1b1b] text-white text-sm font-semibold transition-transform hover:scale-[1.03] active:scale-95 shadow-md"
          >
            Admission
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white"
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined text-[28px]">menu</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-[#1c1b1b]/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
            className="fixed top-0 right-0 bottom-0 z-[100] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#AAC840] via-[#AAC840]/40 to-transparent" />

            {/* Header */}
            <div className="flex items-center justify-between h-20 px-6 border-b border-[#c4c7c8]/20 shrink-0">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <div className="bg-[#AAC840]/10 rounded-xl p-1.5">
                  <img src={logo} alt="Gravity Classes" className="h-10 w-auto" />
                </div>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#f6f3f2] text-[#1c1b1b] hover:bg-[#e5e2e1] transition-colors"
                aria-label="Close menu"
              >
                <span className="material-symbols-outlined text-[22px]">close</span>
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col gap-1.5 px-5 mt-6 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.path;
                return (
                  <motion.li
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3.5 py-3.5 px-4 rounded-xl text-[16px] font-medium transition-all ${
                        isActive
                          ? "bg-[#AAC840]/10 text-[#1c1b1b] shadow-sm"
                          : "text-[#444748] hover:bg-[#f6f3f2]"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-[22px] ${
                          isActive ? "text-[#AAC840]" : "text-[#c4c7c8]"
                        }`}
                        style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                      >
                        {navIcons[link.path]}
                      </span>
                      {link.label}
                      {isActive && (
                        <span className="ml-auto w-2 h-2 rounded-full bg-[#AAC840]" />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom Section */}
            <div className="px-5 pb-6 pt-4 border-t border-[#c4c7c8]/20 shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-[#1c1b1b] text-white text-[15px] font-semibold shadow-lg active:scale-[0.98] transition-transform"
                >
                  <span className="material-symbols-outlined text-[20px]">school</span>
                  Apply for Admission
                </Link>
                <div className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#444748]">
                  <span className="material-symbols-outlined text-[14px] text-[#AAC840]">call</span>
                  +91 98765 43210
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
