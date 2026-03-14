import Link from 'next/link';
import { Calculator, Flame, Droplets, ArrowRight } from 'lucide-react';

export default function ToolsIndex() {
  const tools = [
    { title: "Brew Ratio Calculator", desc: "Find the perfect water-to-coffee ratio for any brewing method.", icon: Calculator, color: "bg-pastel-sage", link: "/tools/ratio-calculator" },
    { title: "Coffee Roast Quiz", desc: "Discover which roast level matches your flavor preferences.", icon: Flame, color: "bg-pastel-mocha", link: "/tools/roast-quiz" },
    { title: "Coffee Strength Calculator", desc: "Adjust your recipe to hit your ideal strength and extraction.", icon: Droplets, color: "bg-pastel-latte", link: "/tools/strength-calculator" }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6">Interactive Tools</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Take the guesswork out of brewing with our custom calculators and quizzes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <Link href={tool.link} key={i}>
              <div className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-pastel-mocha/20 group cursor-pointer flex flex-col items-center text-center h-full">
                <div className={`w-20 h-20 rounded-full ${tool.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <tool.icon size={32} className="text-espresso" />
                </div>
                <h3 className="text-2xl font-bold text-espresso mb-4">{tool.title}</h3>
                <p className="text-charcoal/70 leading-relaxed mb-8 flex-grow">{tool.desc}</p>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cream text-espresso group-hover:bg-espresso group-hover:text-cream transition-colors duration-300">
                  <ArrowRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
