"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Building2, Battery, Zap, Cable, Cpu, Workflow, ShieldCheck, Factory, ClipboardList, FileText, Wrench, MessageSquare, Recycle, Settings, Power, Bolt, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ElectricalPowerScrapService() {
    const serviceHighlights = [
        {
            title: "DG Sets & Generators",
            icon: Factory,
        },
        {
            title: "UPS and battery scrap",
            icon: Battery,
        },
        {
            title: "Wiring scrap cable",
            icon: Cable,
        },
        {
            title: "Panel scrap (Parallel scrap)",
            icon: Cpu,
        },
        {
            title: "Transformers",
            icon: Bolt,
        },
        {
            title: "Electric Motors",
            icon: Settings,
        },
        {
            title: "ACB & VCB Breakers",
            icon: Power,
        },
    ];

    const whyChooseUs = [
        "Expertise in large-scale electrical scrap handling",
        "Safe dismantling of power systems and panels",
        "Transparent weighing and fair bulk pricing",
        "Compliance with safety and environmental norms",
        "Reliable service for industrial-scale requirements",
    ];

    const processSteps = [
        {
            title: "Site Assessment",
            description: "Evaluation of electrical systems, scrap volume, and safety requirements.",
            icon: ClipboardList,
        },
        {
            title: "Quotation & Planning",
            description: "Clear pricing and execution plan for large-scale electrical scrap projects.",
            icon: FileText,
        },
        {
            title: "Dismantling & Removal",
            description: "Safe dismantling of UPS units, panels, and wiring by trained professionals.",
            icon: Wrench,
        },
        {
            title: "Final Clearance",
            description: "Secure removal and clean handover of the site.",
            icon: CheckCircle2,
        },
    ];

    const industries = [
        "Manufacturing units",
        "Data centers",
        "Commercial complexes",
        "Hospitals & institutions",
        "Industrial facilities",
    ];

    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />

            <main className="pt-[80px] md:pt-[100px]">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] md:min-h-[75vh] flex items-end overflow-hidden bg-gray-900 pb-16 md:pb-28 pt-24">
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0 text-center">
                        <Image
                            src="/assets/electrical scraps/wirescrap.jpg"
                            alt="Electrical Scrap"
                            fill
                            className="object-cover opacity-80 contrast-125"
                            priority
                        />
                        {/* Advanced Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/60 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>

                        {/* Decorative Blur Element */}
                        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/20 blur-[120px] rounded-full -mr-32 -mt-32"></div>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl text-left">
                            {/* Premium Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-bold mb-6"
                            >
                                <ShieldCheck className="w-3.5 h-3.5" />
                                <span className="uppercase tracking-wider">Industrial Excellence Certified</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, x: -25 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 drop-shadow-lg"
                            >
                                Electrical & <br />
                                <span className="text-green-400">Power Scrap</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed font-bold drop-shadow-md"
                            >
                                Professional electrical and power scrap services for factories, commercial buildings, data centers, and industrial facilities.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Intro Text - Corporate Professional Design */}
                <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="w-full lg:w-2/3">
                                <div className="space-y-6 lg:space-y-8 text-gray-700 leading-relaxed">
                                    <h2 className="text-green-600 font-extrabold uppercase tracking-tight text-2xl md:text-4xl lg:text-5xl">Introduction</h2>
                                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                                        AK Enterprises specializes in handling large-scale electrical scrap, ensuring safe dismantling, accurate valuation, and responsible recycling.
                                    </p>
                                    <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
                                        From UPS systems to electrical panels and wiring scrap, our experienced team manages bulk electrical scrap clearance with strict safety standards and transparent processes, making complex electrical scrap removal simple and risk-free.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                        {[
                                            { title: "Safety Focused", desc: "Expert handling of high-voltage scrap", icon: ShieldCheck },
                                            { title: "Eco-Friendly", desc: "Responsible recycling methods", icon: Recycle },
                                            { title: "Industrial Scale", desc: "Large volume project capability", icon: Factory }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-col gap-4 p-6 bg-green-50 rounded-2xl border border-green-100 transition-all hover:bg-green-100 group">
                                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                                    <item.icon className="w-6 h-6 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-extrabold text-gray-900 text-lg">{item.title}</h4>
                                                    <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/3">
                                <div className="relative h-64 md:h-80 lg:h-[450px] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                                    <Image
                                        src="/assets/electrical scraps/ups.jpeg"
                                        alt="Electrical Components"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-green-600/5 hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professionalism Section */}
                <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-2xl md:text-3xl lg:text-5xl font-black mb-6 lg:mb-10 text-gray-900 leading-[1.1] text-left">
                                    Safe Handling of Large-Scale Electrical Scrap
                                </h2>
                                <div className="space-y-4 lg:space-y-6 text-gray-600 text-base md:text-lg text-left">
                                    <p>
                                        Electrical scrap involves heavy equipment, sensitive components, and potential hazards. AK Enterprises is equipped to manage Large-Scale electrical and power scrap with trained manpower, proper tools, and compliance-focused execution.
                                    </p>
                                    <p>
                                        We work with industries and facility managers to ensure systematic dismantling and secure removal without operational disruption.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative h-64 sm:h-[400px] w-full rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/electrical scraps/generator.jpeg"
                                    alt="Professional Generator and Power Scrap Handling"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Checklist */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 text-center leading-[1.1]">Our Electrical Scrap Services Include</h2>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 container mx-auto px-4">
                            {serviceHighlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="group p-4 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-green-100 bg-white shadow-lg shadow-green-900/5 hover:border-green-500 hover:shadow-green-500/10 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                                        <div className="w-10 h-10 sm:w-16 sm:h-16 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-colors">
                                            <Icon className="w-5 h-5 sm:w-8 sm:h-8 text-white transition-colors" />
                                        </div>
                                        <h4 className="text-sm sm:text-lg lg:text-xl font-extrabold text-gray-900 leading-tight group-hover:text-green-600 transition-colors text-left">{item.title}</h4>
                                    </div>
                                );
                            })}
                            <div className="p-4 sm:p-8 flex flex-col justify-center col-span-2 sm:col-span-1 text-center">
                                <p className="text-base sm:text-xl font-bold italic text-green-600 leading-relaxed text-left sm:text-center">
                                    "All materials are handled with proper segregation and safety protocols, ensuring maximum value recovery."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Our Process */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-20">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 text-center leading-[1.1]">Structured Approach for Electrical Scrap Removal</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="group relative p-6 sm:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-green-100 bg-white shadow-2xl shadow-green-900/10 flex flex-col items-center text-center transform hover:-translate-y-4 hover:border-green-500 transition-all duration-500">
                                        <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-600 text-white rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center shadow-xl shadow-green-600/30 mb-6 sm:mb-8 transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-all duration-500">
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
                                        </div>
                                        <h4 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gray-900 group-hover:text-green-600 transition-colors">{step.title}</h4>
                                        <p className="text-gray-600 font-semibold leading-relaxed text-base sm:text-lg">{step.description}</p>
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-green-600 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>



                {/* Call To Action Section */}
                <section className="py-12 md:py-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 transition-transform duration-700 group-hover:scale-110"></div>

                            <div className="relative z-10 text-center">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight text-center">Looking to Dispose Electrical Scrap at Scale?</h2>
                                <p className="text-lg md:text-xl font-medium text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed text-center">
                                    Partner with AK Enterprises for safe, compliant, and high-value electrical scrap clearance.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <a
                                        href="https://wa.me/919538438069"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 bg-white text-green-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all hover:scale-105 shadow-xl"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        WhatsApp Now
                                    </a>
                                </div>
                                <p className="mt-8 text-green-100 font-bold italic text-center">
                                    👉 Professional handling for Large-Scale electrical projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
