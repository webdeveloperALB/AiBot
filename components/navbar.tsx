"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/trading", label: "Trading" },
    { href: "/swap", label: "Swap" },
    { href: "/staking", label: "Staking" },
    { href: "/arbitrage", label: "AI Robot" },
    { href: "/prop-firm", label: "Prop Firm" },
    { href: "/events", label: "Events" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-black/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Vinance Logo"
              width={150}
              height={40}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-base font-medium transition-colors
                  ${pathname === item.href ? "text-white" : "text-cyan-300"}
                  hover:text-white
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-cyan-300 hover:text-white hover:bg-cyan-600/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  block text-base transition-colors
                  ${pathname === item.href ? "text-white" : "text-cyan-300"}
                  hover:text-white
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button
                variant="ghost"
                className="text-cyan-300 hover:text-white hover:bg-cyan-600/10"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-500 hover:to-pink-500">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
