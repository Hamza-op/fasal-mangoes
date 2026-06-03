import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '923096436565';
  const message = 'Hi Fasal Mangoes! I have a question about your products.';

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-24 sm:right-6 z-40 rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#22c35e] flex items-center justify-center shadow-lg transition-all duration-300 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        animation: 'whatsappBreath 3s ease-in-out infinite',
      }}
    >
      <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:rotate-12 transition-transform duration-300" />

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
