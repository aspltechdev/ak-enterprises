"use client";

import { Menu, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { motion } from "motion/react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (id: string, href: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        setIsMenuOpen(false);
        return;
      }
    }
    router.push(href);
    setIsMenuOpen(false);
  };

  const services = [
    { title: "Office Scrap & Dismantling", href: "/office-scrap-dismantling-services" },
    { title: "Electrical & Power Scrap", href: "/electrical-power-scrap-services" },
    { title: "HVAC Scrap", href: "/hvac-scrap-services" },
    { title: "Metal Scrap (Ferrous & Non-Ferrous)", href: "/metal-scrap-buyers" },
    { title: "Industrial & Mixed Scrap", href: "/industrial-mixed-scrap-buyers" },
    { title: "Wood Scrap", href: "/wood-scrap-buyers" },
  ];

  const isServiceActive = services.some(s => pathname === s.href);


  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="bg-white shadow-sm fixed top-0 left-0 w-full z-50"
    >
      <nav className="max-w-[1440px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => handleNav("home", "/")} className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/assets/ak-enterprises-logo.png"
              alt="AK Enterprises Logo"
              width={240}
              height={80}
              className="h-14 md:h-18 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <button
                onClick={() => handleNav("home", "/")}
                className={`${pathname === "/" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors font-bold cursor-pointer`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("about", "/aboutus")}
                className={`${pathname === "/aboutus" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors font-bold cursor-pointer`}
              >
                About
              </button>
            </li>

            {/* Services Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`flex items-center gap-1 ${isServiceActive ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors py-2 font-bold`}>
                Services <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-[320px] bg-white shadow-2xl rounded-xl border border-gray-100 py-4 mt-0 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className={`flex items-start gap-3 px-6 py-4 text-base font-bold transition-all group/item ${pathname === service.href ? "bg-green-50 text-green-600" : "text-gray-800 hover:bg-green-50 hover:text-green-600"}`}
                    >
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 text-green-600 transition-opacity ${pathname === service.href ? "opacity-100" : "opacity-0 group-hover/item:opacity-100"}`} />
                      <span className="leading-tight">{service.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => handleNav("blog", "/blog")}
                className={`${pathname === "/blog" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors font-bold cursor-pointer`}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNav("contact", "/#contact")}
                className={`${pathname === "/contact" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors font-bold cursor-pointer`}
              >
                Contact
              </button>
            </li>
          </ul>

          <button
            onClick={() => handleNav("contact", "/#contact")}
            className="hidden md:block bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors font-bold cursor-pointer"
          >
            Get Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <button
                  onClick={() => handleNav("home", "/")}
                  className={`${pathname === "/" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors block py-2 font-bold w-full text-left`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about", "/aboutus")}
                  className={`${pathname === "/aboutus" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors block py-2 font-bold w-full text-left`}
                >
                  About
                </button>
              </li>

              <li className="space-y-2">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`w-full flex items-center justify-between font-bold py-2 ${isServiceActive ? "text-green-600" : "text-gray-700"}`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMobileServicesOpen && (
                  <ul className="pl-4 space-y-3 pt-2 animate-in slide-in-from-top-2 duration-200">
                    {services.map((service, index) => (
                      <li key={index}>
                        <Link
                          href={service.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={`text-base font-bold block leading-tight py-2 ${pathname === service.href ? "text-green-600" : "text-gray-700 hover:text-green-600"}`}
                        >
                          • {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={() => handleNav("blog", "/blog")}
                  className={`${pathname === "/blog" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors block py-2 font-bold w-full text-left`}
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact", "/#contact")}
                  className={`${pathname === "/contact" ? "text-green-600" : "text-gray-700"} hover:text-green-600 transition-colors block py-2 font-bold w-full text-left`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
