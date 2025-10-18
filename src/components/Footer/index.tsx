"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent } from "react";

const Footer = () => {
  const onSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <footer className="relative mt-24 rounded-t-[28px] bg-[#0A66FF] text-white">
      {/* ===== Top content ===== */}
      <div className="container px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* ===== Left: Brand + Menus ===== */}
          <div className="md:col-span-7 lg:col-span-7 xl:col-span-8 pl-6 md:pl-32">

            <div className="flex flex-col gap-10 md:flex-row md:gap-16 mt-2">
              {/* Brand */}
              <div className="min-w-[180px]">
                <Link href="/" className="inline-flex items-center">
                  <Image
                    src="/images/logo/logo2.png"
                    alt="WaterSec"
                    width={160}
                    height={42}
                    className="h-auto w-[160px]"
                    priority
                  />
                </Link>
               {/* <p className="mt-3 text-sm opacity-90">
                  Smart Water Management Solutions
                </p>*/}
              </div>

              {/* Company */}
              <nav aria-label="Company" className="min-w-[200px] mt-3 md:mt-4">
                <h3 className="mb-3 text-[18px] font-semibold">Company</h3>

                <ul className="space-y-2.5 text-[16px]">
                  <li><Link href="/" className="opacity-95 hover:opacity-100">Home</Link></li>
                  <li><Link href="/technologies" className="opacity-95 hover:opacity-100">Technologies</Link></li>
                  <li><Link href="/sdgs" className="opacity-95 hover:opacity-100">SDGs</Link></li>
                </ul>

                {/* divider like the mock */}
                <div className="mt-28 h-[1px] w-[520px] max-w-full bg-white/35" />

                <address className="mt-10 not-italic text-[16px] leading-6">
                  <div className="font-semibold">Manar I, 16 University Street</div>
                  <div>Tunis 2092</div>
                </address>
              </nav>

              {/* About Us */}
              <nav aria-label="About" className="min-w-[220px] mt-3 md:mt-4">
                <h3 className="mb-3 text-[18px] font-semibold">About Us</h3>

                <ul className="space-y-2.5 text-[16px]">
                  <li><Link href="/about" className="opacity-95 hover:opacity-100">Who we are</Link></li>
                  <li><Link href="/career" className="opacity-95 hover:opacity-100">Career</Link></li>
                  <li><Link href="/joinecosystem" className="opacity-95 hover:opacity-100">Join our Ecosystem</Link></li>
                  <li><Link href="/blog" className="opacity-95 hover:opacity-100">Blog</Link></li>
                </ul>
              </nav>
            </div>
          </div>

          {/* ===== Right: Contact form (fixed width, aligned) ===== */}
          <div className="md:col-span-5 lg:col-span-5 xl:col-span-4">
            <form
              onSubmit={onSubmit}
              aria-label="Footer contact form"
              className="ml-auto w-[430px] max-w-full space-y-3"
            >
              {/* Name */}
              <input
                type="text"
                placeholder="Name:"
                className="h-11 w-full rounded-none border-none bg-white px-4 text-[16px] text-[#0A66FF] placeholder-[#0A66FF] outline-none focus:ring-2 focus:ring-white/50"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email:"
                className="h-11 w-full rounded-none border-none bg-white px-4 text-[16px] text-[#0A66FF] placeholder-[#0A66FF] outline-none focus:ring-2 focus:ring-white/50"
              />

              {/* Message */}
              <textarea
                placeholder="Message:"
                className="h-[200px] w-full rounded-none border-none bg-white p-4 text-[16px] text-[#0A66FF] placeholder-[#0A66FF] outline-none focus:ring-2 focus:ring-white/50"
              />

              {/* Buttons row */}
              <div className="mt-3 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex h-11 w-[128px] items-center justify-center rounded-2xl bg-white text-[16px] font-semibold text-[#0A66FF] shadow-sm transition hover:bg-white/95"
                >
                  Send
                </button>
                <button
                  type="reset"
                  className="inline-flex h-11 w-[128px] items-center justify-center rounded-2xl border border-white/80 text-[16px] font-semibold text-white transition hover:bg-white/10"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ===== Bottom bar ===== */}
      <div className="w-full bg-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row">
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} WaterSec, Inc
          </p>

          <div className="flex items-center gap-4">
            {/* language */}
            <div className="flex items-center gap-2 text-sm opacity-90">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
              English
            </div>

            {/* socials */}
            <div className="ml-2 flex items-center gap-2">
              <a href="https://www.facebook.com/profile.php?id=100076298953886" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0A66FF] transition hover:bg-[#0A66FF] hover:text-white">
                <svg width="16" height="16" viewBox="0 0 22 22" fill="none"><path d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z" fill="currentColor" /></svg>
              </a>
              <a href="https://www.instagram.com/watersec" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0A66FF] transition hover:bg-[#0A66FF] hover:text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://medium.com/@watersec" aria-label="Medium" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0A66FF] transition hover:bg-[#0A66FF] hover:text-white">
                <svg width="16" height="16" viewBox="0 0 1043.63 592.71" fill="none"><g fill="currentColor"><path d="M588.67 296.36c0 163.65-131.3 296.36-293.34 296.36C131.29 592.72 0 460.01 0 296.36S131.29 0 295.33 0s293.34 132.71 293.34 296.36zM791.42 296.36c0 153.57-68.2 278.09-152.31 278.09s-152.31-124.52-152.31-278.09 68.2-278.09 152.31-278.09 152.31 124.52 152.31 278.09zM1043.63 296.36c0 147.75-31.1 267.5-69.45 267.5s-69.45-119.75-69.45-267.5S935.84 28.86 974.18 28.86s69.45 119.75 69.45 267.5z" /></g></svg>
              </a>
              <a href="https://www.youtube.com/@watersec8474" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0A66FF] transition hover:bg-[#0A66FF] hover:text-white">
                <svg width="16" height="16" viewBox="0 0 18 14" className="fill-current"><path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/water-sec" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-[#0A66FF] transition hover:bg-[#0A66FF] hover:text-white">
                <svg width="16" height="16" viewBox="0 0 17 16" className="fill-current"><path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" /></svg>
              </a>
            </div>

            {/* Terms */}
            <Link href="/terms" className="ml-4 text-sm underline-offset-2 hover:underline">
              Terms and Conditions & Privacy Policy
            </Link>

            {/* Store badges */}
            <div className="mt-3 flex flex-col items-center gap-2 sm:ml-4 sm:flex-row sm:gap-2">
              <Image src="/images/footer/applestore.png" alt="Download on the App Store" width={120} height={36} className="rounded-[8px]" />
              <Image src="/images/footer/googleplay.png" alt="Get it on Google Play" width={120} height={36} className="rounded-[8px]" />
            </div>
          </div>
        </div>
      </div>

      {/* subtle top-corner radius helper */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-3 rounded-t-[28px] bg-transparent" />
    </footer>
  );
};

export default Footer;
