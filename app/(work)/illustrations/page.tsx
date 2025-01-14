"use client";
import React from "react";
import Image from "next/image";

const IllustrationsPage = () => {
  const illustrations = [
    {
      src: "/images/illustrations/ToriiGate.jpg",
      alt: "Torii Gate",
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/CookieandCreatures.jpg",
      alt: "Cookie and Creatures",
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/GirlHuggingMom.jpg",
      alt: "Girl Hugging Mom",
      needsWhiteBg: true,
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/GirlWithPillow.jpg",
      alt: "Girl With Pillow",
      needsWhiteBg: true,
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/Nobara.jpg",
      alt: "Nobara",
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/SettingSun.jpg",
      alt: "Setting Sun",
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/Skeleton.jpg",
      alt: "Skeleton",
      className: "col-span-1",
    },
    {
      src: "/images/illustrations/Luca.jpg",
      alt: "Luca",
      className: "col-span-1 scale-105",
    },
    {
      src: "/images/illustrations/SpiritedAway.jpg",
      alt: "Spirited Away",
      className: "col-span-1",
    },
  ];

  return (
    <div className="min-h-screen bg-[rgb(24,24,24)] text-white p-8">
      <h1 className="text-3xl font-light mb-12">Illustrations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {illustrations.map((illustration, index) => (
          <div
            key={illustration.src}
            className={`relative ${illustration.className} ${
              illustration.needsWhiteBg ? "bg-white" : ""
            }`}
          >
            <div className="aspect-square">
              <Image
                src={illustration.src}
                alt={illustration.alt}
                width={500}
                height={500}
                className="w-full h-full object-contain hover:opacity-80 transition-opacity"
                priority={index < 2}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IllustrationsPage;
