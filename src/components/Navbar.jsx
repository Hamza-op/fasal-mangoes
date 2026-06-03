import React, { useState, useEffect, useCallback } from "react";
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import logo from "../assets/logo.webp";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCartDrawer, setShowCartDrawer] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedMode = localStorage.getItem("darkMode");
      return savedMode ? JSON.parse(savedMode) === true : false;
    } catch {
      localStorage.removeItem("darkMode");
      return false;
    }
  });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    } catch {
      // Theme state still works for the current session without persistence.
    }
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode(prev => !prev), []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const { totalItems } = useCart();
  const currentPath = location.pathname;
  const actionButtonClass = scrolled
    ? "hover:bg-fasal-sage/10"
    : "hover:bg-fasal-sage/15 dark:hover:bg-fasal-darkgreen/28";
  const actionIconClass = scrolled
    ? "text-fasal-darkgreen dark:text-gray-200"
    : "text-fasal-darkgreen dark:text-gray-200";

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-fasal-sand/95 dark:bg-fasal-night/95 backdrop-blur-xl shadow-[0_2px_30px_rgba(78,88,48,0.08)] py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <img
              src={logo}
              alt="Fasal Mangoes"
              className="h-9 sm:h-10 w-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden min-[360px]:flex flex-col">
              <span className="font-display text-lg font-bold text-fasal-darkgreen dark:text-[#FAF3D6] leading-tight tracking-tight">
                Fasal
              </span>
              <span className="text-[9px] font-sans font-semibold text-fasal-terracotta uppercase tracking-[0.2em] leading-none">
                Mangoes
              </span>
            </div>
          </Link>

          {/* Desktop Nav — pill-style */}
          <div className="hidden md:flex items-center">
            <div className={`flex items-center gap-1 ${scrolled ? 'bg-fasal-oat/50 dark:bg-fasal-ink/50' : 'bg-fasal-sand/60 dark:bg-fasal-ink/40'} backdrop-blur-sm rounded-full px-1.5 py-1.5 border border-fasal-sage/10`}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
                    currentPath === item.path
                      ? 'text-white'
                      : 'text-fasal-darkgreen dark:text-gray-300 hover:text-fasal-terracotta'
                  }`}
                >
                  {currentPath === item.path && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-fasal-darkgreen dark:bg-fasal-ochre rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className={`flex items-center gap-1 p-1 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-fasal-oat/50 dark:bg-fasal-ink/50 border border-fasal-sage/10'
              : 'bg-fasal-sand/80 dark:bg-fasal-ink/60 border border-fasal-sage/15'
          } backdrop-blur-md shadow-sm shrink-0`}>
            {/* Cart */}
            <button
              onClick={() => setShowCartDrawer(true)}
              className={`relative p-2 sm:p-2.5 rounded-full transition-colors duration-300 ${actionButtonClass}`}
              aria-label="Open cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${actionIconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-fasal-terracotta text-fasal-sand text-[9px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 shadow-[0_2px_8px_rgba(18,22,10,0.28)]">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Dark mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-1.5 sm:p-2.5 rounded-full transition-all duration-300 ${actionButtonClass}`}
              aria-label={darkMode ? "Light mode" : "Dark mode"}
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-fasal-ochre" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className={`w-5 h-5 ${actionIconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 sm:p-2.5 rounded-full transition-colors duration-300 ${actionButtonClass}`}
              aria-label="Menu"
            >
              <svg className={`w-5 h-5 ${actionIconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-fasal-sage/10"
            >
              <div className="px-6 py-4 bg-fasal-sand/95 dark:bg-fasal-night/95 backdrop-blur-xl space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-2xl font-sans text-sm font-medium transition-all duration-300 ${
                      currentPath === item.path
                        ? 'text-white bg-fasal-darkgreen dark:bg-fasal-ochre dark:text-gray-900'
                        : 'text-fasal-darkgreen dark:text-gray-200 hover:bg-fasal-sage/10'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <CartDrawer isOpen={showCartDrawer} onClose={() => setShowCartDrawer(false)} />
    </>
  );
};

export default Navbar;
