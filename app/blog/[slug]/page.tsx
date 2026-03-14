import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-espresso/60 hover:text-espresso mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <div className="relative aspect-video rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image 
            src={`https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop`} 
            alt={title} 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6">{title}</h1>
        
        <div className="flex items-center gap-4 text-charcoal/60 mb-12 text-sm uppercase tracking-wider font-bold">
          <span>By Coffee Club Editorial</span>
          <span>•</span>
          <span>March 14, 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        
        <div className="prose prose-lg prose-stone max-w-none text-charcoal/80">
          <p className="lead text-xl mb-8">
            The world of specialty coffee is constantly evolving. From new brewing techniques to shifting cultural trends, there&apos;s always something new to discover.
          </p>
          
          <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">The Evolution of Coffee Culture</h2>
          <p className="mb-6">
            Coffee has moved far beyond a simple morning pick-me-up. It has become a craft, an art form, and a central part of modern social life. The rise of the &quot;third wave&quot; coffee movement has shifted focus towards high-quality beans, ethical sourcing, and precise brewing methods.
          </p>
          <p className="mb-6">
            Cafés are no longer just places to grab a quick drink; they are community hubs, workspaces, and tasting rooms where baristas act as sommeliers, guiding customers through complex flavor profiles.
          </p>

          <blockquote className="border-l-4 border-pastel-brown pl-6 italic text-xl my-12 text-espresso/80">
            &quot;Coffee is a language in itself.&quot; — Jackie Chan
          </blockquote>
          
          <h2 className="text-2xl font-bold text-espresso mt-12 mb-4">Looking Ahead</h2>
          <p className="mb-6">
            As we look to the future, sustainability and transparency will continue to shape the industry. Consumers are increasingly interested in where their coffee comes from and the impact it has on the environment and the farmers who grow it.
          </p>
          <p className="mb-6">
            Whether you&apos;re exploring the differences between Arabica and Robusta, understanding the impact of altitude on bean density, or learning how roast profiles highlight different flavor notes, knowledge is key to brewing better coffee.
          </p>
        </div>
      </div>
    </div>
  );
}
