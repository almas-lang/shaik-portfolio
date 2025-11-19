"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RevaCaseStudy() {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fcfcfc] to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
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

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/images/REVA_Security/reva_logo.svg"
                alt="REVA Logo"
                width={500}
                height={400}
                className="w-auto h-[120px]"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                A B2B data security platform
              </h2>
              <p className="text-lg text-gray-700">
                Reduced customer onboarding time to just 10.2 days (earlier 180
                days) without increasing CAC and scaled trust through
                design-product thinking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video/Image Placeholder */}
      <section className="py-12 px-4 md:px-6 bg-gradient-to-b from-[#e8e4f3] to-[#f5f5f5]">
        <div className="container mx-auto max-w-7xl pb-12">
          <div className="aspect-video bg-black rounded-2xl flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-[#E63A46] flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white ml-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        {/* </section> */}

        {/* One-pager Section */}
        {/* <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-[#e8e4f3] to-[#f5f5f5]"> */}
        <div className="container mx-auto max-w-7xl">
          {/* White container that looks like a page */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5b7cff] mb-6">
                  One-pager{" "}
                  <span className="text-base font-normal italic text-gray-600">
                    for your quick glance
                  </span>
                </h3>

                <p className="text-gray-700 mb-8 leading-relaxed">
                  Reva Security, a B2B data protection platform built on
                  AES-256-bit encryption, had a 180-day sales-led acquisition
                  cycle involving 6 internal teams and 17 customer touchpoints.
                </p>

                <div className="mb-8">
                  <h4 className="text-base font-bold text-gray-900 mb-4">
                    CONSTRAINTS
                  </h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        No offshore or paid research budget for U.S. customers.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        On-prem systems and GDPR/PII compliance restricted
                        access to real usage data.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Complex, semi-offline workflows with heavy dependencies
                        on field engineers.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-4">
                    DECISION LOGS
                  </h4>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Adopted a 10-minute, 5-step self-guided onboarding
                        funnel (Sign-up → Upload → Guided Success → Explore →
                        Upgrade).
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Simplified copy to 8th-grade English with confidence
                        cues.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Ran 3 usability loops with 24 participants to validate
                        flow comprehension and upgrade triggers.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Stack vertically */}
              <div className="space-y-6">
                {/* BETS Box */}
                <div className="bg-[#2d2d3f] text-white p-6 md:p-8 rounded-xl">
                  <h4 className="text-lg font-bold mb-4">BETS</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Build a digital self-serve trial targeting SMEs
                        (accounted for 62% of total customers)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Focus on HR administrators handling employee and
                        compliance data (high need, low tech, high
                        trust-sensitivity)
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span>•</span>
                      <span>
                        Reduce customer onboarding time from 90 days to &lt; 30
                        days while keeping CAC the same
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Arrow connector */}
                <div className="flex justify-center">
                  <svg
                    width="2"
                    height="40"
                    viewBox="0 0 2 40"
                    fill="none"
                    className="text-gray-400"
                  >
                    <line
                      x1="1"
                      y1="0"
                      x2="1"
                      y2="30"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                    <path
                      d="M1 40 L1 35 M1 40 L4 37 M1 40 L-2 37"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Metrics Table Image */}
                <div>
                  <Image
                    src="/images/REVA_Security/quick_glance.svg"
                    alt="Metrics comparison table showing before and after results"
                    width={1200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Result Text */}
                <p className="text-[#5b7cff] text-lg">
                  <strong>RESULT:</strong> A 24% YoY projected revenue lift and
                  a repeatable low-touch funnel that became a key proof point
                  during Reva's acquisition by Fortra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-[#e8e4f3] to-[#f5f5f5]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5b3a8f] mb-12">
            Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                Technology
              </h3>
              <p className="text-lg font-bold text-gray-800">
                AES-256-bit military grade encryption
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">
                Funded by
              </h3>
              <p className="text-lg font-bold text-gray-800">
                Acquired for $13.9M by Fortra
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">USP</h3>
              <p className="text-lg font-bold text-gray-800">
                Protect sensitive files wherever they travelled (even when
                offline)
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Work culture
            </h3>
            <p className="text-gray-700">
              Engineering-first mindset (3 Designers among 70+ engineers).
              Product worked directly with tech, design was brought in late to
              'make it look good'
            </p>
          </div>

          <div className="bg-[#2d2d3f] text-white p-8 rounded-xl">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/award-icon.svg"
                  alt="Success"
                  width={60}
                  height={60}
                  className="w-auto h-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Success</h3>
                <p className="text-lg leading-relaxed">
                  In six months, we changed that narrative - turning design into
                  a strategic function that reduced customer onboarding time
                  from 90 days to just 10 days for small and medium enterprises,
                  without increasing CAC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constraints & Challenges */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5b3a8f] mb-12">
            Constraints & challenges
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="border border-blue-200 rounded-xl p-8">
              <div className="aspect-square bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/REVA_Security/ecosystem.svg"
                  alt="Reva Ecosystem Diagram"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-700">
                Reva's ecosystem was complex - one customer could involve six
                internal teams and six distinct user types. Every workflow was
                burdened with compliance, security, and cross-department
                dependencies.
              </p>
            </div>

            <div className="border border-blue-200 rounded-xl p-8">
              <div className="mb-6">
                <Image
                  src="/images/REVA_Security/aat.svg"
                  alt="Average Acquisition Timeline"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-gray-700">
                Customer acquisition timelines stretched up to 180 days, with
                upto 17 touch-points before closure. Each deal required heavy
                sales involvement, and design & product had minimal influence
                early on.
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl p-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src="/images/award-icon.svg"
                  alt="Success"
                  width={60}
                  height={60}
                  className="w-auto h-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Challenge
                </h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  Build a digital-first, self-serve onboarding funnel that
                  reduces sales dependency, shortens the decision cycle from 90+
                  to {"<"} 30 days, and keeps CAC at zero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study & Insights - Carousel 1 */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-[#e8e4f3] to-[#f5f5f5]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5b3a8f] mb-8">
            Study & Insights
          </h2>

          <div className="mb-8">
            <p className="text-gray-700 mb-4">
              Began by shadowing the people who actually sold and implemented
              Reba. Over 3 weeks of generative research
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Shadowed 12 sales calls & 10 onboarding sessions</li>
              <li>• Conducted 10 moderated in-depth interviews</li>
              <li>• Studied 32 hrs. of live observation + 7 hrs. recorded</li>
            </ul>
          </div>

          <div className="relative bg-white p-4 md:p-8 rounded-xl shadow-lg">
            {/* Carousel Content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide1 * 100}%)` }}
              >
                {/* Slide 1 */}
                <div className="min-w-full">
                  <div className="bg-white rounded p-4 md:p-8"></div>
                  <Image
                    src="/images/REVA_Security/slide1.svg"
                    alt=""
                    width={1200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Slide 2 */}
                <div className="min-w-full">
                  <div className="bg-white rounded p-4 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                      {/* Left side - Text content */}
                      <div className="lg:col-span-3 space-y-4 lg:space-y-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-[#5b7cff]">
                          Primary focus
                        </h3>

                        <p className="text-gray-800 leading-relaxed">
                          HR and Compliance Heads accounted for nearly{" "}
                          <span className="font-bold">38%</span> of all inbound
                          demo requests - yet they consistently reported low
                          technical confidence during onboarding.
                        </p>

                        <p className="text-gray-800 leading-relaxed">
                          That became our first red flag: the product's learning
                          curve was creating friction exactly where conversions
                          could have been easiest.
                        </p>
                      </div>

                      {/* Right side - Persona card */}
                      <div className="lg:col-span-9 bg-gray-50 rounded-xl border border-gray-200 p-4 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {/* Left column - Profile, Demographics, Skills */}
                          <div>
                            <div className="flex items-start gap-3 md:gap-4 mb-6">
                              <div className="w-20 h-20 md:w-28 md:h-28 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <Image
                                  src="/images/Reva_Security/persona-direct-admin.svg"
                                  alt="Direct Administrator"
                                  width={112}
                                  height={112}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                  Direct Administrator
                                </h4>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                  Responsible for configuration, upkeep &
                                  reliable operation of computer systems,
                                  servers, and data security systems
                                </p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-4 mb-6 text-xs">
                              <div>
                                <p className="text-gray-500 mb-1">Gender</p>
                                <p className="font-semibold text-gray-900">
                                  Male
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Age</p>
                                <p className="font-semibold text-gray-900">
                                  38 years old
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">Lifestyle</p>
                                <p className="font-semibold text-gray-900">
                                  Suburban
                                </p>
                              </div>
                              <div>
                                <p className="text-gray-500 mb-1">
                                  Marital status
                                </p>
                                <p className="font-semibold text-gray-900">
                                  Married
                                </p>
                              </div>
                              <div className="col-span-2 sm:col-span-2">
                                <p className="text-gray-500 mb-1">Education</p>
                                <p className="font-semibold text-gray-900">
                                  Bachelors + Security certs
                                </p>
                              </div>
                            </div>

                            <div>
                              <p className="text-gray-500 mb-3 text-xs font-semibold">
                                Skills
                              </p>
                              <ul className="space-y-1.5 text-xs text-gray-800">
                                <li>• Technical proficiency in all major OS</li>
                                <li>
                                  • Flexible on rotational-skills work
                                  environment
                                </li>
                                <li>• Problem resolving expertise</li>
                                <li>
                                  • Estimating, scheduling & managing project
                                  networks
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Right column - DILO section */}
                          <div className="bg-[#2d2d3f] text-white p-4 md:p-6 rounded-lg">
                            <h5 className="font-bold mb-3 text-sm">DILO</h5>
                            <ul className="space-y-1.5 text-xs mb-4 md:mb-5">
                              <li>
                                • Setup & manage servers, network equipments &
                                IT infra
                              </li>
                              <li>
                                • Maintain, repair, upgrade OS, and hardware
                              </li>
                              <li>• Ensure IT structure is up to date</li>
                              <li>
                                • Carry out daily configurations + monitor
                              </li>
                            </ul>

                            <h5 className="font-bold mb-2 text-sm">Goals</h5>
                            <ul className="space-y-1 text-xs mb-4 md:mb-5">
                              <li>• Increase productivity</li>
                              <li>• Reduce support calls</li>
                              <li>
                                • Support cutting down IT costs initiatives
                              </li>
                            </ul>

                            <h5 className="font-bold mb-2 text-sm">
                              Frustrations
                            </h5>
                            <ul className="space-y-1 text-xs">
                              <li>• Finding ideal solution for right cost</li>
                              <li>
                                • End users don't use the new/updated software
                                in the intended way
                              </li>
                              <li>
                                • Deploy and implement new software across all
                                hierarchies of organisation
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="min-w-full">
                  <div className="bg-white rounded p-4 md:p-8">
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Left Column - 2x2 Stats Grid */}
                      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 border border-gray-300">
                        {/* Stat 1 */}
                        <div className="p-4 md:p-8 sm:border-r border-b border-gray-300">
                          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            38%
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            Inbound demo requests came from HR/Compliance Heads
                          </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="p-4 md:p-8 border-b border-gray-300">
                          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            72%
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            Users dropped off before completing a full demo
                          </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="p-4 md:p-8 sm:border-r sm:border-b-0 border-b border-gray-300">
                          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            $430
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            Customer acquisition cost (CAC) per lead in per
                            sales effort
                          </p>
                        </div>

                        {/* Stat 4 */}
                        <div className="p-4 md:p-8">
                          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            64%
                          </h4>
                          <p className="text-gray-700 text-base leading-relaxed">
                            Confused "always-on encryption" with antivirus/
                            firewall solutions.
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Chart */}
                      <div className="border border-blue-400 rounded-lg p-4 md:p-6 flex flex-col">
                        <Image
                          src="/images/REVA_Security/avg_sales_call.svg"
                          alt="Customer journey map showing stages from Perceive to Conclude"
                          width={1200}
                          height={400}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide 4 */}
                <div className="min-w-full">
                  <div className="bg-white rounded p-4 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#5b7cff] mb-4">
                      Journey map
                    </h3>
                    <p className="text-gray-700 text-base mb-6">
                      Perceive &gt; Consider &gt; Instigate (Pre & Post) &gt;
                      Learn &gt; Onboard &gt; Regularise &gt; Conclude
                    </p>

                    {/* Journey Map Image Placeholder */}
                    <div className="bg-gray-100 rounded-lg mb-6 overflow-hidden">
                      <Image
                        src="/images/REVA_Security/journey-map-reva.svg"
                        alt="Customer journey map showing stages from Perceive to Conclude"
                        width={1200}
                        height={400}
                        className="w-full h-auto object-contain"
                      />
                    </div>

                    {/* See full view link */}
                    <div>
                      <button className="text-gray-900 font-semibold text-base underline hover:text-[#5b7cff] transition-colors">
                        See full view
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide1(currentSlide1 > 0 ? currentSlide1 - 1 : 3)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
                setCurrentSlide1(currentSlide1 < 3 ? currentSlide1 + 1 : 0)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentSlide1(0)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide1 === 0 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
              <button
                onClick={() => setCurrentSlide1(1)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide1 === 1 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
              <button
                onClick={() => setCurrentSlide1(2)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide1 === 2 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
              <button
                onClick={() => setCurrentSlide1(3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide1 === 3 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-gray-700 leading-relaxed">
                The findings pointed to one clear opportunity: "Can we help
                non-technical buyers experience the feeling of security -
                without involving the sales team?" So we segmented our audience
                by technical depth rather than organizational role, and noticed
                a pattern. HR administrators handled some of the most sensitive
                datasets - employee records, payroll, health information - yet
                they were the least tech-savvy and most risk-averse.
              </p>
            </div>
            <div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    User comprehension: 70% struggled with technical language
                    ("AES-256", "cloud/on-prem"), showing a need for simplified
                    UX writing.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    Trust levers: 3 out of 4 buyers who completed a full demo
                    rated "visible encryption feedback" as a strong trust
                    factor.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>
                    <strong>
                      Self-serve appetite: 55% of SME leads expressed interest
                      in a "try-it-yourself" version - if setup required less
                      than 10 minutes.
                    </strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Study & Insights - Hypothesis */}
      <section className="py-16 px-4 md:px-6 bg-[#2d2d3f] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8">
            Study & Insights
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-xl italic mb-12">
                Reframed the goal from selling security to scaling trust
              </p>
              <h3 className="text-2xl font-bold mb-6">Hypothesis:</h3>
              <p className="text-lg mb-8 leading-relaxed">
                If SMEs can experience Reba securely on their own, their
                decision time will reduce by at least 60% while keeping CAC = 0.
              </p>

              <p className="text-lg leading-relaxed">
                We also decided not to chase all industries at once. SMEs (₹10 –
                50 Cr turnover, 25 – 50 devices) made up 62 % of our total leads
                and had the fastest internal approval cycles.
              </p>
            </div>
            <Image
              src="/images/REVA_Security/study.svg"
              alt="study"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Design Approach - Carousel 2 */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5b3a8f] mb-8">
            Design approach and decisions logs
          </h2>

          <p className="text-gray-700 mb-12">
            We used a hybrid of Lean UX + DATDSDL (Discover, Analyse, Template,
            Detailed, Summative testing, Dev hand-off, Learn) and a proprietary
            Concept-Structure-Detailed loop. The idea was simple: solve the
            right problem before solving it beautifully.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            A. FRAMING FUNNEL
          </h3>

          {/* Carousel wrapper with arrows outside */}
          <div className="relative">
            {/* White container for carousel */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              {/* Carousel Content */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide2 * 100}%)` }}
                >
                  {/* Slide 1 - Previous */}
                  <div className="min-w-full">
                    <Image
                      src="/images/REVA_Security/previous.svg"
                      alt="Previous funnel - showing the complex customer journey"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* Slide 2 - Later */}
                  <div className="min-w-full">
                    <Image
                      src="/images/REVA_Security/later.svg"
                      alt="Redesigned funnel - simplified customer journey"
                      width={1200}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Arrows - Outside container */}
            <button
              onClick={() =>
                setCurrentSlide2(currentSlide2 > 0 ? currentSlide2 - 1 : 1)
              }
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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
                setCurrentSlide2(currentSlide2 < 1 ? currentSlide2 + 1 : 0)
              }
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
            >
              <svg
                className="w-6 h-6 text-gray-800"
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

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setCurrentSlide2(0)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide2 === 0 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
              <button
                onClick={() => setCurrentSlide2(1)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide2 === 1 ? "bg-[#5b3a8f]" : "bg-gray-300"
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design & Writing Principles */}
      <section className="py-12 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* User Flow Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 items-center">
            {/* Left side - Bullet points */}
            <div>
              <ul className="space-y-3 md:space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex gap-2 md:gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Sign-up → 2 min</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>File upload (simulated encryption) → 2 min</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Guided success screen (+trust cue) → 1 min</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Feature exploration (limited menu) → 5 min</span>
                </li>
                <li className="flex gap-2 md:gap-3">
                  <span className="flex-shrink-0">•</span>
                  <span>Upgrade prompt (CTA) → &lt; 1 min</span>
                </li>
              </ul>

              <p className="text-lg md:text-xl text-[#5b7cff] font-semibold mt-6 md:mt-8">
                A full trial experience now took under 10 minutes, with no
                engineer required.
              </p>
            </div>

            {/* Right side - User flow image */}
            <div>
              <Image
                src="/images/REVA_Security/userflow.svg"
                alt="User flow diagram showing the streamlined onboarding process"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
            B. DESIGN & WRITING PRINCIPLES
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">
                8th-grade English
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                All microcopy rewritten for comprehension (Flesch Reading Ease
                &gt; 70).
              </p>
            </div>

            <div className="bg-blue-50 p-4 md:p-6 rounded-xl">
              <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">
                Guided tours
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Interactive hotspots instead of video tutorials
              </p>
            </div>

            <div className="bg-blue-50 p-4 md:p-6 rounded-xl sm:col-span-2 md:col-span-1">
              <h4 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">
                Trust cues
              </h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Visual "encryption in progress / complete" states to make
                security tangible.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-gray-100 rounded overflow-hidden">
                <Image
                  src="/images/REVA_Security/UI1.svg"
                  alt="UI SS 1"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="bg-gray-100 rounded overflow-hidden">
                <Image
                  src="/images/REVA_Security/UI2.svg"
                  alt="UI SS 2"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600 mt-6 leading-relaxed">
            *Consistency with main design system: reused existing colour tokens,
            typography, and components to ensure dev parity.
          </p>
        </div>
      </section>

      {/* Validation & Iteration - Carousel 3 */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8">
            C. VALIDATION & ITERATION
          </h3>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed">
                We ran three rapid usability loops with 24 participants (mix of
                HR, IT, and legal users).
              </p>

              <Image
                src="/images/REVA_Security/validation.svg"
                alt="validation table"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <span className="text-gray-400">
            <Image
              src="/images/REVA_Security/UI-mock.svg"
              alt="UI Mockup"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </span>

          <div className="text-center pt-6 md:pt-10">
            <Link
              href="#"
              className="inline-block bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#d12835] transition-colors"
            >
              Access lo-fi interactive designs →
            </Link>
          </div>
        </div>
      </section>

      {/* High Fidelity Designs */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">
                  <Image
                    src="/images/REVA_Security/vd1.svg"
                    alt="vd1"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </span>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">
                  <Image
                    src="/images/REVA_Security/vd2.svg"
                    alt="vd2"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </span>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">
                  <Image
                    src="/images/REVA_Security/vd3.svg"
                    alt="vd3"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </span>
              </div>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">
                  <Image
                    src="/images/REVA_Security/vd4.svg"
                    alt="vd4"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="#"
              className="inline-block bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-[#d12835] transition-colors"
            >
              Access structural designs →
            </Link>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-4 md:px-6 bg-[#2d2d3f] text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-300 mb-6 md:mb-8">
            Impact
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-base md:text-lg italic mb-6 md:mb-8">
                6 months after rollout, we had numbers worth celebrating - and
                defending
              </p>

              <p className="text-lg md:text-xl mb-6 md:mb-8">By the 4th month</p>

              <div className="grid grid-cols-2 gap-3 md:gap-6">
                <div className="bg-blue-100 text-gray-800 p-3 md:p-4 rounded-lg">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">10.2 days</h3>
                  <p className="text-xs md:text-sm">Average decision cycle</p>
                </div>

                <div className="grid grid-rows-2 gap-3 md:gap-6">
                  <div className="bg-blue-100 text-gray-800 p-2 md:p-4 rounded-lg">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">70% self serve</h3>
                    <p className="text-xs">Activation rate</p>
                  </div>
                  <div className="bg-blue-100 text-gray-800 p-2 md:p-4 rounded-lg">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">Zero</h3>
                    <p className="text-xs">CAC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-white text-gray-800 py-10 px-2 rounded-xl"> */}
            <Image
              src="/images/REVA_Security/impact.svg"
              alt="impact"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
            {/* </div> */}
          </div>

          <div className="mt-8 md:mt-12 space-y-3 md:space-y-4">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              • And the sales team finally had time to chase enterprise deals
              instead of hand-holding SMEs.
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed">
              • Internally, this became a case study in how UX + product +
              business alignment can shift company economics. Externally, it
              positioned Reva as a scalable SaaS model - a factor that
              strengthened its valuation and later helped close the acquisition
              by Fortra.
            </p>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5b7cff] mb-8 md:mb-12">
            Learnings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 border border-gray-300">
            {/* Column 1 */}
            <div className="bg-[#e8e4f3] p-4 md:p-6 lg:p-8 md:border-r border-b md:border-b-0 border-gray-300">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                Focus beats scale in complex B2B.:
              </h3>
              <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6 leading-relaxed">
                When everyone sells "full-stack security," owning one clear
                slice (HR data security) made us visible and defensible.
              </p>

              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                Language drives trust:
              </h3>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                Simplifying encryption jargon into human terms improved
                comprehension by +29 points and conversion by +3.4 %.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-[#d8d4e8] p-4 md:p-6 lg:p-8 md:border-r border-b lg:border-b-0 border-gray-300">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                Evaluate fast, explore faster:
              </h3>
              <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6 leading-relaxed">
                We depended too long on evaluative metrics; our breakthrough
                came when we mixed exploratory shadowing with lean validation.
              </p>

              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                Process over perfection:
              </h3>
              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                Three design iterations in 60 days outperformed six months of
                pixel-perfect screens.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-[#c8c4d8] p-4 md:p-6 lg:p-8 md:col-span-2 lg:col-span-3">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                Design as a business catalyst:
              </h3>
              <p className="text-sm md:text-base text-gray-800 mb-4 md:mb-6 leading-relaxed">
                In engineering-heavy orgs, the designer's job isn't to beautify
                - it's to quantify.
              </p>

              <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                "What if this screen saved 60 sales hours?" became our default
                question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-[#e8e4f3] to-[#f5f5f5]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5b3a8f] mb-6 md:mb-8">
            Closing reflection
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
            What started as an under-resourced experiment became a proof of
            concept that design could cut onboarding time by 88 % and bring
            customer acquisition cost to zero.
          </p>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            It changed how Reva saw design's role - from "make it look good" to
            "make it make money." And that mindset, I think, is what truly
            scaled - not just the product.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 md:px-6 bg-[#2d2d3f] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Want to discuss this case study?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8">
            Let's talk about how strategic design can transform your business
            metrics.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
