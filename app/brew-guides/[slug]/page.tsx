import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BrewGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-espresso/60 hover:text-espresso mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image 
            src={`https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop`} 
            alt={title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6">{title} Guide</h1>
        
        <div className="prose prose-lg prose-stone max-w-none text-charcoal/80">
          <p className="lead text-xl mb-8">
            Master the art of brewing with a {title.toLowerCase()}. This comprehensive guide will walk you through the steps to achieve the perfect extraction and a delicious cup of coffee.
          </p>
          
          <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">What You&apos;ll Need</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Freshly roasted coffee beans</li>
            <li>Burr grinder</li>
            <li>Scale</li>
            <li>Gooseneck kettle (recommended)</li>
            <li>{title} brewer</li>
            <li>Filtered water</li>
          </ul>

          <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">Step-by-Step Instructions</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mocha/20">
              <h3 className="text-xl font-bold text-espresso mb-2">1. Prep and Grind</h3>
              <p>Weigh out your coffee beans and grind them to the appropriate coarseness for this method. Heat your water to about 200°F (93°C).</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mocha/20">
              <h3 className="text-xl font-bold text-espresso mb-2">2. The Bloom</h3>
              <p>Pour a small amount of water over the grounds to wet them evenly. Wait 30-45 seconds to allow the coffee to degas (bloom).</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mocha/20">
              <h3 className="text-xl font-bold text-espresso mb-2">3. The Pour</h3>
              <p>Slowly pour the remaining water in concentric circles, maintaining a steady flow rate and keeping the water level consistent.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-pastel-mocha/20">
              <h3 className="text-xl font-bold text-espresso mb-2">4. Serve and Enjoy</h3>
              <p>Once the drawdown is complete, discard the grounds, give your coffee a gentle swirl, and serve immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
