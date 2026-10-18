import { createFileRoute } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import heart from "@/assets/el-heart.jpg";
import { Page, PageHero, meta, PHONE, WHATSAPP, Ornament } from "@/components/site";

export const Route = createFileRoute("/how")({
  head: () => meta("How uMoya works | 28 Day Care Plan", "Understand, prepare, finalise, implement & adapt. Our exceptional 28 day private care plan in Camps Bay, Cape Town."),
  component: How,
});

const steps = [
  { t: "Understand.", d: ["Call or WhatsApp on " + PHONE + ".", "Email us at care@umoya.care.", "Let's have a video call to understand your needs.", "Optional face to face meeting in Zurich."] },
  { t: "Prepare.", d: ["We will work with you to prepare our 28 day program. This will serve as our roadmap, however we will continually adapt and improve the program based on our 360 degree feedback system."] },
  { t: "Finalise.", d: ["Finalise dates, home space, payments and agree logistics. Prepare full onboarding deck with name and contact details of your coordinator. Once you land in Cape Town, uMoya will take over."] },
  { t: "Implement, Adapt.", d: ["The 28 day plan is a guide. Every week we adapt and implement changes to our approach based on a 360 degree feedback system."] },
];

const included = ["Live-in care guide", "Alternative therapy care", "Traditional healer care", "Sacred rituals and ceremonies", "Private villa accommodation", "Private chef meals", "Personal trainer & gym access", "Airport and local transport", "Planned outings and visits", "24/7 support"];

function How() {
  return (
    <Page>
      <PageHero img={villa} eyebrow="How uMoya works · Safe private care" title={<>Four steps to your <em className="italic">healing.</em></>} />

      <section className="relative overflow-hidden">
        <Ornament className="-right-40 -top-32 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="eyebrow text-primary">One gentle step at a time</p>
          <h2 className="mt-6 max-w-2xl text-5xl leading-tight">You only need to take the first one.</h2>
          <div className="relative mt-20 grid gap-14 md:grid-cols-4 md:gap-8">
            <div aria-hidden className="absolute left-8 right-8 top-8 hidden h-px bg-accent/50 md:block" />
            {steps.map((s, i) => (
              <div key={s.t} className="relative">
                <span className={`relative flex h-16 w-16 items-center justify-center rounded-full font-display text-3xl ring-8 ring-background ${i === 0 ? "bg-primary text-primary-foreground" : "bg-accent/25 text-primary"}`}>{i + 1}</span>
                <h3 className="mt-8 text-4xl">{s.t}</h3>
                <div className="mt-5 space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {s.d.map((x) => <p key={x}>{x}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-bottom-52 -left-52 h-[40rem] w-[40rem]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
          <div>
            <p className="eyebrow text-accent">Discreet private care in Camps Bay</p>
            <h2 className="mt-6 text-5xl leading-tight md:text-6xl">Our 28 Day Care Plan</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <div className="rounded-t-full border border-accent/40 px-6 pb-8 pt-14 text-center">
                <p className="eyebrow opacity-70">Individuals</p>
                <p className="mt-4 font-display text-3xl">CHF 100–180 000</p>
              </div>
              <div className="rounded-t-full border border-accent/40 px-6 pb-8 pt-14 text-center">
                <p className="eyebrow opacity-70">Couples</p>
                <p className="mt-4 font-display text-3xl">CHF 125–220 000</p>
              </div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow mt-12 inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Start with a call</a>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <img src={heart} alt="Caring hands" loading="lazy" width={1024} height={1024} className="shape-arch aspect-[4/5] w-full object-cover" />
            <div aria-hidden className="shape-arch absolute -inset-4 border border-accent/40" />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-28 md:py-36">
        <Ornament className="-left-56 -top-40 h-[34rem] w-[34rem]" />
        <div className="relative text-center">
          <p className="eyebrow text-primary">What is included</p>
          <h2 className="mt-6 text-5xl">Everything, so you can think of nothing.</h2>
        </div>
        <div className="relative mx-auto mt-16 grid max-w-3xl gap-x-16 border-t border-accent/30 sm:grid-cols-2">
          <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px bg-accent/30 sm:block" />
          {[included.slice(0, 5), included.slice(5)].map((col, ci) => (
            <ul key={ci} className="flex flex-col">
              {col.map((x) => (
                <li key={x} className="border-b border-accent/20 py-6 font-display text-xl leading-snug tracking-wide">
                  {x}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <p className="relative mt-12 text-center text-sm font-light italic text-muted-foreground">Specific medical or psychiatric care can be coordinated upon request.</p>
      </section>
    </Page>
  );
}
