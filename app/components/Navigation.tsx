'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-end items-center gap-8">
          <Link
            href="/#work"
            className="text-gray-800 hover:text-[#5b3a8f] transition-colors font-medium"
          >
            My work
          </Link>
          <Link
            href="/contact"
            className="text-gray-800 hover:text-[#5b3a8f] transition-colors font-medium"
          >
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}
