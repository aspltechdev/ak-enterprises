"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden py-12">
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/homepage.jpeg"
            alt="Large-Scale Industrial Scrap Dismantling"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="max-w-4xl mx-auto text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-3xl md:text-4xl lg:text-5xl mb-4 font-black leading-tight"
          >
            Large-Scale Industrial Scrap,<br />
            <span className="text-green-400">Handled Professionally</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            className="text-base md:text-lg mb-6 text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            AK Enterprises specializes in large-volume ferrous and non-ferrous scrap purchasing, offering safe dismantling, bulk clearance, and responsible recycling for industries and businesses.
          </motion.p>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6 pt-2 max-w-3xl mx-auto"
          >
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-black mb-1 text-green-400 group-hover:scale-110 transition-transform">800+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-black mb-1 text-green-400 group-hover:scale-110 transition-transform">600+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-300">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-black mb-1 text-green-400 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-300">Team Members</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
