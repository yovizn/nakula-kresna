import Image from "next/image";
import Foto from "@public/images/HeadArticle.png";

export default function Index() {
  return (
    <div className="min-h-screen container mx-auto flex flex-col items-center justify-center relative">
      <div className="relative w-full md:w-[80vh] h-[100vh]">
        <Image
          src={Foto}
          alt="Image"
          fill={true}
          className="object-cover object-top max-md:object-left-top"
        />
      </div>
      <div className="md:absolute md:right-0 -bottom-12 md:bottom-10 z-10 md:text-end max-w-2xl border-2 border-white max-sm:mx-2 max-md:my-4 p-4">
        <h1 className="text-xl text-white md:text-4xl font-medium font-clashDisplay uppercase max-w-3xl tracking-wide">
          kami akan mempresentasikan sejarah dan prestasi dari masyarakat
        </h1>
        <p className="text-light text-sm">- article of our past -</p>
      </div>
    </div>
  );
}
