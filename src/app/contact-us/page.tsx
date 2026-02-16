import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
    title: "Contact Us | AK Enterprises - Get a Quote for Your Scrap Management",
    description: "Get in touch with AK Enterprises for professional office dismantling, metal scrap disposal, and industrial clearance services. Secure fair pricing and fast execution today.",
};

export default function ContactUsPage() {
    return (
        <div className="min-h-screen font-sans overflow-x-hidden w-full">
            <Header />
            <main className="pt-[100px] md:pt-[120px]">
                <ScrollReveal>
                    <Contact />
                </ScrollReveal>

                <ScrollReveal>
                    <FAQ />
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    );
}
