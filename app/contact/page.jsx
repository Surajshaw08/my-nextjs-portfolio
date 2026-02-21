"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

export default function ContactPage() {
  const [showMap, setShowMap] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "surajshaw17082004@gmail.com",
      link: "mailto:surajshaw17082004@gmail.com",
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      value: "+91 6290315511",
      link: "tel:+916290315511",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Kolkata, India",
      link: null,
    },
  ];

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
      };

  const fadeSide = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4 },
      };

  return (
    <div className="relative min-h-[100dvh] bg-[#020617] text-white px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 sm:pb-20 flex flex-col items-center overflow-x-hidden">
      {/* Ambient background */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-[#01d3e2]/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-[#01d3e2]/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto min-w-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            {...fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4"
          >
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01d3e2] to-[#00a3b1]">
              Me
            </span>
          </motion.h2>

          <motion.p
            {...fadeUp}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Reach out to collaborate, connect, or just say hi 👋
          </motion.p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 sm:gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            {...fadeSide}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-[#01d3e2]">
              Send Message
            </h3>

            <form className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2 min-w-0">
                  <label className="text-sm text-slate-300">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 placeholder:text-slate-600"
                  />
                </div>

                <div className="space-y-2 min-w-0">
                  <label className="text-sm text-slate-300">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 placeholder:text-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2 min-w-0">
                <label className="text-sm text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2 min-w-0">
                <label className="text-sm text-slate-300">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me more..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 placeholder:text-slate-600 resize-none"
                />
              </div>

              <button className="w-full group bg-gradient-to-r from-[#01d3e2] to-[#00a3b1] text-slate-950 font-bold py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                {...fadeSide}
                transition={{ delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className="group p-4 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl flex items-center gap-4 sm:gap-6 hover:bg-white/10 hover:border-[#01d3e2]/30 transition-all min-w-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#01d3e2]/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon className="text-[#01d3e2]" />
                </div>

                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    {item.title}
                  </h4>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm sm:text-lg font-medium text-white/90 hover:text-[#01d3e2] break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-lg text-white/90 break-words">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Preview */}
            <motion.div
              {...fadeSide}
              onClick={() => setShowMap(true)}
              className="group relative h-40 sm:h-48 bg-slate-900 border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer hover:border-[#01d3e2]/50 transition-all will-change-transform"
            >
              <div className="absolute inset-0 grayscale opacity-40">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000"
                  alt="City Map"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-[#020617]/40 flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#01d3e2] text-slate-950 rounded-full flex items-center justify-center mb-3">
                  <FaMapMarkerAlt />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">See me in Map</h4>
                <p className="text-xs text-slate-400">Click to expand</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Map Modal */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={shouldReduceMotion ? {} : { scale: 0.96, y: 20 }}
              animate={shouldReduceMotion ? {} : { scale: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { scale: 0.96, y: 20 }}
              className="relative w-full max-w-6xl h-[80dvh] bg-slate-900 rounded-xl sm:rounded-[2rem] overflow-hidden border border-white/20 will-change-transform"
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all"
              >
                <X size={20} />
              </button>

              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0204166438236!2d88.363895175075!3d22.610144430039738!2m3!1f0!2f0!3f0"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}