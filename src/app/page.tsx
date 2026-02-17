import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Blog } from "@/components/Blog";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

import { ScrollReveal } from "@/components/ScrollReveal";

import { Certification } from "@/components/Certification";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden w-full">
      <Header />
      <main className="pt-[100px] md:pt-[120px]">
        <Hero />

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        {/* Infinite Carousel Section */}
        <Certification />

        <ScrollReveal>
          <WhyChooseUs />
        </ScrollReveal>

        <ScrollReveal>
          <Blog />
        </ScrollReveal>

        <ScrollReveal>
          <Gallery />
        </ScrollReveal>

        <ScrollReveal>
          <Clients />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

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
