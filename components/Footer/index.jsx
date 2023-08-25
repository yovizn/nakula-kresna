"use client";

import Sosmed from "@components/Fasilitas/Sosmed";

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto">
        <div className="py-10">
          <h1 className="text-xl md:text-4xl text-primary uppercase font-medium">
            Nakula Kresna
          </h1>
          <p className="text-base md:text-xl font-semibold text-accent">
            Perum. Bekasi Timur Permai
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl">Hubungi Kami:</h3>
          <p className="md:text-lg">kresnanakula@gmail.com</p>
        </div>

        <div className="py-10">
          <Sosmed />
        </div>

        <div className="flex items-center justify-center pb-4">
          <p className="text-sm md:text-lg text-accent">
            © 2021 Nakula Kresna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
