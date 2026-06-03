import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            When you place an order through our website or WhatsApp, we collect only the information necessary to fulfill your purchase:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Your name and delivery address</li>
            <li>Phone number for delivery coordination</li>
            <li>Email address (if provided)</li>
            <li>Order details including product selections and quantities</li>
          </ul>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mt-3">
            We do not use cookies or any tracking technologies on our website. We do not collect browsing data, IP addresses, or any analytics information.
          </p>
        </>
      ),
    },
    {
      title: 'How We Use Your Information',
      content: (
        <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
          <li>To process and fulfill your mango orders</li>
          <li>To coordinate delivery via our shipping partners</li>
          <li>To communicate order updates via WhatsApp or phone</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To send order confirmations and shipping updates</li>
        </ul>
      ),
    },
    {
      title: 'Information Sharing',
      content: (
        <p className="text-fasal-brown dark:text-gray-300 leading-relaxed">
          We do not sell, rent, or trade your personal information to any third parties. The only sharing that occurs is with our shipping and logistics partners, solely for the purpose of delivering your order to your doorstep. These partners receive only the minimum information necessary — your name, address, and phone number — to complete the delivery.
        </p>
      ),
    },
    {
      title: 'Data Security',
      content: (
        <p className="text-fasal-brown dark:text-gray-300 leading-relaxed">
          We take reasonable measures to protect your personal information. Order communications are handled through WhatsApp's end-to-end encrypted platform. Payment information for bank transfers is shared directly via secure WhatsApp chat and is not stored on our servers. We retain your order information only as long as necessary to complete your transaction and handle any post-delivery support.
        </p>
      ),
    },
    {
      title: 'Your Rights',
      content: (
        <p className="text-fasal-brown dark:text-gray-300 leading-relaxed">
          You have the right to access, update, or request deletion of your personal information at any time. Simply contact us via WhatsApp at +92 309 6436565 or email us at fasalmangoes@gmail.com, and we will promptly address your request.
        </p>
      ),
    },
    {
      title: 'Contact Us',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-4">
            If you have questions about this Privacy Policy or how we handle your data, please reach out:
          </p>
          <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-2xl p-5 border border-fasal-sage/10">
            <p className="font-semibold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">Fasal Mangoes</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Rohillanwali, District Muzaffargarh, Punjab, Pakistan</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Email: fasalmangoes@gmail.com</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Phone: +92 309 6436565</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <motion.div
      className="bg-fasal-sand dark:bg-gray-900 min-h-screen pt-24 pb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-fasal-brown/60 dark:text-gray-400 mb-8 font-sans">
          Last updated: June 2025
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-3">
                {section.title}
              </h2>
              <div className="font-sans text-sm leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
