import Foto from "@public/images/HeadArticle.png";
import Image from "next/image";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center w-full my-20">
      <div className="container mx-auto max-sm:px-4 font-inter font-light">
        <h1 className="text-2xl font-medium uppercase font-clashDisplay">
          Prolog
        </h1>
        <hr />
        <br />
        <p>
          <Balancer>
            <span className="float-left relative overflow-hidden w-full mb-2 md:mb-0 md:w-[400px] h-[400px] md:mr-2">
              <Image
                src={Foto}
                alt="Foto Bapak Haji Sudarman S.H"
                className="object-cover"
              />
            </span>
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
          </Balancer>
        </p>
        <br />
        <p className="italic font-medium">
          <Balancer>
            &quot;Pemerintahan daerah provinsi, daerah kabupaten, dan kota
            mengatur dan mengurus sendiri urusan pemerintah menurut asas otonomi
            dan tugas perbantuan&quot;
          </Balancer>
        </p>
        <br />
        <p>
          Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang Otonomi daerah
          Pasal 2 Ayat 3 yang berbunyi
        </p>
        <br />
        <p className="italic font-medium">
          &quot;Pemerintah daerah sebagaimana dimaksud pada ayat (2) menjalankan
          otonomi seluas - luasnya, kecuali urusan pemerintah yang menjadi
          urusan pemerintah dengan tujuan meningkatkan kesejahteraan masyarakat,
          pelayanan umum dan daya saing daerah. Menurut UU no.32 Tahun 2004
          bahwa otonomi daerah yang diberlakukan sampai tingkat desa, sehingga
          pemerintah tingkat desa dapat melakukan swadaya dan swasembada
          masyarakat desa, Pemerintah kecamamatan tidak lagi berpihak dan ikut
          campur pada kebijakan desa yang dilakukan sesuai dengan kebutuhan desa
          tersebut&quot;
        </p>
        <br />
        <p>
          <Balancer>
            Berdasarkan Prolog diatas dan Undang - Undang , setiap wilayah
            mempunyai Kepala wilayah atau ketua RT Masing - Masing dan di
            Perumahan Bekasi Timur ini mempunyai sosok Penting Bapak H. SUDARMAN
            SH. sejak dilantiknya Bapak H. SUDARMAN SH menjabat sebagi ketua
            RT.10 di wilayah ini mempunyai Ide - Ide Pembangunan dan Program -
            Program bersifat fisik ataupun administrasi, Adapun pelaksanaannya
            Program - Progam tersebut dengan system Gotong Royong.
          </Balancer>
        </p>
      </div>
      <Link
        href="/article"
        className="container mx-auto mt-10 group transition duration-200"
      >
        <div className="flex items-center justify-end">
          <h1 className="text-xl mr-1">Selanjutnya</h1>
          <div className="bg-gradient-to-r from-transparent to-white from-1% group-hover:w-[3%] h-[2px] rounded-l-full" />
          <div className="h-[8px] w-[8px] bg-white rounded-full" />
        </div>
      </Link>
    </div>
  );
}
