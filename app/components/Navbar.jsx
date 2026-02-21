"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  User, 
  Briefcase, 
  Cpu, 
  Layout, 
  Mail, 
  Menu, 
  X,
  Sparkles,
  FileDown
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Scrolled state for background styling
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Visibility logic: hide on scroll down, show on scroll up (Standard Professional UX)
    if (latest < 50) {
      setVisible(true);
    } else if (latest > previous) {
      // Scrolling down
      setVisible(false);
    } else {
      // Scrolling up
      setVisible(true);
    }
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/about", label: "About", icon: <User size={18} /> },
    { href: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
    { href: "/skills", label: "Skills", icon: <Cpu size={18} /> },
    { href: "/projects", label: "Projects", icon: <Layout size={18} /> },
    { href: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-[95%] max-w-5xl transition-all duration-500 ease-out ${
          scrolled ? "top-0 md:top-4" : "top-0 md:top-6"
        }`}
      >
        <nav
          className={`relative w-full flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${
            scrolled 
              ? "bg-black/80 backdrop-blur-xl border-b md:border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "bg-black/20 backdrop-blur-md border-b md:border border-white/10"
          } text-white rounded-none md:rounded-full`}
        >
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 ml-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-black rounded-full p-1.5 border border-white/10">
                <Sparkles className="w-5 h-5 text-[#01d3e2]" />
              </div>
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter">
              <span className="bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] bg-clip-text text-transparent">SURAJ</span>
              <span className="text-white ml-1 hidden sm:inline">SHAW</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? "text-[#01d3e2]" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 bg-[#01d3e2]/10 border border-[#01d3e2]/20 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CRM / Resume CTA */}
          <div className="flex items-center gap-2">
            <a 
              href="/resume.pdf"
              download
              className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(1,211,226,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FileDown size={14} className="fill-black/20" />
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[51] md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 z-[52] md:hidden p-6 flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-xl font-black tracking-tighter">
                  <span className="bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] bg-clip-text text-transparent">SURAJ</span>
                </span>
                <button 
                  onClick={closeMenu}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-base font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#01d3e2]/10 text-[#01d3e2] border border-[#01d3e2]/20 shadow-[0_0_15px_rgba(1,211,226,0.1)]"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? "bg-[#01d3e2] text-black" : "bg-white/5"}`}>
                        {link.icon}
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <a
                  href="/resume.pdf"
                  download
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#01d3e2] to-[#0ea5e9] text-black font-bold py-4 rounded-2xl hover:opacity-90 transition-opacity"
                >
                  <FileDown size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

