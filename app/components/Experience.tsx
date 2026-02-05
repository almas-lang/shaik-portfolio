'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Easing } from 'framer-motion';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export default function Experience() {
  const [activeStation, setActiveStation] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const milestones = [
    { year: '2011', title: 'Started Design', description: 'Began my journey in design, exploring visual and interaction design principles.', color: '#FF4D00' },
    { year: '2015', title: 'First Agency', description: 'Co-founded my first design agency, working with early-stage startups.', color: '#FF4D00' },
    { year: '2018', title: 'Design Lead', description: 'Led design teams across multiple products, scaling from 0 to millions of users.', color: '#FF4D00' },
    { year: '2020', title: 'Founded Tulip', description: 'Built a design agency that grew to serve 26+ clients across industries.', color: '#FFCB00' },
    { year: '2022', title: 'Trained 2000+', description: 'Expanded into design education, training designers across 4 countries.', color: '#FFCB00' },
    { year: 'NOW', title: 'Impact Leader', description: 'Focusing on growth design and helping businesses scale through design strategy.', color: '#27ca3f' },
  ];

  const achievements = {
    businesses: [
      'Co-founded 2 profitable companies',
      'Partnered with 26 businesses - startups to MNCs',
      'Helped 8+ businesses scale up to 5X',
    ],
    designers: [
      'Trained 2000+ UX Designers across 4 countries',
      'Positioned 100+ into leadership roles',
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">The Journey</h2>
          <p className="text-gray-500 mb-12">13 years of building, teaching, and growing</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Journey Map */}
          <div className="relative">
            {/* Desktop: Horizontal Timeline */}
            <div className="hidden md:block">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="absolute top-6 left-0 right-0 h-1 bg-gray-800 rounded-full origin-left"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D00] via-[#FFCB00] to-[#27ca3f] rounded-full"></div>
              </motion.div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex justify-between relative"
              >
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="relative flex flex-col items-center cursor-pointer group"
                    onMouseEnter={() => setActiveStation(index)}
                    onMouseLeave={() => setActiveStation(null)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      className={`w-4 h-4 rounded-full border-4 bg-[#0a0a0a] z-10 transition-all duration-300`}
                      style={{ borderColor: milestone.color }}
                    />
                    <span className={`mt-4 text-xs font-bold transition-colors ${activeStation === index ? 'text-white' : 'text-gray-500'}`}>
                      {milestone.year}
                    </span>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={activeStation === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-16 left-1/2 -translate-x-1/2 w-48 p-4 bg-[#1a1a1a] rounded-xl border border-gray-700 ${activeStation === index ? '' : 'pointer-events-none'}`}
                    >
                      <h4 className="text-white font-bold text-sm mb-1">{milestone.title}</h4>
                      <p className="text-gray-400 text-xs">{milestone.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="md:hidden relative pl-8">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF4D00] via-[#FFCB00] to-[#27ca3f] origin-top"
              />
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="absolute -left-8 top-1 w-4 h-4 rounded-full border-4 bg-[#0a0a0a]" style={{ borderColor: milestone.color }}></div>
                  <div>
                    <span className="text-xs font-bold text-gray-500">{milestone.year}</span>
                    <h4 className="text-white font-bold">{milestone.title}</h4>
                    <p className="text-gray-400 text-sm">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Speaking Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 hidden md:block"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-video rounded-2xl overflow-hidden relative bg-[#1a1a1a]"
              >
                <Image src="/images/speaking.svg" alt="Speaking at event" fill className="object-cover" />
              </motion.div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Businesses Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#FF4D00] transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 bg-[#FF4D00]/10 rounded-xl flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-[#FF4D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h3 className="text-white font-bold text-lg">Businesses</h3>
              </div>
              <ul className="space-y-4">
                {achievements.businesses.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-[#FF4D00]/20 text-[#FF4D00] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">{index + 1}</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Designers Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className="bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#FFCB00] transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="w-10 h-10 bg-[#FFCB00]/10 rounded-xl flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-[#FFCB00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </motion.div>
                <h3 className="text-white font-bold text-lg">Designers</h3>
              </div>
              <ul className="space-y-4">
                {achievements.designers.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-6 h-6 bg-[#FFCB00]/20 text-[#FFCB00] rounded-full flex items-center justify-center font-bold flex-shrink-0 text-xs">{index + 1}</span>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Mobile Speaking Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="md:hidden"
            >
              <div className="aspect-video rounded-2xl overflow-hidden relative bg-[#1a1a1a]">
                <Image src="/images/speaking.svg" alt="Speaking at event" fill className="object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
