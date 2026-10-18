import { createFileRoute } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import { Page, PageHero, meta, PHONE, WHATSAPP } from "@/components/site";

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

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-px border border-border bg-border md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-background p-10">
              <span className="eyebrow text-primary">Step {i + 1}</span>
              <h2 className="mt-4 text-4xl">{s.t}</h2>
              <div className="mt-6 space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
                {s.d.map((x) => <p key={x}>{x}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
          <div>
            <p className="eyebrow text-primary">Discreet private care in Camps Bay</p>
            <h2 className="mt-6 text-5xl leading-tight md:text-6xl">Our exceptional 28 Day Care Plan</h2>
            <div className="mt-12 space-y-6">
              <div className="border-l-2 border-primary pl-6">
                <p className="font-display text-4xl">CHF 100–180 000</p>
                <p className="eyebrow mt-2 text-muted-foreground">for individuals</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <p className="font-display text-4xl">CHF 125–220 000</p>
                <p className="eyebrow mt-2 text-muted-foreground">for couples</p>
              </div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow mt-12 inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Start with a call</a>
          </div>
          <div>
            <p className="eyebrow text-primary">What is included</p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {included.map((x) => (
                <li key={x} className="flex items-center gap-4 py-4 font-display text-2xl"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{x}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-light italic text-muted-foreground">Specific medical or psychiatric care can be coordinated upon request.</p>
          </div>
        </div>
      </section>
    </Page>
  );
}
