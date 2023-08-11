import { AgendaLinks, CarouselSlider } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function index() {
  return (
    <div className="h-fit flex items-center justify-center">
      <div className="md:px-20 w-full">
        <div className="flex flex-col gap-4 relative justify-between mt-[10rem]">
          <div className="relative h-[40rem] w-[100%] md:rounded-md overflow-hidden">
            <Image
              alt="image"
              src="/images/image1.jpg"
              fill={true}
              className="object-cover"
            />

            <Link
              href="/"
              className="absolute max-md:top-5 md:bottom-4 max-md:left-2 md:right-4 px-4 border-l"
            >
              <h1 className="text-bright text-2xl font-clashDisplay uppercase">
                Pawai Obor
              </h1>
              <p className="text-bright font-switzer">19 April 2020</p>
            </Link>
          </div>

          <div className="flex flex-col gap-4 mt-4 px-4">
            <p className="text-bright md:text-end">Aktifitas dan Agenda</p>
            <h1 className="text-3xl md:text-7xl text-primary md:text-end font-satoshi lg:uppercase lg:font-medium ">
              <Balancer>Lihat agenda aktual disini.</Balancer>
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 my-20 p-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="mb-4 pl-2 border-l border-light">
              <h1 className="text-lg text-light font-satoshi">Agenda.</h1>
            </div>
            {AgendaLinks.map((l) => {
              return (
                <div
                  key={l.id}
                  className="flex items-center justify-start gap-2 w-full border-t border-light pt-4"
                >
                  <div className="relative w-[5rem] h-[5rem]">
                    <Image
                      src={l.src}
                      fill={true}
                      alt="Image"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-light font-satoshi">
                    <p>{l.date}</p>
                    <h1>{l.title}</h1>
                    <p>{l.loaction}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="mb-4 pl-2 border-l border-light">
              <h1 className="text-lg text-light font-satoshi tracking-widest">
                Aktifitas.
              </h1>
            </div>
            {CarouselSlider.map((l) => {
              return (
                <Link
                  href="/"
                  key={l.id}
                  className="flex items-center justify-start gap-2 w-full border-t border-light pt-4"
                >
                  <div className="relative w-[5rem] h-[5rem]">
                    <Image
                      src={l.image}
                      fill={true}
                      alt="Image"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-light font-satoshi">{l.title}</p>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="mb-4 pr-2 w-full text-end">
              <h1 className="text-lg text-light font-satoshi">Breaking News</h1>
            </div>
            <div className="relative w-full h-[80%] rounded-md overflow-hidden">
              <Image
                src="/images/Foto.png"
                alt="Image"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>
        </div>

        <div className="w-full text-light text-4xl font-satoshi uppercase">
          <h1>Kegiatan Kami</h1>
        </div>
        <div className="grid md:grid-cols-3 gap4 my-20 gap-10 p-4">
          <div className="flex flex-col gap-4">
            <div className="relative h-[28rem] w-full rounded-md overflow-hidden">
              <Image
                src="/images/image3.jpg"
                alt="images"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="text-xl text-light uppercase font-satoshi font-medium w-full">
              <h1>Siskamling</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative h-[28rem] w-full rounded-md overflow-hidden">
              <Image
                src="/images/image6.jpg"
                alt="images"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="text-xl text-light uppercase font-satoshi font-medium w-full">
              <h1>Senam</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative h-[28rem] w-full rounded-md overflow-hidden">
              <Image
                src="/images/image4.jpg"
                alt="images"
                fill={true}
                className="object-cover"
              />
            </div>
            <div className="text-xl text-light uppercase font-satoshi font-medium w-full">
              <h1>pemotongan hewan kurban</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
