import { AgendaLinks, CarouselSlider } from "@constants";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Index() {
  return (
    <div className="h-fit">
      <div className="flex flex-col gap-4 mt-4 px-4" id="agenda-section">
        <p className="text-bright md:text-end">Aktifitas dan Agenda</p>
        <h1 className="text-3xl md:text-7xl text-green md:text-end font-satoshi lg:uppercase lg:font-medium ">
          <Balancer>Lihat agenda aktual disini.</Balancer>
        </h1>
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
    </div>
  );
}
