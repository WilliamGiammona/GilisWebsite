"use client";
import React, { useState } from "react";
import Image from "next/image";
import Emily from "../../../../public/images/storyboard/concept-design/emotional-logical/Emily.jpg";
import { IoMdClose } from "react-icons/io";

const EmotionalLogicalConcept = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <div onClick={() => setShowVideo(true)} className="cursor-pointer">
        <figure className="h-[150px] md:h-[400px] flex relative">
          <Image
            src={Emily}
            alt="Concept Design Preview"
            className="w-full h-[100%]"
            priority
          />
        </figure>
        <p className="text-[#b0b0b0] text-left font-thin mt-4">
          Concept Design - Emotional/Logical Design
        </p>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-10 right-0 text-white hover:text-[#38bdda] transition-colors"
                onClick={() => setShowVideo(false)}
              >
                <IoMdClose size={32} />
              </button>
              <video className="w-full rounded-lg" controls autoPlay>
                <source
                  src="/videos/EmotionalLogicVideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmotionalLogicalConcept;
