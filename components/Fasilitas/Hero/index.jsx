import Link from "next/link";

export default function HeroFasilitas() {
  return (
    <div className="min-h-screen p-8 flex flex-col">
      <div className="flex-1 flex-col flex justify-center lg:max-w-6xl lg:mx-auto">
        <div className="max-w-3xl mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Apa saja Fasilitas yang ada di lingkungan Nakula Kresna?
          </h1>
          <p className="lg:text-xl text-justify">
            Fasilitas yang ada di lingkungan Nakula Kresna cukup lengkap.
            Fasilitas yang ada di lingkungan Nakula Kresna antara lain;
          </p>
        </div>
        <div className="flex max-md:flex-col items-start max-md:gap-y-4 md:items-center md:justify-between">
          <Link className="bg-accent font-semibold px-3 py-1 rounded-full" href="#keagamaan">
            Keagamaan
          </Link>
          <Link className="bg-accent font-semibold px-3 py-1 rounded-full" href="#keamanan">
            Keamanan
          </Link>
          <Link className="bg-accent font-semibold px-3 py-1 rounded-full" href="#lingkungan">
            Lingkungan Hidup
          </Link>
          <Link className="bg-accent font-semibold px-3 py-1 rounded-full" href="#olahraga">
            Seni & Olahraga
          </Link>
          <Link className="bg-accent font-semibold px-3 py-1 rounded-full" href="#perekonomian">
            UMKM
          </Link>
        </div>
      </div>
    </div>
  );
}
