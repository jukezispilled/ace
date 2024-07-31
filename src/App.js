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
          <div className='absolute top-3 right-5 flex space-x-3 items-center z-[50] text-2xl font-custom text-slate-300'>
              <a href="https://x.com/" className='transition ease-in-out duration-150'>
                Twitter
              </a>
              <a href="https://t.me/" className='transition ease-in-out duration-150'>
                Telegram
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
