import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fasal-darkgreen relative overflow-hidden">
      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Top section — Brand + Tagline */}
        <div className="py-12 border-b border-fasal-sand/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Fasal Mangoes" className="h-12 w-auto rounded-xl" />
              <div>
                <h3 className="font-display text-2xl font-bold text-fasal-sand">Fasal Mangoes</h3>
                <p className="text-fasal-sand/40 text-xs font-sans tracking-wider uppercase">Rohillanwali · Since 1980s</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/923096436565" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-fasal-sand/8 hover:bg-fasal-sand/15 text-fasal-sand/60 hover:text-[#25D366] transition-all duration-300">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/fasal_mangoes?igsh=cW15dThoeTU3MW9y" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-fasal-sand/8 hover:bg-fasal-sand/15 text-fasal-sand/60 hover:text-fasal-ochre transition-all duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61577933589139" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-fasal-sand/8 hover:bg-fasal-sand/15 text-fasal-sand/60 hover:text-fasal-ochre transition-all duration-300">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@fasal_mangoes?_r=1&_t=ZS-96lodqL5ew0" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-fasal-sand/8 hover:bg-fasal-sand/15 text-fasal-sand/60 hover:text-fasal-ochre transition-all duration-300">
                <FaTiktok className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-fasal-sand mb-5 tracking-wide">Shop</h4>
            <ul className="space-y-3">
              {[
                { label: 'All Mangoes', path: '/shop' },
                { label: 'Sindhri', path: '/shop/sindhri' },
                { label: 'White Chaunsa', path: '/shop/white-chaunsa' },
                { label: 'Anwar Ratool', path: '/shop/anwar-ratool' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-fasal-sand/50 hover:text-fasal-ochre text-sm font-sans transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-sm font-bold text-fasal-sand mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
                { label: 'Checkout', path: '/checkout' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-fasal-sand/50 hover:text-fasal-ochre text-sm font-sans transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-sm font-bold text-fasal-sand mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', path: '/privacy' },
                { label: 'Terms of Service', path: '/terms' },
                { label: 'Shipping Info', path: '/shipping' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-fasal-sand/50 hover:text-fasal-ochre text-sm font-sans transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-fasal-sand mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm font-sans text-fasal-sand/50">
              <li>
                <a href="https://wa.me/923096436565" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors duration-300">
                  +92 309 6436565
                </a>
              </li>
              <li>
                <a href="mailto:fasalmangoes@gmail.com" className="hover:text-fasal-ochre transition-colors duration-300">
                  fasalmangoes@gmail.com
                </a>
              </li>
              <li className="text-fasal-sand/30 leading-relaxed">
                Rohillanwali, Muzaffargarh<br />Punjab, Pakistan
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-fasal-sand/8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-fasal-sand/30 text-xs font-sans">
            © {currentYear} Fasal Mangoes. All rights reserved.
          </p>
          <p className="text-fasal-sand/20 text-[10px] font-sans">
            Handcrafted in Rohillanwali 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
