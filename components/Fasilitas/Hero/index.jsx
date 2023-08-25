import Image from "next/image";
import Link from "next/link";

export default function HeroFasilitas() {
  return (
    <div className="min-h-screen p-8 flex flex-col relative lg:mb-10">
      <Image
        src="/images/Fasilitas/LapanganRT10.png"
        alt="Lapangan RT 10"
        fill
        sizes="100vh"
        priority
        placeholder="blur"
        blurDataURL="/images/Fasilitas/LapanganRT10.png"
        className="object-cover object-top brightness-[0.7]"
      />
      <div className="z-10 bg-gradient-to-b from-transparent to-background absolute top-0 left-0 right-0 h-screen" />
      <div data-scroll data-scroll-speed="1.8" className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto z-20 ">
        <div className="max-w-3xl mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Apa saja Fasilitas yang ada di lingkungan Nakula Kresna?
          </h1>
          <p className="lg:text-xl text-justify">
            Fasilitas yang ada di lingkungan Nakula Kresna cukup lengkap.
            Fasilitas yang ada di lingkungan Nakula Kresna antara lain;
          </p>
        </div>
        <div className="flex max-md:flex-col items-start max-md:gap-y-4 md:items-center md:justify-between">
          <Link
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#keagamaan"
          >
            Keagamaan
          </Link>
          <Link
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#keamanan"
          >
            Keamanan
          </Link>
          <Link
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#lingkungan"
          >
            Lingkungan Hidup
          </Link>
          <Link
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#olahraga"
          >
            Seni & Olahraga
          </Link>
          <Link
            className="bg-accent font-semibold px-3 py-1 rounded-full"
            href="#perekonomian"
          >
            UMKM
          </Link>
        </div>
      </div>
    </div>
  );
}
