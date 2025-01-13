"use client";

import React from "react";
import Image from "next/image";

const IllustrationsPage = () => {
  // Array of illustration image details
  const illustrations = [
    {
      src: "/images/illustrations/CookieandCreatures.jpg",
      alt: "Cookie and Creatures",
    },
    {
      src: "/images/illustrations/GirlHuggingMom.jpg",
      alt: "Girl Hugging Mom",
    },
    {
      src: "/images/illustrations/GirlWithPillow.jpg",
      alt: "Girl With Pillow",
    },
    { src: "/images/illustrations/Nobara.jpg", alt: "Nobara" },
    { src: "/images/illustrations/Skeleton.jpg", alt: "Skeleton" },
    { src: "/images/illustrations/ToriiGate.jpg", alt: "Torii Gate" },
  ];

  return (
    <div className="min-h-screen bg-[rgb(24,24,24)] text-white p-8 lg:pl-96">
      <h1 className="text-3xl font-light mb-12">Illustrations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {illustrations.map((illustration, index) => (
          <div key={illustration.src} className="relative w-full h-96">
            <Image
              src={illustration.src}
              alt={illustration.alt}
              fill
              className="object-contain hover:opacity-80 transition-opacity"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={index < 2} // Load first two images immediately
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IllustrationsPage;
