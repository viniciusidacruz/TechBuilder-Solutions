import Image from "next/image";

export const TopLeftImage = () => (
  <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
    <Image
      width={400}
      height={400}
      alt="Efeito explosão na diagonal"
      src="/assets/images/top-left-img.png"
    />
  </div>
);
