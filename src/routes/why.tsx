import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import earth from "@/assets/el-earth.jpg";
import water from "@/assets/el-water.jpg";
import fire from "@/assets/el-fire.jpg";
import heart from "@/assets/el-heart.jpg";
import villa from "@/assets/villa.jpg";
import { Page, PageHero, meta, Ornament } from "@/components/site";

export const Route = createFileRoute("/why")({
  head: () => meta("Why uMoya Cape Town? | Transformative Private Care", "Cape Town — a hidden gem at the southern tip of Africa. Ultra private, discreet and a perfect space for healing."),
  component: Why,
});

const elements = [
  { k: "Earth", d: "Earth energy of Table Mountain.", s: "Ancient rock beneath your feet. Something steady to lean on again.", img: earth, shape: "shape-arch" },
  { k: "Water", d: "Water energy direct from the Antarctic.", s: "Cold, clear water that wakes the body and lets the mind go quiet.", img: water, shape: "shape-pebble" },
  { k: "Fire", d: "Fire energy at Golden Hour.", s: "Evenings that glow. A daily reminder that endings can be beautiful.", img: fire, shape: "rounded-full" },
  { k: "Heart", d: "A special team of heart centric healers.", s: "People who listen first, and stay beside you throughout.", img: heart, shape: "shape-leaf" },
];

function Why() {
  return (
    <Page>
      <PageHero img={hero} eyebrow="Why uMoya Cape Town? · Transformative private care" title={<>A hidden gem. One of the world's most <em className="italic">beautiful</em> cities.</>} sub="Nestled in the southern tip of Africa, Cape Town." />

      <section className="relative overflow-hidden">
        <Ornament className="-left-40 top-10 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
          <p className="eyebrow text-primary">Far enough to let go</p>
          <h2 className="mt-6 text-4xl leading-tight md:text-6xl">uMoya is ultra private, discreet and a <em className="italic text-primary">perfect space for healing.</em></h2>
          <p className="mx-auto mt-8 max-w-2xl font-light leading-relaxed text-muted-foreground">Sometimes healing needs distance — from routines, expectations and the people who know your role. Cape Town gives you that distance, surrounded by four elemental forces.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-28 px-6 pb-28 md:space-y-36 md:px-10 md:pb-36">
        {elements.map((e, i) => (
          <div key={e.k} className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative mx-auto w-full max-w-md">
              <img src={e.img} alt={e.d} loading="lazy" width={1024} height={1024} className={`${e.shape} aspect-square w-full object-cover`} />
              <span className="absolute -top-6 left-0 font-display text-8xl italic text-accent/60">0{i + 1}</span>
            </div>
            <div>
              <p className="eyebrow text-primary">{e.k}</p>
              <h3 className="mt-6 text-4xl leading-tight md:text-5xl">{e.d}</h3>
              <p className="mt-6 max-w-md font-light leading-relaxed text-muted-foreground">{e.s}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="relative overflow-hidden rounded-t-[50%_5rem]">
        <img src={villa} alt="Camps Bay at the foot of the mountains" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto max-w-4xl px-6 py-36 text-center text-primary-foreground">
          <p className="eyebrow opacity-80">Experience the uMoya difference</p>
          <h2 className="mt-6 text-5xl md:text-7xl">Earth, water, fire — <em className="italic text-accent">and heart.</em></h2>
        </div>
      </section>
    </Page>
  );
}
