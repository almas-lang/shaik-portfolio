"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="w-full bg-[#f5f5f5] pb-12 md:pb-16 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero-bg.svg')" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12">
        {/* Hero Title */}
        <h1 className="max-w-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#5b3a8f] leading-tight mb-6 sm:mb-8 lg:mb-10">
          I'm Shaik Murad,
          <br />I help growth happen
        </h1>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 mb-5 lg:mb-6 md:items-start">
          {/* REVA Card */}
          <Link
            href="/case-studies/reva"
            className="bg-[#242424] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col w-full md:w-1/2 lg:w-[500px] min-h-[280px] md:min-h-[360px] hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <div className="mb-4 md:mb-8 lg:mb-12 relative">
              <div className="relative inline-flex items-center">
                <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFCB00] flex items-center justify-center">
                  <span className="text-white font-bold text-[32px] sm:text-[40px] md:text-[48px] tracking-tight reva-font">
                    RE
                  </span>
                </div>
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-white absolute left-[48px] sm:left-[58px] md:left-[70px] top-1/2 -translate-y-1/2 reva-font">
                  VA
                </h2>
              </div>
            </div>

            <p className="pb-5 text-white text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed mb-auto max-w-[350px]">
              Reduced customer onboarding time to just 10.2 days (earlier 180
              days) without increasing CAC.
            </p>

            <span>#Datasecurity</span>

            <div className="flex items-center justify-end mt-3 md:mt-6">
              <div className="flex items-center gap-2 md:gap-3 text-white font-medium group">
                <span className="text-sm sm:text-base md:text-lg">
                  Find out how
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#E63A46] flex items-center justify-center group-hover:bg-[#d12835] transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Skaeyl Card */}
          <Link
            href="/case-studies/tulip"
            className="bg-[#242424] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col w-full md:w-1/2 lg:w-[500px] min-h-[280px] md:min-h-[360px] hover:shadow-2xl transition-shadow cursor-pointer"
          >
            <div className="mb-4 md:mb-8 lg:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <Image
                  src="/images/Tulip/tulip-logo2.svg"
                  alt="Tulip Logo"
                  width={120}
                  height={120}
                  priority
                  className="w-20 h-20 md:w-16 md:h-16 object-contain"
                />
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold leading-none font-heading">
                  Tulip
                </h2>
              </div>
            </div>

            <p className="pb-6 text-white text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed mb-auto max-w-[400px]">
              Achieved 28% more revenue and 12% more customer base in 5
              months using innovative storytelling and pricing models
            </p>

            <span>#Crowdfunding</span>

            <div className="flex items-center justify-end mt-3 md:mt-6">
              <div className="flex items-center gap-2 md:gap-3 text-white font-medium group">
                <span className="text-sm sm:text-base md:text-lg">
                  Find out how
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-[#E63A46] flex items-center justify-center group-hover:bg-[#d12835] transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* See more similar work button and Scroll Indicator */}
        <div className="mt-4 md:mt-0 flex items-center justify-between">
          <button className="bg-[#E63A46] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors">
            See more similar work
          </button>

          {/* Scroll Down Indicator */}
          <button
            onClick={handleScrollDown}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#E63A46] flex items-center justify-center hover:bg-[#d12835] transition-all hover:scale-110 shadow-lg flex-shrink-0"
            aria-label="Scroll down"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
