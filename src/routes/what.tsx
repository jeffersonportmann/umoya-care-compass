import { createFileRoute } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import healing from "@/assets/healing.jpg";
import mandala from "@/assets/mandala.jpg";
import { Page, PageHero, meta, Ornament } from "@/components/site";

export const Route = createFileRoute("/what")({
  head: () => meta("What to expect | uMoya Cape Town", "Discreet private care with a holistic 360° approach: private sanctuaries in Camps Bay, tailored treatments and a personal concierge."),
  component: What,
});

const items = [
  { t: "Many choices for your perfect home space sanctuary.", d: "Four to six bedroom sanctuaries with pool in Camps Bay. Pet friendly home spaces also available. Private chef and all therapists come to you." },
  { t: "Treatments that are tailored around you.", d: "Weekly kaizen sessions ensure we continually improve and refine our treatment approach based on 360 degree feedback." },
  { t: "Singles or couples. Even families.", d: "Care to couples and families through challenging times." },
  { t: "Stress free healing.", d: "A personal concierge for friction free care. Focus on your healing, we have the rest covered." },
];

const circle = ["Body", "Mind", "Spirit", "Home", "Nourishment", "Nature"];

function What() {
  return (
    <Page>
      <PageHero img={villa} eyebrow="What to expect · Discreet private care" title={<>A holistic 360 approach with a focus on <em className="italic">You.</em></>} />

      <section className="relative overflow-hidden">
        <Ornament className="-right-48 top-20 h-[36rem] w-[36rem]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
          <div>
            <p className="eyebrow text-primary">360° — the whole of you</p>
            <h2 className="mt-6 text-5xl leading-tight">We don't treat a symptom. We care for a person.</h2>
            <p className="mt-6 max-w-md font-light leading-relaxed text-muted-foreground">Every part of your stay is considered together — so nothing pulls you back into the stress you came to leave.</p>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-accent/50" />
            <img src={mandala} alt="Circle of stones, water, rosemary, linen, fig and candle arranged as a mandala" loading="lazy" width={1024} height={1024} className="absolute left-[15%] top-[15%] h-[70%] w-[70%] rounded-full object-cover" />
            {circle.map((c, i) => {
              const a = (i / circle.length) * Math.PI * 2 - Math.PI / 2;
              return (
                <span key={c} className="eyebrow absolute -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-primary" style={{ left: `${50 + 50 * Math.cos(a)}%`, top: `${50 + 50 * Math.sin(a)}%` }}>{c}</span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
            <div className="relative md:sticky md:top-10 md:self-start">
              <img src={healing} alt="Calm healing room" loading="lazy" className="shape-pebble aspect-[4/5] w-full object-cover" />
              <div aria-hidden className="shape-pebble absolute -inset-4 border border-accent/40" />
            </div>
            <ol className="space-y-6">
              {items.map((it, i) => (
                <li key={it.t} className="grid gap-4 border border-border bg-background p-8 md:grid-cols-[4rem_1fr] md:p-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 font-display text-2xl text-primary">{i + 1}</span>
                  <div>
                    <h2 className="text-3xl leading-tight">{it.t}</h2>
                    <p className="mt-4 font-light leading-relaxed text-muted-foreground">{it.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-bottom-40 -left-40 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <h2 className="text-5xl leading-tight md:text-6xl">Focus on your healing. <em className="italic text-accent">We have the rest covered.</em></h2>
        </div>
      </section>
    </Page>
  );
}
