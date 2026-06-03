import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: (
        <p className="text-fasal-brown dark:text-gray-300 leading-relaxed">
          By accessing and using the Fasal Mangoes website and purchasing our products, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, customers, and anyone who accesses or uses our website.
        </p>
      ),
    },
    {
      title: 'Products & Pricing',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            All prices are listed in Pakistani Rupees (PKR) and are subject to change based on seasonal availability. We strive to provide accurate product descriptions and pricing on our website, however:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Mango availability is seasonal and varies by variety (typically May through September)</li>
            <li>Prices may be updated at the start of each season based on harvest conditions</li>
            <li>Product images are representative; natural variations in color, size, and shape are expected</li>
            <li>Weight of boxes is approximate and may vary slightly due to the natural size of fruit</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Orders & Payment',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            Orders are placed through our website and confirmed via WhatsApp. Our payment process works as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>A 30% advance payment is required to reserve your harvest slot</li>
            <li>Payment details are shared via WhatsApp after checkout</li>
            <li>Advance payment can be made via bank transfer, JazzCash, or EasyPaisa</li>
            <li>The remaining 70% is payable as Cash on Delivery (COD)</li>
            <li>Orders are processed only after advance payment is received and confirmed</li>
            <li>We reserve the right to refuse or cancel any order at our discretion</li>
          </ul>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mt-3">
            Bank or wallet details for advance payment are shared via WhatsApp after you place your order.
          </p>
        </>
      ),
    },
    {
      title: 'Shipping & Delivery',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            We offer nationwide delivery across Pakistan. Key shipping details:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Mangoes are harvested and shipped within 24 hours of order confirmation</li>
            <li>Delivery typically takes 1-3 business days depending on your location</li>
            <li>Delivery is currently FREE on all orders nationwide</li>
            <li>All orders are packed in protective wooden crates to ensure safe arrival</li>
            <li>Delivery times are estimates and not guaranteed; delays may occur due to weather or logistics</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Returns & Refunds',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-3">
            Due to the perishable nature of our products, our return and refund policy is as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 text-fasal-brown dark:text-gray-300">
            <li>Report any quality issues or damage within 24 hours of delivery with photographs</li>
            <li>Contact us via WhatsApp with your order details and photos of the issue</li>
            <li>We will arrange a replacement or refund on a case-by-case basis after review</li>
            <li>Refunds, when approved, will be processed within 3-5 business days</li>
            <li>The 30% advance payment is non-refundable once the order has been dispatched</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Contact',
      content: (
        <>
          <p className="text-fasal-brown dark:text-gray-300 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-2xl p-5 border border-fasal-sage/10">
            <p className="font-semibold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">Fasal Mangoes</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Rohillanwali, District Muzaffargarh, Punjab, Pakistan</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">Email: fasalmangoes@gmail.com</p>
            <p className="text-fasal-brown dark:text-gray-300 text-sm">WhatsApp: +92 309 6436565</p>
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
          Terms of Service
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
