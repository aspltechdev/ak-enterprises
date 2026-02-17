import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowDown, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "What Is Industrial & Large-Scale Scrap Management? | AK Enterprises",
    description: "Learn what industrial & large-scale scrap management is, how bulk scrap handling works, and why professional scrap management matters for businesses.",
};

export default function BlogDetailPage() {
    const processSteps = [
        {
            step: "Step 1",
            title: "Site Inspection & Assessment",
            description:
                "Professionals evaluate the type, volume, and condition of scrap materials. This helps in planning manpower, equipment, and logistics.",
        },
        {
            step: "Step 2",
            title: "Scrap Segregation",
            description:
                "Materials are sorted into categories such as metal, electrical, wood, and mixed scrap to ensure efficient recycling and better pricing.",
        },
        {
            step: "Step 3",
            title: "Dismantling & Cutting",
            description:
                "Large machinery, HVAC units, or office setups are dismantled safely using specialized tools.",
        },
        {
            step: "Step 4",
            title: "Bulk Collection & Transportation",
            description:
                "Scrap is loaded systematically and transported using suitable vehicles for large-volume movement.",
        },
        {
            step: "Step 5",
            title: "Recycling & Disposal",
            description:
                "Materials are sent to authorized recycling facilities, ensuring environmental responsibility.",
        },
    ];

    return (
        <div className="min-h-screen font-sans bg-white">
            <Header />
            <main className="pt-[80px] md:pt-[100px]">
                {/* Header Section */}
                <section className="py-12 bg-green-50">
                    <div className="container mx-auto px-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 text-[10px] md:text-xs font-bold mb-6 uppercase tracking-widest">
                            Industry Insights
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight mb-6">
                            BLOG
                        </h1>
                        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
                            <Calendar className="w-4 h-4" />
                            <span>February 17, 2026</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span>8 min read</span>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <article className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-10 leading-tight tracking-tighter">
                                    What Is Industrial & Large-Scale Scrap Management? A Complete Guide for Businesses
                                </h2>

                                {/* Featured Image */}
                                <div className="relative aspect-[16/9] rounded-[2rem] overflow-hidden mb-12 shadow-2xl border-4 border-white group">
                                    <Image
                                        src="https://images.unsplash.com/photo-1751054720514-067105f538d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlcXVpcG1lbnQlMjBjcmFuZXxlbnwxfHx8fDE3NzAxODkxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Industrial scrap management"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        priority
                                        loading="eager"
                                        sizes="(max-width: 1200px) 100vw, 1200px"
                                    />
                                </div>

                                <div className="prose prose-xl max-w-none text-gray-700 font-medium leading-relaxed space-y-6">
                                    <p>
                                        Industrial & large-scale scrap management plays a crucial role in how factories, offices, warehouses, and commercial sites handle waste materials responsibly. As industries grow, the volume of scrap generated also increases, making professional scrap management not just a necessity but a business advantage.
                                    </p>
                                    <p>
                                        In simple terms, industrial scrap management is the organized process of collecting, sorting, dismantling, transporting, and recycling large quantities of scrap materials generated from industrial and commercial operations. Unlike household scrap, this involves bulk volumes, heavy materials, safety risks, and compliance requirements, which demand expert handling.
                                    </p>
                                    <p>
                                        This guide explains what industrial & large-scale scrap management is, how it works, why it matters, and how businesses benefit from choosing professional scrap management services.
                                    </p>
                                </div>
                            </div>

                            {/* Section 1 */}
                            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100">
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
                                    Understanding Industrial & Large-Scale <span className="text-green-600 italic font-serif">Scrap Management</span>
                                </h2>
                                <p className="text-lg text-gray-700 mb-8 font-medium italic">
                                    Industrial scrap management refers to the systematic handling of scrap generated by factories, manufacturing units, corporate offices, warehouses, construction sites, and large commercial spaces. These scraps include metals, electrical items, HVAC systems, wood, machinery parts, and mixed industrial waste.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-green-100">
                                        <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white">
                                                <ArrowDown className="w-5 h-5" />
                                            </div>
                                            Focused Objectives:
                                        </h3>
                                        <ul className="space-y-4 text-gray-600 font-bold uppercase tracking-wider text-xs">
                                            <li className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                High-volume scrap quantities
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                Heavy and hazardous materials
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                Structured dismantling processes
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                Bulk transportation and recycling
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-600 font-medium text-lg leading-relaxed">
                                            This is not a one-time activity. Many industries generate scrap daily, weekly, or during relocation, renovation, or shutdown projects. Professional handling ensures that these assets are managed efficiently without disrupting core operations.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2: Types of Scrap */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight text-center">
                                    Types of Scrap <span className="text-green-600">Involved</span>
                                </h2>
                                <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-medium">
                                    Industrial scrap is diverse and requires specialized expertise to handle correctly. Some of the most common types include:
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Metal Scrap",
                                            description: "This includes mild steel scrap, iron, copper, aluminium, brass, and other metals. These materials hold high recycling value and are commonly generated in large volumes.",
                                            image: "https://images.unsplash.com/photo-1629728849536-02e9fe984513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                                        },
                                        {
                                            title: "Electrical & Power Scrap",
                                            description: "UPS systems, batteries, cables, panels, transformers, and wiring scrap fall under this category. Electrical scrap requires careful dismantling due to safety concerns.",
                                            image: "/assets/electrical scraps/wirescrap.jpg"
                                        },
                                        {
                                            title: "HVAC Scrap",
                                            description: "Large AC units, chillers, ducts, and cooling systems are bulky and heavy, requiring professional dismantling and lifting equipment to ensure zero damage to site premises.",
                                            image: "/assets/hvac scraps/acscraps.jpg"
                                        },
                                        {
                                            title: "Wood Scrap",
                                            description: "Wooden pallets, crates, furniture, plywood, and construction wood scrap are common in warehouses and commercial sites, requiring bulk collection and responsible disposal.",
                                            image: "/assets/wood/wood1.jpeg"
                                        }
                                    ].map((scrap, index) => (
                                        <div key={index} className="group relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                                            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                                <div className="relative w-32 h-32 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
                                                    <Image
                                                        src={scrap.image}
                                                        alt={scrap.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                        sizes="128px"
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-center">
                                                    <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-green-600 transition-colors uppercase tracking-tight">{scrap.title}</h3>
                                                    <p className="text-sm text-gray-600 font-medium leading-relaxed">{scrap.description}</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Why It Matters */}
                            <div className="py-16">
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12 tracking-tight text-center">
                                    Why Professional Management <span className="text-green-600 font-serif italic text-2xl lowercase">matters</span>
                                </h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {[
                                        {
                                            title: "Safety Compliance",
                                            description: "Trained teams follow strict safety protocols to prevent accidents during high-risk dismantling operations."
                                        },
                                        {
                                            title: "Space Optimization",
                                            description: "Bulk scrap removal helps businesses reclaim valuable operational areas quickly and efficiently."
                                        },
                                        {
                                            title: "Legal Compliance",
                                            description: "Ensures responsible recycling that meets environmental regulations and pollution control standards."
                                        },
                                        {
                                            title: "Maximum Value",
                                            description: "Accurate sorting and transparent weighing help businesses earn the best returns on their scrap assets."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="p-8 bg-green-700 rounded-3xl text-white hover:bg-green-600 transition-colors">
                                            <div className="w-10 h-10 border-2 border-green-400 rounded-full flex items-center justify-center font-black text-sm mb-6">
                                                0{index + 1}
                                            </div>
                                            <h3 className="text-lg font-black mb-4 leading-tight uppercase tracking-widest">{item.title}</h3>
                                            <p className="text-sm text-green-50 font-medium leading-relaxed">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 4: How It Works */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight">
                                    How <span className="text-green-600 italic font-serif">It Works</span>
                                </h2>
                                <p className="text-xl text-gray-600 mb-12 font-medium">
                                    A structured approach is key to handling bulk industrial scrap efficiently. Here is the rigorous process followed by professional scrap management teams:
                                </p>

                                <div className="space-y-4">
                                    {processSteps.map((item, index) => (
                                        <div key={index} className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl border-2 border-gray-50 hover:border-green-100 transition-all group">
                                            <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-xl group-hover:bg-green-600 transition-colors">
                                                {index + 1}
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{item.title}</h3>
                                                <p className="text-gray-600 font-medium leading-relaxed">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Conclusion */}
                            <div className="pt-20 border-t border-gray-100 text-center">
                                <div className="max-w-3xl mx-auto">
                                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8">Ready to Optimize Your <span className="text-green-600">Scrap Assets?</span></h2>
                                    <p className="text-xl text-gray-600 font-medium mb-12 leading-relaxed">
                                        Industrial and large-scale scrap management is an essential service for modern businesses. It helps in maintaining a safe, organized, and compliant workspace while unlocking significant financial value.
                                    </p>
                                    <a
                                        href="/contact-us"
                                        className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-gray-900 transition-all hover:scale-105 shadow-xl shadow-green-900/10"
                                    >
                                        Get a Quote Today
                                        <ArrowDown className="w-5 h-5 -rotate-90" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
