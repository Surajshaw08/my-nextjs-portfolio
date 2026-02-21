"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ContactPage() {
  const [showMap, setShowMap] = useState(false);

  const contactInfo = [
    { 
      icon: FaEnvelope, 
      title: "Email", 
      value: "surajshaw17082004@gmail.com", 
      link: "mailto:surajshaw17082004@gmail.com" 
    },
    { 
      icon: FaPhoneAlt, 
      title: "Phone", 
      value: "+91 6290315511", 
      link: "tel:+916290315511" 
    },
    { 
      icon: FaMapMarkerAlt, 
      title: "Location", 
      value: "Kolkata, India", 
      link: null 
    }
  ];

  return (
    <div className="relative min-h-screen bg-[#020617] text-white px-6 pt-28 pb-20 flex flex-col items-center overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#01d3e2]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#01d3e2]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold tracking-tight mb-4"
          >
            Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#01d3e2] to-[#00a3b1]">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto font-light"
          >
            Reach out to collaborate, connect, or just say hi 👋
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-start">
          {/* Left: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#01d3e2]">Send Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 transition-all placeholder:text-slate-600"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter subject"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 transition-all placeholder:text-slate-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me more..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#01d3e2]/50 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              <button className="w-full group bg-gradient-to-r from-[#01d3e2] to-[#00a3b1] text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(1,211,226,0.3)]">
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Info Cards */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center gap-6 hover:bg-white/10 hover:border-[#01d3e2]/30 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#01d3e2]/10 rounded-full flex items-center justify-center group-hover:bg-[#01d3e2]/20 transition-all">
                  <item.icon className="text-[#01d3e2] text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-lg font-medium text-white/90 hover:text-[#01d3e2] transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-lg font-medium text-white/90">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Reveal Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setShowMap(true)}
              className="group relative h-48 bg-slate-900 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#01d3e2]/50 transition-all"
            >
              <div className="absolute inset-0 grayscale opacity-40 group-hover:opacity-60 transition-opacity">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                  alt="City Map" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-[#020617]/40 flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm group-hover:backdrop-blur-none transition-all">
                <div className="w-12 h-12 bg-[#01d3e2] text-slate-950 rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(1,211,226,0.3)]">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-1">See me in Map</h4>
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
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-full max-h-[85vh] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl"
            >
              <button 
                onClick={() => setShowMap(false)}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full flex items-center justify-center text-white transition-all"
              >
                <X size={24} />
              </button>
              
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0204166438236!2d88.363895175075!3d22.610144430039738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772a2e8d9e99%3A0x27ac28d94be72ee!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sin!4v1684133806511!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="absolute bottom-10 left-10 z-20 p-6 bg-slate-950/80 backdrop-blur-xl border border-white/10 rounded-2xl max-w-sm hidden md:block">
                <h3 className="text-xl font-bold text-[#01d3e2] mb-2">My Office Location</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Based in Kolkata, West Bengal, India. Available for remote work and local collaborations.
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm text-[#01d3e2]">
                  <FaPhoneAlt size={12} />
                  <span>+91 6290315511</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

