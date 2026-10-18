import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";
import villa from "@/assets/villa.jpg";
import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import { Page, PageHero, meta, EMAIL, WHATSAPP } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("uMoya Cape Town | Private 1:1 Healing Sanctuary", "One client. One dedicated medical and holistic team. One private villa in Cape Town. Discreet, integrative recovery from burnout, crisis and exhaustion."),
  component: Index,
});

const mirror = [
  { t: "Burnout", d: "Functioning on the outside, empty on the inside. Your nervous system can no longer find the off switch." },
  { t: "A turning point", d: "Separation, loss or a crisis of meaning — the moment when carrying on as before is no longer an option." },
  { t: "Tried everything", d: "Therapy, holidays, time off. Yet your body still holds on to the stress." },
];

const compare = [
  ["Shared with strangers", "A private villa — only for you"],
  ["Fixed schedules and menus", "A private chef tuned to your body"],
  ["Clinical atmosphere", "A home by the ocean in Cape Town"],
  ["Rotating staff", "A live-in care guide and a dedicated team"],
  ["Medicine or holistic care", "Both, working together, every week"],
];

const day = [
  { time: "Morning", d: "Wake to the ocean. Gentle breathwork, then breakfast prepared by your private chef." },
  { time: "Midday", d: "A deep healing session with Shereen, and a clinical check-in with Dr Ravi." },
  { time: "Afternoon", d: "A sound bath, a walk on Table Mountain — or simply silence, with no phone ringing." },
  { time: "Evening", d: "Reflection with your live-in care guide. No pressure. Only space to breathe." },
];

function Index() {
  return (
    <Page>
      <PageHero
        tall
        img={hero}
        eyebrow="Private 1:1 Healing Sanctuary · Cape Town & Zurich"
        title={<>When exhaustion runs deeper than <em className="italic">sleep</em> can fix.</>}
        sub={<>
          <p>One client. One dedicated medical and holistic team. One private villa in Cape Town. Recovery in complete discretion.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}?subject=Confidential%20enquiry`} className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Request a confidential conversation</a>
            <Link to="/how" className="eyebrow inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">How it works</Link>
          </div>
        </>}
      />

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <p className="eyebrow text-primary">You are in the right place if…</p>
        <h2 className="mt-6 max-w-3xl text-5xl leading-tight">Whatever life event. Our priority is <em className="italic">you</em>.</h2>
        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {mirror.map((m, i) => (
            <div key={m.t} className="bg-background p-10 md:p-12">
              <span className="font-display text-5xl text-accent">0{i + 1}</span>
              <h3 className="mt-6 text-3xl">{m.t}</h3>
              <p className="mt-4 font-light leading-relaxed text-muted-foreground">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-28 md:px-10">
          <p className="eyebrow text-primary">The single-client difference</p>
          <h2 className="mt-6 max-w-3xl text-5xl leading-tight">No groups. No masks. Your whole team focused on one person.</h2>
          <div className="mt-14 border border-border">
            <div className="grid grid-cols-2 border-b border-border bg-background">
              <p className="eyebrow p-6 text-muted-foreground">Typical clinic or retreat</p>
              <p className="eyebrow p-6 text-primary">uMoya</p>
            </div>
            {compare.map(([a, b]) => (
              <div key={a} className="grid grid-cols-2 border-b border-border last:border-0">
                <p className="p-6 font-light text-muted-foreground line-through decoration-border">{a}</p>
                <p className="p-6 text-xl font-display">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <p className="eyebrow text-primary">Medicine meets holistic depth</p>
        <h2 className="mt-6 max-w-3xl text-5xl leading-tight">You don't have to choose between modern medicine and deep healing.</h2>
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {[
            { img: ravi, n: "Dr Ravi Govender", r: "Clinical safety, diagnostics and medical oversight." },
            { img: shereen, n: "Shereen Singh", r: "Somatic work, reiki, sound healing and nervous-system regulation." },
          ].map((p) => (
            <div key={p.n} className="flex items-center gap-8">
              <img src={p.img} alt={p.n} loading="lazy" className="h-40 w-32 object-cover" />
              <div>
                <h3 className="text-3xl">{p.n}</h3>
                <p className="mt-3 font-light text-muted-foreground">{p.r}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/who" className="eyebrow mt-12 inline-block text-primary hover:underline">Meet the full team →</Link>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-28 md:grid-cols-2 md:px-10 md:pb-36">
        <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
        <div>
          <p className="eyebrow text-primary">A day at uMoya</p>
          <h2 className="mt-6 text-5xl leading-tight">Space to breathe again.</h2>
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {day.map((d) => (
              <li key={d.time} className="grid grid-cols-[7rem_1fr] gap-4 py-6">
                <span className="eyebrow pt-1 text-accent">{d.time}</span>
                <p className="font-light text-muted-foreground">{d.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={villa} alt="Private villa in Camps Bay" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto max-w-4xl px-6 py-36 text-center text-primary-foreground">
          <h2 className="text-5xl md:text-7xl">Swiss discretion. <em className="italic text-accent">African heart.</em></h2>
          <p className="mx-auto mt-8 max-w-2xl font-light opacity-90">100% confidential. You speak directly with our founders — no assistants, no sales funnel, nothing shared.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${EMAIL}?subject=Confidential%20enquiry`} className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Request a confidential conversation</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">WhatsApp</a>
          </div>
        </div>
      </section>
    </Page>
  );
}
