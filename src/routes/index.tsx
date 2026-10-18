import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";
import villa from "@/assets/villa.jpg";
import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import { Page, PageHero, meta, EMAIL, WHATSAPP } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => meta("uMoya Cape Town | Private 1:1 Healing Sanctuary", "One client at a time. A private villa in Cape Town and a medical and holistic team devoted only to you. Quiet, discreet recovery from burnout, crisis and exhaustion."),
  component: Index,
});

const voices = [
  { q: "I can't switch off anymore — not even on holiday.", t: "Burnout" },
  { q: "Everyone thinks I'm fine. I'm not.", t: "Hidden exhaustion" },
  { q: "I've tried therapy, rest, time away. My body still won't let go.", t: "Stuck" },
];

const compare = [
  ["Shared spaces, shared schedules", "A private villa that is only yours"],
  ["You adapt to the programme", "The programme adapts to you — every week"],
  ["Medicine or holistic care", "Both, working as one team"],
  ["Being seen by others", "Being seen only by the people caring for you"],
];

const day = [
  { time: "Morning", d: "Waking slowly. Breathwork, then a breakfast prepared for your body." },
  { time: "Midday", d: "A healing session, and a quiet clinical check-in." },
  { time: "Afternoon", d: "Nature, a sound bath — or simply nothing at all." },
  { time: "Evening", d: "A conversation with your care guide. Or silence. Your choice." },
];

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute rounded-full border border-accent/30 ${className}`}>
      <div className="absolute inset-[12%] rounded-full border border-accent/25" />
      <div className="absolute inset-[26%] rounded-full border border-accent/20" />
      <div className="absolute inset-[40%] rounded-full bg-accent/10" />
    </div>
  );
}

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
            <p>No amount of willpower switches it off. What it needs is safety, time and people who look at the whole of you — body, mind and spirit.</p>
            <p>That is the only thing uMoya is built for.</p>
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <p className="eyebrow text-primary">Why one client at a time</p>
        <h2 className="mt-6 max-w-3xl text-5xl leading-tight">In a group you keep performing. Alone, you can finally put the mask down.</h2>
        <div className="mt-16 grid md:grid-cols-2">
          <div className="border border-border p-10 md:p-14">
            <p className="eyebrow text-muted-foreground">Most places</p>
            <ul className="mt-8 space-y-6">
              {compare.map(([a]) => <li key={a} className="font-light text-muted-foreground">{a}</li>)}
            </ul>
          </div>
          <div className="bg-primary p-10 text-primary-foreground md:p-14">
            <p className="eyebrow opacity-80">uMoya</p>
            <ul className="mt-8 space-y-6">
              {compare.map(([a, b]) => <li key={a} className="font-display text-2xl">{b}</li>)}
            </ul>
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
                  <img src={p.img} alt={p.n} loading="lazy" className="aspect-[3/4] w-full object-cover" />
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
          <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
          <div className="absolute -bottom-8 -right-4 bg-accent px-8 py-6 text-accent-foreground md:-right-10">
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
      <section className="relative overflow-hidden">
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
