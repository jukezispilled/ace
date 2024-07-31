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
          <div className='absolute top-3 right-3 flex justify-center items-center'>
              <a href="https://x.com/" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>
              <a href="https://t.me/" className=''>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-10 md:size-12 md:hover:scale-105 transition ease-in-out duration-150' fill="#00000" viewBox="0 0 50 50">
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg>
              </a>
          </div>
          <CardItem translateZ="50" className="text-7xl font-bold">
            $HYPE
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-black text-base max-w-sm mt-2 dark:text-neutral-300"
          >
            it's all about the hype when it comes down to it
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