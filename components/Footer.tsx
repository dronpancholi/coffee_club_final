import Link from 'next/link';
import { Coffee, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pastel-latte border-t border-pastel-mocha/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-pastel-mocha text-espresso p-2 rounded-xl">
                <Coffee size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-espresso">Coffee Club</span>
            </Link>
            <p className="text-espresso/70 leading-relaxed font-medium italic">
              &quot;The Art of the Roast&quot;
            </p>
            <p className="text-espresso/70 leading-relaxed">
              Discover the art of coffee. Your destination for brewing guides, coffee culture, and a community of coffee lovers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/50 rounded-full text-espresso/70 hover:text-espresso hover:bg-pastel-mocha transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2.5 bg-white/50 rounded-full text-espresso/70 hover:text-espresso hover:bg-pastel-mocha transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2.5 bg-white/50 rounded-full text-espresso/70 hover:text-espresso hover:bg-pastel-mocha transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-espresso text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/beans" className="text-espresso/70 hover:text-espresso transition-colors">Coffee Beans</Link>
              </li>
              <li>
                <Link href="/roast" className="text-espresso/70 hover:text-espresso transition-colors">Roast Guide</Link>
              </li>
              <li>
                <Link href="/grind" className="text-espresso/70 hover:text-espresso transition-colors">Grind Guide</Link>
              </li>
              <li>
                <Link href="/equipment" className="text-espresso/70 hover:text-espresso transition-colors">Brewing Equipment</Link>
              </li>
              <li>
                <Link href="/workshops" className="text-espresso/70 hover:text-espresso transition-colors">Workshops</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-espresso text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-espresso/70 hover:text-espresso transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-espresso/70 hover:text-espresso transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="#" className="text-espresso/70 hover:text-espresso transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="text-espresso/70 hover:text-espresso transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-espresso text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-espresso/70">
                <MapPin size={20} className="shrink-0 text-pastel-brown mt-1" />
                <span>E-103, Nirma University<br />Ahmedabad</span>
              </li>
              <li className="flex items-center gap-3 text-espresso/70">
                <Phone size={20} className="shrink-0 text-pastel-brown" />
                <span>5859616264</span>
              </li>
              <li className="flex items-center gap-3 text-espresso/70">
                <Mail size={20} className="shrink-0 text-pastel-brown" />
                <span>hello@coffeeclub.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pastel-mocha/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-espresso/50 text-sm">
            © {new Date().getFullYear()} Coffee Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
