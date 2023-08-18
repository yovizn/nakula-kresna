import Image from "next/image";
import Foto from "@public/images/image1.jpg";

export default function Index() {
  return (
    <div className="">
      <div className="mb-[20vw] lg:mb-[10.5vw] max-w-[1920px] px-4 uppercase font-medium bg-secondary pt-[20vw] lg:pt-[10.5vw]">
        <h1 className="text-2xl md:text-5xl text-center">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
      </div>
      <div className="flex flex-wrap items-end mb-[20vw] lg:mb-[10.5vw] max-w-[1920px] px-4">
        <div className="w-full lg:w-1/2 mb-[100px] lg:mb-0 relative">
          <div className="w-full relative overflow-hidden rounded-xl aspect-[10/9]">
            <Image
              src={Foto}
              alt="Image"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-[95%] lg:w-11/12 content text-base/[1.28] lg:text-lg/[1.28] 2xl:text-xl/[1.28] lg:px-5">
            <h1 className="text-lg md:text-2xl uppercase">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </h1>
            <p className="font-satoshi">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis repellat provident quia aliquam unde excepturi
              voluptates aperiam soluta, vero numquam veniam dolorum fuga facere
              atque autem, dolorem iure, ut reiciendis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
