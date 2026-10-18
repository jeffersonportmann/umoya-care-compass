import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/healing.jpg";
import rahul from "@/assets/team-rahul.jpg";
import shereen from "@/assets/team-shereen.jpg";
import ravi from "@/assets/team-ravi.jpg";
import vees from "@/assets/team-vees.jpg";
import { Page, PageHero, meta, Ornament } from "@/components/site";

export const Route = createFileRoute("/who")({
  head: () => meta("Who is uMoya? | The People Behind uMoya", "Meet the four partners behind uMoya — Rahul Singh, Shereen Singh, Dr Ravi Govender and Vees Moodley."),
  component: Who,
});

const team = [
  { n: "Rahul Singh", r: "CEO, Founder", l: "Zurich, Switzerland", img: rahul, d: "With a background in chemical engineering, Rahul is a lifelong student and teacher of the science of self. His curiosity about energy, nature and the principles that connect them continues to shape his thinking. He brings creativity, scientific curiosity and a distinctive perspective to the development of uMoya." },
  { n: "Shereen Singh", r: "Head of Integrative Healing", l: "Zurich, Switzerland", img: shereen, d: "A compassionate holistic practitioner specialising in Reiki, energy healing and shamanic practices. Shereen brings warmth, intuition and a deeply personal approach to supporting people through their healing journeys." },
  { n: "Dr Ravi Govender", r: "Head of Care and Clinical Advisory", l: "Cape Town, South Africa", img: ravi, d: "A psychiatrist with an analytical mind and a thoughtful approach to understanding complex human experiences. Ravi brings his clinical knowledge, experience and problem-solving abilities to uMoya's approach to care." },
  { n: "Vees Moodley", r: "Head of Operations", l: "Cape Town, South Africa", img: vees, d: "A chemical engineer with extensive experience in managing global operations. Vees brings structure, practical thinking and attention to detail, helping ensure that every aspect of the uMoya experience is thoughtfully organised." },
];

function Who() {
  return (
    <Page>
      <PageHero img={hero} eyebrow="WhoMoya? · Authentic private care" title={<>The people behind <em className="italic">uMoya.</em></>} sub="uMoya's core team is built on more than 200 years of trust & friendship." />

      <section className="relative overflow-hidden">
        <Ornament className="-left-40 -top-20 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="eyebrow text-primary">Four partners, one intention</p>
          <p className="mt-8 font-display text-3xl leading-snug md:text-4xl">
            uMoya is guided by four partners who share a commitment to providing <em className="italic text-primary">compassionate, personalised care</em> — for people navigating difficult times in their lives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-28 px-6 pb-28 md:space-y-36 md:px-10">
        {team.map((p, i) => (
          <article key={p.n} className={`grid items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative mx-auto w-full max-w-sm">
              <img src={p.img} alt={p.n} loading="lazy" className="shape-pebble relative aspect-[4/5] w-full object-cover" />
              <div aria-hidden className="shape-pebble absolute -inset-4 border border-accent/40" />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-background px-5 py-2 eyebrow text-muted-foreground shadow-sm">{p.l}</span>
            </div>
            <div>
              <p className="eyebrow text-primary">{p.r}</p>
              <h2 className="mt-4 text-5xl">{p.n}</h2>
              <p className="mt-6 max-w-lg font-light leading-relaxed text-muted-foreground">{p.d}</p>
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
    </Page>
  );
}
