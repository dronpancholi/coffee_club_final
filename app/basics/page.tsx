import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function BasicsIndex() {
  const articles = [
    { title: "Coffee Beans Explained", desc: "Understand origin, altitude, and processing methods.", img: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800&auto=format&fit=crop", link: "/basics/beans-explained" },
    { title: "Arabica vs Robusta", desc: "The fundamental differences between the two main coffee species.", img: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=800&auto=format&fit=crop", link: "/basics/arabica-vs-robusta" },
    { title: "Coffee Roast Levels", desc: "How roasting time and temperature affect flavor profiles.", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", link: "/basics/roast-levels" },
    { title: "Coffee Flavor Wheel", desc: "Learn to identify and describe complex tasting notes.", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800&auto=format&fit=crop", link: "/basics/flavor-wheel" }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6">Coffee Basics</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Dive deep into the science and art of coffee. Understand what makes your favorite cup taste so good.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <Link href={article.link} key={i}>
              <div className="group flex flex-col sm:flex-row gap-6 bg-white/50 rounded-3xl p-4 hover:bg-white transition-colors duration-300 cursor-pointer h-full border border-pastel-mocha/20 shadow-sm hover:shadow-xl">
                <div className="w-full sm:w-1/3 aspect-[4/3] sm:aspect-square relative rounded-2xl overflow-hidden shrink-0">
                  <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex flex-col justify-center py-2 pr-4">
                  <h3 className="text-2xl font-bold text-espresso mb-3 group-hover:text-pastel-brown transition-colors">{article.title}</h3>
                  <p className="text-charcoal/70 leading-relaxed mb-4">{article.desc}</p>
                  <span className="text-sm font-bold uppercase tracking-wider text-espresso/50 flex items-center gap-1 mt-auto">
                    Read Article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
