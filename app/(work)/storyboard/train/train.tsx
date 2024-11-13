"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/app/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { IoMdClose } from "react-icons/io";

import PageOne from "../../../../public/images/storyboard/train/TheTrain1.jpg";

const Train = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const images = [PageOne];

  const handleClose = () => {
    setIsOpen(false);
    setCurrent(0);
    api?.scrollTo(0);
  };

  // Handle keyboard navigation using Dialog's built-in keyboard handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowLeft":
        api?.scrollPrev();
        break;
      case "ArrowRight":
        api?.scrollNext();
        break;
    }
  };

  // Track current slide
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        <figure className="h-[150px] md:h-[250px] w-full relative">
          <Image
            src={PageOne}
            alt="Storyboard Preview"
            className="w-full h-full object-cover"
            priority
          />
        </figure>
        <p className="text-[#b0b0b0] text-left font-thin mt-4">The Train</p>
      </div>

      {/* Full Screen Carousel Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-[95vw] max-h-[95vh] p-0 bg-black border-none"
          onKeyDown={handleKeyDown}
        >
          <DialogTitle className="sr-only">The Train Gallery</DialogTitle>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-20 md:top-4 text-gray-400 hover:text-gray-200 transition-colors z-50"
          >
            <IoMdClose size={32} />
          </button>

          {/* Slide Counter */}
          <div className="absolute left-4 top-20 md:top-4 text-gray-400 z-50">
            {current + 1} / {images.length}
          </div>

          <Carousel className="w-full h-full" setApi={setApi}>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center h-[90vh] relative">
                    {loading && index === current && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-gray-400 border-t-gray-200 rounded-full animate-spin"></div>
                      </div>
                    )}
                    <Image
                      src={image}
                      alt={`Storyboard page ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      width={1200}
                      height={800}
                      priority={true}
                      onLoadingComplete={() => setLoading(false)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Hide navigation arrows since there's only one image */}
            {/* 
            <CarouselPrevious className="left-4 text-gray-400 hover:text-gray-200 hover:bg-black/50" />
            <CarouselNext className="right-4 text-gray-400 hover:text-gray-200 hover:bg-black/50" />
            */}
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Train;
