import Kegiatan from "@components/Aktifitas/Kegiatan/index";
import Agenda from "@components/Aktifitas/Agenda/index";
import Hero from "@components/Aktifitas/Hero/index";

export default function Activities() {
  return (
    <>
      <div id="main-container">
        <Hero />

        <Agenda />

        <Kegiatan />
      </div>
    </>
  );
}
