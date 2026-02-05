'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, type Easing } from 'framer-motion';

const easeOut: Easing = [0.25, 0.46, 0.45, 0.94];
import BookRequestModal from './BookRequestModal';

export default function BooksFrameworks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const books = [
    {
      title: 'Business-Driven UX Career Roadmap',
      description: 'Understand how to grow a career by aligning UX with business outcomes.',
      image: '/images/book1.svg',
      color: '#FF4D00',
    },
    {
      title: 'SPEAR Framework',
      description: 'Set objective, Prepare, Execute, Analyse, Report. A practical model for research.',
      image: '/images/book2.svg',
      color: '#FFCB00',
    },
    {
      title: 'DATDSDL Design Process',
      description: 'A 7-step UX design process from discovery to launch and beyond.',
      image: '/images/book3.svg',
      color: '#27ca3f',
    },
    {
      title: 'Blueprint of CX Integration',
      description: 'Bringing CX into organisations where it\'s seen as "nice to have."',
      image: '/images/book4.svg',
      color: '#0077b5',
    },
    {
      title: 'Power of DCMs',
      description: 'Decode complex data into clear, actionable insights.',
      image: '/images/book5.svg',
      color: '#e4405f',
    },
  ];

  const handleBookClick = (bookTitle: string) => {
    setSelectedBook(bookTitle);
    setIsModalOpen(true);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }
  };

  return (
    <>
      <section ref={sectionRef} className="bg-[#111] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
              Books & Frameworks
            </h2>
            <p className="text-gray-500">
              Methods I've authored and applied worldwide
            </p>
          </motion.div>

          {/* Desktop Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden md:grid grid-cols-3 gap-5 mb-6"
          >
            {books.slice(0, 3).map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleBookClick(book.title)}
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF4D00] transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 w-1 h-full origin-top"
                      style={{ backgroundColor: book.color }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF4D00] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500">{book.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="hidden md:grid grid-cols-3 gap-5"
          >
            {books.slice(3).map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => handleBookClick(book.title)}
                className="group cursor-pointer"
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#FF4D00] transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-0 left-0 w-1 h-full origin-top"
                      style={{ backgroundColor: book.color }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#FF4D00] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-500">{book.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleBookClick('General Access Request')}
                className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-[#FF4D00] hover:text-white transition-colors"
              >
                Request access →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Mobile: Horizontal Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:hidden overflow-x-auto -mx-4 px-4 pb-4"
          >
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {books.map((book, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => handleBookClick(book.title)}
                  className="w-[280px] flex-shrink-0 cursor-pointer"
                >
                  <div className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-800">
                    <div className="aspect-video relative">
                      <Image src={book.image} alt={book.title} fill className="object-cover" />
                      <div
                        className="absolute top-0 left-0 w-1 h-full"
                        style={{ backgroundColor: book.color }}
                      ></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-white mb-1">{book.title}</h3>
                      <p className="text-xs text-gray-500 line-clamp-2">{book.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="md:hidden mt-6"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookClick('General Access Request')}
              className="w-full bg-white text-black py-4 rounded-xl font-bold"
            >
              Request access →
            </motion.button>
          </motion.div>
        </div>
      </section>

      <BookRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        bookTitle={selectedBook}
      />
    </>
  );
}
