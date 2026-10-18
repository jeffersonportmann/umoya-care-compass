import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";
import bowl from "@/assets/bowl.jpg";
import wholeYou from "@/assets/whole-you.jpg";
import villa from "@/assets/villa.jpg";
import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import { Page, PageHero, meta, EMAIL, WHATSAPP, Ornament } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("uMoya Cape Town | Private 1:1 Healing Sanctuary", "One client at a time. A private villa in Cape Town and a medical and holistic team devoted only to you. Quiet, discreet recovery from burnout, crisis and exhaustion."),
  component: Index,
});

const voices = [
  { q: "I can't switch off anymore — not even on holiday.", t: "Burnout" },
  { q: "Everyone thinks I'm fine. I'm not.", t: "Hidden exhaustion" },
  { q: "I've tried therapy, rest, time away. My body still won't let go.", t: "Stuck" },
];

const ideas = [
  { t: "One guest, one home", d: "Care designed around a single person — in a private villa that is yours alone." },
  { t: "A plan that listens", d: "Your plan is refined every week through 360° feedback, so care follows how you feel." },
  { t: "Medicine and healing, together", d: "Clinical and holistic practitioners work as one team, around one person." },
  { t: "Privacy as part of care", d: "Only the people caring for you. Nothing to perform, no one to explain yourself to." },
];

const day = [
  { time: "Morning", d: "Waking slowly. Breathwork, then a breakfast prepared for your body." },
  { time: "Midday", d: "A healing session, and a quiet clinical check-in." },
  { time: "Afternoon", d: "Nature, a sound bath — or simply nothing at all." },
  { time: "Evening", d: "A conversation with your care guide. Or silence. Your choice." },
];

