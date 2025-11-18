import Link from "next/link";
import Image from "next/image";

export default function EnablingBusinesses() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#5b3a8f]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Video */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10">
              {/* Video Container */}
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
                <video
                  src="/images/eb.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
                {/* TEXT OVERLAYS */}
                <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 z-10 space-y-3 md:space-y-4">
                  {/* Purple Block */}
                  <div className="bg-[#5b3a8f]/60 backdrop-blur-none text-white p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl max-w-lg">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                      I help you break
                      <br />
                      out of it
                    </h3>
                  </div>

                  {/* Black Block */}
                  <div className="bg-black/40 backdrop-blur-none text-white p-3 sm:p-4 md:p-5 rounded-lg md:rounded-xl max-w-xl">
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                      Over the past 13 years, I've proven one thing: growth
                      happens when you connect strategy, design, and execution
                      into one system.
                    </p>
                  </div>
                </div>

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-white order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Enabling Businesses &amp; Designers to scale
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">
              By connecting strategy, deep general design, and practical
              execution abilities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors"
            >
              Work with me
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
