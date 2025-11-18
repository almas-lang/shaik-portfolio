'use client';

import { useState } from 'react';
import Image from 'next/image';
import BookRequestModal from './BookRequestModal';

export default function BooksFrameworks() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');

  const books = [
    {
      title: 'Business-Driven UX Career Roadmap',
      description:
        'To help you understand how to grow a career by aligning UX with business outcomes.',
      image: '/images/book1.svg',
    },
    {
      title: 'SPEAR Framework',
      description:
        'Set objective, Prepare, Execute, Analyse, Report. A practical model for research strategy.',
      image: '/images/book2.svg',
    },
    {
      title: 'DATDSDL Design Process',
      description:
        'A 7-step UX design process to move from discovery to launch and beyond',
      image: '/images/book3.svg',
    },
    {
      title: 'Blueprint of CX Integration',
      description:
        'Bringing CX into organisations where it\'s seen as "nice to have."',
      image: '/images/book4.svg',
    },
    {
      title: 'Power of DCMs',
      description:
        'Models designed to help decode complex data into clear, actionable insights.',
      image: '/images/book5.svg',
    },
  ];

  const handleBookClick = (bookTitle: string) => {
    setSelectedBook(bookTitle);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="work" className="py-12 md:py-16 lg:py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#5b3a8f] mb-3 md:mb-4">
              Books & Frameworks
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 md:mb-12 italic max-w-4xl">
              I believe in creating systems people can actually use. Here are
              some of the methods I've authored and applied with designers,
              trainers, and businesses worldwide
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {books.slice(0, 3).map((book, index) => (
                <div
                  key={index}
                  onClick={() => handleBookClick(book.title)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-[#5b3a8f] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{book.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
              {books.slice(3, 4).map((book, index) => (
                <div
                  key={index}
                  onClick={() => handleBookClick(book.title)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group w-full sm:w-1/3"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-[#5b3a8f] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{book.description}</p>
                  </div>
                </div>
              ))}

              {books.slice(4).map((book, index) => (
                <div
                  key={index}
                  onClick={() => handleBookClick(book.title)}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group w-full sm:w-1/3"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800 group-hover:text-[#5b3a8f] transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">{book.description}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-center w-full sm:w-1/3">
                <button
                  onClick={() => handleBookClick('General Access Request')}
                  className="bg-[#E63A46] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-[#d12835] transition-colors inline-flex items-center gap-2"
                >
                  Ask for access →
                </button>
              </div>
            </div>
          </div>
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
