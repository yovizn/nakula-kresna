import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const fotoLink = [
    {
      id: 1,
      title: "Sejarah RT 10",
      src: "1.png",
      href: "article/rt10",
    },
    {
      id: 2,
      title: "Sejarah RT 11",
      src: "2.png",
      href: "article/rt11",
    },
    {
      id: 3,
      title: "Sejarah RT 12",
      src: "3.png",
      href: "article/rt12",
    },
    {
      id: 4,
      title: "Sejarah RT 13",
      src: "4.png",
      href: "article/rt13",
    },
  ];

  return (
    <div className="container min-h-[50vh] mx-auto flex flex-col items-center justify-between px-4 mb-40">
      <div className="px-4 border-b-2 pb-10">
        <h1 className="text-7xl text-center uppercase font-bold">Mengenal Lebih banyak tentang sejarah dari anggota kami</h1>
      </div>
      <div className="flex items-center justify-between w-full">
        {fotoLink.map((l) => {
          return (
            <Link
              key={l.id}
              href={l.href}
              className="flex flex-col justify-center items-center gap-4 max-md:gap-10 max-md:border-b pb-4"
            >
              <p className="text-lightGreen uppercase text-base font-satoshi font-medium  py-1 px-2 rounded-xl">
                {l.title}
              </p>
              <div className="relative w-[10rem] h-[10rem] rounded-full overflow-hidden">
                <Image
                  src={`/images/Parallax/${l.src}`}
                  alt="image"
                  fill={true}
                  className="object-cover"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
