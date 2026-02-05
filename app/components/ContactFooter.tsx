'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import ContactModal from './ContactModal';

export default function ContactFooter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const contactItems = [
    {
      type: 'email',
      label: 'Email',
      value: 'shaikmurad.design@gmail.com',
      href: 'mailto:shaikmurad.design@gmail.com',
      hoverColor: '#FF4D00',
      icon: (
        <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+91 8147706841',
      href: 'tel:+918147706841',
      hoverColor: '#FFCB00',
      icon: (
        <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    { href: 'https://linkedin.com/in/shaikmurad', hoverBg: '#0077b5', icon: 'linkedin' },
    { href: 'https://www.instagram.com/ux.shaikmurad/', hoverBg: 'gradient', icon: 'instagram' },
    { href: 'https://medium.com/@shaikmurad', hoverBg: '#ffffff', icon: 'medium' },
  ];

  return (
    <>
      <section ref={sectionRef} id="contact" className="bg-[#0a0a0a] border-t border-gray-800 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,77,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255,77,0,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(255,77,0,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - CTA */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#FF4D00] font-bold text-sm uppercase tracking-widest mb-4"
              >
                Let's Connect
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              >
                Ready to make<br />
                <span className="text-[#FF4D00]">impact</span> together?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-400 text-lg mb-8 max-w-md"
              >
                Whether you're a designer seeking growth, or a business looking to scale — let's talk.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-[#FF4D00] to-[#ff6a33] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#FF4D00]/25 transition-all"
              >
                Start a conversation
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>

            {/* Right - Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="space-y-6"
            >
              {/* Email */}
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="mailto:shaikmurad.design@gmail.com"
                className="block p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-[#FF4D00] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center group-hover:bg-[#FF4D00] transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-medium group-hover:text-[#FF4D00] transition-colors">shaikmurad.design@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                whileHover={{ scale: 1.02, x: 5 }}
                href="tel:+918147706841"
                className="block p-6 bg-[#111] rounded-2xl border border-gray-800 hover:border-[#FFCB00] transition-all group"
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center group-hover:bg-[#FFCB00] transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                    <p className="text-white font-medium group-hover:text-[#FFCB00] transition-colors">+91 8147706841</p>
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                className="p-6 bg-[#111] rounded-2xl border border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="text-white font-medium">Bangalore, India</p>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="flex gap-3 pt-2"
              >
                <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://linkedin.com/in/shaikmurad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center border border-gray-800 hover:border-[#0077b5] hover:bg-[#0077b5] transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://www.instagram.com/ux.shaikmurad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center border border-gray-800 hover:border-[#e4405f] hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="https://medium.com/@shaikmurad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#111] rounded-xl flex items-center justify-center border border-gray-800 hover:border-white hover:bg-white transition-all group"
                  >
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="border-t border-gray-800 mt-16 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="text-2xl font-black text-white"
              >
                SM
              </motion.span>
              <p className="text-gray-500 text-sm">
                © 2025 Shaik Murad. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
