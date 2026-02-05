"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView, type Variants, type Easing } from "framer-motion";

// Ease curve for animations
const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easeOut } }
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } }
};

// Animated Section Component
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TulipCaseStudy() {
  const [showUMLModal, setShowUMLModal] = useState(false);
  const [currentSecondarySlide, setCurrentSecondarySlide] = useState(0);
  const [currentSpearSlide, setCurrentSpearSlide] = useState(0);
  const [currentFundraisingSlide, setCurrentFundraisingSlide] = useState(0);
  const [currentQASSlide, setCurrentQASSlide] = useState(0);

  // Parallax refs and transforms
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(heroScrollProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);
  const geometricRotate = useTransform(heroScrollProgress, [0, 1], [0, 45]);
  const geometricScale = useTransform(heroScrollProgress, [0, 1], [1, 1.2]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-black font-bold hover:text-[#FF4D00] transition-colors"
            >
              ← BACK
            </Link>
            <span className="text-sm font-bold uppercase tracking-widest">Case Study</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 border-b-4 border-black relative overflow-hidden">
        {/* Animated Geometric shapes with parallax */}
        <motion.div
          style={{ rotate: geometricRotate, scale: geometricScale }}
          className="absolute top-20 right-20 w-32 h-32 border-4 border-[#FF4D00]/20 rotate-45"
        />
        <motion.div
          style={{ y: heroY }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-40 right-40 w-20 h-20 bg-[#FF4D00]/10 rotate-12"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-20 right-32 w-16 h-16 border-4 border-black/10 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="absolute top-32 right-60 w-4 h-4 bg-[#FF4D00]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-40 right-20 w-6 h-6 bg-black"
        />
        <motion.div
          style={{ rotate: geometricRotate }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-60 right-10 w-24 h-24 border-4 border-[#FF4D00]/30 rotate-[20deg]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="absolute bottom-32 right-60 w-3 h-3 bg-[#FF4D00]"
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-12 h-12 bg-black flex items-center justify-center relative"
            >
              <span className="text-2xl font-black text-white">T</span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#FF4D00]"></div>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px flex-1 bg-black origin-left"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-black text-sm font-bold uppercase tracking-widest"
            >
              Tulip
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-[0.95] mb-6"
          >
            28% MORE<br />
            REVENUE<span className="text-[#FF4D00]">.</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl md:text-4xl font-black text-black mb-8"
          >
            12% MORE CUSTOMER BASE<span className="text-[#FF4D00]">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mb-8"
          >
            In 5 months, using innovative storytelling and pricing models in Tulip, a B2C social crowdfunding platform.
          </motion.p>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <AnimatedSection>
        <section className="bg-black">
          <div className="max-w-6xl mx-auto px-6 md:px-12 py-6">
            <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm">
              <span className="text-white font-bold">DISCLAIMER:</span> I've kept the organisation name redacted as "Tulip".
              I genuinely don't want people messing with an ecosystem that's running thousands of active emergency fundraisers.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* What is Tulip */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <AnimatedSection className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
                WHAT IS<br />TULIP<span className="text-[#FF4D00]">?</span>
              </h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-24 h-1 bg-[#FF4D00] origin-left"
              />
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-7" delay={0.2}>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Tulip is an online crowdfunding platform where people in crisis can ask for help and donors
                from across the world show up for them. It runs fundraisers across medical emergencies,
                education, and 20+ other causes. People donate, campaigns get visibility,
                beneficiaries receive funds - the engine already works.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-4"
              >
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }} className="border-2 border-black p-6 transition-shadow hover:shadow-xl">
                  <p className="text-3xl md:text-4xl font-black text-black">1800<span className="text-[#FF4D00]">+</span></p>
                  <p className="text-sm text-gray-600 mt-2">Active campaigns</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }} className="border-2 border-black p-6 transition-shadow hover:shadow-xl">
                  <p className="text-3xl md:text-4xl font-black text-black">20</p>
                  <p className="text-sm text-gray-600 mt-2">Categories</p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -5 }} className="border-2 border-black p-6 bg-black text-white transition-shadow hover:shadow-xl">
                  <p className="text-lg font-black">RoR + React</p>
                  <p className="text-sm text-gray-400 mt-2">Tech stack</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            {[
              { value: "6", suffix: "mo", label: "Duration" },
              { value: "2.4", suffix: "M", label: "Monthly visitors" },
              { value: "84", suffix: "%", label: "Mobile users" },
              { value: "96", suffix: "%", label: "India users" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-black text-black">{stat.value}<span className="text-[#FF4D00]">{stat.suffix}</span></p>
                <p className="text-sm text-gray-600 mt-2 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why This Case Matters */}
      <section className="bg-[#FF4D00] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-60 h-60 border border-white/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 border border-white/10 rounded-full"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
              WHY THIS CASE MATTERS
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                "Donation is such a strange behaviour if you think about it. You give away your money and expect nothing in return. No product. No service. Just faith.",
                "In India, this behaviour is tied deeply to culture - Dana, Zakat, charity, religious duty, morality, empathy, family values. All of it mixes together and forms this unique psychology of giving.",
                "Tulip is one of the only organisations that managed to get this right at scale in urban India. More than 96% of campaigns and donations came from Tier-1 and urban markets."
              ].map((text, index) => (
                <motion.p key={index} variants={fadeInUp} className="text-lg text-white leading-relaxed">
                  {text}
                </motion.p>
              ))}
            </motion.div>
            <AnimatedSection delay={0.3}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="border-[12px] border-[#FF4D00] bg-white p-8 md:p-10 shadow-2xl"
              >
                <p className="text-black text-sm font-black uppercase tracking-[0.2em] mb-8">BIG AUDACIOUS GOALS</p>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    { num: "01", title: "5% increase in market share", desc: "Expand into Tier 2, 3, and rural Karnataka" },
                    { num: "02", title: "10% increase in revenue", desc: "Through new pricing models" },
                    { num: "03", title: "Timeline: H1", desc: "Goal formalised during half year planning" }
                  ].map((goal, index) => (
                    <motion.li key={index} variants={slideInLeft} className="flex items-start gap-5 text-black">
                      <span className="text-3xl font-black text-[#FF4D00] leading-none">{goal.num}</span>
                      <div>
                        <p className="font-bold text-lg leading-tight">{goal.title}</p>
                        <p className="text-base text-gray-500 mt-1">{goal.desc}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Now State */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              NOW STATE<span className="text-[#FF4D00]">.</span>
            </h2>
            <p className="text-gray-600 mb-12">When we began</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl">
              The existing workflow worked beautifully for urban areas
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {/* Fundraiser User Flow */}
            <motion.div
              variants={slideInLeft}
              whileHover={{ scale: 1.02, x: 5 }}
              className="border-2 border-black p-6 md:p-8 transition-shadow hover:shadow-xl"
            >
              <h3 className="text-xl font-black text-black mb-4 uppercase">
                Fundraiser User Flow
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Register → setup profile → add beneficiary details → add
                case information → upload documents → choose promotion
                options → set withdrawal options
              </p>
            </motion.div>

            {/* Donor User Flow */}
            <motion.div
              variants={slideInRight}
              whileHover={{ scale: 1.02, x: -5 }}
              className="border-2 border-black p-6 md:p-8 bg-black text-white transition-shadow hover:shadow-xl"
            >
              <h3 className="text-xl font-black mb-4 uppercase">
                Donor User Flow
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Find campaign → donate → get receipt
              </p>
            </motion.div>
          </motion.div>

          {/* UML Preview */}
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="border-2 border-black p-8 bg-gray-50 relative mb-12"
            >
              <Image
                src="/images/Tulip/uml.svg"
                alt="UML Diagram showing user workflows"
                width={1200}
                height={600}
                className="w-full h-auto max-h-[400px] object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUMLModal(true)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#FF4D00] transition-colors"
              >
                See full UML view →
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Revenue Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={fadeInUp}>
              <p className="text-gray-600 mb-2">This engine produced</p>
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="text-5xl md:text-6xl font-black text-black"
              >
                92<span className="text-[#FF4D00]">%</span>
              </motion.p>
              <p className="text-xl text-gray-600 mt-2">of Tulip's entire revenue</p>
            </motion.div>
            <motion.div variants={slideInRight} className="border-l-4 border-[#FF4D00] pl-6">
              <p className="text-lg text-gray-600">
                The remaining 8% came from offline fundraising teams operating in big cities.
              </p>
            </motion.div>
          </motion.div>

          {/* Question */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 border-t-2 border-black pt-12">
              <p className="text-gray-600 mb-4">The question was simple but bold:</p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-black text-black"
              >
                Will all this work as-is in rural markets?<br />
                Or will people behave differently<span className="text-[#FF4D00]">?</span>
              </motion.p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Research Studies - Timeline Dark Theme */}
      <section className="bg-black text-white relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#FF4D00 1px, transparent 1px), linear-gradient(90deg, #FF4D00 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black mb-16">
              RESEARCH STUDIES<span className="text-[#FF4D00]">.</span>
            </h2>
          </AnimatedSection>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line - Animated */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800 origin-top"
            />

            {/* ==================== */}
            {/* 01 - SCOPE */}
            {/* ==================== */}
            <AnimatedSection className="relative pl-20 pb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="absolute left-0 w-12 h-12 bg-[#FF4D00] flex items-center justify-center font-black text-xl"
              >
                01
              </motion.div>
              <h3 className="text-2xl font-black mb-8">SCOPE</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="border border-gray-800 p-5 hover:border-[#FF4D00] transition-colors">
                  <p className="text-lg font-bold text-white mb-1">Karnataka tier 2, 3, and rural</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Study location</p>
                </div>
                <div className="border border-gray-800 p-5 hover:border-[#FF4D00] transition-colors">
                  <p className="text-lg font-bold text-white mb-1">13 core team members & off-shore supporters</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Team</p>
                </div>
                <div className="border border-gray-800 p-5 hover:border-[#FF4D00] transition-colors">
                  <p className="text-lg font-bold text-white mb-1">Mixed (Qualitative & Quantitative)</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Data</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-800 p-5 hover:border-[#FF4D00] transition-colors">
                  <p className="text-lg font-bold text-white mb-1">Statistical & Thematic</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Analysis</p>
                </div>
                <div className="border border-gray-800 p-5 bg-[#FF4D00] hover:bg-[#ff6a33] transition-colors">
                  <p className="text-lg font-bold text-white mb-1">40 days</p>
                  <p className="text-xs text-white/70 uppercase tracking-wide">Duration</p>
                </div>
              </div>
            </AnimatedSection>

            {/* ==================== */}
            {/* 02 - HYPOTHESES */}
            {/* ==================== */}
            <AnimatedSection className="relative pl-20 pb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="absolute left-0 w-12 h-12 bg-white text-black flex items-center justify-center font-black text-xl"
              >
                02
              </motion.div>
              <h3 className="text-2xl font-black mb-8">HYPOTHESES</h3>

              <div className="border border-gray-800 p-6 mb-6">
                <p className="text-xl font-bold text-white mb-6">
                  "Donation behaviour in urban areas of Karnataka is more significant than rural areas"
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-900 p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Null hypothesis</p>
                    <p className="text-white">Donation behaviour in urban and rural areas of Karnataka is same</p>
                  </div>
                  <div className="bg-gray-900 p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Independent Variable</p>
                    <p className="text-[#FF4D00] font-bold">Residential</p>
                  </div>
                  <div className="bg-gray-900 p-4">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Dependent Variable</p>
                    <p className="text-[#FF4D00] font-bold">Donation behaviour</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* ==================== */}
            {/* 03 - SECONDARY DATA REPORT */}
            {/* ==================== */}
            <AnimatedSection className="relative pl-20 pb-16">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="absolute left-0 w-12 h-12 bg-white text-black flex items-center justify-center font-black text-xl"
              >
                03
              </motion.div>
              <h3 className="text-2xl font-black mb-8">SECONDARY DATA REPORT</h3>

              <div className="border border-gray-800">
                {/* Slide Navigation */}
                <div className="flex border-b border-gray-800">
                  <button
                    onClick={() => setCurrentSecondarySlide(0)}
                    className={`flex-1 py-4 px-6 font-bold text-left transition-colors ${
                      currentSecondarySlide === 0
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:border-white'
                    }`}
                  >
                    <span className={`text-xs block ${currentSecondarySlide === 0 ? 'text-gray-500' : 'text-gray-600'}`}>Slide 1</span>
                    Karnataka Demographics
                  </button>
                  <button
                    onClick={() => setCurrentSecondarySlide(1)}
                    className={`flex-1 py-4 px-6 font-bold text-left border-l border-gray-800 transition-colors ${
                      currentSecondarySlide === 1
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-white hover:border-white'
                    }`}
                  >
                    <span className={`text-xs block ${currentSecondarySlide === 1 ? 'text-gray-500' : 'text-gray-600'}`}>Slide 2</span>
                    Donation Determinants
                  </button>
                </div>

                {/* Slide Content */}
                <div className="p-6 pt-10">
                  {currentSecondarySlide === 0 ? (
                    <div className="space-y-8">
                      {/* Stats Row */}
                      <div className="grid grid-cols-3 gap-4 md:gap-6">
                        <div>
                          <p className="text-3xl md:text-4xl font-black text-white">6.11 <span className="text-[#FF4D00]">Cr</span></p>
                          <p className="text-sm text-gray-500 mt-1">Study location</p>
                        </div>
                        <div>
                          <p className="text-2xl md:text-3xl font-black text-white">3.09 & 3.01 <span className="text-[#FF4D00]">Cr</span></p>
                          <p className="text-sm text-gray-500 mt-1">Male & female</p>
                        </div>
                        <div>
                          <p className="text-3xl md:text-4xl font-black text-white">75.36<span className="text-[#FF4D00]">%</span></p>
                          <p className="text-sm text-gray-500 mt-1">Literacy rate</p>
                        </div>
                      </div>

                      {/* Urban & Rural Cards */}
                      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                        {/* Urban Specific */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#FF4D00]"></div>
                            <p className="text-gray-400 text-sm font-medium">Urban specific</p>
                          </div>
                          <p className="text-white text-sm leading-relaxed">
                            With avg. literacy of <span className="font-bold text-[#FF4D00]">85.78%</span>, about <span className="font-bold">38.67%</span> people live in Bangalore, Mysuru, Mangalore, Hubballi-Dharwad, Belagavi, Gulbarga, Bidar, and Bellary.
                          </p>
                        </div>

                        {/* Rural Specific */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-[#FF4D00]"></div>
                            <p className="text-gray-400 text-sm font-medium">Rural specific</p>
                          </div>
                          <p className="text-white text-sm leading-relaxed">
                            With avg. literacy of <span className="font-bold text-[#FF4D00]">68.73%</span>, about <span className="font-bold">61.33%</span> people live in Hassan, Shivamogga, Davangere, Chitradurga, Tumkuru, Raichur, Bagalkot, Koppal, Gadag, and Kodagu.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {/* Three Column Layout */}
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        {/* Social and Cultural */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#FF4D00] flex items-center justify-center">
                              <svg className="w-5 h-5 text-[#FF4D00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                              </svg>
                            </div>
                            <p className="text-gray-400 text-sm font-medium">Social and cultural</p>
                          </div>
                          <ul className="space-y-3 text-white text-sm leading-relaxed">
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Religious values strongly influence giving and asking</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Poverty + inequality both motivate and discourage</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Govt. tax policies impact giving behaviour</span>
                            </li>
                          </ul>
                        </div>

                        {/* Psychological */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#FF4D00] flex items-center justify-center">
                              <svg className="w-5 h-5 text-[#FF4D00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z"/>
                              </svg>
                            </div>
                            <p className="text-gray-400 text-sm font-medium">Psychological</p>
                          </div>
                          <ul className="space-y-3 text-white text-sm leading-relaxed">
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Empathy and altruism are major drives</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Personal morals, values, upbringing shape donation choices</span>
                            </li>
                          </ul>
                        </div>

                        {/* Demographic */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#FF4D00] flex items-center justify-center">
                              <svg className="w-5 h-5 text-[#FF4D00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                              </svg>
                            </div>
                            <p className="text-gray-400 text-sm font-medium">Demographic</p>
                          </div>
                          <ul className="space-y-3 text-white text-sm leading-relaxed">
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Younger donors prefer online</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Older donors prefer traditional</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Women donate more from empathy; men donate more from recognition</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Higher income = higher giving</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Higher education = more financial contributions</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00] mt-1">•</span>
                              <span>Married couples statistically donate more</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* ==================== */}
            {/* 04 - SPEAR FRAMEWORK */}
            {/* ==================== */}
            <AnimatedSection className="relative pl-20">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="absolute left-0 w-12 h-12 bg-[#FF4D00] flex items-center justify-center font-black text-xl"
              >
                04
              </motion.div>
              <h3 className="text-2xl font-black mb-2">SPEAR FRAMEWORK</h3>
              <p className="text-gray-500 mb-8">Set objective, Prepare, Execute, Analyse, and Report</p>

              <div className="border border-gray-800">
                {/* SPEAR Letter Tabs */}
                <div className="flex border-b border-gray-800">
                  {['S', 'P', 'E', 'A', 'R'].map((letter, index) => (
                    <button
                      key={letter}
                      onClick={() => setCurrentSpearSlide(index)}
                      className={`flex-1 py-6 font-black text-3xl transition-colors ${
                        currentSpearSlide === index
                          ? 'bg-white text-black'
                          : 'text-gray-600 hover:text-white hover:bg-gray-900'
                      } ${index > 0 ? 'border-l border-gray-800' : ''}`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6 pt-10">
                  {/* S - Set Objective */}
                  {currentSpearSlide === 0 && (
                    <div className="space-y-8">
                      <h4 className="text-xl font-bold text-white">S - Set Objective</h4>

                      {/* Target Icon */}
                      <div className="flex justify-start mb-6">
                        <svg className="w-20 h-20" viewBox="0 0 80 80" fill="none">
                          <circle cx="40" cy="40" r="30" stroke="url(#targetGradient)" strokeWidth="3" fill="none"/>
                          <circle cx="40" cy="40" r="20" stroke="url(#targetGradient)" strokeWidth="3" fill="none"/>
                          <circle cx="40" cy="40" r="10" stroke="url(#targetGradient)" strokeWidth="3" fill="none"/>
                          <line x1="40" y1="10" x2="60" y2="5" stroke="url(#targetGradient)" strokeWidth="2"/>
                          <polygon points="60,5 65,12 55,10" fill="url(#targetGradient)"/>
                          <defs>
                            <linearGradient id="targetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FF4D00"/>
                              <stop offset="100%" stopColor="#00BFFF"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* Three Objectives */}
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div>
                          <p className="text-white text-sm leading-relaxed">
                            Understand why people donate – motivations, frustrations, emotional triggers. Compare differences between urban and rural donors.
                          </p>
                        </div>
                        <div>
                          <p className="text-white text-sm leading-relaxed">
                            Understand how social, cultural, demographic, and economic factors affect donation behaviour. Build hypotheses and segment markets.
                          </p>
                        </div>
                        <div>
                          <p className="text-white text-sm leading-relaxed">
                            Build a geographical + behavioural segmentation strategy, TAM sizing, GTM outline, and service touchpoints adapted for Karnataka's tier 2/3/rural markets.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* P - Prepare */}
                  {currentSpearSlide === 1 && (
                    <div className="space-y-8">
                      <h4 className="text-xl font-bold text-white">P - Prepare</h4>

                      {/* Stats Row */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <p className="text-3xl font-black text-white">430+ <span className="text-[#FF4D00]">quant</span> participants</p>
                          <p className="text-sm text-gray-400 mt-2">Random sampling, statistically significant, 90% confidence level, error margin of 0.1</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black text-white">14 <span className="text-[#FF4D00]">qual</span> participants</p>
                          <p className="text-sm text-gray-400 mt-2">2 user ship reps: Married-Salaried-RegDonor & Unmarried-Income-OfflineDonor</p>
                        </div>
                        <div>
                          <p className="text-3xl font-black text-white">Data collection location</p>
                          <p className="text-sm text-gray-400 mt-2">Roads, Bus stops, Partnered hospitals, Offshore team neighbourhood families</p>
                        </div>
                      </div>

                      {/* Study Segments */}
                      <div>
                        <p className="text-lg font-bold text-white mb-2">Study segments</p>
                        <p className="text-gray-400 text-sm mb-4">(Influenced by objectives)</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                            <p className="text-white text-sm leading-relaxed">
                              <span className="text-[#FF4D00]">•</span> <span className="font-bold">Demography:</span> Residing location, residing duration, age, gender, highest education background, marital status, children
                            </p>
                          </div>
                          <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                            <p className="text-white text-sm leading-relaxed">
                              <span className="text-[#FF4D00]">•</span> <span className="font-bold">Donation behaviour:</span> Donation frequency, donation amount, repeated causes, motivations, frustrations
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                            <p className="text-white text-sm leading-relaxed">
                              <span className="text-[#FF4D00]">•</span> <span className="font-bold">Economic:</span> Annual income, employment status
                            </p>
                          </div>
                          <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                            <p className="text-white text-sm leading-relaxed">
                              <span className="text-[#FF4D00]">•</span> <span className="font-bold">Government policies:</span> Tax incentive awareness
                            </p>
                          </div>
                          <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                            <p className="text-white text-sm leading-relaxed">
                              <span className="text-[#FF4D00]">•</span> Social and cultural backgrounds
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* E - Execute */}
                  {currentSpearSlide === 2 && (
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-white">E - Execute</h4>

                      <p className="text-xl text-white leading-relaxed">
                        We collected <span className="text-[#FF4D00] font-bold">500+ survey responses</span> and ran <span className="text-[#FF4D00] font-bold">14 face-to-face interviews</span>.
                      </p>

                      <div className="grid lg:grid-cols-2 gap-6">
                        {/* Left - Data Image */}
                        <div>
                          <Image
                            src="/images/Tulip/report.svg"
                            alt="Survey data spreadsheet"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>

                        {/* Right - Transcript */}
                        <div>
                          <Image
                            src="/images/Tulip/transcript.svg"
                            alt="Usability testing transcript"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* A - Analyse */}
                  {currentSpearSlide === 3 && (
                    <div className="space-y-8">
                      <h4 className="text-xl font-bold text-white">A - Analysis</h4>

                      <p className="text-lg text-gray-300">
                        To deal with quant we used - statistical analysis + percentage distribution + inferential stats (t-tests)
                      </p>

                      {/* Three Column Layout */}
                      <div className="grid lg:grid-cols-3 gap-6">
                        {/* Left - Demographics */}
                        <div className="bg-white rounded-xl p-6 text-black">
                          <h5 className="font-bold mb-4">Age group</h5>
                          <div className="space-y-2 mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-sm w-20">18-24 yrs.</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-3">
                                <div className="bg-[#FF4D00] h-3 rounded-full" style={{width: '42%'}}></div>
                              </div>
                              <span className="text-sm font-bold">42%</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm w-20">25-34 yrs.</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-3">
                                <div className="bg-[#FF4D00]/70 h-3 rounded-full" style={{width: '26%'}}></div>
                              </div>
                              <span className="text-sm font-bold">26%</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm w-20">35-44 yrs.</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-3">
                                <div className="bg-[#FF4D00]/40 h-3 rounded-full" style={{width: '12%'}}></div>
                              </div>
                              <span className="text-sm font-bold">12%</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm w-20">Others</span>
                              <div className="flex-1 bg-gray-200 rounded-full h-3">
                                <div className="bg-[#FF4D00]/20 h-3 rounded-full" style={{width: '20%'}}></div>
                              </div>
                              <span className="text-sm font-bold">20%</span>
                            </div>
                          </div>
                          <p className="text-right text-2xl font-black text-[#FF4D00]">68%</p>

                          <h5 className="font-bold mt-6 mb-3">Gender</h5>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <p className="text-sm text-gray-500">Male</p>
                              <p className="text-3xl font-black">73%</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-gray-500">Female</p>
                              <p className="text-3xl font-black">26%</p>
                            </div>
                          </div>
                        </div>

                        {/* Middle - Financial & Donation Behavior */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <p className="font-medium mb-4 text-gray-400">During emergencies I seek financial support from</p>
                          <div className="flex gap-6 mb-6">
                            <div>
                              <p className="text-3xl font-black text-white">36<span className="text-[#FF4D00]">%</span></p>
                              <p className="text-sm text-gray-500">Bank loans</p>
                            </div>
                            <div>
                              <p className="text-3xl font-black text-white">42<span className="text-[#FF4D00]">%</span></p>
                              <p className="text-sm text-gray-500">Borrow</p>
                            </div>
                          </div>

                          <p className="font-medium mb-4 text-gray-400">When somebody asks for help</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <p className="text-2xl font-black text-white">17<span className="text-[#FF4D00]">%</span></p>
                              <p className="text-sm text-gray-500">I don't donate</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <p className="text-2xl font-black text-white">38<span className="text-[#FF4D00]">%</span></p>
                              <p className="text-sm text-gray-500">I donate</p>
                            </div>
                          </div>
                        </div>

                        {/* Right - T-test Results */}
                        <div className="bg-white rounded-xl p-6 text-black">
                          <h5 className="font-bold mb-4">T-test results</h5>
                          <div className="overflow-x-auto">
                            <table className="w-full text-xs">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-1"></th>
                                  <th className="text-right py-1 text-[#FF4D00]">Urban (Variable 1)</th>
                                  <th className="text-right py-1 text-[#FF4D00]">Rural (Variable 2)</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-700">
                                <tr><td>Mean</td><td className="text-right">2.506</td><td className="text-right">2.482</td></tr>
                                <tr><td>Variance</td><td className="text-right">1.578</td><td className="text-right">1.23</td></tr>
                                <tr><td>Observations</td><td className="text-right">81</td><td className="text-right">56</td></tr>
                                <tr><td>Hypothesized mean difference</td><td className="text-right">0</td><td className="text-right"></td></tr>
                                <tr><td>df</td><td className="text-right">127</td><td className="text-right"></td></tr>
                                <tr><td>t Stat</td><td className="text-right">0.117</td><td className="text-right"></td></tr>
                                <tr><td>P (T&lt;=t) one-tail</td><td className="text-right">0.453</td><td className="text-right"></td></tr>
                                <tr><td>t Critical one-tail</td><td className="text-right">1.656</td><td className="text-right"></td></tr>
                                <tr className="bg-[#FF4D00]/10"><td>P (T&lt;=t) two-tail</td><td className="text-right font-bold">0.906</td><td className="text-right"></td></tr>
                                <tr><td>t Critical two-tail</td><td className="text-right">1.978</td><td className="text-right"></td></tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-sm text-gray-600 mt-4">Comparing mean donation frequency between urban and rural areas</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* R - Report */}
                  {currentSpearSlide === 4 && (
                    <div className="space-y-8">
                      <h4 className="text-xl font-bold text-white">R - Report</h4>

                      {/* Three Column Layout */}
                      <div className="grid lg:grid-cols-3 gap-6 items-start">
                        {/* T-test Results */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <h5 className="font-bold text-lg mb-4 text-white">T-test results</h5>
                          <ul className="space-y-3 text-sm leading-relaxed text-white">
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Negligible but small difference exists between mean donation frequencies in urban and rural</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Mean donation amounts are higher in urban compared to rural</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Cultural & religious influence in urban is significantly lower than rural</span>
                            </li>
                          </ul>
                        </div>

                        {/* Codes & Themes */}
                        <div className="bg-gray-900 rounded-xl p-6 border-l-4 border-[#FF4D00]">
                          <h5 className="font-bold text-lg mb-4 text-white">Codes & Themes</h5>
                          <ul className="space-y-3 text-sm leading-relaxed text-white">
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Trust and transparency</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Engagement and storytelling</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Convenience and integration</span>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-[#FF4D00]">•</span>
                              <span>Personalisation and impact</span>
                            </li>
                          </ul>
                        </div>

                        {/* Primary Profiles */}
                        <div className="bg-white rounded-xl p-6 text-black">
                          <h5 className="font-bold text-lg mb-4">Primary profiles</h5>

                          {/* Profile 1 - Arun */}
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                              <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                                alt="Arun"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-bold">Arun</p>
                                <p className="text-xs text-gray-500">28 years old male, from Trichy</p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Arun is employed in a private institution. He along with his nuclear family makes about 2.5L/year. He speaks English (Novice high)</p>
                            <div className="flex gap-6 text-xs">
                              <div>
                                <p className="text-gray-400">Education level</p>
                                <p className="font-medium">Graduation degree</p>
                              </div>
                              <div>
                                <p className="text-gray-400">Marital Status</p>
                                <p className="font-medium">Unmarried</p>
                              </div>
                            </div>
                          </div>

                          {/* Profile 2 - Krishna */}
                          <div className="border-t pt-4">
                            <div className="flex items-center gap-3 mb-2">
                              <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                                alt="Krishna"
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-bold">Krishna</p>
                                <p className="text-xs text-gray-500">30 years old male, from Trichy</p>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-2">Krishna is a businessmen (self employed). He along with his nuclear family makes about 2.5L/year. He speaks English (Intermediate low)</p>
                            <div className="flex gap-6 text-xs">
                              <div>
                                <p className="text-gray-400">Education level</p>
                                <p className="font-medium">12th Pass</p>
                              </div>
                              <div>
                                <p className="text-gray-400">Marital Status</p>
                                <p className="font-medium">Married</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation bars and arrows */}
                <div className="flex items-center justify-between px-6 pb-6">
                  <div className="flex gap-2">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSpearSlide(i)}
                        className={`w-12 h-1 transition-all ${
                          currentSpearSlide === i ? 'bg-[#FF4D00]' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentSpearSlide(Math.max(0, currentSpearSlide - 1))}
                      disabled={currentSpearSlide === 0}
                      className="w-12 h-12 border-2 border-gray-600 flex items-center justify-center disabled:opacity-30 hover:bg-white hover:text-black transition-colors text-white"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCurrentSpearSlide(Math.min(4, currentSpearSlide + 1))}
                      disabled={currentSpearSlide === 4}
                      className="w-12 h-12 border-2 border-gray-600 flex items-center justify-center disabled:opacity-30 hover:bg-white hover:text-black transition-colors text-white"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* What These Insights Triggered */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
              WHAT THESE INSIGHTS TRIGGERED INTERNALLY<span className="text-[#FF4D00]">...</span>
            </h2>
            <p className="text-xl text-gray-600 italic mb-12">
              This is the part I love the most - the empathy shift...
            </p>
          </AnimatedSection>

          {/* Empathy Shift Box */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="grid md:grid-cols-2 gap-8 border-2 border-black p-8 mb-12 transition-shadow hover:shadow-xl"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                The entire product, design, and CX team started speaking from
                the user's perspective. We even started referring to personas
                with names like "Arun," the statistical persona representative.
              </p>
              <div className="flex items-center justify-center md:justify-end">
                <p className="text-2xl font-black text-black">
                  A new user journey began to emerge<span className="text-[#FF4D00]">.</span>
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Fundraising Journey - Carousel */}
          <AnimatedSection delay={0.3}>
            <div className="relative mb-12">
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${currentFundraisingSlide * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="w-full flex-shrink-0">
                    <div className="border-2 border-black p-8 bg-gray-50">
                      <Image
                        src="/images/Tulip/fundraising.svg"
                        alt="Fundraising User Journey - Pre, During, and Post Fundraising Phases"
                        width={1200}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="w-full flex-shrink-0">
                    <div className="border-2 border-black p-8 bg-gray-50">
                      <Image
                        src="/images/Tulip/11.svg"
                        alt="Signup and Pre-setup flow - Utiliser types and details"
                        width={1200}
                        height={500}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {[0, 1].map((index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentFundraisingSlide(index)}
                      className={`w-12 h-1 transition-all ${
                        currentFundraisingSlide === index ? "bg-[#FF4D00]" : "bg-gray-300"
                      }`}
                    />
                  ))}
              </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentFundraisingSlide(Math.max(0, currentFundraisingSlide - 1))}
                    disabled={currentFundraisingSlide === 0}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-colors"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentFundraisingSlide(Math.min(1, currentFundraisingSlide + 1))}
                    disabled={currentFundraisingSlide === 1}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-colors"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Themes */}
          <AnimatedSection delay={0.4}>
            <motion.div whileHover={{ scale: 1.01 }} className="border-2 border-black bg-gray-50 transition-shadow hover:shadow-xl">
              <Image
                src="/images/Tulip/themes.svg"
                alt="Implementation Themes - Convenience, Proof validation, Engagement, Transparency, Cultural correlation"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* The MVP That Changed The Game */}
      <section className="bg-[#FF4D00] relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-black/5 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-12">
              THE MVP THAT CHANGED THE GAME
            </h2>
          </AnimatedSection>

          {/* QAS Description */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 md:p-12 mb-12 shadow-2xl"
            >
              <h3 className="text-2xl font-black text-black mb-6">
                QAS<span className="text-[#FF4D00]">.</span> Q&A Based Storytelling
              </h3>
              <p className="text-gray-600 mb-8">Came out of 3 signals:</p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  { num: "1", text: "Audio-to-text converters didn't work well for most people." },
                  { num: "2", text: "Story writing felt emotionally heavy and intimidating." },
                  { num: "3", text: "Rural audiences responded strongly to \"guided narration\"." }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                    <span className="text-3xl font-black text-[#FF4D00]">{item.num}</span>
                    <p className="text-gray-700">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Before QAS */}
              <div className="border-t-2 border-black pt-8 flex justify-center">
                <Image
                  src="/images/Tulip/qas.svg"
                  alt="Before QAS - Fundraising funnel showing 33% drop-off at cause-detail submission"
                  width={800}
                  height={400}
                  className="w-full max-w-2xl h-auto"
                />
              </div>
            </motion.div>
          </AnimatedSection>

          {/* How we built it */}
          <AnimatedSection delay={0.2}>
            <div className="text-white">
              <h4 className="text-xl font-black mb-6">THIS IS HOW WE BUILT IT...</h4>
              <div className="grid md:grid-cols-[240px_1fr] gap-8 items-center">
                <motion.div
                  variants={slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <p className="text-lg text-white/90 leading-relaxed">
                    We built an interface where fundraisers answer a series of questions.
                  </p>
                  <p className="text-xl font-black">
                    The system ties the answers into a coherent narrative automatically.
                  </p>
                </motion.div>
                <motion.div
                  variants={slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 shadow-2xl"
                >
                  <Image
                    src="/images/Tulip/flow.svg"
                    alt="QAS Flow - Step-by-step fundraising process from start to finish"
                    width={900}
                    height={400}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Micro-questions and Story */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Question Breakdown Table */}
          <AnimatedSection>
            <motion.div whileHover={{ scale: 1.01 }} className="mb-12">
              <Image
                src="/images/Tulip/steps.svg"
                alt="Question-Answer breakdown table showing responses, categories, and comments"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-stretch"
          >
            {/* Left - Visual */}
            <motion.div variants={slideInLeft} whileHover={{ scale: 1.02 }}>
              <Image
                src="/images/Tulip/14.svg"
                alt="QAS interface showing question flow"
                width={600}
                height={800}
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Right - Auto-stitched story */}
            <motion.div variants={slideInRight} className="flex">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="border-2 border-black p-6 bg-black text-white flex-1 flex flex-col justify-center transition-shadow hover:shadow-xl"
              >
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    <span className="font-bold italic">I'm Arun Kumar</span>{" "}
                    <span className="text-gray-500">(Ask in the story)</span>, raising funds for my Father{" "}
                    <span className="text-gray-500">(From step 1)</span> who is a retired Canara bank employee{" "}
                    <span className="text-gray-500">(Ask in the story)</span>
                  </p>
                  <p>
                    He makes his livelihood with a pension of Rs. 2,900.00{" "}
                    <span className="text-gray-500">(Ask in the story)</span>{" "}
                    & is the primary caretaker{" "}
                    <span className="text-gray-500">(Ask in the story)</span>{" "}
                    of the family
                  </p>
                  <p>
                    The 5{" "}
                    <span className="text-gray-500">(Ask in the story)</span>{" "}
                    of us live as a family in shimogga{" "}
                    <span className="text-gray-500">(From step 1)</span>
                  </p>
                  <p>
                    My father has been suffering from Lung cancer{" "}
                    <span className="text-gray-500">(From step 2)</span> for more than 2 years{" "}
                    <span className="text-gray-500">(Ask in the story)</span>. He is undergoing chemotherapy{" "}
                    <span className="text-gray-500">(Ask in the story)</span> in Apollo hospital Bangalore{" "}
                    <span className="text-gray-500">(From step 2)</span>. Up until now, we've spent more than 2 Lakhs{" "}
                    <span className="text-gray-500">(Ask in the story)</span> - assisted from savings & loans from family & friends.{" "}
                    <span className="text-gray-500">(Ask in the story)</span>
                  </p>
                  <p>
                    To continue his treatment we need{" "}
                    <span className="text-[#FF4D00] font-bold">2,00,000.00</span>{" "}
                    <span className="text-gray-500">(From Step 2)</span> more in the next 15 days{" "}
                    <span className="text-gray-500">(From step 2)</span>. Please help us
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* QAS Interface Carousel */}
      <section className="bg-gray-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <h3 className="text-2xl font-black text-black mb-8 uppercase">QAS Interface</h3>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: `-${currentQASSlide * 100}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="w-full flex-shrink-0">
                    <motion.div whileHover={{ scale: 1.01 }} className="border-2 border-black p-8 bg-white transition-shadow hover:shadow-xl">
                      <Image
                        src="/images/Tulip/17.svg"
                        alt="QAS Interactive popup showing Build your story interface with questions and live preview"
                        width={1000}
                        height={600}
                        className="w-full h-auto"
                      />
                    </motion.div>
                  </div>
                  <div className="w-full flex-shrink-0">
                    <motion.div whileHover={{ scale: 1.01 }} className="border-2 border-black p-8 bg-white transition-shadow hover:shadow-xl">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Image
                          src="/images/Tulip/30.svg"
                          alt="QAS flow step 1 - I am a student"
                          width={300}
                          height={400}
                          className="w-full h-auto"
                        />
                        <Image
                          src="/images/Tulip/31.svg"
                          alt="QAS flow step 2 - I am studying in"
                          width={300}
                          height={400}
                          className="w-full h-auto"
                        />
                        <Image
                          src="/images/Tulip/32.svg"
                          alt="QAS flow step 3 - I live in Bengaluru (with)"
                          width={300}
                          height={400}
                          className="w-full h-auto"
                        />
                        <Image
                          src="/images/Tulip/33.svg"
                          alt="QAS flow step 4 - In the next 30 days"
                          width={300}
                          height={400}
                          className="w-full h-auto"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {[0, 1].map((index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentQASSlide(index)}
                      className={`w-12 h-1 transition-all ${
                        currentQASSlide === index ? "bg-black" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentQASSlide(Math.max(0, currentQASSlide - 1))}
                    disabled={currentQASSlide === 0}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-colors"
                  >
                    ←
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentQASSlide(Math.min(1, currentQASSlide + 1))}
                    disabled={currentQASSlide === 1}
                    className="w-12 h-12 border-2 border-black flex items-center justify-center disabled:opacity-30 hover:bg-black hover:text-white transition-colors"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-[#FF4D00] transition-colors"
              >
                Access interactive prototypes →
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happened After Launch */}
      <section className="border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12">
              WHAT HAPPENED AFTER LAUNCH<span className="text-[#FF4D00]">.</span>
            </h2>
          </AnimatedSection>

          {/* Results Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div variants={slideInLeft} whileHover={{ scale: 1.02 }} className="border-2 border-black p-8 bg-gray-50 transition-shadow hover:shadow-xl">
              <Image
                src="/images/Tulip/15.svg"
                alt="After Launch Funnel - Conversion flow from initiated to submitted"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div variants={slideInRight} whileHover={{ scale: 1.02 }} className="border-2 border-black p-8 bg-white h-full flex items-center justify-center transition-shadow hover:shadow-xl">
              <table className="w-full text-black">
                <thead>
                  <tr className="border-b-2 border-black">
                    <th className="text-left py-3 px-4 font-bold">Month</th>
                    <th className="text-right py-3 px-4 font-bold">Submitted</th>
                    <th className="text-right py-3 px-4 font-bold">Converted</th>
                    <th className="text-right py-3 px-4 font-bold">Raised</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Oct</td>
                    <td className="text-right py-3 px-4">789</td>
                    <td className="text-right py-3 px-4">65.09%</td>
                    <td className="text-right py-3 px-4">23763837</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Nov</td>
                    <td className="text-right py-3 px-4">2300</td>
                    <td className="text-right py-3 px-4">76.64%</td>
                    <td className="text-right py-3 px-4">63723823</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Dec</td>
                    <td className="text-right py-3 px-4">1301</td>
                    <td className="text-right py-3 px-4">64.69%</td>
                    <td className="text-right py-3 px-4">47328723</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-4">Jan</td>
                    <td className="text-right py-3 px-4">3212</td>
                    <td className="text-right py-3 px-4 text-[#FF4D00] font-bold">86.69%</td>
                    <td className="text-right py-3 px-4">73623763</td>
                  </tr>
                  <tr className="bg-black text-white">
                    <td className="py-3 px-4 font-bold">Total</td>
                    <td className="text-right py-3 px-4 font-bold">7602</td>
                    <td className="text-right py-3 px-4 font-bold">73.27%</td>
                    <td className="text-right py-3 px-4 font-bold text-[#FF4D00]">208440146</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          {/* 4 Months Results */}
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-black text-white p-8 md:p-12 shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-8">
                IN 4 MONTHS<span className="text-[#FF4D00]">.</span>
              </h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { value: "21%", title: "increase in total fundraisers", desc: "Rural areas contributed up to 19% of these" },
                  { value: "<30%", title: "drop-off rate", desc: "Reduced from 33%" },
                  { value: "35%", title: "revenue jump", desc: "Combined with tipping model" }
                ].map((stat, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <motion.span
                      initial={{ scale: 0.5 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                      className="text-4xl font-black text-[#FF4D00] inline-block"
                    >
                      {stat.value}
                    </motion.span>
                    <p className="text-lg mt-2">{stat.title}</p>
                    <p className="text-sm text-gray-400 mt-1">{stat.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="border-t border-gray-800 mt-8 pt-8">
                <p className="text-gray-400">
                  <span className="text-white font-bold">This happened:</span> Tulip stopped charging fundraisers →
                  With better stories → more trust → more donations → more tips
                </p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Learnings */}
      <section className="bg-gray-50 border-b-4 border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12">
              LEARNINGS<span className="text-[#FF4D00]">.</span>
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {[
              "Rural markets don't need \"lite versions\" - they need culturally resonant versions",
              "Storytelling is not a writing problem, it's a structure problem.",
              "Behaviour > demographics when it comes to product expansion",
              "Cross-functional empathy accelerates innovation more than individual creativity.",
              "Great revenue outcomes often hide behind human-centric problem-solving."
            ].map((learning, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex gap-4 p-6 border-2 border-black bg-white transition-shadow hover:shadow-xl cursor-default"
              >
                <span className="text-2xl font-black text-[#FF4D00]">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-lg text-gray-800">{learning}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black relative overflow-hidden">
        {/* Animated gradient background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, #FF4D00 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, #FF4D00 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, #FF4D00 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-10"
        />

        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Next Case Study */}
            <motion.div variants={slideInLeft}>
              <Link
                href="/case-studies/reva"
                className="border border-gray-800 p-8 md:p-10 hover:border-[#FF4D00] transition-all group block hover:shadow-xl hover:shadow-[#FF4D00]/10"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className="w-16 h-16 bg-[#FFCB00] rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-black text-black">RE</span>
                  </div>
                  <span className="text-3xl font-black text-white">VA</span>
                </motion.div>
                <p className="text-gray-400 mb-6">
                  Reduced customer onboarding time to just 10.2 days (earlier 180 days) without increasing CAC.
                </p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:text-[#FF4D00] transition-colors">
                  View case study
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-xl"
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              variants={slideInRight}
              className="border border-gray-800 p-8 md:p-10 flex flex-col justify-center hover:border-[#FF4D00] transition-all hover:shadow-xl hover:shadow-[#FF4D00]/10"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                WANT TO DISCUSS THIS CASE STUDY<span className="text-[#FF4D00]">?</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Let's talk about how strategic design can transform your business metrics.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#FF4D00] text-white px-8 py-4 font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-colors w-fit"
                >
                  Get in touch →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* UML Modal */}
      {showUMLModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setShowUMLModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative max-w-6xl w-full bg-white p-8 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowUMLModal(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-[#FF4D00] transition-colors font-bold"
            >
              ×
            </motion.button>
            <div className="mt-8">
              <Image
                src="/images/Tulip/uml.svg"
                alt="Full UML Diagram - Complete user workflow and system architecture"
                width={1400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
