"use client";

import Link from "next/link";
import { Download, LayoutDashboard, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const serviceLinks = [
  { href: "/services/parental-controls", label: "Parental Control Solutions" },
  {
    href: "/services/business-device-management",
    label: "Employee Device Management",
  },
  { href: "/services/mobile-cybersecurity", label: "Mobile Cybersecurity" },
  { href: "/services/anti-theft", label: "Lost Phone & Anti-Theft" },
  { href: "/services/training", label: "Digital Training & Awareness" },
  { href: "/web-development", label: "Web Development & Managed IT" },
];

const resourceLinks = [
  { href: "/child-safety-online", label: "Child Safety Online" },
  { href: "/resources", label: "Resources Hub" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass =
    "inline-flex h-10 w-max items-center justify-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/95 shadow-sm shadow-black/10 backdrop-blur-sm transition-colors hover:!bg-white/15 hover:!text-white focus:!bg-white/15 focus:!text-white focus:outline-none data-[active]:!bg-white/15 data-[state=open]:!bg-white/15";
  const navTriggerClass =
    "!bg-white/5 !text-white/95 border border-white/10 shadow-sm shadow-black/10 backdrop-blur-sm hover:!bg-white/15 hover:!text-white focus:!bg-white/15 focus:!text-white data-[state=open]:!bg-white/15 data-[state=open]:!text-white";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#05051f]/90 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="h-10 w-10 rounded-full bg-[conic-gradient(from_140deg,#22d3ee,#6366f1,#ff6b6b,#22d3ee)] p-1 shadow-lg shadow-cyan-500/20">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#05051f]">
                <ShieldCheck className="h-5 w-5 text-cyan-200" />
              </div>
            </div>
            <span className="hidden sm:inline font-bold text-xl tracking-wide text-white">
              Mulikamtoto
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[780px] gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[#101042] shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={navTriggerClass}>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[420px] gap-3 p-4 md:grid-cols-2">
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-[#101042] shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/features" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Features
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-it-works" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    How it works
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkClass}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 rounded-lg bg-[#ff6767] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#ff6767]/25 transition hover:bg-[#ff7b7b]"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
            <a
              href="https://mimi.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-bold text-white/95 transition hover:bg-white/10 hover:text-white"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </a>

            <button
              className="md:hidden rounded-lg border border-white/15 p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-5 flex flex-col gap-3">
            <Link
              href="/"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Home
            </Link>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                Services
              </p>
              <div className="mt-3 grid gap-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                Resources
              </p>
              <div className="mt-3 grid gap-2">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/features"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              How it works
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white/80 hover:text-white py-2"
            >
              Contact
            </Link>
            <a
              href="https://net.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[#ff6767] px-4 py-3 text-sm font-bold text-white"
            >
              <Download className="w-4 h-4" />
              Download App
            </a>
            <a
              href="https://mimi.mulikampango.co.ke"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-bold text-white"
            >
              <LayoutDashboard className="w-4 h-4" />
              Access Dashboard
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
