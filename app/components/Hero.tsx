import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="w-full bg-[#f5f5f5]"
      style={{ height: 'calc(100vh - 30px)' }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-8">
        {/* Hero Title */}
        <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5b3a8f] leading-tight mb-6 sm:mb-8 lg:mb-10">
          I'm Shaik Murad,
          <br />
          I help growth happen
        </h1>

        {/* Project Cards */}
        <div className="flex flex-col md:flex-row gap-5 lg:gap-6 mb-5 lg:mb-6 md:items-start">
          {/* REVA Card */}
          <Link href="/case-studies/reva" className="bg-[#242424] rounded-3xl p-6 md:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col w-full md:w-1/2 lg:w-[500px] min-h-[320px] md:min-h-[360px] hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="mb-8 md:mb-12 relative">
              <div className="relative inline-flex items-center">
                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-[#FFCB00] flex items-center justify-center">
                  <span className="text-white font-bold text-[40px] md:text-[48px] tracking-tight reva-font">
                    RE
                  </span>
                </div>
                <h2 className="text-[40px] md:text-[48px] font-bold text-white absolute left-[58px] md:left-[70px] top-1/2 -translate-y-1/2 reva-font">
                  VA
                </h2>
              </div>
            </div>

            <p className="text-white text-[15px] md:text-[17px] leading-relaxed mb-auto max-w-[400px]">
              Reduced customer onboarding time to just 10.2 days (earlier 180
              days) without increasing CAC.
            </p>

            <div className="flex items-center justify-end mt-4 md:mt-6">
              <div className="flex items-center gap-2 md:gap-3 text-white font-medium group">
                <span className="text-base md:text-lg">Find out how</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E63A46] flex items-center justify-center group-hover:bg-[#d12835] transition-colors">
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
          <Link href="/case-studies/tulip" className="bg-[#242424] rounded-3xl p-6 md:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col w-full md:w-1/2 lg:w-[500px] min-h-[320px] md:min-h-[360px] hover:shadow-2xl transition-shadow cursor-pointer">
            <div className="mb-8 md:mb-12">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-[60px] h-[60px] md:w-[72px] md:h-[72px] rounded-full bg-white flex items-center justify-center p-2 md:p-3">
                  <Image
                    src="/images/skaeyl-logo.svg"
                    alt="Skaeyl Logo"
                    width={72}
                    height={72}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-[36px] md:text-[42px] font-bold leading-none font-heading">Skaeyl</h2>
              </div>
            </div>

            <p className="text-white text-[15px] md:text-[17px] leading-relaxed mb-auto max-w-[400px]">
              0→1 AI powered mentor OS - Acquired 122 students &amp; 6 trainers
              in 1st 4 months (&amp; onto winning a $4.3T edu market)
            </p>

            <div className="flex items-center justify-end mt-4 md:mt-6">
              <div className="flex items-center gap-2 md:gap-3 text-white font-medium group">
                <span className="text-base md:text-lg">Find out how</span>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E63A46] flex items-center justify-center group-hover:bg-[#d12835] transition-colors">
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

        {/* See more similar work button */}
        <div>
          <button className="bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors">
            See more similar work
          </button>
        </div>
      </div>
    </section>
  );
}
