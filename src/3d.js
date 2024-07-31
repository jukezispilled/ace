"use client";

import React, { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./3dcard";

export function ThreeDCardDemo() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const applyGlitch = () => {
      const blurAmount = Math.random() * 5;
      const offsetX = (Math.random() - 0.5) * 10;
      const offsetY = (Math.random() - 0.5) * 10;

      image.style.filter = `blur(${blurAmount}px)`;
      image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

      setTimeout(() => {
        image.style.filter = 'none';
        image.style.transform = 'none';
      }, 50 + Math.random() * 100);

      setTimeout(applyGlitch, 100 + Math.random() * 200);
    };

    applyGlitch();

    return () => {
      image.style.filter = 'none';
      image.style.transform = 'none';
    };
  }, []);

  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative z-10 font-custom">
          <CardItem translateZ="50" className="text-7xl font-bold">
            $HYPE
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-lg max-w-sm mt-2 dark:text-neutral-300"
          >
            it's all about the hype
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 overflow-hidden rounded-xl">
            <img
              ref={imageRef}
              src="hype.png"
              alt="thumbnail"
              className="w-full h-full object-cover rounded-xl group-hover/card:shadow-xl transition-all duration-50 ease-in-out"
            />
          </CardItem>
          <CardItem className="pt-[3%] text-center text-xs md:text-base">CA: updating...</CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}