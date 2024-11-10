"use client";
import React, { useState } from "react";
import Image from "next/image";
import Belle from "../../../../public/images/storyboard/concept-design/introvert-club/Belle.jpg";
import Juliet from "../../../../public/images/storyboard/concept-design/introvert-club/Juliet.jpg";
import Terry from "../../../../public/images/storyboard/concept-design/introvert-club/Terry.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const IntrovertClubConcept = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  const images = [Belle, Juliet, Terry];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const closeCarousel = () => {
    setShowCarousel(false);
    setCurrentIndex(0); // Reset to first image when closing
  };

  return (
    <>
      <div onClick={() => setShowCarousel(true)} className="cursor-pointer">
        <figure className="h-[150px] md:h-[400px]  flex  relative">
          <Image
            src={Belle}
            alt="Concept Design Preview"
            className="w-full h-[100%] "
            priority
          />
        </figure>
        <p className="text-[#b0b0b0] text-left font-thin mt-4">
          Concept Design - Introvert Club
        </p>
      </div>

      {/* Carousel Modal */}
      {showCarousel && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#38bdda] transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaArrowLeft size={32} />
            </button>
            <Image
              src={images[currentIndex]}
              alt={`Concept design ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              width={1200}
              height={800}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#38bdda] transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaArrowRight size={32} />
            </button>
            <button
              className="absolute top-4 right-4 text-white hover:text-[#38bdda] transition-colors"
              onClick={closeCarousel}
            >
              <IoMdClose size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default IntrovertClubConcept;
