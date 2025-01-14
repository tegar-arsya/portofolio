"use client";
import React from "react";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { TbBrandTiktok } from "react-icons/tb";

export default function Contact() {
  const sosmeds = [
    {
      name: "Tiktok",
      icon: <TbBrandTiktok size={20} />,
      link: "https://www.tiktok.com/@tgrarsya",
    },
    {
      name: "Github",
      icon: <FiGithub size={20} />,
      link: "https://github.com/tegar-arsya",
    },
    {
      name: "Instagram",
      icon: <FiInstagram size={20} />,
      link: "https://www.instagram.com/tegar_arsya/",
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-0 w-[105px]">
        <div className="flex flex-col items-center" data-aos="fade-up">
          {sosmeds.map((sosmed, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              data-aos-duration="600"
            >
              <div
                className="cursor-pointer px-2 py-3 text-green-500 transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                title={sosmed.name}
              >
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sosmed.name}
                >
                  {sosmed.icon}
                </a>
              </div>
            </div>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-white"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[105px]">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div className="mt-4 h-20 w-[1px] bg-white"></div>
        </div>
      </div>
    </div>
  );
}
