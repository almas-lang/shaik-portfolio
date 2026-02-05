import Link from "next/link";
import Image from "next/image";

export default function EnablingBusinesses() {
  return (
    <section id="work" className="bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Featured Work
          </h2>
          <a href="#" className="text-[#888] hover:text-white transition-colors font-medium text-sm">
            See all work →
          </a>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* TULIP - Orange Theme */}
          <Link href="/case-studies/tulip" className="group block">
            <div className="bg-gradient-to-br from-[#FF4D00] to-[#ff6a33] rounded-2xl overflow-hidden">
              {/* Color Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center relative rounded-lg">
                    <span className="text-xl font-black text-[#1a1a1a]">T</span>
                  </div>
                  <span className="text-2xl font-black text-white">Tulip</span>
                </div>
                <p className="text-white/80 text-sm uppercase tracking-widest font-medium">
                  B2C Crowdfunding Platform
                </p>
              </div>

              {/* Content Area */}
              <div className="bg-[#1a1a1a] p-8 rounded-t-3xl">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Achieved 28% more revenue and 12% more customer base in 5 months using innovative storytelling and pricing models.
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-2xl font-black text-[#FF4D00]">28%</p>
                    <p className="text-xs text-gray-500">Revenue increase</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">12%</p>
                    <p className="text-xs text-gray-500">Customer growth</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">5mo</p>
                    <p className="text-xs text-gray-500">Timeline</p>
                  </div>
                </div>

                <span className="text-[#FF4D00] font-bold group-hover:underline">
                  View case study →
                </span>
              </div>
            </div>
          </Link>

          {/* REVA - Yellow Theme */}
          <Link href="/case-studies/reva" className="group block">
            <div className="bg-gradient-to-br from-[#FFCB00] to-[#ffd633] rounded-2xl overflow-hidden">
              {/* Color Header */}
              <div className="p-8 pb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                    <span className="text-xl font-black text-white">RE</span>
                  </div>
                  <span className="text-2xl font-black text-[#1a1a1a]">VA</span>
                </div>
                <p className="text-[#1a1a1a]/70 text-sm uppercase tracking-widest font-medium">
                  Enterprise Data Security
                </p>
              </div>

              {/* Content Area */}
              <div className="bg-[#1a1a1a] p-8 rounded-t-3xl">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Reduced customer onboarding time to just 10.2 days (earlier 180 days) without increasing CAC.
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-6">
                  <div>
                    <p className="text-2xl font-black text-[#FFCB00]">10.2</p>
                    <p className="text-xs text-gray-500">Days now</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">180</p>
                    <p className="text-xs text-gray-500">Days before</p>
                  </div>
                  <div>
                    <p className="text-2xl font-black text-white">0%</p>
                    <p className="text-xs text-gray-500">CAC increase</p>
                  </div>
                </div>

                <span className="text-[#FFCB00] font-bold group-hover:underline">
                  View case study →
                </span>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
