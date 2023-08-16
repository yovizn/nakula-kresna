import Image from "next/image";

export default function Index() {
  const slides = [
    {
      id: 1,
      title: "Siskamling",
      src: "/images/Image1.jpg",
    },
    {
      id: 2,
      title: "Senam",
      src: "/images/Image4.jpg",
    },
    {
      id: 3,
      title: "Kurban",
      src: "/images/Image3.jpg",
    },
    {
      id: 4,
      title: "Drum Band",
      src: "/images/Image2.jpg",
    },
  ];

  return (
    <div className="h-fit" data-scroll-section>
      <div
        className="w-full text-light text-4xl font-satoshi uppercase"
        id="kegiatan-section"
      >
        <h1 className="px-4">Kegiatan Kami</h1>
      </div>
      <div>
        {slides.map((l) => {
          return (
            <div key={l.id}>
              <div className="max-w-[1400px] h-[780px] w-full mx-auto py-16 px-4 relative">
                <Image
                  src={l.src}
                  alt="image"
                  className="object-cover"
                  fill={true}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
