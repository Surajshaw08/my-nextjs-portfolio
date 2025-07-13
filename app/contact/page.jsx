"use client";

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-16 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-center mb-4">
          Contact <span className="text-[#01d3e2]">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-10">
          Reach out to collaborate, connect, or just say hi 👋
        </p>

        {/* Stylish Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 text-center mb-12">
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition border border-[#01d3e2]">
            <FaEnvelope className="text-[#01d3e2] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold text-lg mb-1">Email</h4>
            <a href="mailto:surajshaw17082004@gmail.com" className="text-gray-300 text-sm hover:underline">
              surajshaw17082004@gmail.com
            </a>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition border border-[#01d3e2]">
            <FaPhoneAlt className="text-[#01d3e2] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold text-lg mb-1">Phone</h4>
            <a href="tel:+916290315511" className="text-gray-300 text-sm hover:underline">
              +91 6290315511
            </a>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-lg transition border border-[#01d3e2]">
            <FaMapMarkerAlt className="text-[#01d3e2] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold text-lg mb-1">Location</h4>
            <p className="text-gray-300 text-sm">Kolkata, India</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-[#01d3e2]">
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
        </div>
      </div>
    </div>
  );
}
