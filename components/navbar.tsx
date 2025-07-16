"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
            {/* Robot Trading */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="text-cyan-300 hover:text-white hover:bg-cyan-600/10"
                asChild
              >
                <a href="https://account.whiterock24.ai/register">
                  Robot Trading
                </a>
              </Button>
              {/* Invisible bridge to prevent gap */}
              <div className="absolute left-0 top-full w-full h-2 bg-transparent group-hover:block hidden" />
              <div
                className="absolute left-0 top-full w-36 bg-black/90 rounded-lg shadow-xl border border-gray-700
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 ease-in-out z-20 mt-2"
              >
                <a
                  href="https://account.whiterock24.ai/login"
                  className="block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white first:rounded-t-lg transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="https://account.whiterock24.ai/register"
                  className="block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white last:rounded-b-lg transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>

            {/* Trading Platform */}
            <div className="relative group">
              <Button
                className="bg-black text-white border border-gray-700 hover:bg-gray-900"
                asChild
              >
                <a href="https://dex.whiterock24.ai/sign-up">
                  Trading Platform
                </a>
              </Button>
              {/* Invisible bridge to prevent gap */}
              <div className="absolute left-0 top-full w-full h-2 bg-transparent group-hover:block hidden" />
              <div
                className="absolute left-0 top-full w-36 bg-black/90 rounded-lg shadow-xl border border-gray-700
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200 ease-in-out z-20 mt-2"
              >
                <a
                  href="https://dex.whiterock24.ai/sign-in"
                  className="block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white first:rounded-t-lg transition-colors"
                >
                  Sign In
                </a>
                <a
                  href="https://dex.whiterock24.ai/sign-up"
                  className="block px-4 py-3 text-gray-200 hover:bg-gray-700 hover:text-white last:rounded-b-lg transition-colors"
                >
                  Sign Up
                </a>
              </div>
            </div>
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
              <Button className="bg-transparent">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
