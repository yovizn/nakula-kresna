import Agenda from "@components/Article/Agenda";
import Fasilitas from "@components/Article/Fasilitas";
import Hero from "@components/Article/Hero/index";
import Prolog from "@components/Article/Prolog";

export default function Article() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Prolog />

      <Agenda />

      <Fasilitas />
    </main>
  );
}
