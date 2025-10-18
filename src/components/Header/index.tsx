"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "./LanguageButton"; // <- this is the globe version you updated
import menuData from "./menuData";

const Header = () => {
  /** mobile navbar toggle */
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen((p) => !p);

  /** sticky header */
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** close on outside click (mobile menu) */
  const navbarRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };
    if (navbarOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [navbarOpen]);

  /** active link */
  const pathname = usePathname();

  return (
    <header
      className={`top-0 left-0 z-40 w-full ${
        sticky
          ? "fixed bg-white/80 backdrop-blur-xs shadow-sticky dark:bg-gray-dark dark:shadow-sticky-dark"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-3 lg:py-2">
          {/* Logo (smaller) */}
          <Link
            href="/"
            className={`block shrink-0 ${sticky ? "py-3" : "py-4"}`}
            aria-label="WaterSec Home"
          >
            <Image
              src="/images/logo/water-sec_logo.png"
              alt="WaterSec Logo"
              width={120}
              height={56}
              className="h-auto w-[120px] dark:hidden"
              priority
            />
            <Image
              src="/images/logo/water-sec_logo.png"
              alt="WaterSec Logo"
              width={120}
              height={56}
              className="hidden h-auto w-[120px] dark:block"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 items-center justify-start lg:flex">
            <ul className="ml-8 flex items-center space-x-8">
              {menuData.map((item, i) => (
                <li key={i}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`text-[16px] font-semibold transition-colors ${
                        pathname === item.path
                          ? "text-black dark:text-white"
                          : "text-[#6B7280] hover:text-[#111827] dark:text-white/70 dark:hover:text-white"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right controls */}
          <div className="ml-4 hidden items-center space-x-5 lg:flex">
            <ThemeToggler />
            {/* Globe toggles language */}
            <LanguageSwitcher />
            <Link
              href="/demo"
              className="rounded-[12px] bg-[#0A66FF] px-6 py-3 text-[16px] font-semibold text-white shadow-btn transition-colors hover:bg-[#0A66FF]/90"
            >
              Request a DEMO
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            ref={toggleBtnRef}
            onClick={toggleNavbar}
            aria-label="Mobile Menu"
            className="lg:hidden rounded-md p-2 ring-watersecblue focus:outline-none focus:ring-2"
          >
            <span
              className={`block h-0.5 w-7 bg-black transition-all dark:bg-white ${
                navbarOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`mt-1.5 block h-0.5 w-7 bg-black transition-all dark:bg-white ${
                navbarOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`mt-1.5 block h-0.5 w-7 bg-black transition-all dark:bg-white ${
                navbarOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          ref={navbarRef}
          className={`lg:hidden ${
            navbarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          } transition-opacity`}
        >
          <div className="mt-2 rounded-lg border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-dark">
            <ul className="flex flex-col space-y-3">
              {menuData.map((item, i) => (
                <li key={i}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`block rounded px-2 py-2 text-[16px] font-semibold transition-colors ${
                        pathname === item.path
                          ? "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                          : "text-[#374151] hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <ThemeToggler />
                <LanguageSwitcher />
              </div>
              <Link
                href="/demo"
                onClick={() => setNavbarOpen(false)}
                className="rounded-[10px] bg-[#0A66FF] px-4 py-2 text-sm font-semibold text-white"
              >
                Request a DEMO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
