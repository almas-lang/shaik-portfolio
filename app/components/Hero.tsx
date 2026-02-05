"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="work" className="h-screen flex flex-col bg-[#0a0a0a] pt-16 md:pt-0">
      {/* Top Section - Hero */}
      <div className="h-[35%] flex items-center border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-black leading-[0.9] mb-3"
            >
              <span className="text-white">SHAIK</span> <span className="text-[#FF4D00]">MURAD</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-gray-400 mb-4"
            >
              I help growth happen. 13 years of impact.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-6"
            >
              <div>
                <p className="text-2xl font-black text-white">26</p>
                <p className="text-[10px] text-gray-500 uppercase">Businesses</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">2K+</p>
                <p className="text-[10px] text-gray-500 uppercase">Designers</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#FF4D00]">5X</p>
                <p className="text-[10px] text-gray-500 uppercase">Scale</p>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl lg:text-6xl font-black leading-[0.9] mb-4"
              >
                <span className="text-white">SHAIK</span> <span className="text-[#FF4D00]">MURAD</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg text-gray-400"
              >
                I help growth happen. 13 years of impact.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex gap-6 lg:gap-8 justify-end"
            >
              {[
                { value: "26", label: "Businesses", color: "text-white" },
                { value: "2K+", label: "Designers", color: "text-white" },
                { value: "5X", label: "Scale", color: "text-[#FF4D00]" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <p className={`text-3xl lg:text-4xl font-black ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Switcher - 65% */}
      <div className="h-[65%] flex">
        {/* Project Tabs - Left */}
        <div className="w-20 md:w-24 lg:w-28 bg-[#111] flex flex-col flex-shrink-0">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveProject(0)}
            className={`flex-1 flex items-center justify-center border-b border-gray-800 transition-colors ${
              activeProject === 0 ? 'bg-[#FF4D00]' : 'hover:bg-[#1a1a1a]'
            }`}
          >
            {/* Tulip Logo - T with orange square */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex items-center justify-center relative">
              <span className="text-xl md:text-2xl font-black text-white">T</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-[#FF4D00]"></div>
            </div>
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveProject(1)}
            className={`flex-1 flex items-center justify-center transition-colors ${
              activeProject === 1 ? 'bg-[#FFCB00]' : 'hover:bg-[#1a1a1a]'
            }`}
          >
            {/* REVA Logo - R with yellow bar */}
            <div className="w-10 h-10 md:w-12 md:h-12 bg-black flex flex-col overflow-hidden">
              <div className="flex-1 flex items-center justify-center">
                <span className="text-xl md:text-2xl font-black text-white">R</span>
              </div>
              <div className="h-1.5 md:h-2 bg-[#FFCB00]"></div>
            </div>
          </motion.button>
        </div>

        {/* Active Project Content */}
        <div className="flex-1 relative overflow-hidden">
          {/* Tulip */}
          <AnimatePresence mode="wait">
            {activeProject === 0 && (
              <motion.div
                key="tulip"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 bg-gradient-to-br from-[#FF4D00] to-[#ff6a33]"
              >
                <div className="h-full flex flex-col justify-between p-5 md:p-8 lg:p-12">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4"
                    >
                      Featured Case Study
                    </motion.p>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4"
                    >
                      Tulip
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-white/80 text-sm md:text-lg max-w-lg leading-relaxed"
                    >
                      Achieved 28% more revenue and 12% more customer base in 5 months using innovative storytelling and pricing models.
                    </motion.p>
                  </div>
                  <div>
                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-6 md:gap-8 mb-4 md:mb-6"
                    >
                      <div>
                        <motion.p
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                          className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                        >
                          28%
                        </motion.p>
                        <p className="text-white/60 text-xs md:text-sm">Revenue</p>
                      </div>
                      <div>
                        <motion.p
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7, type: "spring" }}
                          className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                        >
                          12%
                        </motion.p>
                        <p className="text-white/60 text-xs md:text-sm">Customers</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/case-studies/tulip"
                        className="inline-flex items-center gap-2 bg-white text-black px-5 md:px-6 py-3 rounded-lg font-bold text-sm md:text-base hover:bg-black hover:text-white transition-colors"
                      >
                        View full case study →
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* Background Letter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute -bottom-10 -right-5 md:-bottom-20 md:-right-20 text-[30vh] md:text-[50vh] font-black text-white/10 leading-none select-none pointer-events-none"
                >
                  T
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* REVA */}
          <AnimatePresence mode="wait">
            {activeProject === 1 && (
              <motion.div
                key="reva"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0 bg-gradient-to-br from-[#FFCB00] to-[#ffd633]"
              >
                <div className="h-full flex flex-col justify-between p-5 md:p-8 lg:p-12">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-black/60 text-[10px] md:text-xs uppercase tracking-widest mb-2 md:mb-4"
                    >
                      Featured Case Study
                    </motion.p>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl md:text-5xl lg:text-6xl font-black text-black mb-2 md:mb-4"
                    >
                      REVA
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-black/70 text-sm md:text-lg max-w-lg leading-relaxed"
                    >
                      Reduced customer onboarding time to just 10.2 days (earlier 180 days) without increasing CAC.
                    </motion.p>
                  </div>
                  <div>
                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex gap-6 md:gap-8 mb-4 md:mb-6"
                    >
                      <div>
                        <motion.p
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                          className="text-4xl md:text-5xl lg:text-6xl font-black text-black"
                        >
                          10.2
                        </motion.p>
                        <p className="text-black/60 text-xs md:text-sm">Days now</p>
                      </div>
                      <div>
                        <motion.p
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.7, type: "spring" }}
                          className="text-4xl md:text-5xl lg:text-6xl font-black text-black"
                        >
                          180
                        </motion.p>
                        <p className="text-black/60 text-xs md:text-sm">Days before</p>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="/case-studies/reva"
                        className="inline-flex items-center gap-2 bg-black text-white px-5 md:px-6 py-3 rounded-lg font-bold text-sm md:text-base hover:bg-white hover:text-black transition-colors"
                      >
                        View full case study →
                      </Link>
                    </motion.div>
                  </div>
                </div>
                {/* Background Letter */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="absolute -bottom-10 -right-5 md:-bottom-20 md:-right-20 text-[30vh] md:text-[50vh] font-black text-black/10 leading-none select-none pointer-events-none"
                >
                  R
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
