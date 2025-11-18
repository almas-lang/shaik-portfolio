import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedReads() {
  const articles = [
    {
      title:
        'The secret to UX design: Understanding the need for fulfillment and growth',
      image: '/images/blog1.svg',
      url: 'https://medium.com/@shaikmurad/the-secret-to-ux-design-understanding-the-need-for-fulfillment-and-growth-1fed1bea0133',
    },
    {
      title:
        "Think you're rational? How design exploits your mind's hidden conflicts",
      image: '/images/blog2.svg',
      url: 'https://medium.com/@shaikmurad/the-secret-to-ux-design-understanding-the-need-for-fulfillment-and-growth-1fed1bea0133',
    },
    {
      title:
        'Do we really need goals? Or can we drift through life and be okay?',
      image: '/images/blog3.svg',
      url: 'https://medium.com/@shaikmurad/do-we-really-need-goals-or-can-we-drift-through-life-and-be-okay-51bfc12207bb',
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5b3a8f] mb-10 md:mb-16">
            My Featured Reads
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {articles.map((article, index) => (
              <Link
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 group-hover:text-[#5b3a8f] transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="https://medium.com/@shaikmurad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E63A46] text-white px-8 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors"
            >
              Read more on Medium
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
