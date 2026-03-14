'use client';

import { useCart } from '@/components/CartContext';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-pastel-cream pt-32 pb-20 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 bg-pastel-latte rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h1 className="text-3xl font-bold text-espresso mb-4">Your cart is empty</h1>
          <p className="text-espresso/70 mb-8">Looks like you haven&apos;t added any coffee or gear yet.</p>
          <Link 
            href="/beans"
            className="inline-flex items-center gap-2 bg-espresso text-pastel-cream px-8 py-4 rounded-full font-bold hover:bg-pastel-brown transition-colors shadow-lg"
          >
            Start Shopping <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pastel-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-espresso mb-12">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={`${item.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm border border-pastel-mocha/20"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-pastel-latte/20 shrink-0">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-cover mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-xl font-bold text-espresso mb-1">{item.title}</h3>
                  <p className="text-pastel-brown font-medium">{item.price}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-pastel-cream rounded-full border border-pastel-mocha/30">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 text-espresso/70 hover:text-espresso transition-colors"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center font-medium text-espresso">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-espresso/70 hover:text-espresso transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-red-500/70 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 shadow-xl border border-pastel-mocha/20 sticky top-32"
            >
              <h2 className="text-2xl font-bold text-espresso mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-espresso/70">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-espresso/70">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="h-px bg-pastel-mocha/30 w-full my-4" />
                <div className="flex justify-between text-xl font-bold text-espresso">
                  <span>Total</span>
                  <span>₹{getCartTotal().toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-espresso text-cream rounded-full font-bold hover:bg-charcoal transition-colors shadow-lg flex items-center justify-center gap-2 group">
                Proceed to Checkout <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
