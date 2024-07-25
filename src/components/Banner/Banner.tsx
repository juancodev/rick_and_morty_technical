"use client";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";

export function Banner() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <Image
          src="/images/banner.png"
          width={700}
          height={500}
          alt="Banner"
          className="animate-[bounce_4s_infinite] opacity-90 hover:opacity-80"
        />
        <div>
          <Player
            className="w-1/2"
            src="/images/animation.json"
            loop
            autoplay
          />
        </div>
      </div>
    </>
  );
}
