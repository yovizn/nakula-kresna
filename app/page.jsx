"use client";

import IntroAnimasi from "@components/Loader";
import Link from "next/link";

export default function IntroWebsite() {
  return (
    <main>
      <div className="container">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h5 className="uppercase text-2xl mb-4">Selamat Datang</h5>
          <h1 className="text-5xl uppercase mb-4">Nakula Kresna</h1>
          <Link href="/home" className="w-fit">
            <p className="text-center uppercase border py-2 text-accent hover:text-text border-accent hover:bg-accent transition-colors duration-300 font-medium text-lg">
              Lanjutkan
            </p>
          </Link>
        </div>
      </div>

      <IntroAnimasi />
    </main>
  );
}
