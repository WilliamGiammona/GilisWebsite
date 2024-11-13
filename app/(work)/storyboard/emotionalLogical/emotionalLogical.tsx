"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { IoMdClose } from "react-icons/io";

// Import all images
import PageOne from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage1.png";
import PageTwo from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage2.png";
import PageThree from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage3.png";
import PageFour from "../../../../public/images/storyboard/emotional-logical/EmotionalLogicalPage4.png";
import Emily from "../../../../public/images/storyboard/concept-design/emotional-logical/Emily.jpg";
import Santiago from "../../../../public/images/storyboard/concept-design/emotional-logical/Santiago.jpg";

const EmotionalLogical = () => {
  const [isOpen, setIsOpen] = useState(false);

  const images = [PageOne, PageTwo, PageThree, PageFour, Emily, Santiago];

  return (
    <>
      {/* Preview Image */}
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <figure className="h-[150px] md:h-[400px] flex relative">
          <Image
            src={PageOne}
            alt="Storyboard Preview"
            className="w-full h-full object-cover"
            priority
          />
        </figure>
        <p className="text-[#b0b0b0] text-left font-thin mt-4">
          Storyboard and Concept Design - Emotional/Logical
        </p>
      </div>

      {/* Full Screen Carousel Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none">
          <DialogTitle className="sr-only">Storyboard Gallery</DialogTitle>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-200 transition-colors z-50"
          >
            <IoMdClose size={32} />
          </button>

          <Carousel className="w-full h-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-[90vh]">
                    <Image
                      src={image}
                      alt={`Storyboard page ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      width={1200}
                      height={800}
                      priority={true}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 text-gray-400 hover:text-gray-200 hover:bg-black/50" />
            <CarouselNext className="right-4 text-gray-400 hover:text-gray-200 hover:bg-black/50" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmotionalLogical;
