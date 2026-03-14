import Image from 'next/image';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = [
    { title: "The Rise of Specialty Coffee in India", category: "Culture", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop", link: "/blog/specialty-coffee-india" },
    { title: "Best Coffee Cafés in India", category: "Guides", img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600&auto=format&fit=crop", link: "/blog/best-cafes" },
    { title: "How Coffee Changed Modern Work Culture", category: "History", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=600&auto=format&fit=crop", link: "/blog/coffee-work-culture" },
    { title: "Beginner's Guide to Specialty Coffee", category: "Education", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=600&auto=format&fit=crop", link: "/blog/beginners-guide" }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-espresso mb-6">Coffee Culture</h1>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Stories, trends, and insights from the world of specialty coffee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((post, i) => (
            <Link href={post.link} key={i}>
              <div className="group cursor-pointer h-full">
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-pastel-mocha transition-colors text-espresso">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
