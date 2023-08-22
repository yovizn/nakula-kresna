import { useRef } from "react";
import { useInView } from "framer-motion";

function Text({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Prolog() {
  return (
    <div className="mb-[20vw] lg:mb-[10.5vw] bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="px-4 py-10 flex flex-col items-center">
        <div className="mb-10 text-start">
          <div className="text-xl lg:text-4xl text-accent max-w-[60rem] font-medium md:uppercase">
            <Text>Pengetahuan umum tentang Perumahan Bekasi Timur Permai</Text>
          </div>
        </div>
        <div className="text-justify lg:text-lg font-satoshi font-light max-w-[1080px]">
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
        </div>
      </div>
    </div>
  );
}
