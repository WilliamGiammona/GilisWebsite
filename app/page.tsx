"use client";

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const backgrounds = [
  "/images/background/dining-background.jpg",
  "/images/background/magical-night-background.jpg",
  "/images/background/winter-girl-background.jpg",
  "/images/background/japanese-decor-background.jpg",
  "/images/background/tribal-boy-background.jpg",
] as const;

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Sidebar />
      {backgrounds.map((src) => (
        <link key={src} rel="preload" as="image" href={src} />
      ))}

      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `url('${backgrounds[currentIndex]}')`,
        }}
      ></div>
    </>
  );
}
