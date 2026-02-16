import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";
import { Calendar, User, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Industry Insights & Blogs | AK Enterprises",
    description: "Explore detailed insights on office dismantling, industrial scrap valuation, and safe HVAC removal from the experts at AK Enterprises.",
};

export default function BlogPage() {
    const blogs = [
        {
            title: "Efficient Office Dismantling: A Comprehensive Guide",
            date: "February 5, 2026",
            author: "Admin",
            readTime: "6 min read",
            image: "/assets/office scrap and dismantaling/office.jpg",
            excerpt: "Office dismantling is more than just clearing out furniture; it is a systematic process that requires precision, safety, and environmental responsibility. At AK Enterprises, we specialize in Large-Scale office clearance projects that minimize downtime for businesses.",
            content: (
                <>
                    <p className="mb-4">
                        Office dismantling is more than just clearing out furniture; it is a systematic process that requires precision, safety, and environmental responsibility. At AK Enterprises, we specialize in Large-Scale office clearance projects that minimize downtime for businesses.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Systematic Removal of Workstations</h3>
                    <p className="mb-4">
                        The core of any office dismantling project lies in the workstations. Our team handles the deconstruction of modular furniture, ensuring that every component—from metal frames to wooden panels—is categorized for proper recycling or disposal.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">E-Waste Management</h3>
                    <p className="mb-4">
                        Modern offices generate significant electronic waste. We ensure that old servers, computer towers, and cabling are handled according to e-waste regulations, preventing hazardous materials from reaching landfills while recovering valuable metals.
                    </p>
                </>
            )
        },
        {
            title: "Industrial Scrap Valuation: How to Get the Best Market Rates",
            date: "January 28, 2026",
            author: "Admin",
            readTime: "5 min read",
            image: "/assets/about/industrial.jpg",
            excerpt: "Determining the value of industrial scrap is a science that involves understanding material purity, market demand, and weight accuracy. For factories and manufacturing units, scrap is often a hidden asset that can be converted into significant working capital.",
            content: (
                <>
                    <p className="mb-4">
                        Determining the value of industrial scrap is a science that involves understanding material purity, market demand, and weight accuracy. For factories and manufacturing units, scrap is often a hidden asset that can be converted into significant working capital.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Material Grading and Purity</h3>
                    <p className="mb-4">
                        Different metals have vastly different values. Brass, copper, and stainless steel are graded based on their purity. Our experts provide on-site evaluation to ensure your materials are categorized correctly, maximizing your return.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Transparent Weighing Systems</h3>
                    <p className="mb-4">
                        Trust is built on accuracy. We use calibrated industrial scales and provide detailed documentation for every load cleared, ensuring complete transparency between our team and the client.
                    </p>
                </>
            )
        },
        {
            title: "Safe HVAC Scrap Removal: Specialized Protocols for Big Units",
            date: "January 20, 2026",
            author: "Admin",
            readTime: "7 min read",
            image: "/assets/hvac scraps/hvac.jpg",
            excerpt: "Dismantling centralized HVAC systems and industrial chillers is a high-risk task that requires specialized tools and expertise. It involves handling bulky machinery and potentially hazardous refrigerants.",
            content: (
                <>
                    <p className="mb-4">
                        Dismantling centralized HVAC systems and industrial chillers is a high-risk task that requires specialized tools and expertise. It involves handling bulky machinery and potentially hazardous refrigerants.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chiller and Cooling Tower Dismantling</h3>
                    <p className="mb-4">
                        Our team is trained in the phased deconstruction of cooling towers and heavy-duty chillers. We focus on recovering valuable copper coils and aluminum fins while ensuring the heavy steel structure is cleared safely.
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Compliance and Safety</h3>
                    <p className="mb-4">
                        Safety is our top priority. We follow strict safety protocols to prevent accidents during high-altitude pipe removal and heavy machinery lifting, providing businesses with a worry-free clearance experience.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen font-sans bg-gray-50">
            <Header />
            <main className="pt-[80px] md:pt-[100px]">
                {/* Hero Header */}
                <section className="py-20 bg-green-700 text-white text-center relative overflow-hidden">
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
                            Our Blog
                        </h1>
                        <p className="text-green-100 text-xl max-w-2xl mx-auto font-medium">
                            Latest news, detailed guides, and industry insights from the world of professional scrap management.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {blogs.map((blog, index) => {
                                const bgColors = ["bg-[#E6F9E6]", "bg-[#E0F2FE]", "bg-[#FDF2F8]"];
                                const decorColors = ["bg-[#A3E635]", "bg-[#38BDF8]", "bg-[#F472B6]"];
                                const colorIndex = index % bgColors.length;

                                return (
                                    <article key={index} className="flex flex-col h-full group">
                                        {/* Image Section */}
                                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                            <Image
                                                src={blog.image}
                                                alt={blog.title}
                                                fill
                                                className="object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                                            />
                                            {/* Decorative Overlays */}
                                            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>

                                            {/* Simple decor based on color index */}
                                            {index % 3 === 0 && (
                                                <div className="absolute top-4 left-4 grid grid-cols-4 gap-1.5 opacity-40">
                                                    {[...Array(12)].map((_, i) => (
                                                        <div key={i} className={`w-4 h-4 rounded-full ${decorColors[colorIndex]}`} />
                                                    ))}
                                                </div>
                                            )}
                                            {index % 3 === 1 && (
                                                <div className="absolute bottom-4 right-4 flex gap-1 opacity-40">
                                                    {[...Array(8)].map((_, i) => (
                                                        <div key={i} className={`w-1 h-20 ${decorColors[colorIndex]}`} style={{ opacity: 1 - (i * 0.1) }} />
                                                    ))}
                                                </div>
                                            )}
                                            {index % 3 === 2 && (
                                                <div className="absolute top-0 right-6 flex gap-1 opacity-30">
                                                    {[...Array(10)].map((_, i) => (
                                                        <div key={i} className={`w-1 h-32 ${decorColors[colorIndex]}`} style={{ transform: `translateY(${i * 6}px)` }} />
                                                    ))}
                                                </div>
                                            )}

                                            {/* Grain Effect Overlay */}
                                            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                                        </div>

                                        {/* Content Section */}
                                        <div className={`p-8 md:p-10 flex-grow ${bgColors[colorIndex]}`}>
                                            <div className="flex items-center gap-4 mb-4 text-[10px] font-black uppercase tracking-widest text-gray-500 opacity-60">
                                                <span>{blog.date}</span>
                                                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                                <span>{blog.readTime}</span>
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-black mb-6 text-gray-900 leading-tight group-hover:text-green-600 transition-colors">
                                                {blog.title}
                                            </h2>
                                            <div className="prose prose-sm max-w-none text-gray-700 font-bold leading-relaxed opacity-80 line-clamp-4">
                                                {blog.excerpt}
                                            </div>

                                            <div className="mt-8 pt-6 border-t border-black/5">
                                                <Link href="/contact-us" className="inline-flex items-center gap-2 text-gray-900 font-black uppercase tracking-widest text-xs hover:text-green-600 transition-all group/btn">
                                                    Enquire Now
                                                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
