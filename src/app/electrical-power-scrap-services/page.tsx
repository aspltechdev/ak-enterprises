import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight, Building2, Battery, Zap, Cable, Cpu, Workflow, ShieldCheck, Factory, ClipboardList, FileText, Wrench, MessageSquare, Recycle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electrical & Power Scrap Buyers | Large-Scale Scrap Services – AK Enterprises",
    description: "AK Enterprises offers large-scale electrical and power scrap services including UPS, battery, wiring, and panel scrap with safe dismantling.",
};

export default function ElectricalPowerScrapService() {
    const serviceHighlights = [
        {
            title: "UPS and battery scrap (bulk quantities)",
            icon: Battery,
        },
        {
            title: "Electrical wiring and cable scrap",
            icon: Cable,
        },
        {
            title: "Electrical panels and power control units",
            icon: Cpu,
        },
        {
            title: "Parallel / power distribution scrap",
            icon: Workflow,
        },
        {
            title: "Industrial electrical components",
            icon: Zap,
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

            <main className="pt-[64px]">
                {/* Hero Section */}
                <section className="relative py-10 md:py-16 lg:py-20 bg-gray-900 text-white overflow-hidden flex items-center min-h-[25vh] md:min-h-[35vh]">
                    <div className="absolute inset-0 z-0 text-center">
                        <Image
                            src="/assets/subpages images/wirescrap.jpg"
                            alt="Electrical Scrap"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-gray-900/60"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight max-w-5xl mx-auto tracking-tighter text-center">
                            Electrical & Power Scrap Buyers for <span className="text-green-500">Large-Scale Facilities</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed text-center">
                            Professional electrical and power scrap services for factories, commercial buildings, data centers, and industrial facilities.
                        </p>
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
                                    <h2 className="text-green-600 font-black uppercase tracking-tight text-xl md:text-3xl lg:text-4xl">Introduction</h2>
                                    <p className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
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

                            <div className="w-full lg:w-1/3">
                                <div className="relative h-64 md:h-80 lg:h-[450px] w-full max-w-md mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
                                    <Image
                                        src="/assets/services/ups.jpeg"
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
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="text-green-600 font-extrabold uppercase tracking-tight mb-4 text-xl md:text-2xl lg:text-3xl text-left">Electrical & Power Scrap Services</h2>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-gray-900 text-left">
                                    Safe Handling of Large-Scale Electrical Scrap
                                </h3>
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
                                    src="/assets/subpages images/copper.jpg"
                                    alt="Professional Wire Scrap Handling"
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
                            <h2 className="text-green-600 font-extrabold uppercase mb-4 text-xl md:text-2xl lg:text-3xl text-center">Types of Electrical Scrap We Buy</h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">Our Electrical Scrap Services Include:</h3>
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
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-green-600 font-extrabold uppercase tracking-tight mb-4 text-xl md:text-2xl lg:text-3xl text-center">Our Process</h2>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">Structured Approach for Electrical Scrap Removal</h3>
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
                                        Free Inspection
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
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
