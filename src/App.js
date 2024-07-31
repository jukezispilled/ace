import React, { useState, useRef } from 'react';
import Marquee from "react-fast-marquee";
import { ThreeDCardDemo } from './3d';

function App() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setMuted(video.muted);
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center overflow-clip bg-zinc-950">
          <div className='absolute top-3 right-3 flex space-x-2 items-center z-[50]'>
              <a href="https://x.com/werehypesol" className='transition ease-in-out duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#cbd5e1" viewBox="0 0 50 50">
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </a>
              <a href="https://t.me/HYPEportalsolana" className='transition ease-in-out duration-150'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-10 h-10 md:w-12 md:h-12 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#cbd5e1" viewBox="0 0 50 50">
                  <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                </svg>
              </a>
          </div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ pointerEvents: 'none' }} // Prevent the video from capturing pointer events
      >
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
      </video>
      <ThreeDCardDemo />
    </div>
  );
}

export default App;
