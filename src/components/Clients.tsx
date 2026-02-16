"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Clients() {
  const clients = [
    { name: "AXA", logo: "/assets/Clients/AXA_Logo.png" },
    { name: "SAP", logo: "/assets/Clients/SAP logo.jpg.jpeg" },
    { name: "Tangoe", logo: "/assets/Clients/Tangoe_logo.jpg.jpeg" },
    { name: "Bhoruka", logo: "/assets/Clients/bhoruka.png" },
    { name: "Embassy", logo: "/assets/Clients/embassy.jpg.jpeg" },
    { name: "Global Village", logo: "/assets/Clients/global village.png" },
    { name: "Medpharma", logo: "/assets/Clients/medpharma.png" },
    { name: "Meredith", logo: "/assets/Clients/meredith.png" },
    { name: "Mphasis", logo: "/assets/Clients/mphasis logo.png" },
    { name: "Ocean", logo: "/assets/Clients/ocean.jpg.jpeg" },
    { name: "Ocwen", logo: "/assets/Clients/ocwen.jpg.jpeg" },
    { name: "Synechron", logo: "/assets/Clients/synechron.jpg.jpeg" },
  ];

  // Double the list for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="section-clients py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
          Trusted by <span className="text-green-600 font-bold">Industry Leaders</span>
        </h2>
        <div className="w-24 h-1.5 bg-green-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Continuous Ticker */}
        <motion.div
          className="flex gap-8 items-center py-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-24 flex items-center justify-center mx-8"
            >
              <div className="relative w-full h-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient shadows for smooth fading on edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
}
