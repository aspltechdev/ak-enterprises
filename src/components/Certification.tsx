"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BadgeCheck, ShieldCheck } from "lucide-react";

export function Certification() {
    const content = [
        { text: "ISO 9001 : 2015 CERTIFIED COMPANY", subtext: "Quality Management Systems" },
        { text: "CERTIFICATE NO: E20260142535", subtext: "Valid Until: 30/01/2029" },
        { text: "LARGE SCALE OFFICE SCRAP DISMANTLING", subtext: "Ferrous & Non-Ferrous Metals" },
    ];

    return (
        <div className="w-full bg-green-50 py-8 border-y border-green-100 overflow-hidden relative">
            <div className="absolute inset-0 bg-white/50 pattern-grid-lg opacity-10"></div>

            <div className="flex overflow-hidden relative z-10 mask-gradient-horizontal">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="flex gap-16 whitespace-nowrap items-center min-w-max px-8"
                >
                    {/* Repeat content multiple times to ensure seamless loop */}
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex gap-16 items-center">
                            {content.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-default">
                                    {/* Gold Badge Icon Effect */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-yellow-400 blur-sm rounded-full opacity-30 group-hover:opacity-60 transition-opacity"></div>
                                        <ShieldCheck className="w-12 h-12 text-yellow-600 relative z-10 fill-yellow-100" />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-xl md:text-2xl font-black text-green-700 tracking-tight uppercase group-hover:text-green-800 transition-colors">
                                            {item.text}
                                        </span>
                                        <span className="text-xs md:text-sm font-bold text-green-600 tracking-widest uppercase">
                                            {item.subtext}
                                        </span>
                                    </div>

                                    {/* Separator Dot */}
                                    <div className="w-2 h-2 bg-green-300 rounded-full mx-4"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
        .mask-gradient-horizontal {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </div>
    );
}
