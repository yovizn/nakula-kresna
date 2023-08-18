import Foto from "@public/images/HeadArticle.png";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Prolog() {
  return (
    <div className="mb-[20vw] lg:mb-[10.5vw] max-w-[1920px] px-4 pt-[20vw] lg:pt-[10.5vw]">
      <div className="flex flex-wrap items-center justify-center w-full my-20">
        <div className="text-justify lg:text-lg mx-auto px-4 font-satoshi font-light">
          <span className="float-left relative overflow-hidden w-full mb-2 md:mb-0 md:w-[450px] h-[550px] md:mr-2">
            <Image
              src={Foto}
              alt="Foto Bapak Haji Sudarman S.H"
              className="object-cover"
            />
          </span>
          <h1 className="text-2xl font-medium uppercase font-clashDisplay">
            Prolog
          </h1>
          <br />
          <p>
            Berdirinya Perumahan Bekasi Timur Permai dihuni pertama kali Tahun
            1991 akhir. wilayah Perumahan Bekasi Timur Permai sendiri terdiri
            dari 22 RT ( RT. 01 - 22 ) RW. 012. Perkembangan cukup pesat sampai
            saat ini sebagai nama - nama jalan lingkungan di Perumahan Bekasi
            Timur Permai ( BTP ) sudah tercantum dalam peta Jabodetabek dan
            Infrastruktur, Perekonomian semakin berkembang Menjadi bagian /
            wilayah yang tidak terpisahkan dari pemerintah daerah Kabupaten
            Bekasi, baik secara de facto maupun secara yuridis. Adapun Tentang
            Perkembangan Insfrastruktur, perekonomian dan Otonomi Daerah
            berdasarkan Undang - Undang Dasar 1945 Pasal 28 Ayat 2 Berbunyi:
          </p>
          <br />
          <p className="italic font-medium">
            &quot;Pemerintahan daerah provinsi, daerah kabupaten, dan kota
            mengatur dan mengurus sendiri urusan pemerintah menurut asas otonomi
            dan tugas perbantuan&quot;
          </p>
          <br />
          <p>
            Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang Otonomi daerah
            Pasal 2 Ayat 3 yang berbunyi
          </p>
          <br />
          <p className="italic font-medium">
            &quot;Pemerintah daerah sebagaimana dimaksud pada ayat (2)
            menjalankan otonomi seluas - luasnya, kecuali urusan pemerintah yang
            menjadi urusan pemerintah dengan tujuan meningkatkan kesejahteraan
            masyarakat, pelayanan umum dan daya saing daerah. Menurut UU no.32
            Tahun 2004 bahwa otonomi daerah yang diberlakukan sampai tingkat
            desa, sehingga pemerintah tingkat desa dapat melakukan swadaya dan
            swasembada masyarakat desa, Pemerintah kecamamatan tidak lagi
            berpihak dan ikut campur pada kebijakan desa yang dilakukan sesuai
            dengan kebutuhan desa tersebut&quot;
          </p>
          <br />
          <p>
            Berdasarkan Prolog diatas dan Undang - Undang , setiap wilayah
            mempunyai Kepala wilayah atau ketua RT Masing - Masing dan di
            Perumahan Bekasi Timur ini mempunyai sosok Penting Bapak H. SUDARMAN
            SH. sejak dilantiknya Bapak H. SUDARMAN SH menjabat sebagi ketua
            RT.10 di wilayah ini mempunyai Ide - Ide Pembangunan dan Program -
            Program bersifat fisik ataupun administrasi, Adapun pelaksanaannya
            Program - Progam tersebut dengan system Gotong Royong.
          </p>
        </div>
      </div>
    </div>
  );
}
