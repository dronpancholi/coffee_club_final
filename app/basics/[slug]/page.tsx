import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BasicsPage({ params }: { params: Promise<{ slug: string }> }) {
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
            src={`https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=1200&auto=format&fit=crop`} 
            alt={title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6">{title}</h1>
        
        <div className="prose prose-lg prose-stone max-w-none text-charcoal/80">
          <p className="lead text-xl mb-8">
            Dive deep into the science and art of coffee. Understanding {title.toLowerCase()} is essential for appreciating what makes your favorite cup taste so good.
          </p>
          
          <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">The Fundamentals</h2>
          <p className="mb-6">
            Coffee is a complex beverage with hundreds of flavor compounds. The journey from seed to cup involves many variables that influence the final taste.
          </p>
          <p className="mb-6">
            Whether you&apos;re exploring the differences between Arabica and Robusta, understanding the impact of altitude on bean density, or learning how roast profiles highlight different flavor notes, knowledge is key to brewing better coffee.
          </p>

          <div className="bg-pastel-latte/30 p-8 rounded-3xl border border-pastel-mocha/30 my-12">
            <h3 className="text-xl font-bold text-espresso mb-4">Key Takeaways</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Origin and altitude significantly impact flavor profiles.</li>
              <li>Processing methods (washed, natural, honey) alter the body and sweetness.</li>
              <li>Roast levels determine the balance between origin characteristics and roast flavors.</li>
              <li>Freshness is paramount—always check the roast date.</li>
            </ul>
          </div>
          
          <p className="mb-6">
            By understanding these basics, you can make more informed choices when buying beans and adjusting your brewing recipes. Experimentation is part of the fun, so don&apos;t be afraid to try new things and discover what you like best.
          </p>
        </div>
      </div>
    </div>
  );
}
