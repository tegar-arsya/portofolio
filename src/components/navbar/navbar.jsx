"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const previousCurrentScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsPageTop(currentScrollPosition === 0);
      if (
        previousCurrentScrollPosition.current < currentScrollPosition &&
        !isNavbarVisible
      ) {
        setIsNavbarVisible(true);
      } else if (
        previousCurrentScrollPosition.current > currentScrollPosition &&
        isNavbarVisible
      ) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarVisible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navbarText = [
    { number: 1, text: "Home", href: "/"},
    { number: 2,text: "About", href: "/about"},
    { number: 3,text: "Projects", href: "/projects"},
    { number: 4,text: "My cv", href: "https://tegar-arsya.github.io/cv/"},
  ];

  return (
    <div
      className={`fixed top-0 z-[98] w-screen text-green-500 bg-white ${
        !isNavbarVisible
          ? !isPageTop
            ? `translate-y-0 -[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out `
            : " py-3 transition-all"
          : `transition-all duration-300 ease-in-out ${
              !isPageTop ? "-translate-y-full" : "translate-y-0"
            } `
      }`}
    >
      <div className="flex h-24 items-center justify-between px-7 lg:px-14">
        <Link href="/"  scroll={false}>
          <h1
            className="text-2xl font-semibold text-green-500"
            data-aos="fade-down"
            data-aos-once="true"
          >
            Tegar Arsya.
          </h1>
        </Link>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            aria-label={
              !isOpen ? "Open Navigation Menu" : "Close Navigation Menu"
            }
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30"
          >
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current" />
            ) : (
              <BiX className="h-10 w-10 fill-current " />
            )}
          </button>
        </div>

        {/* Navbar Text */}
        <div className="text-base-content hidden  gap-10 lg:flex">
          {navbarText.map((item, index) => (
            <Link
              href={item.href} key={index}
              data-aos="fade-down"
              data-aos-delay={`${index}00`}
              data-aos-once="true"
              scroll={false}
            >
              <span>{item.number}</span>
              <p>{`// ${item.text}`}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen w-full lg:hidden bg-white ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm text-green-500"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4">
          <div className="mt-44 flex flex-col items-center justify-center gap-12 text-base md:text-lg">
            {navbarText.map((item, index) => (
              <Link
                href={item.href}
          
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col">
                  <span>{item.number}.</span>
                  {`${item.text}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
