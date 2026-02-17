import { Star, MessageSquareQuote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Facilities Management Team",
      company: "Embassy Group",
      text: "AK Enterprises handled our large-scale site clearance with exceptional efficiency. Their team is professional, safety-conscious, and completed the dismantling ahead of schedule.",
      rating: 5
    },
    {
      name: "Facilities Management Team",
      company: "Mphasis",
      text: "We engaged AK Enterprises for our office dismantling and e-waste disposal. Their adherence to environmental compliance and secure handling of assets was impressive.",
      rating: 5
    },
    {
      name: "Facilities Management Team",
      company: "Tangoe",
      text: "A reliable partner for corporate scrap management. They provided transparent valuation and seamless execution for our facility upgrades. Highly recommended for bulk projects.",
      rating: 5
    }
  ];

  return (
    <section className="section-testimonials py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Client <span className="text-green-600">Success Stories</span>
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-green-100 group">
              <div className="mb-6 text-green-600">
                <MessageSquareQuote className="w-10 h-10 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="mb-8 text-gray-600 font-medium leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="pt-6 border-t border-gray-200">
                <div className="font-bold text-gray-900 text-lg">{testimonial.company}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
