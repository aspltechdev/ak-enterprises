import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AboutHero, MissionVision } from "@/components/AboutUsRedesign";
import { Clients } from "@/components/Clients";

export const metadata: Metadata = {
    title: "About Us | AK Enterprises - Leading Industrial Scrap Solutions",
    description: "Learn about AK Enterprises, a trusted leader in large-scale scrap management, industrial dismantling, and sustainable recycling solutions since 2000.",
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen font-sans overflow-x-hidden w-full bg-white">
            <Header />
            <main className="pt-[100px] md:pt-[120px]">

                <About />

                <div className="py-24">
                    <MissionVision />
                </div>

                <div className="py-24">
                    <Certification />
                </div>

                <div className="bg-gray-50 py-24">
                    <ScrollReveal>
                        <WhyChooseUs />
                    </ScrollReveal>
                </div>
            </main>
            <Footer />
        </div>
    );
}
