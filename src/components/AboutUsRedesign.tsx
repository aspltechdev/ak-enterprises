"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { MoveRight, Target, Eye } from "lucide-react";

export function AboutHero() {
    return (
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/about/industrial.jpg"
                    alt="Industrial Background"
                    fill
                    className="object-cover brightness-50"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block px-4 py-1.5 bg-green-600/20 backdrop-blur-md border border-green-500/30 rounded-full text-green-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                        The AK Legacy
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85]"
                >
                    Pioneering <br />
                    <span className="italic font-serif text-green-500">Excellence</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
                        Setting the industry standard for industrial recycling and dismantling since 2000.
                        We don't just clear scrap; we build sustainable futures.
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-green-500 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}

export function MissionVision() {
    return (
        <section className="py-24 bg-gray-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600/5 -skew-x-12 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                            <Image
                                src="/assets/about/office1.jpeg"
                                alt="Our Operations"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-green-600/10 mix-blend-multiply"></div>

                            <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
                                <p className="text-white text-lg font-bold italic leading-tight">
                                    "Innovation is the cornerstone of our recycling methodology, ensuring we stay ahead in a changing industrial landscape."
                                </p>
                            </div>
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-600 rounded-full flex items-center justify-center p-6 shadow-2xl rotate-12">
                            <span className="text-white font-black text-center leading-none text-xl uppercase tracking-tighter">
                                World Class <br /> Standards
                            </span>
                        </div>
                    </div>

                    <div className="space-y-16 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex items-center gap-6 mb-8 text-green-500">
                                <Target className="w-12 h-12" />
                                <div className="h-0.5 w-20 bg-green-600/30"></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                Our <span className="text-green-500">Mission</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-medium">
                                To revolutionize the scrap industry by providing transparent, ethically-driven, and environmentally sustainable disposal solutions for corporate and industrial giants across India. We aim to maximize resource recovery while minimizing ecological footprints.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group"
                        >
                            <div className="flex items-center gap-6 mb-8 text-green-500">
                                <Eye className="w-12 h-12" />
                                <div className="h-0.5 w-20 bg-green-600/30"></div>
                            </div>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                Our <span className="text-green-500">Vision</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed font-medium">
                                To become the global benchmark for industrial recycling and facility clearance. We envision a world where industrial scrap is handled with absolute integrity, and zero-waste processing becomes a reality by 2030 through our innovative technologies.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
