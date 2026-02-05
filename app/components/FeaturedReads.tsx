import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedReads() {
  const articles = [
    {
      title: 'The secret to UX design: Understanding the need for fulfillment and growth',
      image: '/images/blog1.svg',
      url: 'https://medium.com/@shaikmurad/the-secret-to-ux-design-understanding-the-need-for-fulfillment-and-growth-1fed1bea0133',
      tag: 'UX Strategy',
    },
    {
      title: "Think you're rational? How design exploits your mind's hidden conflicts",
      image: '/images/blog2.svg',
      url: 'https://medium.com/@shaikmurad/the-secret-to-ux-design-understanding-the-need-for-fulfillment-and-growth-1fed1bea0133',
      tag: 'Psychology',
    },
    {
      title: 'Do we really need goals? Or can we drift through life and be okay?',
      image: '/images/blog3.svg',
      url: 'https://medium.com/@shaikmurad/do-we-really-need-goals-or-can-we-drift-through-life-and-be-okay-51bfc12207bb',
      tag: 'Philosophy',
    },
  ];

  return (
    <section className="bg-[#111] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Featured Reads
            </h2>
            <p className="text-gray-500">Thoughts on design, growth, and life</p>
          </div>
          <Link
            href="https://medium.com/@shaikmurad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0"
          >
            Read more on Medium →
          </Link>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF4D00] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FF4D00]/10">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#FF4D00] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#FF4D00] transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[280px] flex-shrink-0"
              >
                <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800">
                  <div className="aspect-video relative">
                    <Image src={article.image} alt={article.title} fill className="object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#FF4D00] text-white text-[10px] font-bold px-2 py-1 rounded-full">
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
