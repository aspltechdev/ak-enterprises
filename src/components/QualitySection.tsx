import Image from "next/image";
import { Recycle, Boxes, Scale, Users, HardHat, ShieldCheck } from "lucide-react";

export function QualitySection() {
  const features = [
    {
      icon: HardHat,
      title: "Industrial-Grade PPE Usage",
      description: "Our workforce follows strict PPE protocols to safely manage heavy, sharp, and hazardous scrap materials at scale."
    },
    {
      icon: Boxes,
      title: "Bulk Scrap Segregation",
      description: "Large-volume scrap is systematically segregated to prevent contamination and ensure safer downstream processing."
    },
    {
      icon: Scale,
      title: "Calibrated Weighing Systems",
      description: "Accurate weighing processes guarantee transparency and fair valuation for high-quantity scrap consignments."
    },
    {
      icon: Users,
      title: "Trained Industrial Workforce",
      description: "Skilled teams experienced in handling large machinery scrap and complex dismantling operations."
    },
    {
      icon: ShieldCheck,
      title: "Regulatory & Environmental Compliance",
      description: "All large-scale scrap operations follow state, city, and environmental regulations without compromise."
    },
    {
      icon: Recycle,
      title: "Responsible Recycling Practices",
      description: "Industrial scrap is processed responsibly to reduce landfill waste and support sustainable recycling."
    }
  ];

  return (
    <section className="section-quality py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 font-sans">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">Our Commitment to Excellence Without Compromise</h2>
          <p className="text-gray-600 text-lg mx-auto">
            Our goal is to build long-term relationships with clients who value honesty, efficiency, and sustainability in scrap management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-green-50/50 border border-green-100 rounded-[2rem] p-6 md:p-8 hover:bg-white hover:border-green-300 hover:shadow-[0_15px_40px_rgba(22,163,74,0.12)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-all duration-500" />
                  </div>
                  <h3 className="text-xl font-black mb-3 text-gray-900 group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

