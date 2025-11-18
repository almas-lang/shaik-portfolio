import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#5b3a8f] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden relative">
              <Image
                src="/images/profile1.svg"
                alt="Shaik Murad"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-6 md:mb-8">
              <p className="text-lg sm:text-xl italic mb-6 md:mb-8 text-white/90 leading-relaxed">
                "Growth for me isn't all about theory. It's about practical
                systems that deliver results today"
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="border-l-4 border-[#E63A46] pl-4 md:pl-6">
                <h3 className="text-base md:text-lg font-bold mb-2">
                  Masters in Industrial Psychology
                </h3>
                <p className="text-sm md:text-base text-white/80">Jain, Bangalore</p>
              </div>

              <div className="border-l-4 border-[#E63A46] pl-4 md:pl-6">
                <h3 className="text-base md:text-lg font-bold mb-2">Certified in</h3>
                <p className="text-sm md:text-base text-white/80">
                  User experience, Product ownership, Service design,
                  Leadership, Pedagogy, Entrepreneurship
                </p>
              </div>

              <div className="border-l-4 border-[#E63A46] pl-4 md:pl-6">
                <h3 className="text-base md:text-lg font-bold mb-2">Co-founder</h3>
                <p className="text-sm md:text-base text-white/80">Xperience Wave, Skaeyl</p>
              </div>

              <div className="border-l-4 border-[#E63A46] pl-4 md:pl-6">
                <h3 className="text-base md:text-lg font-bold mb-2">Community building</h3>
                <p className="text-sm md:text-base text-white/80">With 2000+ participants</p>
              </div>
            </div>

            <Link
              href="#"
              className="inline-block bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors"
            >
              See my resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
