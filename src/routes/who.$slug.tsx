import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import villa from "@/assets/villa.jpg";
import { PageHero, meta, Ornament, SectionBreak, WHATSAPP } from "@/components/site";
import { findMember, team } from "@/data/team";

export const Route = createFileRoute("/who/$slug")({
  loader: ({ params }) => {
    const member = findMember(params.slug);
    if (!member) throw notFound();
    return { member };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return meta("Unavailable | uMoya", "This page is currently unavailable.");
    const { member } = loaderData;
    return meta(
      `${member.n} | ${member.r} at uMoya`,
      `${member.n}, ${member.r} at uMoya — ${member.d.slice(0, 120)}…`,
    );
  },
  component: MemberPage,
});

function MemberPage() {
  const { member } = Route.useLoaderData();
  const honorific = /^Dr\s/.test(member.n) ? "Dr " : "";
  const bare = member.n.replace(/^Dr\s+/, "");
  const first = bare.split(" ")[0];
  const rest = bare.split(" ").slice(1).join(" ");
  const others = team.filter((m) => m.slug !== member.slug);

  return (
    <>
      <PageHero
        img={member.hero ?? member.img ?? villa}
        scrim="strong"
        eyebrow={member.l ? `${member.r} · ${member.l}` : member.r}
        title={<>{honorific}<em className="italic">{first}</em> {rest}</>}
        sub={member.kind === "partner"
          ? "One of the four partners who hold uMoya together — and the people in it."
          : member.kind === "guide"
            ? "uMoya's live-in guide — there throughout your stay, from the first days to the last."
            : "A compassionate, individual approach to care."}
      />

      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-card to-transparent" />
        <Ornament className="-right-40 top-10 h-[28rem] w-[28rem]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pt-20 pb-16 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-10">
          <div className="relative mx-auto w-full max-w-sm">
            {member.img ? (
              <img src={member.img} alt={member.n} className="shape-pebble relative aspect-[4/5] w-full object-cover" />
            ) : (
              <div className="shape-pebble relative flex aspect-[4/5] w-full items-center justify-center bg-accent/10">
                <span className="font-display text-8xl leading-none text-primary/60">{member.init}</span>
              </div>
            )}
            <div aria-hidden className="shape-pebble absolute -inset-4 border border-accent/40" />
          </div>
          <div>
            <p className="eyebrow text-primary">{member.r}</p>
            <h2 className="mt-4 text-4xl md:text-5xl">{member.n}</h2>
            {member.l && <p className="eyebrow mt-4 text-muted-foreground/80">{member.l}</p>}
            <div className="mt-8 space-y-6 border-l border-accent/40 pl-7 text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
              <p>{member.d}</p>
              {member.more.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <p className="mt-10 text-base leading-relaxed text-muted-foreground/80">
              {member.kind === "partner"
                ? "Rahul, Shereen, Ravi and Vees welcome every guest personally."
                : member.kind === "guide"
                  ? "Glynis lives at the home and is there throughout your stay."
                  : ""}{" "}
              If you would like to speak with {first}, mention it in your first conversation.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-8 inline-flex items-center gap-3 text-primary transition hover:opacity-70"
            >
              Request a confidential conversation <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <SectionBreak />

      <section className="mx-auto max-w-6xl px-6 pb-12 md:px-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">The rest of the team</h2>
          </div>
          <Link to="/who" className="eyebrow text-primary transition hover:opacity-70">
            ← Back to the team
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {others.map((m) => (
            <Link key={m.slug} to="/who/$slug" params={{ slug: m.slug }} className="group block">
              <div className="relative">
                {m.img ? (
                  <img src={m.img} alt={m.n} loading="lazy" className="shape-pebble aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                ) : (
                  <div className="shape-pebble flex aspect-[4/5] w-full items-center justify-center bg-accent/10">
                    <span className="font-display text-6xl text-primary/50">{m.init}</span>
                  </div>
                )}
                <div aria-hidden className="shape-pebble absolute -inset-3 border border-accent/30 transition group-hover:border-accent/60" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{m.n}</h3>
              <p className="eyebrow mt-2 text-muted-foreground/80">{m.r}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
