import { createFileRoute } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import heart from "@/assets/el-heart.jpg";
import { Page, PageHero, meta, PHONE, WHATSAPP, Ornament } from "@/components/site";

export const Route = createFileRoute("/how")({
  head: () => meta("How uMoya works | 28 Day Care Plan", "Understand, prepare, finalise, implement & adapt. Our exceptional 28 day private care plan in Camps Bay, Cape Town."),
  component: How,
});

const steps = [
  { t: "Understand.", d: ["Call or WhatsApp on " + PHONE + ", or write to care@umoya.care.", "Then a video call, wherever you are, to understand your needs. We listen first — nothing is planned before we understand."] },
  { t: "Prepare.", d: ["We will work with you to prepare our 28 day program. This will serve as our roadmap, however we will continually adapt and improve the program based on our 360 degree feedback system."] },
  { t: "Finalise.", d: ["Finalise dates, home space, payments and agree logistics. Prepare full onboarding deck with name and contact details of your coordinator. Once you land in Cape Town, uMoya will take over."] },
  { t: "Implement, Adapt.", d: ["The 28 day plan is a guide. Every week we adapt and implement changes to our approach based on a 360 degree feedback system."] },
];

type Included = { t: string; k: string };

const included: [Included, Included][] = [
  [{ t: "Live-in care guide", k: "one named coordinator · day and night" }, { t: "24/7 support", k: "someone answers, always" }],
  [{ t: "Alternative therapy care", k: "Reiki · sound baths · breathwork" }, { t: "Traditional healer care", k: "isiZulu healing · ancestral ritual" }],
  [{ t: "Sacred rituals and ceremonies", k: "sunrise walks · fire ceremony" }, { t: "Planned outings and visits", k: "Cape Point · vineyards · islands" }],
  [{ t: "Private villa accommodation", k: "your own room · terrace · sea view" }, { t: "Private chef meals", k: "three meals a day · your pantry" }],
  [{ t: "Personal trainer & gym access", k: "daily movement · ocean runs" }, { t: "Airport and local transport", k: "car and driver · no driving yourself" }],
];

function How() {
  return (
    <Page>
      <PageHero img={villa} eyebrow="How uMoya works · Safe private care" title={<>Four steps to your <em className="italic">healing.</em></>} />

      <section className="relative overflow-hidden">
        <Ornament className="-right-40 -top-32 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <div className="text-center">
            <p className="eyebrow text-primary">One gentle step at a time</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-5xl leading-tight">You only need to take the <em className="italic text-primary">first one.</em></h2>
          </div>
          <ol className="mt-16 grid gap-8 md:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.t} className="flex flex-col rounded-[2.5rem] border border-accent/25 bg-card p-10 shadow-sm transition duration-500 hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-lg md:p-12">
                <div className="flex items-center gap-5">
                  <span className="eyebrow text-primary">Step</span>
                  <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-accent/70 via-accent/30 to-transparent" />
                </div>
                <div className="mt-8">
                  <span className="block bg-gradient-to-br from-primary to-accent bg-clip-text font-display text-8xl leading-[1.15] text-transparent md:text-9xl">0{i + 1}</span>
                  <h3 className="mt-2 text-3xl leading-[1.1] tracking-wide md:text-4xl">{s.t}</h3>
                </div>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-accent/45 via-accent/20 to-transparent" />
                <div className="mt-7 space-y-3.5 text-[0.95rem] font-light leading-relaxed tracking-[0.01em] text-muted-foreground">
                  {s.d.map((x) => <p key={x}>{x}</p>)}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 md:py-36">
        <Ornament className="-left-56 -top-40 h-[34rem] w-[34rem]" />
        <div className="relative text-center">
          <p className="eyebrow text-primary">What is included</p>
          <h2 className="mt-6 text-5xl">Everything, so you can think of nothing.</h2>
        </div>
        <div className="relative mx-auto mt-16 max-w-3xl border-t border-accent/30 px-8 sm:px-12">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-accent/25 sm:block" />
          {included.map((row, i) => (
            <div key={i} className="grid gap-y-6 border-b border-accent/20 py-6 sm:grid-cols-2 sm:gap-x-16">
              {row.map((x) => (
                <div key={x.t}>
                  <p className="font-display text-xl leading-snug tracking-wide">{x.t}</p>
                  <p className="mt-2 text-sm font-light text-muted-foreground">{x.k}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="relative mt-12 text-center text-sm font-light italic text-muted-foreground">Specific medical or psychiatric care can be coordinated upon request.</p>
      </section>

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-bottom-52 -left-52 h-[40rem] w-[40rem]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 py-28 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-36">
          <div>
            <p className="eyebrow text-accent">Discreet private care in Camps Bay</p>
            <h2 className="mt-5 text-5xl leading-[1.05] md:text-6xl">Our 28 Day<br /><em className="font-light italic text-accent">Care Plan</em></h2>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed opacity-75">
              One private home, one dedicated team, four weeks shaped entirely around you. Everything is included.
            </p>
            <dl className="mt-12 max-w-md border-y border-accent/30">
              <div className="flex items-baseline justify-between gap-6 py-6">
                <dt className="eyebrow opacity-70">Individuals</dt>
                <dd className="font-display text-3xl md:text-4xl">CHF 100–180 000</dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-t border-accent/20 py-6">
                <dt className="eyebrow opacity-70">Couples</dt>
                <dd className="font-display text-3xl md:text-4xl">CHF 125–220 000</dd>
              </div>
            </dl>
            <p className="mt-6 max-w-md text-sm font-light italic leading-relaxed opacity-60">
              A partner is welcome, never required. Many guests come alone.
            </p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="group eyebrow mt-10 inline-flex items-center gap-4 text-accent transition hover:opacity-80">
              <span className="border-b border-accent/50 pb-1">Start with a call</span>
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute -inset-6 rounded-[50%] border border-accent/25" />
            <img src={heart} alt="Caring hands" loading="lazy" width={1024} height={1024} className="relative aspect-[3/4] w-full rounded-[50%] object-cover" />
            <div className="absolute -bottom-4 left-1/2 flex h-24 w-24 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <span className="font-sans text-2xl font-medium leading-none">28</span>
              <span className="eyebrow mt-1 text-[0.6rem]">days</span>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
