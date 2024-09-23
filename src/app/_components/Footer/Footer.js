import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-black  text-gray-100 ">
        <div className="px-8 py-4 flex md:flex-col  lg:flex-row  sm:flex-col">
          <div className="basis-1/2 flex lg:hidden sm:flex md:flex mb-3">
            {/* button */}
            <button className="text-white border-white border-solid border-2   h-12 min-w-40">
              <div className="flex justify-start px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span> English </span>
              </div>
            </button>
          </div>
          <div className="basis-1/4">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Udemy Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Teach on Udemy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Get the app
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Help and Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Affiliate
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/4">
            <ul>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Cookie settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Sitemap
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:underline decoration-solid"
                >
                  Accessibility statement
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-1/2 lg:flex  justify-end sm:hidden md:hidden">
            {/* button */}
            <button className="text-white border-white border-solid border-2   h-12 min-w-40">
              <div className="flex justify-start px-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span> English </span>
              </div>
            </button>
          </div>
        </div>
        {/* section 2 logo and copy right */}
        <div className="px-8 py-8 flex flex-row justify-between">
          <Image
            alt=""
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
            className="h-8 w-auto"
            width={91}
            height={34}
          />
          <p className="text-sm text-white"> ©2024 Udemy, Inc. </p>
        </div>
      </footer>
    </>
  );
}
