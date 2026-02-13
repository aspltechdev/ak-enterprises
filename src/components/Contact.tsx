import { MapPin, Phone, Mail, ChevronDown } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="border-2 border-green-600 rounded-[2.5rem] p-6 md:p-10 lg:p-12 bg-white shadow-xl shadow-green-900/5">
          {/* Header - Compact */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-green-700 font-bold mb-2">
              Contact Us
            </h2>
            <div className="w-32 h-1 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Content - Reduced Height */}
            <div className="flex flex-col h-full">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-2">
                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-gray-800 break-all">info@scarp.com</span>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-gray-800">+91 564826894</span>
                  </div>

                  <div className="flex items-start gap-4 group text-left sm:col-span-2 lg:col-span-1">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                      No. 42, 2nd Main Road, Bengaluru - 560058,
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form - Compact Fields */}
            <div className="bg-white lg:border-l lg:border-gray-100 lg:pl-10">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label htmlFor="name" className="text-sm font-bold text-gray-800">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="mobile" className="text-sm font-bold text-gray-800">Mobile No.</label>
                  <input
                    type="tel"
                    id="mobile"
                    placeholder="Your Mobile No"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="scrap-type" className="text-sm font-bold text-gray-800">Scrap Type</label>
                  <div className="relative">
                    <select
                      id="scrap-type"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-bold text-gray-800 transition-all text-sm appearance-none cursor-pointer pr-10"
                    >
                      <option value="">Select Scrap Type</option>
                      <option value="office">Office Scrap & Dismantling</option>
                      <option value="electrical">Electrical & Power Scrap</option>
                      <option value="hvac">HVAC Scrap</option>
                      <option value="metal">Metal Scrap (Ferrous & Non-Ferrous)</option>
                      <option value="industrial">Industrial & Mixed Scrap</option>
                      <option value="wood">Wood Scrap</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-green-600 stroke-[3px]" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="location" className="text-sm font-bold text-gray-800">Location</label>
                  <input
                    type="text"
                    id="location"
                    placeholder="Your Location"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-800">Message</label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Message"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex justify-start">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-green-700 text-white px-10 py-3 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-green-800 transition-all shadow-md active:scale-95"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
