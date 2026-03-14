'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-pastel-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-espresso/70 leading-relaxed">
            Have a question about our beans, need brewing advice, or want to book a private workshop? We&apos;re here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-espresso mb-8">Visit Our Roastery</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pastel-latte flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-pastel-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-espresso mb-2">Location</h3>
                    <p className="text-espresso/70 leading-relaxed">
                      E-103, Nirma University<br />
                      Ahmedabad
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pastel-mocha flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-espresso" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-espresso mb-2">Hours</h3>
                    <p className="text-espresso/70 leading-relaxed">
                      Mon - Fri: 7:00 AM - 6:00 PM<br />
                      Sat - Sun: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pastel-sage flex items-center justify-center shrink-0">
                    <Phone size={24} className="text-pastel-brown" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-espresso mb-2">Phone</h3>
                    <p className="text-espresso/70 leading-relaxed">
                      5859616264
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pastel-brown flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-pastel-cream" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-espresso mb-2">Email</h3>
                    <p className="text-espresso/70 leading-relaxed">
                      hello@coffeeclub.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[3rem] p-10 md:p-14 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-espresso mb-8">Send a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-espresso/70 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-pastel-cream/50 border border-pastel-mocha/30 rounded-2xl px-6 py-4 text-espresso focus:outline-none focus:ring-2 focus:ring-pastel-brown/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-espresso/70 uppercase tracking-wider mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-pastel-cream/50 border border-pastel-mocha/30 rounded-2xl px-6 py-4 text-espresso focus:outline-none focus:ring-2 focus:ring-pastel-brown/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-espresso/70 uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-pastel-cream/50 border border-pastel-mocha/30 rounded-2xl px-6 py-4 text-espresso focus:outline-none focus:ring-2 focus:ring-pastel-brown/50 transition-shadow resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full bg-espresso text-pastel-cream font-bold text-lg py-4 rounded-full hover:bg-pastel-brown transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
