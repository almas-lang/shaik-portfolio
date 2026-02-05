'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, type Easing } from 'framer-motion';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Divya Srinivas',
      title: 'From Architect to UX Designer',
      quote: 'Murad helped me transition from architecture to UX design seamlessly. His mentorship changed my career trajectory.',
      image: '/images/divya.svg',
      linkedin: 'https://www.linkedin.com/in/divya-srinivas-designs/',
    },
    {
      name: 'Kritika Singh',
      title: 'Design Leadership',
      quote: 'The structured approach to design thinking and leadership skills I learned has been invaluable for my growth.',
      image: '/images/kritika.svg',
      linkedin: 'https://www.linkedin.com/in/kritikasinghchauhan/',
    },
    {
      name: 'Rishik Jha',
      title: 'AI Powered Mentor',
      quote: 'From zero to one - Murad guided me through building an AI-powered product from scratch.',
      image: '/images/rishik.svg',
      linkedin: 'https://www.linkedin.com/in/rishik-jha/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
  };

  return (
    <section ref={sectionRef} className="bg-[#111] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Real people. Real growth.
            </h2>
            <p className="text-gray-500">Stories from designers I've worked with</p>
          </div>
          <motion.div
            whileHover={{ x: 5 }}
          >
            <Link
              href="https://senja.io/p/linkedin-5Of/h1GwVy"
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors text-sm font-medium mt-4 md:mt-0 inline-flex items-center gap-1"
            >
              Read more stories
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Desktop Grid with Spotlight */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid grid-cols-3 gap-6"
        >
          {testimonials.map((person, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            >
              <Link
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
              >
                {/* Spotlight effect on hover */}
                <div
                  className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,203,0,0.4) 0%, transparent 100%)',
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
                  }}
                ></div>

                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 group-hover:border-[#FFCB00] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-[#FFCB00]/20 relative"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Quote overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <p className="text-white/90 text-sm italic leading-relaxed">"{person.quote}"</p>
                    </div>
                  </div>
                  <div className="p-5 relative">
                    {/* Glow effect at top of card content */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#FFCB00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#FFCB00] transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{person.title}</p>
                  </div>
                </motion.div>
              </Link>
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
            {testimonials.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[280px] flex-shrink-0 block"
                >
                  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800">
                    <div className="aspect-[4/3] relative">
                      <Image src={person.image} alt={person.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-base font-bold text-white mb-1">{person.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{person.title}</p>
                      <p className="text-xs text-gray-400 italic line-clamp-2">"{person.quote}"</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
