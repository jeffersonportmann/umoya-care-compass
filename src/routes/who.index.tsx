import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/healing.jpg";
import { PageHero, meta, Ornament } from "@/components/site";
import { team } from "@/data/team";

export const Route = createFileRoute("/who/")({
  head: () => meta("Who is uMoya? | The People Behind uMoya", "Meet the four partners behind uMoya — Rahul Singh, Shereen Singh, Dr Ravi Govender and Vees Moodley."),
  component: Who,
});

function Who() {
  return (
    <>
      <PageHero img={hero} eyebrow="WhoMoya? · Authentic private care" title={<>The people behind <em className="italic">uMoya.</em></>} sub="uMoya's core team is built on more than 200 years of trust & friendship." />

      <section className="relative overflow-hidden">
        <Ornament className="-left-40 top-10 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="eyebrow text-primary">Four partners, one intention</p>
          <p className="mt-8 font-display text-3xl leading-snug md:text-4xl">
            uMoya is guided by four partners who share a commitment to providing <em className="italic text-primary">compassionate, personalised care</em> — for people navigating difficult times in their lives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-28 md:space-y-32 md:px-10">
        {team.map((p, i) => (
          <article key={p.n} className={`grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative mx-auto w-full max-w-sm">
              {p.img ? (
                <img src={p.img} alt={p.n} loading="lazy" className="shape-pebble relative aspect-[4/5] w-full object-cover" />
              ) : (
                <div className="shape-pebble relative flex aspect-[4/5] w-full items-center justify-center bg-accent/10">
                  <span className="font-display text-8xl leading-none text-primary/60">{p.init}</span>
                </div>
              )}
              <div aria-hidden className="shape-pebble absolute -inset-4 border border-accent/40" />
            </div>
            <div>
              <p className="eyebrow text-primary">{p.r}</p>
              <h2 className="mt-4 text-5xl md:text-6xl">{p.n}</h2>
              <p className="eyebrow mt-4 text-muted-foreground/80">{p.l}</p>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">{p.d}</p>
              <Link
                to="/who/$slug"
                params={{ slug: p.slug }}
                className="eyebrow mt-7 inline-flex items-center gap-3 text-primary transition hover:opacity-70"
              >
                Read more <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-bottom-52 -right-52 h-[40rem] w-[40rem]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
          <p className="font-display text-8xl text-accent md:text-9xl">200+</p>
          <p className="eyebrow mt-4 opacity-80">years of trust & friendship between us</p>
          <h2 className="mt-10 text-4xl leading-tight md:text-5xl">Care works best when it comes from people who <em className="italic text-accent">trust each other.</em></h2>
        </div>
      </section>
    </>
  );
}
