"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { StaticImageData } from "next/image";

// Import all images
import PageOne from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage1.png";
import PageTwo from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage2.png";
import PageThree from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage3.png";
import PageFour from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage4.png";
import Emily from "../../../../public/images/storyboard/concept-design/emotional-logical/Emily.jpg";
import Santiago from "../../../../public/images/storyboard/concept-design/emotional-logical/Santiago.jpg";

const EmotionalLogical = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(false);

  // Memoize the images array
  const images = useMemo<StaticImageData[]>(
    () => [PageOne, PageTwo, PageThree, PageFour, Emily, Santiago],
    []
  );

  // Preload adjacent images
  useEffect(() => {
    if (showCarousel) {
      const nextIndex = (currentIndex + 1) % images.length;
      const prevIndex =
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;

      // Create new image elements for preloading
      const preloadNext = document.createElement("img");
      const preloadPrev = document.createElement("img");

      // Set the sources
      preloadNext.src = images[nextIndex].src;
      preloadPrev.src = images[prevIndex].src;
    }
  }, [currentIndex, showCarousel, images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const closeCarousel = () => {
    setShowCarousel(false);
    setCurrentIndex(0);
  };

  return (
    <>
      <div onClick={() => setShowCarousel(true)} className="cursor-pointer">
        <figure className="h-[150px] md:h-[400px] flex relative">
          <Image
            src={PageOne}
            alt="Storyboard Preview"
            className="w-full h-[100%]"
            priority
          />
        </figure>
        <p className="text-[#b0b0b0] text-left font-thin mt-4">
          Storyboard and Concept Design - Emotional/Logical
        </p>
      </div>

      {showCarousel && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-[200] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <FaArrowLeft size={32} />
            </button>
            <button
              className="fixed top-6 right-4 text-gray-400 hover:text-gray-200 transition-colors z-[300]"
              onClick={closeCarousel}
            >
              <IoMdClose size={32} />
            </button>
            <Image
              src={images[currentIndex]}
              alt={`Storyboard page ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              width={1200}
              height={800}
              priority={true}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200 transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaArrowRight size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EmotionalLogical;
