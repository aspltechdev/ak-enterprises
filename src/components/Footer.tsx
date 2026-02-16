import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/assets/ak-enterprises-logo.png"
              alt="AK Enterprises Logo"
              width={160}
              height={60}
              className="h-12 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-green-100 text-xs mb-4 max-w-xs">
              Leading provider of industrial solutions and scrap processing services since 2000.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:order-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white">Our Services</h4>
            <ul className="space-y-2 text-xs text-green-100">
              <li><Link href="/office-scrap-dismantling-services" className="hover:text-white transition-colors">Office Scrap & Dismantling</Link></li>
              <li><Link href="/electrical-power-scrap-services" className="hover:text-white transition-colors">Electrical & Power Scrap</Link></li>
              <li><Link href="/hvac-scrap-services" className="hover:text-white transition-colors">HVAC Scrap</Link></li>
              <li><Link href="/metal-scrap-buyers" className="hover:text-white transition-colors">Metal Scrap (Ferrous & Non-Ferrous)</Link></li>
              <li><Link href="/industrial-mixed-scrap-buyers" className="hover:text-white transition-colors">Industrial & Mixed Scrap</Link></li>
              <li><Link href="/wood-scrap-buyers" className="hover:text-white transition-colors">Wood Scrap</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:order-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-sm font-bold mb-4 uppercase tracking-widest text-white">Contact Info</h4>
            <ul className="space-y-3 text-xs text-green-100 italic">
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>No 33/2 , opp to Dmart , kodichikkanahalli , bengaluru urban - 560068 karnataka india</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+91 9538438069</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@akenterprises.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-green-100 italic font-medium gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} AK Enterprises. All rights reserved by <Link href="https://aspltech.in" target="_blank" className="underline hover:text-white transition-colors">Aspltech.in</Link></p>
            <p className="opacity-75">Professional Industrial Scrap Solutions</p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}