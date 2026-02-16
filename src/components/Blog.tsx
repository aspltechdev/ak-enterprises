import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Blog() {
  const posts = [
    {
      image: "/assets/office scrap and dismantaling/office.jpg",
      title: "Efficient Office Dismantling",
      excerpt: "Stories, insights, and best practices for large-scale office clearances with minimal operational disruption.",
      bgColor: "bg-[#E6F9E6]", // Light Lime/Green
      decor: (
        <div className="absolute top-4 left-4 grid grid-cols-4 gap-2 opacity-60">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-6 h-6 rounded-full bg-[#A3E635] ${i === 5 ? 'invisible' : ''}`} />
          ))}
        </div>
      )
    },
    {
      image: "/assets/about/industrial.jpg",
      title: "Industrial Scrap Valuation",
      excerpt: "The foundational knowledge and skills to leverage industrial scrap for any type of large project.",
      bgColor: "bg-[#E0F2FE]", // Light Blue
      decor: (
        <div className="absolute top-4 right-4 flex gap-1 opacity-40">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-1 h-32 bg-[#38BDF8]" style={{ opacity: 1 - (i * 0.08) }} />
          ))}
        </div>
      )
    },
    {
      image: "/assets/hvac scraps/hvac.jpg",
      title: "Safe HVAC Scrap Removal",
      excerpt: "How businesses like yours are leveraging professional HVAC disposal to drive growth and sustainability.",
      bgColor: "bg-[#FDF2F8]", // Light Pink
      decor: (
        <div className="absolute top-0 right-10 flex gap-1 opacity-40">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1 h-40 bg-[#F472B6]" style={{ transform: `translateY(${i * 8}px)` }} />
          ))}
        </div>
      )
    }
  ];

  return (
    <section className="section-blog py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 tracking-tight leading-none mb-6">
            Insights & <span className="text-green-600 italic font-serif">Stories</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium mb-8 max-w-2xl mx-auto">Explore the latest insights, case studies, and industry news from AK Enterprises.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Link href="/blog" key={index} className="group block h-full">
              <article className="flex flex-col h-full bg-gray-50 rounded-2xl overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex-grow relative">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-lg font-medium leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-xs group-hover:gap-3 transition-all">
                    Read Story
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
