import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiStar, FiSun, FiTruck, FiShield, FiAward } from 'react-icons/fi';
import heroDesktopImage from '../assets/hero-mango-negative-space.webp';
import heroMobileImage from '../assets/hero-mango-mobile.webp';
import farmOrchardImage from '../assets/about/farm-orchard.webp';
import harvestCloseImage from '../assets/about/harvest-close.webp';
import { getProductBySlug } from '../data/products';

const HomePage = () => {
  const navigate = useNavigate();

  const featuredRef = useRef(null);
  const trustRef = useRef(null);
  const storyRef = useRef(null);
  const testimonialsRef = useRef(null);

  const featuredInView = useInView(featuredRef, { once: true, amount: 0.15 });
  const trustInView = useInView(trustRef, { once: true, amount: 0.15 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.15 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.15 });

  const featuredControls = useAnimation();
  const trustControls = useAnimation();
  const storyControls = useAnimation();
  const testimonialsControls = useAnimation();

  useEffect(() => {
    if (featuredInView) featuredControls.start('visible');
    if (trustInView) trustControls.start('visible');
    if (storyInView) storyControls.start('visible');
    if (testimonialsInView) testimonialsControls.start('visible');
  }, [featuredInView, trustInView, storyInView, testimonialsInView,
      featuredControls, trustControls, storyControls, testimonialsControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
  };
  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const featuredSlugs = ['sindhri', 'white-chaunsa', 'anwar-ratool'];

  const trustSignals = [
    { Icon: FiAward, title: '40+ Years', desc: 'Family farming heritage' },
    { Icon: FiSun, title: 'Carbide-Free', desc: 'Naturally ripened only' },
    { Icon: FiTruck, title: 'Farm Direct', desc: 'Direct from orchard' },
    { Icon: FiShield, title: 'Free Delivery', desc: 'Nationwide shipping' },
  ];

  const testimonials = [
    { name: 'Ayesha Khan', city: 'Lahore', text: 'Amazing packaging and the sweetest Sindhri mangoes I\'ve ever tasted!', rating: 5 },
    { name: 'Hassan Ali', city: 'Karachi', text: 'Arrived fresh within 24 hours. Incredible quality and service!', rating: 5 },
    { name: 'Fatima Malik', city: 'Islamabad', text: 'Perfect gift for my family. Premium packaging, premium fruit!', rating: 5 },
  ];

  const varieties = ['Sindhri', 'White Chaunsa', 'Anwar Ratool', 'Black Chaunsa', 'Azeem Chaunsa',
    'Dusehri', 'Langra', 'Nawabpuri', 'Lal Badshah', 'Faiz Kareem'];

  return (
    <div className="bg-fasal-sand dark:bg-fasal-night transition-colors duration-300 overflow-x-hidden">

      {/* ═══════ HERO — Editorial mango scene with overlaid copy ═══════ */}
      <section className="bg-fasal-sand dark:bg-fasal-night overflow-hidden">
        <div className="sm:hidden">
          <div className="relative h-[38svh] min-h-[280px] overflow-hidden">
            <img
              src={heroMobileImage}
              alt="Fresh Fasal mangoes arranged in a woven basket"
              className="absolute inset-0 h-full w-full object-cover object-[82%_18%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fasal-sand dark:to-fasal-night" />
          </div>
          <div className="px-4 pt-6 pb-10">
            <h1 className="font-display text-4xl leading-[0.95] font-bold text-fasal-darkgreen dark:text-[#FAF3D6] tracking-tight mb-4">
              Taste the<br />
              <span className="text-fasal-terracotta">Authentic</span><br />
              Sweetness
            </h1>
            <p className="font-sans text-sm text-fasal-brown/85 dark:text-gray-200 leading-relaxed mb-6 max-w-[22rem]">
              Export-quality Multani mangoes, handpicked from our family orchards in
              Rohillanwali. Naturally ripened. Carbide-free. Delivered fresh.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => navigate('/shop')}
                className="w-full px-8 py-4 bg-fasal-darkgreen text-fasal-sand font-bold text-base rounded-full shadow-xl inline-flex items-center justify-center gap-3 group"
              >
                Shop Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => navigate('/about')}
                className="w-full px-8 py-4 border-2 border-fasal-darkgreen text-fasal-darkgreen dark:border-fasal-ochre dark:text-fasal-ochre font-bold text-base rounded-full bg-fasal-sand hover:bg-fasal-darkgreen hover:text-fasal-sand dark:hover:bg-fasal-ochre dark:hover:text-gray-900 transition-all duration-300"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>

        <div className="hidden sm:block relative min-h-[92svh] items-end overflow-hidden">
          <img
            src={heroDesktopImage}
            alt="Fresh Fasal mangoes arranged in a woven basket"
            className="absolute inset-0 h-full w-full object-cover object-[66%_35%] lg:object-[68%_34%]"
            />
          <div className="absolute inset-0 bg-gradient-to-b from-fasal-sand/28 via-fasal-sand/8 to-fasal-sand dark:from-fasal-night/45 dark:via-fasal-night/15 dark:to-fasal-night" />
          <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-fasal-sand via-fasal-sand/92 to-transparent dark:from-fasal-night dark:via-fasal-night/92" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(232,220,199,0.18)_0%,rgba(232,220,199,0.08)_36%,rgba(232,220,199,0)_54%,rgba(232,220,199,0)_100%)] dark:bg-[linear-gradient(90deg,rgba(17,21,11,0.36)_0%,rgba(17,21,11,0.18)_36%,rgba(17,21,11,0)_54%,rgba(17,21,11,0)_100%)]" />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 lg:pb-16 pt-32">
            <div className="max-w-3xl text-left sm:text-center lg:text-left">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] leading-[0.98] sm:leading-[0.95] tracking-tight mb-5 drop-shadow-[0_2px_16px_rgba(232,220,199,0.38)]">
                Taste the<br />
                <span className="text-fasal-terracotta">Authentic</span><br />
                Sweetness
              </h1>

              <p className="font-sans text-base sm:text-lg md:text-xl text-fasal-brown/85 dark:text-gray-200 max-w-xl sm:mx-auto lg:mx-0 mb-7 leading-relaxed">
                Export-quality Multani mangoes, handpicked from our family orchards in
                Rohillanwali. Naturally ripened. Carbide-free. Delivered fresh.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:justify-center lg:justify-start items-stretch sm:items-center w-full max-w-md sm:max-w-none">
                <button
                  onClick={() => navigate('/shop')}
                  className="w-full sm:w-auto px-8 py-4 bg-fasal-darkgreen text-fasal-sand font-bold text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center gap-3 group"
                >
                  Shop Now
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-fasal-darkgreen text-fasal-darkgreen dark:border-fasal-ochre dark:text-fasal-ochre font-bold text-base rounded-full bg-fasal-sand/35 backdrop-blur-sm hover:bg-fasal-darkgreen hover:text-fasal-sand dark:hover:bg-fasal-ochre dark:hover:text-gray-900 transition-all duration-300"
                >
                  Our Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ VARIETY TICKER — Horizontal scroll ═══════ */}
      <section className="bg-fasal-darkgreen dark:bg-gray-800 py-5 overflow-hidden">
        <div className="animate-marquee">
          {[...Array(2)].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              {varieties.map((name, i) => (
                <span key={`${setIdx}-${i}`} className="mx-8 text-fasal-sand/60 font-display text-sm tracking-widest uppercase whitespace-nowrap">
                  {name} <span className="text-fasal-ochre mx-4">·</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ═══════ TRUST BAR — Horizontal pill badges ═══════ */}
      <motion.section
        ref={trustRef}
        initial="hidden"
        animate={trustControls}
        variants={stagger}
        className="py-12 px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 min-[430px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {trustSignals.map((signal, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex h-full min-h-[108px] items-center gap-4 bg-fasal-oat/50 dark:bg-fasal-ink rounded-2xl p-4 sm:min-h-[118px] sm:p-5 border border-fasal-sage/10 hover:border-fasal-terracotta/20 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-fasal-terracotta/10 flex items-center justify-center flex-shrink-0">
                  <signal.Icon className="w-5 h-5 text-fasal-terracotta" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-bold text-fasal-darkgreen dark:text-[#FAF3D6] text-sm leading-tight">{signal.title}</h3>
                  <p className="text-fasal-brown/60 dark:text-gray-400 text-xs mt-0.5 leading-snug">{signal.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════ FEATURED PRODUCTS — Large stacked cards ═══════ */}
      <motion.section
        ref={featuredRef}
        initial="hidden"
        animate={featuredControls}
        variants={stagger}
        className="py-14 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-10" variants={fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-4">
              Season's Finest
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fasal-ochre to-fasal-terracotta mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {featuredSlugs.map((slug, index) => {
              const product = getProductBySlug(slug);
              if (!product) return null;
              const minPrice = Math.min(...product.variants.map((v) => v.price));
              const imageClass = product.imageFit === 'contain'
                ? 'object-contain p-2 group-hover:scale-[1.02]'
                : 'object-cover group-hover:scale-105';

              return (
                <motion.div
                  key={product.id}
                  variants={scaleIn}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/shop/${product.slug}`)}
                >
                  <div className="relative rounded-3xl overflow-hidden bg-fasal-oat/30 dark:bg-gray-800 border border-fasal-sage/10 hover:shadow-2xl hover:shadow-fasal-terracotta/10 transition-all duration-500">
                    {/* Image */}
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`w-full h-full ${imageClass} transition-transform duration-700 ease-out`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-fasal-darkgreen/60 via-transparent to-transparent" />

                      {product.type === 'Premium' && (
                        <div className="absolute top-4 left-4 bg-fasal-terracotta text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                          Premium
                        </div>
                      )}

                      {/* Overlay info at bottom of image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                          {product.name}
                        </h3>
                        <p className="text-white/70 text-sm font-sans line-clamp-1 mb-3">
                          {product.flavorProfile}
                        </p>
                        <div className="flex flex-col items-start gap-3 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-between">
                          <span className="text-fasal-ochre font-bold text-lg font-display leading-none">
                            From Rs. {minPrice.toLocaleString('en-PK')}
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-bold group-hover:bg-fasal-terracotta transition-colors duration-300 self-start">
                            View Details
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div className="text-center mt-14" variants={fadeInUp}>
            <button
              onClick={() => navigate('/shop')}
              className="px-8 py-3.5 border-2 border-fasal-terracotta text-fasal-terracotta dark:text-fasal-ochre dark:border-fasal-ochre rounded-full font-bold text-sm hover:bg-fasal-terracotta hover:text-white dark:hover:bg-fasal-ochre dark:hover:text-gray-900 transition-all duration-300 inline-flex items-center gap-2"
            >
              View All 10 Varieties <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════ FARM STORY — Separate copy from media for readability ═══════ */}
      <motion.section
        ref={storyRef}
        initial="hidden"
        animate={storyControls}
        variants={stagger}
        className="bg-fasal-darkgreen dark:bg-fasal-night px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20"
      >
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-10">
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] border border-fasal-sand/10 bg-fasal-moss">
              <img
                src={farmOrchardImage}
                alt="Fasal Mangoes orchard in Rohillanwali"
                className="aspect-[4/3] w-full object-cover object-[54%_48%] sm:aspect-[16/10] lg:aspect-[5/6]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fasal-darkgreen/45 via-transparent to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-fasal-sand/10 bg-fasal-sand/5">
                <img
                  src={harvestCloseImage}
                  alt="Fresh mango harvest from Fasal Mangoes"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex min-h-[120px] flex-col justify-center rounded-2xl border border-fasal-sand/10 bg-fasal-sand/8 p-4">
                <span className="font-display text-3xl font-bold leading-none text-fasal-ochre">40+</span>
                <span className="mt-2 text-sm font-semibold leading-snug text-fasal-sand">years of family farming</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-fasal-ochre">
              Farm direct
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.02] text-fasal-sand sm:text-5xl md:text-6xl">
              From Our Family Orchards to Your Table
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base font-medium leading-relaxed text-[#FFF7DF] drop-shadow-[0_2px_8px_rgba(18,22,10,0.65)] sm:text-lg">
              Three generations of mango cultivation in Rohillanwali. We harvest at peak
              ripeness, pack within hours, and deliver to your door within 24 hours.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-bold text-[#FFF7DF] sm:grid-cols-3">
              {['No middlemen', 'No carbide', 'No compromise'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#FFF7DF]/45 bg-[#12160A]/24 px-4 py-3 shadow-[0_8px_24px_rgba(18,22,10,0.16)] backdrop-blur-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <button
                onClick={() => navigate('/about')}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-fasal-sand px-8 py-4 text-base font-bold text-fasal-darkgreen transition-all duration-300 hover:bg-white sm:w-auto"
              >
                Learn Our Story <FiArrowRight />
              </button>
              <a
                href="https://wa.me/923096436565"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-fasal-sand/60 px-8 py-4 text-base font-bold text-fasal-sand transition-all duration-300 hover:bg-fasal-sand/10 sm:w-auto"
              >
                Chat With Us
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ═══════ TESTIMONIALS — Offset cards ═══════ */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={stagger}
        className="py-16 px-4 sm:px-6 md:px-12 lg:px-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-10" variants={fadeInUp}>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-fasal-darkgreen dark:text-[#FAF3D6] mb-4">
              What Mango Lovers Say
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fasal-ochre to-fasal-terracotta mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className={`bg-fasal-oat/40 dark:bg-gray-800 rounded-3xl p-6 sm:p-8 border border-fasal-sage/10 ${
                  i === 1 ? 'md:mt-8' : ''
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <FiStar key={j} className="w-4 h-4 text-fasal-ochre fill-fasal-ochre" />
                  ))}
                </div>
                {/* Quote */}
                <p className="font-sans text-fasal-brown/80 dark:text-gray-300 text-base leading-relaxed italic mb-6">
                  "{t.text}"
                </p>
                {/* Name */}
                <div className="border-t border-fasal-sage/10 pt-4">
                  <p className="font-display font-bold text-fasal-darkgreen dark:text-[#FAF3D6] text-sm">{t.name}</p>
                  <p className="text-fasal-terracotta text-xs font-sans">{t.city}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════ BOTTOM CTA — Bold gradient banner ═══════ */}
      <section className="px-4 sm:px-6 pb-14">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-fasal-darkgreen to-fasal-moss rounded-3xl px-6 py-10 sm:p-12 md:p-20 text-center relative overflow-hidden">
          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-fasal-sand leading-tight mb-5">
              Fresh Mangoes, Delivered
            </h2>
            <p className="font-sans text-fasal-sand/70 text-lg max-w-lg mx-auto mb-10">
              Order today and taste the difference of naturally ripened,
              handpicked Multani mangoes from our family orchards.
            </p>
            <button
              onClick={() => navigate('/shop')}
              className="px-10 py-4 bg-fasal-terracotta text-white font-bold text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-3 group"
            >
              Order Now <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
