import { motion } from "framer-motion";

export default function Prolog() {
  return (
    <div className="mb-[20vw] lg:mb-[10.5vw] bg-gradient-to-b from-secondary to-background overflow-hidden">
      <div className="px-4 py-10">
        <div className="mb-4 text-start">
          <h1 className="text-xl lg:text-4xl text-accent max-w-[60rem] font-medium md:uppercase">
            Pengetahuan umum tentang Perumahan Bekasi Timur Permai
          </h1>
        </div>
        <div className="text-justify lg:text-lg font-satoshi font-light">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-2xl font-medium uppercase font-inter text-primary"
          >
            Prolog
          </motion.h1>
          <br />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
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
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="italic font-medium"
          >
            &quot;Pemerintahan daerah provinsi, daerah kabupaten, dan kota
            mengatur dan mengurus sendiri urusan pemerintah menurut asas otonomi
            dan tugas perbantuan&quot;
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang Otonomi daerah
            Pasal 2 Ayat 3 yang berbunyi sebagai berikut:
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="italic font-medium"
          >
            &quot;Pemerintah daerah sebagaimana dimaksud pada Ayat ( 2 )
            menjalankan otonomi seluas - luasnya, kecuali urusan pemerintah yang
            menjadi urusan pemerintah dengan tujuan meningkatkan kesejahteraan
            masyarakat, pelayanan umum dan daya saing daerah. Menurut UU no.32
            Tahun 2004 bahwa otonomi daerah yang diberlakukan sampai tingkat
            desa, sehingga pemerintah tingkat desa dapat melakukan swadaya dan
            swasembada masyarakat desa, Pemerintah kecamamatan tidak lagi
            berpihak dan ikut campur pada kebijakan desa yang dilakukan sesuai
            dengan kebutuhan desa tersebut&quot;
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            Berdasarkan Prolog diatas Nakula Kresna yang lahir di Wilayah Bekasi
            Timur Permai atas dasar pemikiran kreatif dimana tujuan beliau untuk
            mengembangkan Wilayah ini lebih baik lagi dan salah satu contohnya
            di bidang digital, pengembangan SDM, Media Publikasi, perekonomian
            UMKM hingga Pelayanan Publik untuk masyarakat. Kemudian setiap
            wilayah mempunyai Kepala wilayah atau ketua RT Masing - Masing dan
            di Lingkungan Nakula Kresna ini mempunyai sosok Penting yaitu,&nbsp;
            <span className="font-medium">Bapak H. SUDARMAN SH. </span>
            sejak dilantiknya&nbsp;
            <span className="font-medium">Bapak H. SUDARMAN SH. </span> menjabat
            sebagi ketua RT.10 di wilayah ini mempunyai Ide - Ide Pembangunan
            dan Program - Program bersifat fisik ataupun administrasi, Adapun
            pelaksanaannya Program - Progam tersebut dengan system Gotong
            Royong. Nakula Kresna sendiri dibantu oleh sosok Penting&nbsp;
            <span className="font-medium">Bapak H. SUDARMAN SH. </span> Ia juga
            pernah menjabat sebagai Ketua RT. 010 pada Periode ... dan Ketua RW.
            012 di Tahun ... Beliau banyak menyumbangkan ide ide kreatif dalam
            memajukan wilayahnya ini salah satunya pembangungan dimana dalam
            pelaksanaanya diterapkan sistem gotong royong yang bertujuan untuk
            masyarakat.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
