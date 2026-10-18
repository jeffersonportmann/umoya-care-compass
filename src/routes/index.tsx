import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "uMoya Cape Town — Exceptional Private Care" },
      { name: "description", content: "Discreet, holistic private care in Cape Town. Conventional medicine, alternative and traditional healing — tailored around you." },
      { property: "og:title", content: "uMoya Cape Town — Exceptional Private Care" },
      { property: "og:description", content: "Swiss discretion. African heart. Holistic private care in Cape Town." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const EMAIL = "care@umoya.care";

const pillars = [
  { n: "01", t: "We listen first", d: "Human conditions are complex. We take time to understand you before defining a personal care plan." },
  { n: "02", t: "Care tailored to you", d: "Your plan is reviewed and adapted every week, based on full 360° feedback from you and your team." },
  { n: "03", t: "Your healing space", d: "Your environment matters. We help you find the ideal private home in and around Cape Town." },
];

const modalities = [
  { t: "Conventional medicine", d: "Qualified physicians, nursing and medical oversight throughout your stay." },
  { t: "Alternative healing", d: "Reiki, somatic therapy, sound healing, regression, tai chi and art therapy." },
  { t: "Traditional healing", d: "African and shamanic practices, sacred ceremonies and plant medicine, guided with respect." },
];

function Index() {
  return (
    <main className="bg-background text-foreground">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-primary-foreground md:px-10">
          <span className="font-display text-2xl tracking-wide">uMoya</span>
          <nav className="hidden gap-10 eyebrow md:flex">
            <a href="#approach" className="opacity-80 hover:opacity-100">Approach</a>
            <a href="#care" className="opacity-80 hover:opacity-100">Care</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </nav>
          <a href={`mailto:${EMAIL}`} className="eyebrow border border-primary-foreground/50 px-5 py-3 transition hover:bg-primary-foreground hover:text-foreground">
            Enquire
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img src={hero} alt="Private villa terrace overlooking Table Mountain, Cape Town" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-overlay via-overlay/40 to-overlay/30" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 text-primary-foreground md:px-10 md:pb-32">
          <p className="eyebrow animate-rise opacity-90">Cape Town · Exceptional Private Care</p>
          <h1 className="animate-rise mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl">
            Come, let us <em className="italic">care</em> for you.
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg font-light opacity-90">
            Discreet, holistic and deeply personal care — uniting conventional medicine with the healing traditions of Africa.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="eyebrow bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Begin a private conversation</a>
            <a href="#approach" className="eyebrow border border-primary-foreground/50 px-8 py-4 transition hover:bg-primary-foreground/10">Our approach</a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-5xl px-6 py-28 text-center md:py-40">
        <p className="eyebrow text-primary">uMoya — “spirit” in isiZulu</p>
        <h2 className="mt-8 text-4xl leading-tight md:text-6xl">
          Whatever life brings, <em className="italic text-primary">our priority is you.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted-foreground">
          uMoya is excellence in human care — for recovery, burnout, life transitions and moments when you simply need to be held by people who understand.
        </p>
      </section>

      {/* Pillars */}
      <section id="approach" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="border-border p-10 md:border-r md:p-14 md:last:border-r-0">
              <span className="font-display text-5xl text-accent">{p.n}</span>
              <h3 className="mt-6 text-3xl">{p.t}</h3>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Holistic team */}
      <section id="care" className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-40">
        <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow text-primary">A holistic care team</p>
          <h2 className="mt-6 text-5xl leading-tight">Restoring balance, through curated healing.</h2>
          <p className="mt-6 font-light text-muted-foreground">
            From somatic work to traditional arts, every discipline is chosen around your needs and coordinated by one dedicated team.
          </p>
          <ul className="mt-12 divide-y divide-border border-y border-border">
            {modalities.map((m) => (
              <li key={m.t} className="py-6">
                <h3 className="text-2xl">{m.t}</h3>
                <p className="mt-2 text-sm font-light text-muted-foreground">{m.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Swiss / African */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:py-36">
          <h2 className="text-5xl md:text-7xl">Swiss discretion. <em className="italic text-accent">African heart.</em></h2>
          <p className="mx-auto mt-8 max-w-2xl font-light opacity-80">
            An easily accessible, Swiss-based founding team with deep African roots — combining precision and confidentiality with warmth and ancestral wisdom.
          </p>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-6 border-t border-secondary-foreground/20 pt-10">
            {[["100%", "Confidential"], ["Weekly", "Plan reviews"], ["1:1", "Dedicated team"]].map(([a, b]) => (
              <div key={b}>
                <div className="font-display text-4xl text-accent">{a}</div>
                <div className="eyebrow mt-2 opacity-70">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <p className="eyebrow text-primary">Experience the difference</p>
        <h2 className="mt-6 text-5xl md:text-6xl">Begin with a confidential conversation.</h2>
        <p className="mx-auto mt-6 max-w-xl font-light text-muted-foreground">Write to us — we respond personally, usually within 24 hours.</p>
        <a href={`mailto:${EMAIL}`} className="mt-10 inline-block font-display text-3xl text-primary underline decoration-accent underline-offset-8 md:text-4xl">{EMAIL}</a>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:px-10">
          <span className="font-display text-xl text-foreground">uMoya Cape Town</span>
          <span>© {new Date().getFullYear()} uMoya · Exceptional Private Care</span>
        </div>
      </footer>
    </main>
  );
}
