import React from 'react';
import { motion } from 'framer-motion';

export default function Shipping() {
  const sections = [
    {
      title: 'Delivery Areas',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            We deliver mangoes nationwide across Pakistan. Whether you are in Lahore, Karachi, Islamabad, Peshawar, Quetta, or any other city, we will get farm-fresh mangoes to your doorstep.
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>All major cities: Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta</li>
            <li>Smaller cities and towns across all provinces</li>
            <li>Local pickup available in Rohillanwali, Muzaffargarh district</li>
            <li>Remote areas may require additional 1-2 days for delivery</li>
          </ul>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mt-3">
            Delivery is currently <span className="font-semibold text-fasal-darkgreen dark:text-[#FAF3D6]">FREE</span> on all orders nationwide.
          </p>
        </>
      ),
    },
    {
      title: 'Shipping Times',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            We follow a harvest-to-ship model to ensure maximum freshness:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Orders are harvested and dispatched within 24 hours of advance payment confirmation</li>
            <li>Major cities (Lahore, Karachi, Islamabad, Multan): 1-2 business days</li>
            <li>Other cities across Punjab, Sindh, KPK: 2-3 business days</li>
            <li>Balochistan and remote areas: 3-4 business days</li>
          </ul>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mt-3">
            These timeframes are estimates. Actual delivery may vary due to weather conditions, peak season demand, or logistics disruptions. We will keep you updated via WhatsApp throughout the delivery process.
          </p>
        </>
      ),
    },
    {
      title: 'Packaging',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            We take packaging seriously to ensure your mangoes arrive in perfect condition:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>All mangoes are packed in sturdy wooden crates for maximum protection during transit</li>
            <li>Each mango is individually wrapped to prevent bruising</li>
            <li>Protective padding is placed between layers of fruit</li>
            <li>Crates are designed to allow natural airflow, keeping mangoes fresh</li>
            <li>Every box is quality-checked before dispatch to ensure only the best fruit is shipped</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Tracking',
      content: (
        <p className="text-fasal-brown dark:text-gray-300 leading-relaxed">
          Once your order is dispatched, we will share the tracking details with you via WhatsApp. You can reach out to us at any time on +92 309 6436565 for real-time updates on your shipment. We use trusted logistics partners to ensure reliable and timely delivery across Pakistan.
        </p>
      ),
    },
    {
      title: 'Delivery Issues',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            If you encounter any issues with your delivery, please contact us immediately:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Report damaged or missing items within 24 hours of receiving your order</li>
            <li>Send photographs of any damaged fruit or packaging via WhatsApp</li>
            <li>We will investigate promptly and arrange a replacement or refund as appropriate</li>
            <li>If your delivery is delayed beyond the estimated timeframe, contact us for an update</li>
            <li>Replacement shipments for verified damage claims are sent free of charge</li>
          </ul>
          <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-2xl p-5 border border-fasal-sage/10 mt-4">
            <p className="font-semibold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">Need Help?</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">WhatsApp: +92 309 6436565</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Email: fasalmangoes@gmail.com</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Hours: 24/7</p>
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
          Shipping & Delivery
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
