import Image from "next/image";
import { CheckCircle2, Target, Recycle, Factory, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export function About() {


  return (
    <section id="about" className="pt-20 pb-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Intro Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          <div className="lg:w-1/2">
            <div className="relative group">
              <h1 className="text-green-600 font-black tracking-tight uppercase mb-4 text-2xl lg:text-3xl">ABOUT US</h1>
              <div className="w-24 h-1.5 bg-green-600 mb-8 rounded-full transition-all group-hover:w-40"></div>
            </div>

            <h2 className="text-xl lg:text-2xl font-black mb-6 leading-tight text-gray-900 drop-shadow-sm">
              Leading the Way in <span className="text-green-600">Large-Scale</span> Office Clearance & Professional Dismantling
            </h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 lg:p-8 rounded-r-3xl rounded-bl-3xl mb-10 shadow-lg shadow-green-900/5 hover:shadow-xl transition-all duration-300">
              <div className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed lg:text-justify">
                <p className="font-black text-xl text-gray-900 leading-tight mb-2">
                  Experts in Large-Scale Scrap Handling
                </p>
                <p className="text-gray-900 font-semibold italic">
                  AK Enterprises is a professional scrap purchasing and processing company focused on large-scale industrial, commercial, and office scrap management with complete transparency and compliance.
                </p>
                <p>
                  With decades of industry experience, we manage Large-Scale scrap projects efficiently, ensuring safe dismantling, fair pricing, and smooth execution.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { text: "Large-Scale Office Scrap, Dismantling & Reinstatement", icon: Factory },
                  { text: "Bulk scrap dismantling and clearance expertise", icon: ShieldCheck },
                  { text: "Transparent weighing and competitive bulk pricing", icon: Target },
                  { text: "ISO CERTIFIED COMPANY", icon: ShieldCheck }
                ].map((item, i) => {
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-3 bg-white p-3 rounded-xl border border-green-100 group transition-all`}
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                        <item.icon className="w-4 h-4 text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-bold text-gray-800 text-xs lg:text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative overflow-hidden lg:overflow-visible w-full px-2 lg:px-0">
            <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto lg:max-w-none">
              <div className="space-y-3 md:space-y-4">
                <div className="relative h-40 md:h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/about/metal.jpg"
                    alt="Scrap recycling"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 md:h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/about/industrial.jpg"
                    alt="Industrial machinery"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <div className="relative h-32 md:h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/about/office1.jpeg"
                    alt="Industrial worker"
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative block h-40 md:h-64 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group/cert"
                >
                  <Image
                    src="/assets/about/office service.jfif.jpeg"
                    alt="ISO Certificate"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center px-4 w-full">
              <Link
                href="/aboutus"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white w-full sm:w-auto px-10 py-4 md:py-4 rounded-full font-bold hover:bg-green-700 transition-all hover:shadow-lg group text-sm md:text-base mb-4 lg:mb-0"
              >
                Read More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full -z-10 blur-3xl opacity-60"></div>
          </div>
        </div>


        <div className="text-center mb-8 md:mb-12 px-4 max-w-2xl mx-auto">
          <h2 className="text-green-600 font-extrabold uppercase mb-2 text-base md:text-2xl lg:text-3xl tracking-[0.2em]">Services we offer</h2>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">Our Services Include</h3>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="pb-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto">
            {[
              { title: "Office Scrap & Dismantling", image: "/assets/office scrap and dismantaling/office-dismantling-service.jpg", href: "/office-scrap-dismantling-services" },
              { title: "Electrical & Power Scrap", image: "/assets/electrical scraps/wirescrap.jpg", href: "/electrical-power-scrap-services" },
              { title: "HVAC Scrap", image: "/assets/hvac scraps/hvac.jpg", href: "/hvac-scrap-services" },
              { title: "Metal Scrap (Ferrous & Non-Ferrous)", image: "/assets/metal scraps/metal.jpg", href: "/metal-scrap-buyers" },
              { title: "Industrial & Mixed Scrap", image: "/assets/mixed scrap/mixed.jpg.jpeg", href: "/industrial-mixed-scrap-buyers" },
              { title: "Wood Scrap", image: "/assets/office scrap and dismantaling/office1.jpeg", href: "/wood-scrap-buyers" }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow items-center text-center">
                  <h4 className="text-lg lg:text-xl font-black text-gray-900 mb-4 uppercase tracking-tight leading-tight flex items-center justify-center px-1 min-h-[3rem]">
                    {service.title}
                  </h4>

                  {/* Green Button */}
                  <div className="mt-auto w-full px-1 pb-1">
                    <div className="bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 group-hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

