"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import LanguageSwitcher from "./LanguageButton";
import menuData from "./menuData";

const Header = () => {
  // mobile navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen((p) => !p);

  // sticky header
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close on outside click (mobile menu)
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

  const pathname = usePathname();

  return (
    <header
      className={`top-0 left-0 z-40 w-full transition-colors duration-300 ${
        sticky
          ? "fixed bg-white/80 backdrop-blur-xs shadow-sticky dark:bg-gray-900 dark:shadow-sticky-dark"
          : "absolute bg-white dark:bg-gray-900"
      }`}
    >
      {/* container with tighter horizontal padding */}
      <div className="container mx-auto max-w-[83rem] px-4">
        {/* tighter vertical padding to match reference */}
        <div className="flex items-center justify-between py-4 lg:py-5">
          {/* Logo slightly larger and consistent line-height */}
          <Link
            href="/"
            className={`block shrink-0 ${sticky ? "py-2" : "py-2"}`}
            aria-label="WaterSec Home"
          >
            <Image
              src="/images/hero/logoWaterSecBlue.png"
              alt="WaterSec Logo"
              width={170}
              height={82}
              className="h-auto w-[190px] dark:hidden"
              priority
            />
            <Image
              src="/images/hero/logoWaterSecBlue.png"
              alt="WaterSec Logo"
              width={170}
              height={82}
              className="hidden h-auto w-[190px] dark:block"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden flex-1 items-center justify-start lg:flex translate-y-[1px]">
            {/* slightly smaller gap to tighten the row */}
            <ul className="ml-16 mt-6 flex items-center space-x-6">
              {menuData.map((item, i) => (
                <li key={i}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      className={`text-[15px] md:text-[16px] font-medium tracking-tight transition-colors ${
                        pathname === item.path
                          ? "text-gray-900 dark:text-white font-semibold"
                          : "text-gray-500 hover:text-gray-900 dark:text-white/70 dark:hover:text-white hover:font-semibold"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right controls — icon spacing and button sizing adjusted */}
          <div className="ml-4 hidden items-center space-x-4 lg:flex">
            <ThemeToggler />
            <LanguageSwitcher />
            <Link
              href="/demo"
              className="rounded-xl bg-[#0A66FF] px-5 py-2.5 text-[15px] md:text-[16px] font-semibold text-white shadow-md transition-colors hover:bg-[#0A66FF]/90"
            >
              Request a DEMO
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            ref={toggleBtnRef}
            onClick={toggleNavbar}
            aria-label="Mobile Menu"
            className="rounded-md p-2 ring-watersecblue focus:outline-none focus:ring-2 lg:hidden"
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
          className={`transition-opacity lg:hidden ${
            navbarOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="mt-2 rounded-lg border border-black/10 bg-white p-4 shadow-lg dark:border-white/10 dark:bg-dark">
            <ul className="flex flex-col space-y-2">
              {menuData.map((item, i) => (
                <li key={i}>
                  {item.path ? (
                    <Link
                      href={item.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`block rounded px-2 py-2 text-[15px] font-medium transition-colors ${
                        pathname === item.path
                          ? "bg-black/5 text-gray-900 dark:bg-white/10 dark:text-white"
                          : "text-gray-700 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                      }`}
                    >
                      {item.title}
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ThemeToggler />
                <LanguageSwitcher />
              </div>
              <Link
                href="/demo"
                onClick={() => setNavbarOpen(false)}
                className="rounded-lg bg-[#0A66FF] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#0A66FF]/90"
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
