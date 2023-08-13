import Hero from "@components/Article/Hero/index";
import Prolog from "@components/Article/Prolog/index";
import History from "@components/Article/History/index"

export default function Article() {
  return (
    <main className="min-h-screen">
      <Hero />

      <Prolog />

      <History />
    </main>
  );
}
