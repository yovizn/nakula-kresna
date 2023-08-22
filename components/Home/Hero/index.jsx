import { Balancer } from "react-wrap-balancer";
import Image from "next/image";
import Foto from "@public/images/image5.jpg";
import { motion } from "framer-motion";
import ImageComp from "@components/ImageComp";

export default function Hero() {
  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
      <motion.div
        className="w-full mt-20 md:mt-[10rem] text-center lg:flex max-lg:flex-col items-center lg:justify-between px-4 mb-5"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.1, duration: 1 }}
      >
        <h1 className="text-2xl text-start text-primary font-medium lg:text-7xl uppercase max-lg:mb-2 lg:leading-[120px] lg:max-w-[40rem]">
          Informasi, Kreasi & Sejarah
        </h1>
        <p className="text-accent tracking-widest lg:self-end lg:max-w-[40rem] text-start font-inter lg:pb-6">
          <Balancer>
            Berdirinya Perumahan Bekasi Timur Permai pada Tahun 1991 akhir.
            Wilayah ini terdiri dari 22 RT, Bekasi Timur Sendiri masuk dalam
            wilayah Desa Setiamekar tepatnya di RW 012. Nama - nama jalan
            lingkungan di wilayah ini juga sudah tercantum dalam peta
            Jabodetabek dan Infrastruktur.
          </Balancer>
        </p>
      </motion.div>
      <ImageComp src={Foto} className="w-screen h-screen" />
    </div>
  );
}
