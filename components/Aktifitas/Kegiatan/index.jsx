import Image from "next/image";

export default function Index() {
  return (
    <div className="h-fit" data-scroll-section>
      <div
        className="w-full text-light text-4xl font-satoshi uppercase"
        id="kegiatan-section"
      >
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
  );
}
