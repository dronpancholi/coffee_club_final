import { Users } from 'lucide-react';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-cream pt-32 pb-20 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="bg-pastel-latte rounded-[3rem] p-12 md:p-20 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 text-pastel-brown/20">
            <Users size={200} />
          </div>
          
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6">Join the Coffee Club</h1>
            <p className="text-xl text-charcoal/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of coffee lovers learning and sharing their love for coffee. Get exclusive guides, tips, and community updates.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-espresso text-cream rounded-full font-bold hover:bg-charcoal transition-colors shadow-lg">
                Join Newsletter
              </button>
              <button className="px-8 py-4 bg-white text-espresso border border-pastel-mocha/50 rounded-full font-bold hover:bg-pastel-cream transition-colors shadow-sm">
                Share Your Brew
              </button>
              <button className="px-8 py-4 bg-transparent text-espresso rounded-full font-bold hover:bg-white/50 transition-colors">
                Follow on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
