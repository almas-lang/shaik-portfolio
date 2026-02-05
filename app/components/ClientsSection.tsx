'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function ClientsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const clientsRow1 = [
    { name: 'Yokogawa', logo: '/images/Logos/yokogawa.jpeg' },
    { name: 'Lighthouse Canton', logo: '/images/Logos/LC.png' },
    { name: 'GetCopayHelp', logo: '/images/Logos/Getcopay.jpeg' },
    { name: 'To the New', logo: '/images/Logos/tothenew.jpeg' },
    { name: 'Credit Saison', logo: '/images/Logos/creditsaison.png' },
    { name: 'Tata Sky', logo: '/images/Logos/Tata_Sky.webp' },
  ];

  const clientsRow2 = [
    { name: 'Milaap', logo: '/images/Logos/milaap.jpeg' },
    { name: 'Xperience Wave', logo: '/images/Logos/xw.png' },
    { name: 'Motus', logo: '/images/Logos/motus.jpeg' },
    { name: 'Fortra', logo: '/images/Logos/fortra.png' },
    { name: 'KredX', logo: '/images/Logos/kredx.jpeg' },
    { name: 'Westcon-Comstor', logo: '/images/Logos/Westcon-Comstor.jpeg' },
  ];

  const LogoItem = ({ client }: { client: { name: string; logo: string } }) => (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 bg-white rounded-xl flex items-center justify-center p-3 mx-2 md:mx-3"
    >
      <Image
        src={client.logo}
        alt={`${client.name} logo`}
        width={100}
        height={60}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );

  return (
    <section ref={sectionRef} className="bg-[#0a0a0a] border-t border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-500 mb-8">20+ businesses across startups to MNCs</p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative py-6"
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* Row 1 - Moving Left */}
        <div className="flex mb-4 animate-marquee-left">
          {[...clientsRow1, ...clientsRow1, ...clientsRow1].map((client, index) => (
            <LogoItem key={`row1-${index}`} client={client} />
          ))}
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex animate-marquee-right">
          {[...clientsRow2, ...clientsRow2, ...clientsRow2].map((client, index) => (
            <LogoItem key={`row2-${index}`} client={client} />
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
