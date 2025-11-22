"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TulipCaseStudy() {
  const [showUMLModal, setShowUMLModal] = useState(false);
  const [currentSecondarySlide, setCurrentSecondarySlide] = useState(0);
  const [currentSpearSlide, setCurrentSpearSlide] = useState(0);
  const [currentFundraisingSlide, setCurrentFundraisingSlide] = useState(0);
  const [currentQASSlide, setCurrentQASSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFFFF] to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#5b3a8f] transition-colors font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Achievement & Disclaimer */}
      <section
        className="pt-24 pb-12 px-6 md:px-12 lg:px-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Tulip/hero-bg.svg')" }}
      >
        <div className="container mx-auto max-w-5xl">
          {/* Title and Achievement */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/Tulip/tulip-logo.svg"
                alt="Tulip Logo"
                width={120}
                height={120}
                className="w-20 h-20 md:w-28 md:h-28 object-contain"
              />
            </div>

            {/* Achievement Text */}
            <div className="flex-1">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#F803FE] mb-4 leading-tight ">
                Achieved{" "}
                <span className="text-gray-900">28% more revenue</span>{" "}
                <span className="text-[#F803FE]">and</span>{" "}
                <span className="text-gray-900">12% more customer base</span>{" "}
                <span className="text-[#F803FE]">in</span>{" "}
                <span className="text-gray-900">5 months</span>{" "}
                <span className="text-[#F803FE]">
                  using innovative storytelling and pricing models
                </span>
              </h1>
              <p className="text-lg text-gray-900">
                In tulips, a B2C social crowdfunding platform
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-12">
            <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
              <div className="bg-white rounded-xl p-4 md:p-6">
                <p className="text-lg text-gray-700 text-center">
                  <span className="font-semibold">Disclaimer:</span> I've kept
                  the organisation name redacted as "Tulip". I genuinely don't
                  want people messing with an ecosystem that's running
                  thousands of active emergency fundraisers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tulip Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - What is Tulip */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
                What is Tulip?
              </h2>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tulip is an online crowdfunding platform where people in crisis
                can ask for help and donors from across the world show up for
                them. It runs fundraisers across medical emergencies, education,
                and 20+ other causes. People donate, campaigns get visibility,
                beneficiaries receive funds - the engine already works.
              </p>

              {/* Data Box */}
              <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
                <div className="bg-white rounded-xl p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                    From Tulips own data
                  </h3>
                  <ul className="space-y-3 text-lg text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-[#F803FE] font-bold mt-1">•</span>
                      <span>
                        <strong>1800+</strong> active campaigns
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#F803FE] font-bold mt-1">•</span>
                      <span>
                        <strong>20</strong> fundraising categories
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#F803FE] font-bold mt-1">•</span>
                      <span>
                        <strong>Tech stack:</strong> RoR, React
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div>
              <Image
                src="/images/Tulip/hero-stats.svg"
                alt="Tulip Statistics - Duration, Visitors, Mobile Users, India Users, Age Distribution, Gender Distribution"
                width={600}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Case Matters Section */}
      <section className="bg-gradient-to-br from-[#22d3ee] to-[#06b6d4] py-12 md:py-16 lg:py-20 text-white">
        <div className="container mx-auto max-w-6xl px-6 md:px-12 lg:px-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
            Why This Case Matters
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Left Column */}
            <div className="space-y-2">
              <p className="text-lg leading-relaxed">
                Donation is such a strange behaviour if you think about it. You
                give away your money and expect nothing in return. No product.
                No service. Just faith.
              </p>

              <p className="text-lg leading-relaxed">
                In India, this behaviour is tied deeply to culture - Dana,
                Zakat, charity, religious duty, morality, empathy, family
                values. All of it mixes together and forms this unique
                psychology of giving.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-start lg:items-left justify-start lg:justify-center">
              {/* <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-6"> */}
              {/* <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-2xl flex items-center justify-center mb-4 mx-auto"> */}
              <div className="flex-shrink-0 ">
                <Image
                  src="/images/Tulip/tulip-logo2.svg"
                  alt="Tulip Logo"
                  width={120}
                  height={120}
                  className="w-20 h-20 md:w-28 md:h-28 object-contain"
                />
                {/* </div> */}
                {/* </div> */}
              </div>
              <p className="text-lg leading-relaxed pt-2">
                Tulip is one of the only organisations that managed to get this
                right at scale in urban India. More than 96% of campaigns and
                donations came from Tier-1 and urban markets.
              </p>
            </div>
          </div>

          {/* Big Audacious Goals */}
          <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 lg:p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Big Audacious Goals
            </h3>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Expand into Tier 2, 3, and rural Karnataka, and eventually
                  across India.
                </p>
                <p className="text-sm text-gray-600">
                  *Goal formalised during half year planning
                </p>
              </div>
              <div>
                <ul className="space-y-2 text-lg text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold mt-1">•</span>
                    <span>
                      <strong>Target:</strong> 5% increase in market share
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold mt-1">•</span>
                    <span>
                      <strong>Target:</strong> 10% increase in revenue
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#a855f7] font-bold mt-1">•</span>
                    <span>
                      <strong>Timeline:</strong> H1
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Now State Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-8 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
            Now State (When we began)
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            The existing workflow presented (in the form of UML) below worked
            beautifully for urban areas
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - User Flows */}
            <div className="space-y-6">
              {/* Fundraiser User Flow */}
              <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
                <div className="bg-white rounded-xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Fundraiser user flow
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Register → setup profile → add beneficiary details → add
                    case information → upload documents → choose promotion
                    options → set withdrawal options
                  </p>
                </div>
              </div>

              {/* Donor User Flow */}
              <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
                <div className="bg-white rounded-xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    Donor user flow
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Find campaign → donate → get receipt
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - UML Diagram */}
            <div className="relative rounded-xl p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
              <div className="bg-white rounded-xl p-4 md:p-6 relative">
                <Image
                  src="/images/Tulip/uml.svg"
                  alt="UML Diagram showing user workflows"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                />
                <button
                  onClick={() => setShowUMLModal(true)}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
                >
                  See full UML view →
                </button>
              </div>
            </div>
          </div>

          {/* Revenue Stats */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-2">This engine produced</p>
            <h3 className="text-3xl md:text-4xl lg:text-2xl font-bold mb-4 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
              92% of Tulip's entire revenue
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              The remaining 8% came from offline fundraising teams operating in
              big cities.
            </p>
          </div>

          {/* Question Box */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 mb-2">
              The question was simple but bold:
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Will all this work as-is in rural markets?
            </p>
            <p className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              Or will people behave differently?
            </p>
          </div>

          {/* Star Icon with Text */}
          <div className="flex items-start gap-4 bg-white rounded-2xl">
            <div className="flex-shrink-0">
              <Image
                src="/images/Tulip/star.svg"
                alt="Star icon"
                width={60}
                height={60}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            </div>
            <p className="text-lg text-gray-800 leading-relaxed py-4">
              We needed to understand the gaps, the motivations, the cultural
              layer, and what variations were mandatory.
            </p>
          </div>
        </div>
      </section>

      {/* Research Studies Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-[#fcfcfc]">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-12 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
            Research Studies
          </h2>

          {/* 1. Scope */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
              1. Scope
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
              {/* Study Location */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Karnataka tier 2, 3, and rural
                </h4>
                <p className="text-sm text-gray-600">Study location</p>
              </div>

              {/* Team */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  13 core team members & off-shore supporters
                </h4>
                <p className="text-sm text-gray-600">Team</p>
              </div>

              {/* Data */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Mixed (Qualitative & Quantitative)
                </h4>
                <p className="text-sm text-gray-600">Data</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {/* Analysis */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Statistical & Thematic
                </h4>
                <p className="text-sm text-gray-600">Analysis</p>
              </div>

              {/* Duration */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  40 days
                </h4>
                <p className="text-sm text-gray-600">Duration</p>
              </div>
            </div>
          </div>

          {/* 2. Hypotheses */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
              2. Hypotheses
            </h3>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Main Hypothesis */}
              <div>
                <p className="text-lg text-gray-900 font-semibold mb-4">
                  "Donation behaviour in urban areas of Karnataka is more
                  significant than rural areas"
                </p>
              </div>

              {/* Variables Box */}
              <div className="relative rounded-[20px] p-[1px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
                <div className="bg-white rounded-[19px] p-4 md:p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Donation behaviour in urban and rural areas of Karnataka
                        is same
                      </p>
                      <p className="text-xs text-gray-600">Null hypothesis</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Independent: Residential
                        <br />
                        Dependent: Donation behaviour
                      </p>
                      <p className="text-xs text-gray-600">Variables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Secondary Data Report - Carousel */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
              3. Secondary data report
            </h3>

            <div className="relative max-w-5xl mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentSecondarySlide * 100}%)`,
                  }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0">
                    <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                      <Image
                        src="/images/Tulip/report-slide1.svg"
                        alt="Secondary Data Report - Karnataka Demographics"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0">
                    <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                      <Image
                        src="/images/Tulip/report-slide2.svg"
                        alt="Secondary Data Report - Donation Determinants"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSecondarySlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentSecondarySlide === index
                        ? "bg-gray-900"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSecondarySlide(Math.max(0, currentSecondarySlide - 1))
                }
                disabled={currentSecondarySlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() =>
                  setCurrentSecondarySlide(Math.min(1, currentSecondarySlide + 1))
                }
                disabled={currentSecondarySlide === 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
              >
                <svg
                  className="w-6 h-6 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 4. SPEAR Framework - Carousel */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
            4. SPEAR (Set objective, Prepare, Execute, Analyse, and Report)
            Framework
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSpearSlide * 100}%)`,
                }}
              >
                {/* Slide 1 */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/spear-slide1.svg"
                      alt="SPEAR Framework - Set Objective"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/spear-slide2.svg"
                      alt="SPEAR Framework - Prepare"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/spear-slide3.svg"
                      alt="SPEAR Framework - Execute"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/spear-slide4.svg"
                      alt="SPEAR Framework - Analyse"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 5 */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/spear-slide5.svg"
                      alt="SPEAR Framework - Report"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpearSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSpearSlide === index ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSpearSlide(Math.max(0, currentSpearSlide - 1))
              }
              disabled={currentSpearSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentSpearSlide(Math.min(4, currentSpearSlide + 1))
              }
              disabled={currentSpearSlide === 4}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* What These Insights Triggered Internally Section */}
      <section className="py-2 md:py-16 lg:py-2 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent">
            What These Insights Triggered Internally...
          </h2>

          <p className="text-lg italic text-gray-700 mb-8">
            This is the part I love the most - the empathy shift...
          </p>

          {/* Empathy Shift Box */}
          <div className="relative rounded-[20px] p-[2px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] mb-12">
            <div className="bg-white rounded-[18px] p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
              <p className="text-lg text-gray-800 leading-relaxed">
                The entire product, design, and CX team started speaking from
                the user's perspective. We even started referring to personas
                with names like "Arun," the statistical persona representative.
              </p>
              <p className="text-lg font-bold text-gray-900 text-center md:text-right">
                A new user journey began to emerge
              </p>
            </div>
          </div>

          {/* Fundraising Journey Diagram - Carousel */}
          <div className="mb-12 relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentFundraisingSlide * 100}%)`,
                }}
              >
                {/* Slide 1 - Fundraising Journey */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/fundraising.svg"
                      alt="Fundraising User Journey - Pre, During, and Post Fundraising Phases"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 2 - Signup/Pre-setup */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/11.svg"
                      alt="Signup and Pre-setup flow - Utiliser types and details"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFundraisingSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentFundraisingSlide === index
                      ? "bg-gray-900"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentFundraisingSlide(
                  Math.max(0, currentFundraisingSlide - 1)
                )
              }
              disabled={currentFundraisingSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentFundraisingSlide(
                  Math.min(1, currentFundraisingSlide + 1)
                )
              }
              disabled={currentFundraisingSlide === 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* We started thinking in experiments */}
          <div className="mb-8">
            {/* Themes Table */}
            <Image
              src="/images/Tulip/themes.svg"
              alt="Implementation Themes - Convenience, Proof validation, Engagement, Transparency, Cultural correlation"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* The MVP That Changed The Game Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent">
            The MVP That Changed The Game
          </h2>

          {/* QAS Description */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              QAS (Q&A based storytelling came out of 3 signals)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex gap-3">
                <span className="text-lg font-bold text-gray-900 flex-shrink-0">
                  1.
                </span>
                <p className="text-base text-gray-800">
                  Audio-to-text converters didn't work well for most people.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg font-bold text-gray-900 flex-shrink-0">
                  2.
                </span>
                <p className="text-base text-gray-800">
                  Story writing felt emotionally heavy and intimidating.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg font-bold text-gray-900 flex-shrink-0">
                  3.
                </span>
                <p className="text-base text-gray-800">
                  Rural audiences responded strongly to "guided narration".
                </p>
              </div>
            </div>
          </div>

          {/* Before QAS - Funnel Chart */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Tulip/qas.svg"
              alt="Before QAS - Fundraising funnel showing 33% drop-off at cause-detail submission"
              width={800}
              height={500}
              className="w-full max-w-3xl h-auto object-contain"
            />
          </div>

          {/* This is how we built it */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] bg-clip-text text-transparent">
              This is how we built it...
            </h4>

            <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center">
              {/* Left - Description */}
              <div className="space-y-6">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    So we built an interface where fundraisers answer a series
                    of questions.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 leading-relaxed">
                    The system ties the answers into a coherent narrative
                    automatically.
                  </p>
                </div>
              </div>

              {/* Right - Flow Diagram */}
              <div>
                <Image
                  src="/images/Tulip/flow.svg"
                  alt="QAS Flow - Step-by-step fundraising process from start to finish"
                  width={900}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-questions and Story Section */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-5xl">
          {/* Left - Micro-questions */}
          <div className="mb-8">
            <Image
              src="/images/Tulip/steps.svg"
              alt="Question-Answer breakdown table showing responses, categories, and comments"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Right - Auto-stitched Story */}
            <Image
              src="/images/Tulip/14.svg"
              alt="Question-Answer breakdown table showing responses, categories, and comments"
              width={800}
              height={1000}
              className="w-full h-auto object-contain"
            />
            <div>
              <div className="relative rounded-[20px] p-[2px] bg-gradient-to-r from-[#F803FE] to-[#0ECBDE]">
                <div className="bg-white rounded-[18px] p-6 md:p-8">
                  <div className="space-y-6 text-base md:text-sm text-gray-800 leading-relaxed italic">
                    <p>
                      <strong>I'm Arun Kumar</strong>{" "}
                      <span className="text-gray-600">(Ask in the story)</span>,
                      raising funds for my Father{" "}
                      <span className="text-gray-600">(From step 1)</span> who
                      is a retired Canara bank employee{" "}
                      <span className="text-gray-600">(Ask in the story)</span>
                    </p>

                    <p>
                      He makes his livelihood with a pension of Rs. 2,900.00{" "}
                      <span className="text-gray-600">(Ask in the story)</span>{" "}
                      & is the primary caretaker{" "}
                      <span className="text-gray-600">(Ask in the story)</span>{" "}
                      of the family
                    </p>

                    <p>
                      The 5{" "}
                      <span className="text-gray-600">(Ask in the story)</span>{" "}
                      of us live as a family in shimogga{" "}
                      <span className="text-gray-600">(From step 1)</span>
                    </p>

                    <p>
                      My father has been suffering from Lung cancer{" "}
                      <span className="text-gray-600">(From step 2)</span> for
                      more than 2 years{" "}
                      <span className="text-gray-600">(Ask in the story)</span>.
                      He is undergoing chemotherapy{" "}
                      <span className="text-gray-600">(Ask in the story)</span>{" "}
                      in Apollo hospital Bangalore{" "}
                      <span className="text-gray-600">(From step 2)</span>. Up
                      until now, we've spent more than 2 Lakhs{" "}
                      <span className="text-gray-600">(Ask in the story)</span>{" "}
                      - assisted from savings & loans from family & friends.{" "}
                      <span className="text-gray-600">(Ask in the story)</span>
                    </p>

                    <p>
                      To continue his treatment we need 2,00,000.00{" "}
                      <span className="text-gray-600">(From Step 2)</span> more
                      in the next 15 days{" "}
                      <span className="text-gray-600">(From step 2)</span>.
                      Please help us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QAS Interactive Popup Section - Carousel */}
      <section className="py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-20 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentQASSlide * 100}%)` }}
              >
                {/* Slide 1 - QAS Interface */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <Image
                      src="/images/Tulip/17.svg"
                      alt="QAS Interactive popup showing Build your story interface with questions and live preview"
                      width={1000}
                      height={700}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Slide 2 - First Two Images */}
                <div className="w-full flex-shrink-0">
                  <div className="bg-white rounded p-4 md:p-8 border border-gray-300">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                      <Image
                        src="/images/Tulip/30.svg"
                        alt="QAS flow step 1 - I am a student"
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/images/Tulip/31.svg"
                        alt="QAS flow step 2 - I am studying in"
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/images/Tulip/32.svg"
                        alt="QAS flow step 3 - I live in Bengaluru (with)"
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src="/images/Tulip/33.svg"
                        alt="QAS flow step 4 - In the next 30 days"
                        width={500}
                        height={600}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQASSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentQASSlide === index ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentQASSlide(Math.max(0, currentQASSlide - 1))
              }
              disabled={currentQASSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setCurrentQASSlide(Math.min(1, currentQASSlide + 1))
              }
              disabled={currentQASSlide === 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-50 transition-all z-10"
            >
              <svg
                className="w-6 h-6 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Access Interactive Prototypes Button */}
          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#a855f7] to-[#22d3ee] text-white text-lg font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Access interactive prototypes →
            </a>
          </div>
        </div>
      </section>

      {/* What Happened After Launch Section */}
      <section className="py-12 md:py-16 lg:py-2 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent">
            What happened after launch
          </h2>

          {/* Funnel Chart and Results */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Left - Funnel Chart */}
            <div>
              <Image
                src="/images/Tulip/15.svg"
                alt="Monthly results table showing submitted, converted and raised amounts"
                width={900}
                height={700}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Right - Results Table */}
            <div className="flex items-end">
              <Image
                src="/images/Tulip/16.svg"
                alt="After launch funnel showing improvement from 9,929 initiated campaigns"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* In 4 months duration - Cyan Box */}
          <div className="bg-gradient-to-br from-[#22d3ee] to-[#06b6d4] rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-2xl font-bold mb-6">
              In 4 months duration
            </h3>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">1.</span> Total number of
                  fundraisers increased by 21%. And rural areas contributed upto
                  19% of these
                </p>
              </div>

              <div>
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">2.</span> Reduced drop-offs:
                  Drop-off rate came down to &lt;30%
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  <span className="font-bold">3.</span> Combine with tipping
                  model, revenue jumped by 35%.
                </p>
                <p className="text-lg leading-relaxed">
                  This happened: Tulip stopped charging fundraisers → With
                  better stories → more trust → more donations → more tips
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="py-12 md:py-16 lg:py-8 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-[#a855f7] to-[#8b5cf6] bg-clip-text text-transparent">
            Learnings
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Learning 1 */}
            <div className="flex gap-2">
              <span className="text-gray-900 font-bold mt-1">•</span>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed">
                Rural markets don't need "lite versions" - they need culturally
                resonant versions
              </p>
            </div>

            {/* Learning 2 */}
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">•</span>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed">
                Storytelling is not a writing problem, it's a structure problem.
              </p>
            </div>

            {/* Learning 3 */}
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">•</span>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed">
                Behaviour &gt; demographics when it comes to product expansion
              </p>
            </div>

            {/* Learning 4 */}
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">•</span>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed">
                Cross-functional empathy accelerates innovation more than
                individual creativity.
              </p>
            </div>

            {/* Learning 5 */}
            <div className="flex gap-3">
              <span className="text-gray-900 font-bold mt-1">•</span>
              <p className="text-base md:text-xl text-gray-800 leading-relaxed">
                Great revenue outcomes often hide behind human-centric
                problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#2d2d3f]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Next Case Study Card */}
              <Link
                href="/case-studies/reva"
                className="bg-[#242424] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-white relative overflow-hidden flex flex-col min-h-[320px] hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <div className="mb-6 md:mb-8 relative">
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

                <p className="text-white text-lg leading-relaxed mb-auto max-w-[400px]">
                  Reduced customer onboarding time to just 10.2 days (earlier
                  180 days) without increasing CAC.
                </p>

                <div className="flex items-center justify-end mt-6">
                  <div className="flex items-center gap-2 md:gap-3 text-white font-medium group">
                    <span className="text-lg">View case study</span>
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

              {/* Contact CTA Card */}
              <div className="bg-[#242424] rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 text-white flex flex-col justify-center min-h-[320px]">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
                  Want to discuss this case study?
                </h2>
                <p className="text-lg mb-6 md:mb-8 text-white/90">
                  Let's talk about how strategic design can transform your
                  business metrics.
                </p>
                <div>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-lg font-semibold hover:bg-[#d12835] transition-colors"
                  >
                    Get in touch
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
          </div>
        </div>
      </section>

      {/* UML Modal */}
      {showUMLModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowUMLModal(false)}
        >
          <div
            className="relative max-w-7xl w-full bg-white rounded-2xl p-4 md:p-6 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowUMLModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#F803FE] to-[#0ECBDE] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Full Size UML Image */}
            <div className="mt-8">
              <Image
                src="/images/Tulip/uml.svg"
                alt="Full UML Diagram"
                width={1200}
                height={1200}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
