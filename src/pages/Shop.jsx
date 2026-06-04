import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSun, FiPackage, FiAward } from 'react-icons/fi';
import { getAllProducts } from '../data/products';
import { motion } from 'framer-motion';

export default function Shop() {
  const products = getAllProducts();

  const getStartingPrice = (variants) => {
    if (!variants || variants.length === 0) return 0;
    return Math.min(...variants.map((v) => v.price));
  };

  return (
    <div className="min-h-screen bg-fasal-sand dark:bg-gray-900 transition-colors duration-300">

      {/* ═══════ HERO HEADER — Full-width banner ═══════ */}
      <section className="relative pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="text-fasal-terracotta dark:text-fasal-ochre font-bold uppercase tracking-widest text-xs bg-fasal-terracotta/8 dark:bg-fasal-ochre/10 px-4 py-2 rounded-full border border-fasal-terracotta/15 dark:border-fasal-ochre/15">
              From our orchards
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl min-[420px]:text-4xl md:text-5xl lg:text-6xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] leading-[1.08] md:leading-[1.05] tracking-tight mb-5"
          >
            10 Premium Varieties,<br />
            <span className="text-fasal-terracotta">Naturally Ripened</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm sm:text-base md:text-lg text-fasal-brown/80 dark:text-gray-300 max-w-2xl leading-relaxed"
          >
            Hand-picked at peak maturity from our family orchards in Rohillanwali, Muzaffargarh.
            Export-grade quality. Free nationwide delivery. Shipped within 24 hours of harvest.
          </motion.p>
        </div>
      </section>

      {/* ═══════ PRODUCT GRID — Alternating large/small ═══════ */}
      <section className="px-4 sm:px-6 pb-14">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {products.map((product, idx) => {
              const price = getStartingPrice(product.variants);
              const isLargeFeature = idx === 0 && product.slug !== 'sindhri';
              const imageClass = product.imageFit === 'contain'
                ? 'object-contain p-2 group-hover:scale-[1.02]'
                : 'object-cover group-hover:scale-105';

              return (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className={isLargeFeature ? 'lg:row-span-2' : ''}
                >
                  <Link to={`/shop/${product.slug}`} className="group block h-full">
                    <div className={`relative rounded-3xl overflow-hidden bg-fasal-oat/30 dark:bg-gray-800 border border-fasal-sage/10 hover:shadow-2xl hover:shadow-fasal-terracotta/5 transition-all duration-500 h-full flex flex-col`}>
                      
                      {/* Image */}
                      <div className={`relative overflow-hidden ${isLargeFeature ? 'aspect-[3/4] lg:aspect-auto lg:flex-1' : 'aspect-square'}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`w-full h-full ${imageClass} transition-transform duration-700 ease-out`}
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Premium badge */}
                        {product.type === 'Premium' && (
                          <div className="absolute top-3 left-3 bg-fasal-terracotta/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                            Premium
                          </div>
                        )}

                        {/* Season badge */}
                        <div className="absolute top-3 right-3 max-w-[45%] truncate bg-fasal-darkgreen/80 backdrop-blur-sm text-fasal-sand px-3 py-1 rounded-full text-[10px] font-bold tracking-wide">
                          {product.season}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5 flex-shrink-0">
                        <div className="flex flex-col items-start gap-1.5 min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between mb-2">
                          <h3 className="font-display text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] group-hover:text-fasal-terracotta transition-colors duration-300 leading-tight">
                            {product.name}
                          </h3>
                          <span className="text-fasal-terracotta font-display font-bold text-lg leading-none min-[430px]:text-right min-[430px]:shrink-0">
                            Rs. {price.toLocaleString('en-PK')}
                          </span>
                        </div>

                        <p className="text-fasal-brown/60 dark:text-gray-400 text-xs font-sans line-clamp-1 mb-3">
                          {product.flavorProfile}
                        </p>

                        <div className="flex items-center justify-between gap-3">
                          <span className="min-w-0 truncate text-[10px] font-bold uppercase tracking-wider text-fasal-darkgreen/50 dark:text-gray-500">
                            {product.origin.split(',')[0]}
                          </span>
                          <span className="text-fasal-terracotta font-sans text-xs font-semibold group-hover:translate-x-0.5 transition-transform duration-300 inline-flex items-center gap-1 shrink-0">
                            View <FiArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHY FASAL — Three pillars ═══════ */}
      <section className="px-4 sm:px-6 py-14 border-t border-fasal-sage/10 dark:border-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-3">
              Why Fasal Mangoes?
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-fasal-ochre to-fasal-terracotta mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { Icon: FiSun, title: 'Farm Fresh', desc: 'Hand-picked from our family orchards in Rohillanwali with over 40 years of expertise. 100% carbide-free.' },
              { Icon: FiPackage, title: 'Quick Delivery', desc: 'Shipped within 24 hours of harvest in custom wooden crates. Free nationwide delivery across Pakistan.' },
              { Icon: FiAward, title: 'Export Grade', desc: 'Every fruit is individually sorted and graded for excellence. The same quality we ship internationally.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-fasal-oat/30 dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border border-fasal-sage/10 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-fasal-terracotta/10 flex items-center justify-center mx-auto mb-5">
                  <card.Icon className="w-6 h-6 text-fasal-terracotta" />
                </div>
                <h3 className="font-display text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-2">{card.title}</h3>
                <p className="text-fasal-brown/70 dark:text-gray-400 text-sm font-sans leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
