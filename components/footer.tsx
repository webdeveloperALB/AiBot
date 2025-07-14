'use client';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, MessageSquare, Send, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const footerSections = [
    {
      title: "Trading",
      links: [
        { name: "Futures Trading", href: "/trading" },
        { name: "Crypto Swap", href: "/swap" },
        { name: "Staking", href: "/staking" },
      ],
    },
    {
      title: "Advanced Features",
      links: [
        { name: "AI Arbitrage", href: "/arbitrage" },
        { name: "Prop Firm", href: "/prop-firm" },
        { name: "Event Markets", href: "/events" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Section - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2">
            <div className="max-w-md">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/logo.png"
                  alt="WhiteRock Logo"
                  width={150}
                  height={40}
                  className="rounded-lg"
                />
              </Link>

              <p className="text-gray-300 text-base leading-relaxed mb-8">
                Professional trading platform with advanced tools for
                cryptocurrency, forex, and commodities trading.
              </p>

              {/* Contact Section */}
              <div>
                <h4 className="text-white font-medium text-sm mb-4 uppercase tracking-wide">
                  Contact Us
                </h4>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-cyan-600 text-white hover:bg-cyan-600/10 hover:text-cyan-300 bg-transparent transition-all duration-200"
                    aria-label="Email Us"
                    onClick={() =>
                      (window.location.href = "mailto:support@whiterock24.com")
                    }
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    support@whiterock24.com
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Navigation Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-6 relative">
                {section.title}
                <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-pink-500 transform translate-y-2"></div>
              </h3>
              <nav>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-base block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col space-y-2">
              <p className="text-gray-400 text-sm">
                © 2025 WhiteRock24. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Trading involves risk and may not be suitable for all investors.
              </p>
            </div>

            <nav className="flex flex-wrap items-center space-x-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/risk-disclosure"
                className="text-gray-400 hover:text-cyan-300 text-sm transition-colors duration-200"
              >
                Risk Disclosure
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
