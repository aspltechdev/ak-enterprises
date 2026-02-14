import React from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Target, History, Users, Award } from "lucide-react";

export const metadata = {
    title: "About Us | AK Enterprises",
    description: "Learn more about AK Enterprises, a leading provider of industrial scrap management and recycling solutions with over 20 years of experience.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen font-sans">
            <Header />
            <main className="pt-[80px] md:pt-[100px]">
                {/* Banner Section */}
                <section className="relative py-20 md:py-32 bg-gray-900 text-white text-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/hero_industrial.png"
                            alt="Industrial Facility"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4">About Our Company</h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-green-400 font-bold uppercase tracking-widest">
                            Trusted industrial scrap management and recycling solutions since 2000.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-4 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <div className="w-full lg:w-1/2">
                                <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-3">
                                    Our Story
                                </div>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                                    Leading the Way in <span className="text-green-600">Sustainable</span> Industrial Disposal
                                </h2>
                                <div className="space-y-4 text-gray-700 text-sm md:text-lg leading-relaxed font-bold">
                                    <p>
                                        Welcome to AK Enterprises — your trusted partner in professional scrap management and recycling solutions. We are a dedicated scrap handling company committed to providing efficient, reliable, and environmentally responsible services across commercial, industrial, and corporate sectors.
                                    </p>
                                    <p>
                                        At AK Enterprises, we understand that scrap materials — whether office furniture, electrical waste, metals, or industrial remnants — deserve more than just disposal. They deserve professional handling, fair evaluation, and responsible recycling to maximize value and minimize environmental impact.
                                    </p>
                                    <p>
                                        With years of industry experience and a skilled team, we offer a comprehensive range of scrap services designed to meet every need — from dismantling and collection to recycling and reinstatement — all delivered with integrity and excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 mt-6 lg:mt-0">
                                <div className="relative h-40 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/assets/about/industrial.jpg"
                                        alt="Industrial Facility"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-40 md:h-64 rounded-2xl overflow-hidden shadow-xl md:mt-8">
                                    <Image
                                        src="/assets/office scrap and dismantaling/office1.jpeg"
                                        alt="Our Team"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-4 md:py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: History, label: "Years Experience", value: "24+" },
                                { icon: CheckCircle2, label: "Projects Done", value: "800+" },
                                { icon: Users, label: "Happy Clients", value: "600+" },
                                { icon: Award, label: "Recycling Awards", value: "15+" }
                            ].map((item, i) => (
                                <div key={i} className="text-center p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4">
                                        <item.icon className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="text-3xl font-black text-gray-900 mb-2">{item.value}</div>
                                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Values Section */}
                <section className="py-24 bg-gray-900 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-green-500 font-bold uppercase tracking-widest mb-4">Our Core Values</h2>
                            <h3 className="text-4xl font-black">Why Businesses Trust Us</h3>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Transparency",
                                    desc: "We provide clear documentation and fair market pricing for every transaction."
                                },
                                {
                                    title: "Safety First",
                                    desc: "Our dismantling teams prioritize safety protocols to protect your premises."
                                },
                                {
                                    title: "Sustainability",
                                    desc: "We follow environmentally compliant recycling processes for all scrap types."
                                }
                            ].map((val, i) => (
                                <div key={i} className="bg-gray-800 p-10 rounded-3xl border border-gray-700 hover:border-green-600 transition duration-300">
                                    <div className="text-green-500 font-black text-6xl mb-6 opacity-20">0{i + 1}</div>
                                    <h4 className="text-2xl font-bold mb-4">{val.title}</h4>
                                    <p className="text-gray-400 font-bold leading-relaxed">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
