import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Page, PageHero, meta } from "@/components/site";

export const Route = createFileRoute("/why")({
  head: () => meta("Why uMoya Cape Town? | Transformative Private Care", "Cape Town — a hidden gem at the southern tip of Africa. Ultra private, discreet and a perfect space for healing."),
  component: Why,
});

const elements = [
  { k: "Earth", d: "Earth energy of Table Mountain." },
  { k: "Water", d: "Water energy direct from the Antarctic." },
  { k: "Fire", d: "Fire energy at Golden Hour." },
  { k: "Heart", d: "A special team of heart centric healers." },
];

function Why() {
  return (
    <Page>
      <PageHero img={hero} eyebrow="Why uMoya Cape Town? · Transformative private care" title={<>A hidden gem. One of the world's most <em className="italic">beautiful</em> cities.</>} sub="Nestled in the southern tip of Africa, Cape Town." />
      <section className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
        <h2 className="text-4xl leading-tight md:text-6xl">uMoya is ultra private, discreet and a <em className="italic text-primary">perfect space for healing.</em></h2>
      </section>
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl md:grid-cols-4">
          {elements.map((e) => (
            <div key={e.k} className="border-border p-10 md:border-r md:p-12 md:last:border-r-0">
              <p className="eyebrow text-primary">{e.k}</p>
              <p className="mt-6 font-display text-3xl leading-tight">{e.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-28 text-center">
        <p className="eyebrow text-primary">Experience the uMoya difference</p>
      </section>
    </Page>
  );
}
