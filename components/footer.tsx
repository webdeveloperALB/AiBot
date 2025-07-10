import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X, MessageSquare, Send } from "lucide-react";
import Image from 'next/image';

export function Footer() {
  const footerSections = [
    {
      title: "Trading",
      links: [
        { name: "Futures Trading", href: "/trading" },
        { name: "Crypto Swap", href: "/swap" },
        { name: "Staking", href: "/staking" },
        { name: "Trading Control Center", href: "/trading-control-center" },
      ],
    },
    {
      title: "Advanced Features",
      links: [
        { name: "AI Arbitrage", href: "/arbitrage" },
        { name: "Prop Firm", href: "/prop-firm" },
        { name: "Event Markets", href: "/events" },
        { name: "Portfolio Analytics", href: "/trading-control-center" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Security", href: "/security" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "API Documentation", href: "/api-docs" },
        { name: "Trading Guides", href: "/guides" },
        { name: "Community", href: "/community" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Risk Disclosure", href: "/risk-disclosure" },
        { name: "Compliance", href: "/compliance" },
      ],
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center pb-6">
              <Image
                src="/logo.png"
                alt="Vinance Logo"
                width={150}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <p className="text-gray-300 text-base mb-6">
              Professional trading platform with advanced tools for
              cryptocurrency, forex, and commodities trading.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-600 text-white hover:bg-cyan-600/10 hover:text-cyan-300 bg-transparent"
                aria-label="X"
              >
                <X className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-600 text-white hover:bg-cyan-600/10 hover:text-cyan-300 bg-transparent"
                aria-label="Discord"
              >
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-cyan-600 text-white hover:bg-cyan-600/10 hover:text-cyan-300 bg-transparent"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-cyan-300 hover:text-pink-300 transition-colors text-base"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-base">
              © 2025 All rights reserved. Trading involves risk and may
              not be suitable for all investors.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-cyan-300 hover:text-pink-300 text-base"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-cyan-300 hover:text-pink-300 text-base"
              >
                Privacy
              </Link>
              <Link
                href="/risk-disclosure"
                className="text-cyan-300 hover:text-pink-300 text-base"
              >
                Risk Disclosure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
