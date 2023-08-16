import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col text-center px-4 py-4 border-b">
        <h1 className="text-2xl lg:text-5xl font-inter uppercase">Informasi dan Edukasi</h1>
        <p className="text-lg lg:text-xl tracking-[0.25em] font-inter font-thin">Media publikasi untuk masyarakat</p>
      </div>
      <Link href="/home" className="bg-darkBlue px-4 py-2 rounded-md hover:bg-blue">Mulai Sekarang</Link>
    </main>
  );
}
