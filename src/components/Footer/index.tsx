"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-1 inline-block">
                  <Image
                    src="/images/logo/water-sec_logo.png"
                    alt="WaterSec logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/water-sec_logo.png"
                    alt="WaterSec logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Smart Water Mangement Solutions
                </p>
                <div className="flex items-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=100076298953886"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@watersec"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 1043.63 592.71"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M588.67 296.36c0 163.65-131.3 296.36-293.34 296.36C131.29 592.72 0 460.01 0 296.36S131.29 0 295.33 0s293.34 132.71 293.34 296.36zM791.42 296.36c0 153.57-68.2 278.09-152.31 278.09s-152.31-124.52-152.31-278.09 68.2-278.09 152.31-278.09 152.31 124.52 152.31 278.09zM1043.63 296.36c0 147.75-31.1 267.5-69.45 267.5s-69.45-119.75-69.45-267.5S935.84 28.86 974.18 28.86s69.45 119.75 69.45 267.5z" />
                      </g>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@watersec8474"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/water-sec"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Menu
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/technologies"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Technologies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sdgs"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      SDGs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  About Us
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/about"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Who are we
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/career"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Career
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/joinecosystem"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-watersecblue dark:text-body-color-dark dark:hover:text-watersecblue"
                    >
                      Join Our Ecosystem
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Contact
                </h2>
                <p>
                  16, Rue de l'Université
                  2092 Manar I, Tunisie
                </p>
                <p>
                  Tél. : (+216) 50 170 085
                </p>
                <p>Email : support@water-sec.com</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
              WaterSec © 2025 All Rights Reserved
            </p>
          </div>
        </div>
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="100"
            viewBox="0 0 70 100"
            fill="none"
          >
            <path
              d="M35 0C35 0 70 40 70 70C70 90 55 100 35 100C15 100 0 90 0 70C0 40 35 0 35 0Z"
              fill="#4A90E2"
              fillOpacity="0.15"
            />
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="100"
            viewBox="0 0 70 100"
            fill="none"
          >
            <path
              d="M35 0C35 0 70 40 70 70C70 90 55 100 35 100C15 100 0 90 0 70C0 40 35 0 35 0Z"
              fill="#4A90E2"
              fillOpacity="0.15"
            />
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
