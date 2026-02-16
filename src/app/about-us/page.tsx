import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Certification } from "@/components/Certification";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "About Us | AK Enterprises - Leading Industrial Scrap Solutions",
    description: "Learn about AK Enterprises, a trusted leader in large-scale scrap management, industrial dismantling, and sustainable recycling solutions since 2000.",
};

export default function AboutUsPage() {
    return (
        <div className="min-h-screen font-sans overflow-x-hidden w-full">
            <Header />
            <main className="pt-[80px] md:pt-[100px]">
                <ScrollReveal>
                    <About />
                </ScrollReveal>

                <Certification />

                <ScrollReveal>
                    <WhyChooseUs />
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    );
}
