"use client";

import { MapPin, Phone, Mail, ChevronDown, MessageCircle, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      mobile: formData.get("mobile"),
      scrapType: formData.get("scrap-type"),
      location: formData.get("location"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Failed to connect to the server. Please check your internet.");
    }
  };

  return (
    <section className="section-contact py-10 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="border-2 border-green-600 rounded-[2.5rem] p-6 md:p-10 lg:p-12 bg-white shadow-xl shadow-green-900/5">
          {/* Header - Compact */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-2">
              Contact <span className="text-green-600 font-serif italic">Us</span>
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
                    <a href="mailto:info@akenterprises.com" className="text-base md:text-lg font-bold text-gray-800 break-all hover:text-green-600 transition-colors">info@akenterprises.com</a>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-widest">Call Us</span>
                      <a href="tel:+919538438069" className="text-base md:text-lg font-bold text-gray-800 hover:text-green-600 transition-colors">+91 9538438069</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-green-600 uppercase tracking-widest">WhatsApp</span>
                      <a href="https://wa.me/919538438069" target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-bold text-gray-800 hover:text-green-600 transition-colors">+91 9538438069</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group text-left sm:col-span-2 lg:col-span-1">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                      No 33/2, Opp to Dmart,<br />
                      Kodichikkanahalli, Bengaluru Urban - 560068,<br />
                      Karnataka, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form - Compact Fields */}
            <div className="bg-white lg:border-l lg:border-gray-100 lg:pl-10">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 text-left">
                  <label htmlFor="name" className="text-sm font-bold text-gray-800">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="mobile" className="text-sm font-bold text-gray-800">Mobile No. <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    required
                    placeholder="Your Mobile No"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left">
                  <label htmlFor="scrap-type" className="text-sm font-bold text-gray-800">Scrap Type</label>
                  <div className="relative">
                    <select
                      id="scrap-type"
                      name="scrap-type"
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
                    name="location"
                    placeholder="Your Location"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all text-sm"
                  />
                </div>

                <div className="space-y-1 text-left md:col-span-2">
                  <label htmlFor="message" className="text-sm font-bold text-gray-800">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Message"
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none font-medium transition-all resize-none text-sm"
                  ></textarea>
                </div>

                <div className="md:col-span-2 flex flex-col gap-4">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full sm:w-auto px-10 py-3 rounded-lg font-black uppercase tracking-widest text-sm transition-all shadow-md active:scale-95 flex items-center justify-center gap-3 ${status === "loading"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-700 hover:bg-green-800 text-white"
                      }`}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        SUBMITTING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        SUBMIT ENQUIRY
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 text-green-600 font-bold bg-green-50 p-3 rounded-lg border border-green-200 animate-in fade-in slide-in-from-top-1">
                      <CheckCircle2 className="w-5 h-5" />
                      Enquiry sent successfully! Our team will contact you soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 font-bold bg-red-50 p-3 rounded-lg border border-red-200 animate-in fade-in slide-in-from-top-1">
                      <AlertCircle className="w-5 h-5" />
                      {errorMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

