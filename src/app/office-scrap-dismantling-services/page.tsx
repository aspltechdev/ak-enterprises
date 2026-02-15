"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Building2, Layout, Sofa, Construction, Recycle, ShieldCheck, Factory, ClipboardList, FileText, Wrench, Clock, Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OfficeScrapService() {
    const serviceHighlights = [
        {
            title: "Office scrap and dismantling",
            icon: Factory,
        },
        {
            title: "Reinstatement work",
            icon: Construction,
        },
        {
            title: "Office furniture scraps",
            icon: Sofa,
        },
    ];

    const whyChooseUs = [
        "Specialized in bulk office dismantling projects",
        "Transparent pricing & accurate weighing",
        "Experienced team for complex dismantling work",
        "Safe handling & eco-compliant disposal",
        "Minimal disruption to ongoing operations",
    ];

    const processSteps = [
        {
            title: "Site Inspection",
            description: "We assess the office space, scrap volume, and dismantling requirements.",
            icon: ClipboardList,
        },
        {
            title: "Quotation & Planning",
            description: "Fair pricing with a clear execution plan for large-scale dismantling.",
            icon: FileText,
        },
        {
            title: "Dismantling & Clearance",
            description: "Safe removal of furniture, fixtures, and scrap materials.",
            icon: Wrench,
        },
        {
            title: "Final Handover",
            description: "Clean site with reinstatement support if required.",
            icon: CheckCircle2,
        },
    ];

    const industries = [
        "Corporate offices",
        "IT parks & tech campuses",
        "Co-working spaces",
        "Commercial buildings",
        "Business centers",
    ];

    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />

            <main className="pt-[80px] md:pt-[100px]">
                {/* Hero Section */}
                <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-end overflow-hidden bg-gray-900 pb-16 md:pb-28 pt-24">
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/office scrap and dismantaling/office-dismantling-service.jpg"
                            alt="Large-Scale Office Dismantling"
                            fill
                            className="object-cover opacity-50 contrast-125"
                            priority
                        />
                        {/* Advanced Gradient Overlays */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
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
                                className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6"
                            >
                                Office Scrap & <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Dismantling</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-medium"
                            >
                                Professional bulk removal for large-scale facilities, IT parks, and corporate premises with safety compliance and maximum value recovery.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Intro Text - Corporate Professional Design */}
                <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                    {/* Subtle Geometric Pattern */}
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
                            {/* Left Column: Content */}
                            <div className="w-full lg:w-2/3">
                                <div className="space-y-6 lg:space-y-8 text-gray-700 leading-relaxed">
                                    <h2 className="text-green-600 font-black uppercase tracking-tight text-xl md:text-3xl lg:text-4xl">Introduction</h2>
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                                        We specialize in large-scale office clearances, handling everything from furniture removal to complete dismantling with safety, speed, and transparency.
                                    </p>
                                    <p className="text-base md:text-lg lg:text-xl font-medium text-gray-600">
                                        Our experienced team ensures smooth execution without disrupting operations, making us a trusted partner for bulk office scrap management and reinstatement work.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                                        {[
                                            { title: "Specialized Teams", desc: "Expert staff for large projects", icon: ShieldCheck },
                                            { title: "Eco-Compliant", desc: "Sustainable disposal practices", icon: Recycle },
                                            { title: "Bulk Handling", desc: "Scale for any facility size", icon: Factory }
                                        ].map((item, i) => (
                                            <div key={i} className="flex flex-row sm:flex-col gap-4 sm:gap-3 items-start sm:items-start text-left">
                                                <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                                    <item.icon className="w-5 h-5 text-green-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Image */}
                            <div className="w-full lg:w-1/3">
                                <div className="relative h-64 md:h-80 lg:h-[450px] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                                    <Image
                                        src="/assets/office scrap and dismantaling/office1.jpeg"
                                        alt="Office Clearance"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
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
                                <h2 className="text-green-600 font-extrabold uppercase tracking-tight mb-4 text-xl md:text-2xl lg:text-3xl">Office Scrap & Dismantling Services</h2>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-gray-900">
                                    Large-Scale Office Dismantling Done Professionally
                                </h3>
                                <div className="space-y-4 lg:space-y-6 text-gray-600 text-base md:text-lg">
                                    <p>
                                        Office dismantling requires planning, safety compliance, and skilled execution — especially for large office spaces and multi-floor buildings. AK Enterprises handles office scrap dismantling systematically, ensuring proper segregation, safe removal, and maximum value recovery.
                                    </p>
                                    <p>
                                        We work closely with facility managers and project teams to deliver on-time, hassle-free office scrap clearance.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 relative h-64 sm:h-[400px] w-full rounded-[2rem] md:rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/office scrap and dismantaling/office2.jpeg"
                                    alt="Professional Dismantling"
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
                            <h2 className="text-green-600 font-extrabold uppercase mb-4 text-xl md:text-2xl lg:text-3xl text-center">Services we offer</h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">Our Office Scrap Services Include:</h3>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-[1440px] mx-auto">
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
                                <p className="text-base sm:text-xl font-bold italic text-green-600 leading-relaxed">
                                    "Each project is executed with professional manpower, proper tools, and safety protocols."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Our Process */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-green-600 font-extrabold uppercase tracking-tight mb-4 text-xl md:text-2xl lg:text-3xl">Our Process</h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Simple & Efficient Scrap Removal Process</h3>
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

                                        {/* Bottom highlight bar */}
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1.5 bg-green-600 rounded-full group-hover:w-1/2 transition-all duration-500"></div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Before & After Gallery */}
                <section className="py-12 md:py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-green-600 font-extrabold uppercase mb-4 text-xl md:text-2xl lg:text-3xl">Work Gallery</h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">Before & After Dismantling</h3>
                        </div>

                        <div className="max-w-5xl mx-auto">
                            <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Before Image */}
                                    <div className="relative h-[300px] md:h-[500px] border-b md:border-b-0 md:border-r border-gray-100">
                                        <Image
                                            src="/assets/office scrap and dismantaling/officebefore.jpeg"
                                            alt="Office Before Dismantling"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-6 left-6 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
                                            Before
                                        </div>
                                    </div>
                                    {/* After Image */}
                                    <div className="relative h-[300px] md:h-[500px]">
                                        <Image
                                            src="/assets/office scrap and dismantaling/officeafter.jpeg"
                                            alt="Office After Dismantling"
                                            fill
                                            className="object-cover transition-transform duration-700 hover:scale-105"
                                        />
                                        <div className="absolute top-6 right-6 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest shadow-xl">
                                            After
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Industries We Serve */}


                {/* Call To Action Section */}
                <section className="py-12 md:py-16 bg-white overflow-hidden relative">
                    <div className="container mx-auto px-4 max-w-7xl relative z-10">
                        <div className="bg-green-600 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden group">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 transition-transform duration-700 group-hover:scale-110"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Need Large-Scale Office Scrap Clearance?</h2>
                                <p className="text-lg md:text-xl font-medium text-green-50 mb-10 max-w-3xl mx-auto leading-relaxed">
                                    Contact AK Enterprises for professional office scrap dismantling with fair pricing, fast execution, and complete compliance.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                    <Link
                                        href="https://wa.me/91XXXXXXXXXX"
                                        className="inline-flex items-center gap-3 bg-white text-green-600 px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-50 transition-all hover:scale-105 shadow-xl"
                                    >
                                        <MessageSquare className="w-5 h-5" />
                                        Call / WhatsApp Now
                                    </Link>
                                    <Link
                                        href="/#contact"
                                        className="inline-flex items-center gap-3 bg-green-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-green-800 transition-all hover:scale-105 border border-white/10 shadow-xl"
                                    >
                                        Free Site Inspection
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                                <p className="mt-8 text-green-100 font-bold italic">
                                    👉 Get a complete clearance solution today!
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
