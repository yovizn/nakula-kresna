import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col text-center px-4 py-4 border-b">
        <h1 className="text-xl md:text-3xl font-inter uppercase">
          Informasi dan Edukasi
        </h1>
        <p className="text-base lg:text-xl tracking-[0.35em] font-inter font-thin">
          Media publikasi untuk masyarakat
        </p>
      </div>
      <Link
        href="/home"
        className="bg-primary text-background px-4 py-2 rounded-md"
      >
        Mulai Sekarang
      </Link>
    </main>
  );
}
