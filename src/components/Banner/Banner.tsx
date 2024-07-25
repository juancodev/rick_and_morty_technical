"use client";

import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import { RevealWrapper } from "next-reveal";

export function Banner() {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <RevealWrapper
          rotate={{ x: 12, y: 40, z: 0 }}
          origin="left"
          delay={200}
          duration={1000}
          distance="500px"
          reset={true}
          viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <Image
            src="/images/banner.png"
            width={700}
            height={500}
            alt="Banner"
            className="animate-[bounce_4s_infinite] opacity-90 hover:opacity-80"
          />
        </RevealWrapper>
        <div>
          <RevealWrapper
            rotate={{ x: 12, y: 40, z: 0 }}
            origin="right"
            delay={200}
            duration={1000}
            distance="500px"
            reset={true}
            viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <Player
              className="w-1/2"
              src="/images/animation.json"
              loop
              autoplay
            />
          </RevealWrapper>
        </div>
      </div>
    </>
  );
}
