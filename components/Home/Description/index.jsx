"use client";

import styles from "@components/Home/Description/page.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";

export default function index() {
  const phrase =
    "Nakula Kresna, sarana Media publikasi & Media promosi kegiatan, serta pelayanan publik skala Micro. Berawal dari ide-ide kreatif anak muda yang ingin berkarya serta Berguna dan Tercipta untuk mensukseskan masyarakat dan kesejahteraan lingkungan.";
  const textedRef = useRef<HTMLDivElement>(null);
  const thatInView = useInView<HTMLDivElement>(textedRef);
  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView<HTMLDivElement>(description);

  return (
    <div className={styles.description}>
      <div className={styles.body}>
        <p ref={description}>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          ref={texted}
          style={{
            transform: thatInView ? "none" : "translateY(-200px)",
            opacity: thatInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <span>PROLOG</span>
          <br />
          <br />
          Berdirinya Perumahan Bekasi Timur Permai dihuni pertama kali Tahun
          1991 akhir. wilayah Perumahan Bekasi Timur Permai sendiri terdiri dari
          22 RT ( RT.01 - 22 ) RW. 012 .Perkembangan cukup pesat sampai saat ini
          sebagai nama - nama jalan lingkungan di Perumahan Bekasi Timur Permai
          ( BTP) sudah tercantum dalam peta Jabodetabek dan Infrastruktur ,
          Perekonomian semakin berkembang Menjadi bagian / wilayah yang tidak
          terpisahkan dari pemerintah daerah Kabupaten Bekasi, baik secara de
          facto maupun secara yuridis.
          <br />
          <br />
          Adapun Tentang Perkembangan Insfrastruktur , perekonomian dan Otonomi
          Daerah berdasarkan Undang - Undang Dasar 1945 Pasal 28 Ayat 2 Berbunyi
          &quot;Pemerintahan daerah provinsi, daerah kabupaten, dan kota mengatur
          dan mengurus sendiri urusan pemerintah menurut asas otonomi dan tugas
          perbantuan&quot; Selanjutnya Undang - Undang no. 32 Tahun 2004 tentang
          Otonomi daerah Pasal 2 Ayat 3 yang berbunyi&quot; Pemerintah daerah
          sebagaimana dimaksud pada ayat (2) menjalankan otnom seluas - luasnya,
          kecuali urusan pemerintah yang menjadi urusan pemerintah dengan tujuan
          meningkatkan kesejahteraan masyarakat, pelayanan umum dan daya saing
          daerah. Menurut UU no.32 Th.2004 bahwa otonomi daerah yang
          diberlakukan sampai tingkat desa, sehingga pemerintah tingkat desa
          dapat melakukan swadaya dan swasembada masyarakat desa, Pemerintah
          kecamamatan tidak lagi berpihak dan ikut campur pada kebijakan desa
          yang dilakukan sesuai dengan kebutuhan desa tersebut&quot;
          <br />
          <br />
          Berdasarkan Prolog diatas dan Undang - Undang , setiap wilayah
          mempunyai Kepala wilayah atau ketua RT Masing - Masing dan di
          Perumahan Bekasi Timur ini mempunyai sosok Penting Bapak H.SUDARMAN SH
          .sejak dilantiknya Bapak H.SUDARMAN SH menjabat sebagi ketua RT.10 di
          wilayah ini mempunyai Ide - Ide Pembangunan dan Program - Program
          bersifat fisik ataupun administrasi, Adapun pelaksanaannya Program -
          Progam tersebut dengan system Gotong Royong.
        </motion.p>
        {/* <div data-scroll data-scroll-speed={0.1}></div> */}
      </div>
    </div>
  );
}
