import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div className="h-full">
      <div
        id="hero-section"
        className="relative h-[80vh] w-full md:rounded-md overflow-hidden"
      >
        <Image
          src="/images/image1.jpg"
          alt="Image"
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
    </div>
  );
}
