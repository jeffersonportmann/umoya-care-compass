import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";
import villa from "@/assets/villa.jpg";
import { Page, PageHero, meta, EMAIL } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("uMoya Cape Town | Discreet Private Care", "uMoya is excellence in human care. Exceptional, holistic private care in Cape Town — Swiss discretion, African heart."),
  component: Index,
});

const steps = [
  { t: "Whatever life event. Our priority is You.", d: "Human conditions are complex. We try to understand you first, then define a care plan.", to: "/what" as const },
  { t: "Our care is tailored around you.", d: "We continually adapt our care plan weekly based on a full 360 degree feedback.", to: "/how" as const },
  { t: "Many wonderful healing spaces available.", d: "Your healing space is critical. We work with you to find your ideal home space.", to: "/what" as const },
];

function Index() {
  return (
    <Page>
      <PageHero
        tall
        img={hero}
        eyebrow="uMoya · Cape Town · Exceptional Private Care"
        title={<>Come, let us <em className="italic">care</em> for you.</>}
        sub={<>
          <p>uMoya is excellence in human care.</p>
          <a href={`mailto:${EMAIL}`} className="eyebrow mt-8 inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">{EMAIL}</a>
        </>}
      />

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <Link key={s.t} to={s.to} className="group bg-background p-10 transition hover:bg-card md:p-12">
              <span className="font-display text-5xl text-accent">0{i + 1}</span>
              <h2 className="mt-6 text-3xl leading-tight">{s.t}</h2>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{s.d}</p>
              <span className="eyebrow mt-8 inline-block text-primary group-hover:underline">Discover →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 md:grid-cols-2 md:px-10 md:pb-40">
        <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow text-primary">A holistic care team like no other</p>
          <h2 className="mt-6 text-5xl leading-tight">Simply the best.</h2>
          <p className="mt-6 font-light text-muted-foreground">We restore balance through curated healing, from somatic work to traditional arts. uMoya's holistic approach combines:</p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            <li className="py-6"><h3 className="text-2xl">Conventional medicine</h3></li>
            <li className="py-6"><h3 className="text-2xl">Alternative healing</h3><p className="mt-2 text-sm font-light text-muted-foreground">Including reiki, somatic therapy, sound healing, regression, tai chi, art therapy.</p></li>
            <li className="py-6"><h3 className="text-2xl">Traditional healing</h3><p className="mt-2 text-sm font-light text-muted-foreground">Like African and shamanic practices, sacred ceremonies and plant medicine.</p></li>
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={villa} alt="Private villa in Camps Bay" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto max-w-5xl px-6 py-36 text-center text-primary-foreground">
          <h2 className="text-5xl md:text-7xl">Swiss discretion. <em className="italic text-accent">African heart.</em></h2>
          <p className="mx-auto mt-8 max-w-2xl font-light opacity-90">Easily accessible Swiss based founding team. With deep African roots.</p>
          <Link to="/who" className="eyebrow mt-10 inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">Meet the team</Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <p className="eyebrow text-primary">Experience the difference</p>
        <h2 className="mt-6 text-5xl md:text-6xl">uMoya Cape Town</h2>
      </section>
    </Page>
  );
}
