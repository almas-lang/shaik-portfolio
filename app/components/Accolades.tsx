'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Easing } from 'framer-motion';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export default function Accolades() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const awards = [
    {
      title: 'Best Innovator Award',
      organization: 'Xperience Wave',
      description: 'For pioneering UX strategies and programs',
      image: '/images/accolade1.svg',
    },
    {
      title: 'Top Mentor 2024',
      organization: 'ADPList',
      description: 'For guiding designers to career success',
      image: '/images/accolade2.svg',
    },
    {
      title: 'Best Speaker 2023',
      organization: 'GA2023',
      description: 'For impactful design talks and sessions',
      image: '/images/accolade3.svg',
    },
    {
      title: 'Guest Faculty',
      organization: 'LetsUpgrade',
      description: 'Contributions to design education',
      image: '/images/accolade4.svg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeOut } }
  };

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            Recognition
          </h2>
          <p className="text-gray-500 mb-10">Highlights from the journey</p>
        </motion.div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid grid-cols-4 gap-5"
        >
          {awards.map((award, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800 hover:border-[#FFCB00] transition-all duration-300 cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-4 flex justify-center"
              >
                <Image
                  src={award.image}
                  alt={award.title}
                  width={120}
                  height={120}
                  className="w-auto h-auto object-contain"
                />
              </motion.div>
              <h3 className="text-white font-bold text-center mb-1 group-hover:text-[#FFCB00] transition-colors">
                {award.title}
              </h3>
              <p className="text-[#FFCB00] text-sm text-center mb-2">{award.organization}</p>
              <motion.p
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-gray-500 text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {award.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:hidden overflow-x-auto -mx-4 px-4"
        >
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="w-[180px] flex-shrink-0 bg-[#1a1a1a] rounded-xl p-5 border border-gray-800"
              >
                <div className="mb-4 flex justify-center">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={100}
                    height={100}
                    className="w-auto h-auto object-contain"
                  />
                </div>
                <h3 className="text-white font-bold text-sm text-center mb-1">{award.title}</h3>
                <p className="text-[#FFCB00] text-xs text-center">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
