import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage =
      `Assalam-o-Alaikum Fasal Mangoes!\n\n` +
      `*Contact Form Submission*\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Phone:* ${formData.phone || 'Not provided'}\n` +
      `• *Subject:* ${formData.subject}\n\n` +
      `*Message:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/923096436565?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  const inputClasses =
    'w-full bg-fasal-sand/80 dark:bg-gray-700 border border-fasal-sage/20 dark:border-gray-600 rounded-2xl px-4 py-3 text-sm text-fasal-brown dark:text-gray-200 placeholder-fasal-brown/40 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fasal-sage/30 transition-all duration-300 font-sans';

  const contactInfo = [
    { icon: FiPhone, label: 'Phone', value: '+92 309 6436565', href: 'tel:+923096436565' },
    { icon: FiMail, label: 'Email', value: 'fasalmangoes@gmail.com', href: 'mailto:fasalmangoes@gmail.com' },
    { icon: FiMapPin, label: 'Location', value: 'Rohillanwali, Muzaffargarh', href: null },
    { icon: FiClock, label: 'Hours', value: '24/7', href: null },
  ];

  const socials = [
    { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/923096436565', color: 'text-[#25D366]' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/fasal_mangoes', color: 'text-[#E4405F]' },
    { icon: FaFacebook, label: 'Facebook', href: 'https://facebook.com/profile.php?id=61577933589139', color: 'text-[#1877F2]' },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="bg-fasal-sand dark:bg-gray-900 min-h-screen pt-24 pb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <p className="text-sm font-semibold text-fasal-terracotta mb-2 font-sans">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
            We'd love to hear from you
          </h1>
        </motion.div>

        {/* Main Grid: 1 col info + 2 cols form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Contact Info */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-fasal-terracotta/10 flex-shrink-0">
                    <Icon className="text-fasal-terracotta w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-fasal-brown/60 dark:text-gray-400 mb-0.5 font-sans">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-fasal-brown dark:text-gray-200 font-sans">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-fasal-oat/40 dark:bg-gray-800 p-4 rounded-2xl border border-fasal-sage/10 hover:shadow-md transition-all duration-300"
                >
                  {item.href ? (
                    <a href={item.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </motion.div>
              );
            })}

            {/* Social Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-fasal-oat/40 dark:bg-gray-800 p-4 rounded-2xl border border-fasal-sage/10"
            >
              <p className="text-xs font-semibold text-fasal-brown/60 dark:text-gray-400 mb-3 font-sans">
                Follow Us
              </p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-fasal-sand/80 dark:bg-gray-700 px-4 py-2.5 rounded-xl hover:scale-[1.02] hover:shadow-md transition-all duration-300 border border-fasal-sage/10"
                    >
                      <Icon className={`w-4 h-4 ${social.color}`} />
                      <span className="text-xs font-semibold text-fasal-brown dark:text-gray-200 font-sans">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form (2 cols wide) */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {isSubmitted ? (
              <div className="bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-6 border border-fasal-sage/10 text-center">
                <div className="w-16 h-16 rounded-full bg-fasal-moss/10 flex items-center justify-center mx-auto mb-4">
                  <FiSend className="w-7 h-7 text-fasal-moss" />
                </div>
                <h3 className="text-2xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-fasal-brown dark:text-gray-300 font-sans">
                  Your message has been forwarded to our WhatsApp. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-6 border border-fasal-sage/10 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                      Name <span className="text-fasal-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                      Email <span className="text-fasal-terracotta">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 3XX XXXXXXX"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                      Subject <span className="text-fasal-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-fasal-brown dark:text-gray-300 mb-2 font-sans">
                    Message <span className="text-fasal-terracotta">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us more..."
                    className={inputClasses + ' resize-none'}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-fasal-terracotta text-white py-4 rounded-2xl font-semibold w-full hover:bg-fasal-terracotta/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 font-sans"
                >
                  <FiSend className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
