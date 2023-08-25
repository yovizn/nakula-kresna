import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Foto from "@public/images/HeadArticle.png";
import WordAnimation from "@components/WordsAnimation";
import ImageComp from "@components/ImageComp";

function Text({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </p>
  );
}

export default function Prolog() {
  return (
    <div className="mb-[20vw] lg:mb-[10.5vw] bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className=" flex flex-col items-center">
        <div className="mb-10 text-start">
          <div className="text-xl lg:text-8xl text-accent text-center font-medium md:uppercase">
            <WordAnimation words="Pengetahuan umum tentang Perumahan Bekasi Timur Permai" />
          </div>
        </div>
        <div className="text-justify lg:text-lg container mx-auto">
          <div className="text-2xl font-medium uppercase font-inter text-primary">
            <Text>Prolog</Text>
          </div>
          <br />
          <div>
            <Text>
              Perumahan Bekasi Timur Permai berdiri pada Tahun 1991 akhir.
              Wilayah ini terdiri dari 22 RT ( RT. 01 - 22 ) Bekasi Timur
              Sendiri masuk dalam wilayah Desa Setiamekar tepatnya di RW 012.
              Nama - nama jalan lingkungan di wilayah ini juga sudah tercantum
              dalam peta Jabodetabek dan Infrastruktur. Tentunya perkembangan
              wilayah ini juga tak lepas dari berkembangnya Kabupaten Bekasi
              yang semakin maju, baik secara de facto maupun yuridis.
              Perkembangan Infrastruktur, Perekonomian dan Otonomi daerah yang
              dimuat dalam UUD 1945 pasal 28 ayat 2 berbunyi:
            </Text>
          </div>
          <br />
          <div className="italic font-medium">
            <Text>
              &quot;Pemerintahan daerah provinsi, daerah kabupaten, dan kota
              mengatur dan mengurus sendiri urusan pemerintah menurut asas
              otonomi dan tugas perbantuan&quot;
            </Text>
          </div>
          <br />
          <div>
            <Text>
              Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang Otonomi
              daerah Pasal 2 Ayat 3 yang berbunyi sebagai berikut:
            </Text>
          </div>
          <br />
          <div className="italic font-medium">
            <Text>
              &quot;Pemerintah daerah sebagaimana dimaksud pada Ayat ( 2 )
              menjalankan otonomi seluas - luasnya, kecuali urusan pemerintah
              yang menjadi urusan pemerintah dengan tujuan meningkatkan
              kesejahteraan masyarakat, pelayanan umum dan daya saing daerah.
              Menurut UU no.32 Tahun 2004 bahwa otonomi daerah yang diberlakukan
              sampai tingkat desa, sehingga pemerintah tingkat desa dapat
              melakukan swadaya dan swasembada masyarakat desa, Pemerintah
              kecamamatan tidak lagi berpihak dan ikut campur pada kebijakan
              desa yang dilakukan sesuai dengan kebutuhan desa tersebut&quot;
            </Text>
          </div>
          <br />
          <div>
            <Text>
              Berdasarkan Prolog diatas Nakula Kresna sendiri lahir atas dasar
              pemikiran kreatif, dimana tujuan nya untuk mengembangkan Wilayah
              ini lebih baik lagi. Salah satu contohnya di bidang Digital,
              pengembangan SDM, Media Publikasi dan Informasi, Perekonomian UMKM
              hingga Pelayanan Publik untuk masyarakat.
            </Text>
          </div>
          <br />
          <div>
            <Text>
              Nakula Kresna sendiri dibantu oleh sosok Penting Bapak H. SUDARMAN
              S.H. Beliau pernah menjabat sebagai Ketua RW 012.
            </Text>
          </div>
          <br />
          <div>
            <Text>
              Beliau banyak menyumbangkan ide ide kreatif dalam memajukan
              wilayahnya. Salah satunya pembangungan, dimana dalam pelaksanaanya
              diterapkan sistem gotong royong yang bertujuan untuk masyarakat.
            </Text>
          </div>
          <br />
          <div>
            <ImageComp src={Foto} className="w-full h-[30rem] md:w-full md:h-screen object-top" />
          </div>
        </div>
      </div>
    </div>
  );
}
