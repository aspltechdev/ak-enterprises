import { Truck, IndianRupee, Clock, ShieldCheck } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: "Fast Bulk Clearance",
      description: "Efficient logistics and equipment designed to manage large-volume scrap removal without disrupting industrial operations."
    },
    {
      icon: IndianRupee,
      title: "Wholesale Bulk Pricing",
      description: "Competitive rates structured specifically for large-scale scrap quantities with transparent and accurate weighing systems."
    },
    {
      icon: Clock,
      title: "Quick Project Fulfillment",
      description: "Streamlined workflows enable faster execution for Large-Scale scrap dismantling and time-sensitive industrial requirements."
    },
    {
      icon: ShieldCheck,
      title: "Certified & Compliant Processing",
      description: "All large-scale scrap handled according to safety, quality, and environmental regulations with proper documentation."
    }
  ];

  return (
    <section id="why-choose-us" className="pt-12 pb-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.1]">Why Choose AK Enterprises for Large-Scale Scrap Management</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLast = index === features.length - 1;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-black mb-4 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-6">
                  {feature.description}
                </p>


              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

