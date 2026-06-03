import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiHeart, FiMapPin, FiAward, FiUsers, FiDroplet } from 'react-icons/fi';
import farmOrchard from '../assets/about/farm-orchard.webp';
import farmTour from '../assets/about/farm-tour.mp4';
import farmTree from '../assets/about/farm-tree.webp';
import harvestClose from '../assets/about/harvest-close.webp';
import harvestSide from '../assets/about/harvest-side.webp';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const values = [
    {
      icon: FiSun,
      title: 'Naturally Ripened',
      desc: '100% carbide-free mangoes, ripened naturally under the sun the way nature intended.',
    },
    {
      icon: FiHeart,
      title: 'Family Heritage',
      desc: 'Over 40 years of mango farming expertise passed down through three generations.',
    },
    {
      icon: FiMapPin,
      title: 'Rohillanwali Origin',
      desc: 'Grown in the heart of the Multani mango belt in Muzaffargarh, Punjab.',
    },
    {
      icon: FiAward,
      title: 'Export Grade',
      desc: 'Every mango individually sorted and graded to meet premium export standards.',
    },
    {
      icon: FiUsers,
      title: 'Direct from Farmer',
      desc: 'No middlemen. Farm to doorstep delivery ensuring freshness and fair pricing.',
    },
    {
      icon: FiDroplet,
      title: 'Pure & Chemical-Free',
      desc: 'No artificial chemicals or preservatives. Just pure, honest fruit from our orchards.',
    },
  ];

  const stats = [
    { number: '10', label: 'Mango Varieties' },
    { number: '3+', label: 'Generations of Farming' },
    { number: '24h', label: 'Harvest to Dispatch' },
    { number: '100%', label: 'Carbide-Free' },
  ];

  return (
    <div className="bg-fasal-sand dark:bg-gray-900 min-h-screen pt-24 pb-12 transition-colors duration-300">
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-14">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] leading-tight font-display"
          >
            From our family orchards to your table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="text-base md:text-lg text-fasal-brown/80 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
          >
            Fasal Mangoes is rooted in Rohillanwali, District Muzaffargarh, Punjab, situated adjacent to the core Multani mango agricultural belt. We have been cultivating and delivering premium, hand-picked, carbide-free Multani mangoes from our family orchards for over 40 years. What began as a small family farming operation has grown into one of the most trusted names in premium mango delivery across Pakistan.
          </motion.p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src={farmOrchard}
                alt="Fasal Mangoes family orchard"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden aspect-[4/5]">
              <video
                src={farmTour}
                poster={farmOrchard}
                title="Farm tour at Fasal Mangoes"
                className="w-full h-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src={harvestClose}
                alt="Close-up of fresh organic mangoes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center space-y-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] font-display">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fasal-terracotta to-fasal-ochre mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {values.map((value, i) => {
              const ValueIcon = value.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-fasal-oat/40 dark:bg-gray-800 p-8 rounded-3xl border border-fasal-sage/10 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-fasal-terracotta/10 flex items-center justify-center mb-5">
                    <ValueIcon className="text-fasal-terracotta w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-2 font-display">
                    {value.title}
                  </h3>
                  <p className="text-fasal-brown/70 dark:text-gray-400 text-sm leading-relaxed font-sans">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 md:px-12 lg:px-20 mb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-fasal-darkgreen rounded-3xl p-12 md:p-16 text-fasal-sand relative overflow-hidden"
          >
            {/* Grain overlay for dark background */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-3">
                  Our Farm in Numbers
                </h2>
                <div className="w-16 h-1 bg-fasal-ochre mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                    className="text-center"
                  >
                    <p className="font-display text-4xl md:text-5xl font-bold text-fasal-ochre mb-2">
                      {stat.number}
                    </p>
                    <p className="text-fasal-sand/80 text-sm font-medium font-sans">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Images Row */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div className="rounded-3xl overflow-hidden aspect-[3/2]">
              <img
                src={farmTree}
                alt="Lush mango trees in our orchards"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-3xl overflow-hidden aspect-[3/2]">
              <img
                src={harvestSide}
                alt="Side view of freshly harvested mangoes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
