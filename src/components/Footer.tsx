import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <Image
              src="/assets/ak-enterprises-logo.png"
              alt="AK Enterprises Logo"
              width={160}
              height={60}
              className="h-14 w-auto object-contain mb-6 brightness-0 invert"
            />
            <p className="text-green-50 text-sm leading-relaxed mb-6 italic font-medium opacity-90">
              Your trusted partner for professional industrial scrap management, dismantling, and sustainable recycling solutions since 2000.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:scale-110 active:scale-95 transition-all bg-white/10 hover:bg-green-600 p-2.5 rounded-xl border border-white/10">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:scale-110 active:scale-95 transition-all bg-white/10 hover:bg-green-600 p-2.5 rounded-xl border border-white/10">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:scale-110 active:scale-95 transition-all bg-white/10 hover:bg-green-600 p-2.5 rounded-xl border border-white/10">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:scale-110 active:scale-95 transition-all bg-white/10 hover:bg-green-600 p-2.5 rounded-xl border border-white/10">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-white border-b-2 border-green-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-sm text-green-50 font-bold uppercase tracking-wider">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Home</Link></li>
              <li><Link href="/about-us" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>About Us</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Our Services</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Blogs & Updates</Link></li>
              <li><Link href="/contact-us" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-white border-b-2 border-green-500 pb-2 inline-block">Services Catalog</h4>
            <ul className="space-y-3 text-xs text-green-50 font-medium">
              <li><Link href="/office-scrap-dismantling-services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">Office Scrap & Dismantling</Link></li>
              <li><Link href="/electrical-power-scrap-services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">Electrical & Power Scrap</Link></li>
              <li><Link href="/hvac-scrap-services" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">HVAC Scrap</Link></li>
              <li><Link href="/metal-scrap-buyers" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">Metal Scrap Buyers</Link></li>
              <li><Link href="/industrial-mixed-scrap-buyers" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">Industrial Mixed Scrap</Link></li>
              <li><Link href="/wood-scrap-buyers" className="hover:text-white transition-colors hover:translate-x-1 inline-block transition-transform">Wood Scrap Buyers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-sm font-black mb-6 uppercase tracking-widest text-white border-b-2 border-green-500 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-5 text-sm md:text-xs text-green-50 italic font-semibold">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-green-400" />
                <span>
                  No 33/2, Opp to Dmart,<br />
                  Kodichikkanahalli, Bengaluru,<br />
                  Karnataka - 560068
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-green-400" />
                </div>
                <a href="tel:+919538438069" className="hover:text-white transition-colors tracking-wider">+91 9538438069</a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-green-400" />
                </div>
                <a href="mailto:info@akenterprisesblr.com" className="hover:text-white transition-colors">info@akenterprisesblr.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-green-100 italic font-medium gap-6">
          <div className="text-center md:text-left space-y-1">
            <p>&copy; {new Date().getFullYear()} AK Enterprises. All rights reserved by <Link href="https://aspltech.in" target="_blank" className="underline hover:text-white transition-colors">Aspltech.in</Link></p>
            <p className="opacity-75">Professional Industrial Scrap Solutions</p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Terms & Conditions</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors underline decoration-green-500/30 underline-offset-4">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}