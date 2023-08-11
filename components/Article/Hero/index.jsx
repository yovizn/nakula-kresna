import Image from "next/image";
import Foto from "@public/images/HeadArticle.png";
import { Balancer } from "react-wrap-balancer";
import Link from "next/link";

export default function HeroArticle() {
  const fotoLink = [
    {
      title: "Sejarah RT 10",
      src: "1.png",
      href: "article/rt10",
    },
    {
      title: "Sejarah RT 11",
      src: "2.png",
      href: "article/rt11",
    },
    {
      title: "Sejarah RT 12",
      src: "3.png",
      href: "article/rt12",
    },
    {
      title: "Sejarah RT 13",
      src: "4.png",
      href: "article/rt13",
    },
  ];

  return (
    <div className="h-fit w-full">
      <div className="flex flex-col items-center justify-center mt-[12rem] max-sm:mb-32">
        <p className="text-light mb-2 font-chillax">- article of our past -</p>
        <h1 className=" text-4xl text-primary font-medium font-clashDisplay uppercase max-w-7xl text-center px-4">
          <Balancer>
            kami akan mempresentasikan sebuah sejarah dan prestasi dari
            masyarakat
          </Balancer>
        </h1>
      </div>
      <div className="h-full w-full">
        <div className="w-full flex flex-col items-center justify-center gap-10 p-4">
          <div className="relative container h-[65rem] rounded-md overflow-hidden">
            <Image
              src={Foto}
              alt="Image"
              fill={true}
              className="object-cover object-top"
            />
          </div>
          <p className="max-w-7xl text-xl text-bright text-justify">
            <Balancer>
              <span className="text-5xl block uppercase">Prolog</span>
              <br />
              Berdirinya Perumahan Bekasi Timur Permai dihuni pertama kali Tahun
              1991 akhir. wilayah Perumahan Bekasi Timur Permai sendiri terdiri
              dari 22 RT ( RT. 01 - 22 ) RW. 012 .Perkembangan cukup pesat
              sampai saat ini sebagai nama - nama jalan lingkungan di Perumahan
              Bekasi Timur Permai ( BTP ) sudah tercantum dalam peta Jabodetabek
              dan Infrastruktur, Perekonomian semakin berkembang Menjadi bagian
              / wilayah yang tidak terpisahkan dari pemerintah daerah Kabupaten
              Bekasi, baik secara de facto maupun secara yuridis.
              <br />
              <br />
              Adapun Tentang Perkembangan Insfrastruktur, perekonomian dan
              Otonomi Daerah berdasarkan Undang - Undang Dasar 1945 Pasal 28
              Ayat 2 Berbunyi &quot;Pemerintahan daerah provinsi, daerah
              kabupaten, dan kota mengatur dan mengurus sendiri urusan
              pemerintah menurut asas otonomi dan tugas perbantuan&quot;
              Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang Otonomi
              daerah Pasal 2 Ayat 3 yang berbunyi &quot;Pemerintah daerah
              sebagaimana dimaksud pada ayat (2) menjalankan otonomi seluas -
              luasnya, kecuali urusan pemerintah yang menjadi urusan pemerintah
              dengan tujuan meningkatkan kesejahteraan masyarakat, pelayanan
              umum dan daya saing daerah. Menurut UU no.32 Tahun 2004 bahwa
              otonomi daerah yang diberlakukan sampai tingkat desa, sehingga
              pemerintah tingkat desa dapat melakukan swadaya dan swasembada
              masyarakat desa, Pemerintah kecamamatan tidak lagi berpihak dan
              ikut campur pada kebijakan desa yang dilakukan sesuai dengan
              kebutuhan desa tersebut&quot;
              <br />
              <br />
              Berdasarkan Prolog diatas dan Undang - Undang , setiap wilayah
              mempunyai Kepala wilayah atau ketua RT Masing - Masing dan di
              Perumahan Bekasi Timur ini mempunyai sosok Penting Bapak H.
              SUDARMAN SH. sejak dilantiknya Bapak H. SUDARMAN SH menjabat
              sebagi ketua RT.10 di wilayah ini mempunyai Ide - Ide Pembangunan
              dan Program - Program bersifat fisik ataupun administrasi, Adapun
              pelaksanaannya Program - Progam tersebut dengan system Gotong
              Royong.
            </Balancer>
          </p>
        </div>
      </div>
      <div className="h-[50vh] max-w-7xl mx-auto flex max-sm:flex-col items-center justify-between gap-4 max-sm:mt-[22rem]">
        {fotoLink.map((l) => {
          return (
            <Link
              key={index}
              href={l.href}
              className="flex flex-col justify-center items-center gap-4"
            >
              <p className="text-yellow-200 uppercase text-xl font-switzer font-medium  py-1 px-2 rounded-xl">
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