function Index() {
  return (
    <Page>
      <PageHero
        tall
        img={hero}
        eyebrow="One client at a time · Cape Town & Zurich"
        title={<>When exhaustion runs deeper than <em className="italic">sleep</em> can fix.</>}
        sub={<>
          <p>A private place to stop. A small team devoted only to you. Time for your body and mind to remember how to rest.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}?subject=Confidential%20conversation`} className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Start a quiet conversation</a>
            <Link to="/how" className="eyebrow inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">How it works</Link>
          </div>
        </>}
      />

      {/* Recognition */}
      <section className="relative overflow-hidden">
        <Ornament className="-right-40 -top-40 h-[34rem] w-[34rem]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="eyebrow text-primary">Perhaps this sounds familiar</p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {voices.map((v, i) => (
              <figure key={v.t} className={`border-l-2 border-accent pl-8 ${i === 1 ? "md:mt-16" : ""} ${i === 2 ? "md:mt-32" : ""}`}>
                <blockquote className="font-display text-3xl italic leading-snug md:text-4xl">“{v.q}”</blockquote>
                <figcaption className="eyebrow mt-6 text-muted-foreground">{v.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reframe */}
      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-bottom-52 -left-52 h-[40rem] w-[40rem]" />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-36">
          <h2 className="text-5xl leading-[1.05] md:text-7xl">This is not weakness. It is a nervous system that has been on <em className="italic text-accent">alert</em> for too long.</h2>
          <div className="self-end space-y-6 font-light leading-relaxed opacity-85">
            <div className="relative mb-10 w-56 md:w-72">
              <img src={bowl} alt="Singing bowl with still water" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-full object-cover" />
              <div aria-hidden className="absolute -inset-5 rounded-full border border-accent/40" />
              <div aria-hidden className="absolute -inset-10 rounded-full border border-accent/20" />
            </div>
            <p>No amount of willpower switches it off. What it needs is safety, time and people who look at the whole of you — body, mind and spirit.</p>
            <p>That is the only thing uMoya is built for.</p>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="relative overflow-hidden">
        <Ornament className="-right-56 top-1/3 h-[38rem] w-[38rem]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-[0.9fr_1.1fr] md:gap-24 md:px-10 md:py-36">
          <div className="relative mx-auto w-full max-w-md">
            <img src={wholeYou} alt="Guest resting by a private villa pool" loading="lazy" width={1024} height={1024} className="shape-arch relative aspect-[4/5] w-full object-cover" />
            <div aria-hidden className="shape-arch absolute -inset-4 border border-accent/50" />
            <div className="absolute -bottom-8 -left-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground md:-left-10">
              <p className="font-display text-5xl leading-none">1</p>
              <p className="eyebrow mt-1 text-[0.6rem]">guest at a time</p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary">A new way of caring</p>
            <h2 className="mt-6 text-5xl leading-tight">Rethinking care from the person outward.</h2>
            <p className="mt-6 max-w-lg font-light leading-relaxed text-muted-foreground">When everything is shaped around one person, you no longer have to keep performing. You can finally put the mask down.</p>
            <ol className="mt-12 space-y-10">
              {ideas.map((it, i) => (
                <li key={it.t} className="grid grid-cols-[3.5rem_1fr] gap-6">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-accent font-display text-2xl text-primary">{i + 1}</span>
                  <div className="border-b border-border pb-8">
                    <h3 className="text-3xl">{it.t}</h3>
                    <p className="mt-3 font-light leading-relaxed text-muted-foreground">{it.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
          <div className="grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div>
              <p className="eyebrow text-primary">The people beside you</p>
              <h2 className="mt-6 text-5xl leading-tight">You don't have to choose between medicine and deeper healing.</h2>
              <Link to="/who" className="eyebrow mt-10 inline-block text-primary hover:underline">Meet the team →</Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { img: ravi, n: "Dr Ravi Govender", r: "Clinical care & safety" },
                { img: shereen, n: "Shereen Singh", r: "Integrative healing" },
              ].map((p, i) => (
                <figure key={p.n} className={i === 1 ? "mt-16" : ""}>
                  <img src={p.img} alt={p.n} loading="lazy" className="shape-arch aspect-[3/4] w-full object-cover" />
                  <figcaption className="mt-4">
                    <p className="font-display text-2xl">{p.n}</p>
                    <p className="eyebrow mt-1 text-muted-foreground">{p.r}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Day */}
      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2 md:px-10 md:py-36">
        <div className="relative">
          <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="shape-arch relative aspect-[4/5] w-full object-cover" />
          <div aria-hidden className="shape-arch pointer-events-none absolute -inset-4 -z-0 border border-accent/50" />
          <div className="absolute -bottom-6 -right-4 z-10 rounded-full flex h-36 w-36 flex-col items-center justify-center text-center bg-accent text-accent-foreground md:-right-10">
            <p className="font-display text-5xl">28</p>
            <p className="eyebrow">days, at your pace</p>
          </div>
        </div>
        <div>
          <p className="eyebrow text-primary">A day, gently</p>
          <h2 className="mt-6 text-5xl leading-tight">Nothing you have to achieve.</h2>
          <ol className="relative mt-12 space-y-10 border-l border-accent/50 pl-10">
            {day.map((d) => (
              <li key={d.time} className="relative">
                <span className="absolute -left-[2.85rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <p className="eyebrow text-accent">{d.time}</p>
                <p className="mt-2 font-light text-muted-foreground">{d.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Invitation */}
      <section className="relative overflow-hidden rounded-t-[50%_5rem]">
        <img src={villa} alt="Private villa in Cape Town" loading="lazy" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="relative mx-auto max-w-4xl px-6 py-36 text-center text-primary-foreground">
          <h2 className="text-5xl md:text-7xl">You don't need the right words <em className="italic text-accent">yet.</em></h2>
          <p className="mx-auto mt-8 max-w-2xl font-light opacity-90">A first conversation is simply that — a conversation. Confidential, without obligation, at whatever pace feels right.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${EMAIL}?subject=Confidential%20conversation`} className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Write to us</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="eyebrow inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">WhatsApp</a>
          </div>
        </div>
      </section>
    </Page>
  );
}
