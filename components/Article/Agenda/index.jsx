import { AgendaLinks, CarouselSlider } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Agenda() {
  return (
    <div className="pb-10 mb-[20vw] lg:mb-[10.5vw] max-w-[1920px] bg-secondary pt-[20vw] lg:pt-[10.5vw]">
      <div className="w-full flex flex-col items-center justify-center mb-40">
        <div className="mb-10 -mt-10 px-4">
          <h1 className="text-2xl uppercase">Lorem ipsum dolor sit.</h1>
        </div>
        <div className="flex max-lg:flex-col-reverse lg:items-end justify-center gap-10">
          <div className="max-w-md font-satoshi max-lg:px-4">
            <h1 className="text-lg md:text-2xl">Lorem ipsum dolor sit.</h1>
            <p className="text-accent md:text-lg">
              <Balancer>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                earum ipsam dolor voluptate nesciunt nobis molestias natus
                consectetur quibusdam, error ipsa sit iste provident debitis
                dolorum omnis nemo minima optio cumque!
              </Balancer>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}