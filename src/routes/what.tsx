import { createFileRoute } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import healing from "@/assets/healing.jpg";
import { Page, PageHero, meta } from "@/components/site";

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

function What() {
  return (
    <Page>
      <PageHero img={villa} eyebrow="What to expect · Discreet private care" title={<>A holistic 360 approach with a focus on <em className="italic">You.</em></>} />
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <img src={healing} alt="" loading="lazy" className="shape-pebble aspect-[4/5] w-full object-cover md:sticky md:top-10" />
          <ol className="divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <li key={it.t} className="grid gap-4 py-10 md:grid-cols-[4rem_1fr]">
                <span className="font-display text-4xl text-accent">0{i + 1}</span>
                <div>
                  <h2 className="text-3xl leading-tight md:text-4xl">{it.t}</h2>
                  <p className="mt-4 font-light leading-relaxed text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </Page>
  );
}
