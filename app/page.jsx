import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col text-center px-4 py-4 rounded-md">
        <h1 className="text-5xl">Informasi dan Edukasi</h1>
        <h1 className="text-5xl font-thin">Media publikasi untuk masyarakat</h1>
        <h1 className="text-5xl text-green font-medium uppercase">Nakula Kresna</h1>
      </div>
      <Link href="/home" className="bg-darkBlue px-4 py-2 rounded-md hover:bg-blue">Mulai Sekarang</Link>
    </main>
  );
}
