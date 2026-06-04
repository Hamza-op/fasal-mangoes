import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton({ compact = false, hidden = false }) {
  const phoneNumber = '923096436565';
  const message = 'Hi Fasal Mangoes! I have a question about your products.';

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  if (hidden) return null;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed right-4 sm:right-6 z-40 rounded-full bg-[#25D366] hover:bg-[#22c35e] flex items-center justify-center shadow-lg transition-all duration-300 group ${
        compact
          ? 'bottom-24 h-11 w-11 sm:bottom-24 sm:h-12 sm:w-12'
          : 'bottom-5 h-12 w-12 sm:bottom-24 sm:h-14 sm:w-14'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        animation: 'whatsappBreath 3s ease-in-out infinite',
      }}
    >
      <FaWhatsapp className={`${compact ? 'h-6 w-6' : 'h-7 w-7 sm:h-8 sm:w-8'} text-white group-hover:rotate-12 transition-transform duration-300`} />

      {/* Inline keyframes for gentle breathing pulse */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes whatsappBreath {
          0%, 100% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3); }
          50% { box-shadow: 0 4px 25px rgba(37, 211, 102, 0.5); }
        }
      `}} />
    </motion.a>
  );
}
