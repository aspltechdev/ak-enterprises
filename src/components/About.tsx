"use client";

import Image from "next/image";
import { CheckCircle2, Target, Recycle, Factory, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function About() {


  return (
    <section className="section-about pt-20 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Premium Redesigned Intro Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-stretch mb-32">
          {/* Left Column: Content & Statistics */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <div className="relative mb-12">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-green-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Our Legacy
              </motion.span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[0.9] tracking-tighter mb-8 group">
                Engineering <br />
                <span className="text-green-600 italic font-serif">Sustainability</span>
              </h2>
              <div className="absolute -left-12 top-0 text-[12rem] font-black text-gray-50 -z-10 leading-none select-none hidden lg:block">
                20
              </div>
            </div>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                AK Enterprises stands as a titan in large-scale industrial scrap management, delivering precision and value since 2000.
              </p>

              {/* Mobile Only Image: Appears after heading and first paragraph */}
              <div className="lg:hidden relative h-[300px] w-full rounded-3xl overflow-hidden shadow-2xl my-8">
                <Image
                  src="/assets/about/industrial.jpg"
                  alt="Industrial Mastery"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We don't just clear scrap; we manage complex industrial transitions. From massive office reinstatements to high-tonnage metal recovery, our processes are rooted in absolute transparency and environmental stewardship.
                </p>
                <p className="font-medium text-gray-900 border-l-4 border-green-600 pl-6 italic bg-green-50/50 py-4 rounded-r-2xl">
                  "Our mission is to turn industrial waste into a strategic asset for our clients through certified, safe, and efficient processing."
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-green-600 mb-1">800+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Projects Done</div>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl font-black text-green-600 mb-1">ISO</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Composition - HIDDEN ON MOBILE */}
          <div className="lg:w-7/12 relative mt-12 lg:mt-0 hidden lg:block">
            <div className="relative h-[500px] md:h-[650px] w-full">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 right-0 w-10/12 h-5/6 rounded-[3rem] overflow-hidden shadow-2xl z-10"
              >
                <Image
                  src="/assets/about/industrial.jpg"
                  alt="Industrial Mastery"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>

              {/* Secondary Overlapping Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-7/12 h-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-8 border-white"
              >
                <Image
                  src="/assets/about/metal.jpg"
                  alt="Metal Recovery"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>

              {/* Floating Decorative Element */}
              <div className="absolute top-1/2 -right-4 translate-y-[-50%] w-32 h-32 bg-green-600 rounded-3xl rotate-12 -z-10 opacity-20 blur-2xl"></div>

              {/* Accent Badge */}
              <div className="absolute -top-6 -right-6 bg-white p-8 rounded-full shadow-2xl z-30 hidden md:block">
                <div className="w-24 h-24 border-2 border-dashed border-green-200 rounded-full flex flex-col items-center justify-center animate-[spin_10s_linear_infinite]">
                  <span className="text-xs font-black text-green-600 uppercase tracking-tighter text-center leading-none">
                    Since <br /> 2000
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* Visual Continuity Elements */}
            <div className="absolute -bottom-10 right-20 w-48 h-48 bg-green-50 rounded-full -z-10 blur-3xl opacity-40"></div>
          </div>
        </div>


        {/* Core Values Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Our Core <span className="text-green-600 font-serif italic">Values</span></h3>
            <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Absolute Integrity",
                desc: "We provide transparent weighing and competitive market valuation for every kilogram of scrap.",
                icon: ShieldCheck,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "Safety First",
                desc: "Our dismantling processes adhere to strict safety protocols, ensuring zero workplace accidents.",
                icon: Wrench,
                color: "bg-orange-50 text-orange-600"
              },
              {
                title: "Green Future",
                desc: "100% of the scrap we handle is processed through authorized recycling channels, minimizing landfill impact.",
                icon: Recycle,
                color: "bg-green-50 text-green-600"
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

