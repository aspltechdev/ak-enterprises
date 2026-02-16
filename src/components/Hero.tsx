"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  const heroImages = [
    {
      src: "/assets/homepage/home.jpg",
      alt: "Office Dismantling Work",
    },
    {
      src: "/assets/homepage/office4.jpeg",
      alt: "E-Waste & Scrap Management",
    },
    {
      src: "/assets/homepage/home2.jpg",
      alt: "Industrial Scrap Lifting",
    },
  ];

  return (
    <section id="home" className="relative py-8 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-8">
          {/* Headline to match the "Your Waste Our Business" style */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-3"
          >
            Large-Scale <span className="text-green-600">Office Scrap,</span><br />
            Dismantling & Reinstatement
          </motion.h1>

          {/* Underline Separator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-20 bg-green-600 mx-auto rounded-full mb-4"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed"
          >
            Your trusted partner for comprehensive workplace transformations. We specialize in bulk office scrap buying, professional dismantling, and full site reinstatement work—ensuring a seamless transition for large corporate facilities, IT parks, and commercial spaces with zero operational disruption.
          </motion.p>
        </div>

        {/* 3-Column Image Grid matching the reference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5"
        >
          {heroImages.map((img, index) => (
            <div key={index} className="relative h-[180px] md:h-[250px] rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Dark gradient overlay at bottom for text visibility if needed later */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </motion.div>

        {/* Floating Stats Strip (Optional but keeps user content) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-gray-200 pt-6"
        >
          {[
            { label: "Projects", value: "800+" },
            { label: "Clients", value: "600+" },
            { label: "Team", value: "100+" },
            { label: "Exp", value: "15 Yrs" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl font-black text-gray-900">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
