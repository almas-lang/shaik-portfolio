'use client';

import Contact from '../components/Contact';
import ContactFooter from '../components/ContactFooter';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Navigation with Back to Home */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-800 hover:text-[#5b3a8f] transition-colors font-medium"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
            <div className="flex items-center gap-8">
              <Link
                href="/#work"
                className="text-gray-800 hover:text-[#5b3a8f] transition-colors font-medium"
              >
                My work
              </Link>
              <span className="text-[#5b3a8f] font-semibold">Contact me</span>
            </div>
          </div>
        </div>
      </nav>

      <Contact />
      <ContactFooter />
    </main>
  );
}
