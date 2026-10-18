import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/healing.jpg";
import rahul from "@/assets/team-rahul.jpg";
import shereen from "@/assets/team-shereen.jpg";
import ravi from "@/assets/team-ravi.jpg";
import vees from "@/assets/team-vees.jpg";
import { Page, PageHero, meta } from "@/components/site";

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
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xl font-light leading-relaxed text-muted-foreground md:text-2xl">
          uMoya is guided by four partners who share a commitment to providing compassionate, personalised care. Each brings their own experience and perspective to creating a supportive environment for people navigating difficult times in their lives.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-x-12 gap-y-20 px-6 pb-32 md:grid-cols-2 md:px-10">
        {team.map((p) => (
          <article key={p.n}>
            <img src={p.img} alt={p.n} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <p className="eyebrow mt-8 text-primary">{p.r}</p>
            <h2 className="mt-3 text-4xl">{p.n}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.l}</p>
            <p className="mt-5 font-light leading-relaxed text-muted-foreground">{p.d}</p>
          </article>
        ))}
      </section>
    </Page>
  );
}
