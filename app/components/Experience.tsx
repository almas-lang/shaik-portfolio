import Image from 'next/image';

export default function Experience() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Image */}
          <div className="relative">
            <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden relative">
              <Image
                src="/images/speaking.svg"
                alt="Speaking at event"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12">
              In the last 13 years, I've
            </h2>

            <div className="space-y-6 md:space-y-8">
              <div className="border-t border-[#E63A46] pt-4 md:pt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-300">
                  Businesses
                </h3>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E63A46] mt-1">•</span>
                    <span>Co-founded 2 profitable companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E63A46] mt-1">•</span>
                    <span>
                      Partnered with 26 businesses - from startups to MNCs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E63A46] mt-1">•</span>
                    <span>Helped 8+ businesses scale up to 5X</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#E63A46] pt-4 md:pt-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-300">
                  Designers
                </h3>
                <ul className="space-y-2 md:space-y-3 text-base md:text-lg text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E63A46] mt-1">•</span>
                    <span>Trained 2000+ UX Designers across 4 countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E63A46] mt-1">•</span>
                    <span>Positioned 100+ into leadership roles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
