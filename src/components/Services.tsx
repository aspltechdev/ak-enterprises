"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Zap, Fan, Disc, Layers, Wind } from "lucide-react";

export function Services() {
    const services = [
        {
            title: "Office Scrap & Dismantling",
            description: "Professional furniture removal and complete office reinstatement services for corporate spaces.",
            image: "/assets/office scrap and dismantaling/office hero.jpeg",
            href: "/office-scrap-dismantling-services",
            icon: Building2,
            color: "from-blue-500 to-blue-700"
        },
        {
            title: "Electrical & Power Scrap",
            description: "Safe recycling of transformers, industrial wiring, UPS systems, and power distribution units.",
            image: "/assets/electrical scraps/wirescrap.jpg",
            href: "/electrical-power-scrap-services",
            icon: Zap,
            color: "from-yellow-400 to-yellow-600"
        },
        {
            title: "HVAC Scrap",
            description: "Efficient disposal of central cooling systems, industrial AC units, and chiller plants.",
            image: "/assets/hvac scraps/acscraps.jpg",
            href: "/hvac-scrap-services",
            icon: Fan,
            color: "from-cyan-400 to-cyan-600"
        },
        {
            title: "Metal Scrap Buyers",
            description: "Competitive pricing for high-volume ferrous and non-ferrous industrial metal waste.",
            image: "/assets/metal scraps/metallandscao.jpeg",
            href: "/metal-scrap-buyers",
            icon: Disc,
            color: "from-orange-400 to-orange-600"
        },
        {
            title: "Industrial & Mixed Scrap",
            description: "Comprehensive management of factory waste, machinery scrap, and mixed industrial lots.",
            image: "/assets/mixed scrap/mixed.jpg.jpeg",
            href: "/industrial-mixed-scrap-buyers",
            icon: Layers,
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Wood Scrap Buyers",
            description: "Large-scale collection of industrial pallets, timber waste, and wooden construction scrap.",
            image: "/assets/wood/wood1.jpeg",
            href: "/wood-scrap-buyers",
            icon: Wind,
            color: "from-emerald-400 to-emerald-600"
        }
    ];

    return (
        <section id="services" className="section-services py-12 md:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-green-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-2 block"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none"
                        >
                            Services <span className="text-green-600 italic font-serif font-normal">We Offer</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto"
                    >
                        <Link
                            href="/contact-us"
                            className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-600 transition-all duration-300 w-full md:w-auto"
                        >
                            Request a Quote
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                        >
                            <Link href={service.href} className="block relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={idx === 0}
                                    loading={idx === 0 ? "eager" : "lazy"}
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500"></div>

                                {/* Floating Icon Badge - Slightly smaller */}
                                <div className={`absolute bottom-4 left-4 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg text-white transform -rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                                    <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </Link>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-lg md:text-2xl font-black mb-2 text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 font-medium leading-relaxed mb-6 flex-grow text-xs md:text-base">
                                    {service.description}
                                </p>

                                <div className="pt-4 border-t border-gray-50 mt-auto">
                                    <Link
                                        href={service.href}
                                        className="inline-flex items-center gap-2 text-green-700 font-black uppercase tracking-widest text-[10px] md:text-xs group/link"
                                    >
                                        Explore Service
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
