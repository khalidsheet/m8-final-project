"use client";

import Link from "next/link";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const header = document.querySelector(".overlay");

      if (scrollPosition > 60) {
        header?.classList.add(
          "bg-black",
          "transition-all",
          "opacity-90",
          "shadow-2xl",
          "translate-y-0"
        );
        header?.classList.remove("-translate-y-10");
      } else {
        header?.classList.remove(
          "bg-black",
          "opacity-90",
          "shadow-2xl",
          "translate-y-0"
        );
        header?.classList.add("-translate-y-10");
      }
    });
  }, []);

  return (
    <section className="relative z-[999] ">
      <div className="overlay fixed top-0 left-0 w-full h-24  overflow-hidden"></div>
      <header className="fixed w-full">
        <div className="max-w-7xl mx-auto py-6 px-6 sm:px-6 lg:px-8 flex justify-center md:justify-between items-center">
          <Link href="/" className="text-xl font-normal text-white">
            Code<span className="text-yellow-400 font-bold">Studio</span>
          </Link>
          <div className="hidden md:block">
            <div className="links flex gap-6 items-center">
              <a
                href="/#"
                className="link-hover text-sm font-normal text-white uppercase"
              >
                Home
              </a>
              <a
                href="/#about"
                className="link-hover text-sm font-normal text-white uppercase"
              >
                About
              </a>
              <a
                href="/#projects"
                className="link-hover text-sm font-normal text-white uppercase"
              >
                Projects
              </a>
              <a
                href="/#services"
                className="link-hover text-sm font-normal text-white uppercase"
              >
                Services
              </a>

              <a
                href="/#contact"
                className="bg-transparent uppercase border-2 text-white py-2 px-6 text-sm rounded-full hover:bg-white hover:text-black hover:transition-all hover:font-bold"
              >
                contact us
              </a>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};
