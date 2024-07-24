import Image from "next/image";

export function Banner() {
  return (
    <>
      <div className="w-full flex justify-center mt-4">
        <Image
          src="/images/banner.png"
          width={700}
          height={100}
          alt="Banner"
          className="animate-[bounce_4s_infinite] opacity-90 hover:opacity-80"
        />
      </div>
    </>
  );
}
