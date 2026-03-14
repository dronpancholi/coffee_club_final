import Image from 'next/image';
import Link from 'next/link';
import { Droplets, Coffee, Settings, Flame, ArrowRight } from 'lucide-react';

export default function BrewGuidesIndex() {
  const guides = [
    { title: "French Press Guide", icon: Droplets, color: "bg-pastel-latte", link: "/brew-guides/french-press", desc: "A classic immersion method for a full-bodied cup." },
    { title: "Pour Over (V60)", icon: Coffee, color: "bg-pastel-mocha", link: "/brew-guides/pour-over", desc: "Clean, crisp, and highlights complex flavor notes." },
    { title: "Aeropress", icon: Settings, color: "bg-pastel-sage", link: "/brew-guides/aeropress", desc: "Versatile, quick, and perfect for travel." },
    { title: "Moka Pot", icon: Flame, color: "bg-pastel-brown", link: "/brew-guides/moka-pot", desc: "Stovetop espresso-style coffee, rich and intense." }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6">Brew Guides</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Master your daily brew with our step-by-step guides. Choose your method and elevate your coffee experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {guides.map((guide, i) => (
            <Link href={guide.link} key={i}>
              <div className="group flex flex-col sm:flex-row gap-6 bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-pastel-mocha/20 cursor-pointer h-full">
                <div className={`${guide.color} w-32 h-32 rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-500`}>
                  <guide.icon size={48} className="text-espresso/60" />
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-espresso mb-3 group-hover:text-pastel-brown transition-colors">{guide.title}</h2>
                  <p className="text-charcoal/70 leading-relaxed mb-4">{guide.desc}</p>
                  <span className="text-sm font-bold uppercase tracking-wider text-espresso/50 flex items-center gap-1 mt-auto">
                    Read Guide <ArrowRight size={16} />
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
