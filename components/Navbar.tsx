'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Coffee, Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from './CartContext';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Coffee Beans', href: '/beans' },
  { name: 'Roast Guide', href: '/roast' },
  { name: 'Grind Guide', href: '/grind' },
  { name: 'Brewing Equipment', href: '/equipment' },
  { name: 'Workshops', href: '/workshops' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex justify-between items-center transition-all duration-500 rounded-2xl ${
            scrolled
              ? 'bg-white/70 backdrop-blur-xl border border-pastel-mocha/30 shadow-sm px-6 py-3'
              : 'bg-transparent px-2 py-2'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group z-10">
            <div className="bg-pastel-mocha text-espresso p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Coffee size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight text-espresso">Coffee Club</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-espresso' : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-pastel-latte rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-pastel-latte/50 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 z-10">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2.5 text-espresso/70 hover:text-espresso hover:bg-pastel-latte rounded-full transition-all duration-300"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link
              href="/cart"
              className="p-2.5 text-espresso/70 hover:text-espresso hover:bg-pastel-latte rounded-full transition-all duration-300 relative"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-pastel-brown text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-espresso/70 hover:text-espresso hover:bg-pastel-latte rounded-full transition-all duration-300"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Search Bar Dropdown */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl border border-pastel-mocha/30 rounded-2xl overflow-hidden shadow-2xl p-4"
              >
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/50" size={20} />
                  <input
                    type="text"
                    placeholder="Search beans, equipment, workshops..."
                    className="w-full pl-12 pr-4 py-4 bg-pastel-latte/30 border border-pastel-mocha/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-pastel-brown focus:border-transparent transition-all text-espresso placeholder:text-espresso/40"
                    autoFocus
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-pastel-mocha/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${
                        isActive
                          ? 'bg-pastel-latte text-espresso border border-pastel-mocha'
                          : 'text-espresso/70 hover:bg-pastel-latte/50 hover:text-espresso'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
