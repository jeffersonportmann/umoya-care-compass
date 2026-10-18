import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import healing from "@/assets/healing.jpg";
import bowl from "@/assets/bowl.jpg";
import villa from "@/assets/villa.jpg";
import ravi from "@/assets/team-ravi.jpg";
import shereen from "@/assets/team-shereen.jpg";
import { Page, PageHero, meta, EMAIL, WHATSAPP, Ornament, SectionBreak, MountainRange } from "@/components/site";

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
  { from: "Care designed for many guests", fk: "shared lounges · set times · a front desk", to: "Care designed around one person", tk: "one home · your hours · your team" },
  { from: "A fixed programme to follow", fk: "the same schedule for every guest", to: "A plan that evolves with you every week", tk: "reviewed weekly · adjusted as you change" },
  { from: "Medicine or holistic care", fk: "two worlds · separate referrals", to: "Medicine and holistic care as one team", tk: "doctors and healers · one table" },
  { from: "Shared spaces and schedules", fk: "other guests · open doors", to: "A private home that is yours alone", tk: "your door · your kitchen · your pace" },
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
        eyebrow="One client at a time · Cape Town"
        title={<>What if the next <em className="italic">28 days</em> belonged only to you?</>}
        sub={<>
          <p>A private home in Cape Town. One guest at a time. A small team of doctors and healers devoted entirely to you — and a month in which nothing at all is asked of you.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}?subject=Confidential%20conversation`} className="eyebrow inline-block bg-primary px-8 py-4 text-primary-foreground transition hover:bg-primary/85">Start a quiet conversation</a>
            <Link to="/how" className="eyebrow inline-block border border-primary-foreground/60 px-8 py-4 transition hover:bg-primary-foreground hover:text-foreground">How it works</Link>
          </div>
        </>}
      />

      {/* What uMoya is — the one-glance explanation */}
      <section className="relative overflow-hidden">
        <Ornament className="-left-48 -top-48 h-[32rem] w-[32rem]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:px-10 md:py-32">
          <p className="eyebrow text-primary">What uMoya is</p>
          <h2 className="mt-8 text-4xl leading-[1.15] md:text-6xl">
            uMoya means <em className="italic text-accent">breath</em> — the quiet force that carries you.
            <span className="mt-6 block text-3xl font-normal leading-snug text-foreground/90 md:text-4xl">
              It is also the name of a private healing home in Cape Town.
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-2xl font-light leading-relaxed text-muted-foreground md:text-lg">
            For 28 days, one person lives in a private home with a small team of medical doctors and holistic healers devoted only to them. You come alone, or with a partner — that choice is entirely yours. No groups. No schedule to perform. Nothing to organise. Only the space and care a deeply exhausted body and mind need to recover.
          </p>
          <div className="mt-14 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
            {[
              ["One guest at a time", "A whole home and team, only for you — alone, or with your partner"],
              ["Medicine and healing together", "Clinical care and deep healing in one hand"],
              ["28 days to reset", "A plan that evolves with you every week"],
            ].map(([t, d]) => (
              <div key={t}>
                <p className="font-display text-2xl leading-snug">{t}</p>
                <p className="mt-2 font-light text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionBreak to="card" />

      {/* Recognition */}
      <section className="relative overflow-hidden bg-card">
        <MountainRange />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-44 md:px-10 md:pt-36 md:pb-56">
          <p className="eyebrow text-primary">Perhaps this sounds familiar</p>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {voices.map((v, i) => (
              <figure key={v.t} className={`border-l-2 border-accent pl-8 ${i === 0 ? "md:mt-32" : ""} ${i === 1 ? "md:mt-16" : ""}`}>
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
        <Ornament className="-right-56 top-1/4 h-[38rem] w-[38rem]" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
          <div className="text-center">
            <p className="eyebrow text-primary">Why one client at a time</p>
            <h2 className="mx-auto mt-6 max-w-3xl text-5xl leading-tight">In a group, you keep performing. Alone, you can finally put the mask down.</h2>
          </div>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2.5rem] border border-border bg-card">
            <div className="grid grid-cols-2 border-b border-border">
              <p className="eyebrow px-8 py-8 text-muted-foreground md:px-12">The familiar approach</p>
              <p className="eyebrow border-l border-border bg-primary/5 px-8 py-8 text-primary md:px-12">The uMoya approach</p>
            </div>
            {compare.map((c) => (
              <div key={c.from} className="grid grid-cols-2 border-b border-border last:border-b-0">
                <div className="flex flex-col justify-center px-8 py-8 md:px-12 md:py-9">
                  <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">{c.from}</p>
                  <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground/80">{c.fk}</p>
                </div>
                <div className="flex flex-col justify-center border-l border-border bg-primary/5 px-8 py-8 md:px-12 md:py-9">
                  <p className="font-display text-xl leading-snug md:text-2xl">{c.to}</p>
                  <p className="mt-3 text-[0.7rem] uppercase tracking-[0.18em] text-primary/85">{c.tk}</p>
                </div>
              </div>
            ))}
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
                  <img src={p.img} alt={p.n} loading="lazy" className="shape-pebble aspect-[3/4] w-full object-cover" />
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
          <img src={healing} alt="Calm healing room with sound bowls" loading="lazy" width={1024} height={1280} className="shape-leaf relative aspect-[4/5] w-full object-cover" />
          <div aria-hidden className="shape-leaf pointer-events-none absolute -inset-4 -z-0 border border-accent/50" />
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
