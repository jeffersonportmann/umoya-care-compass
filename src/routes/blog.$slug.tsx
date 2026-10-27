import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Page, meta, Ornament, WHATSAPP } from "@/components/site";
import { findPost, posts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return meta("Unavailable | uMoya", "This page is currently unavailable.");
    const { post } = loaderData;
    const desc = post.excerpt.slice(0, 155);
    return {
      meta: [
        { title: `${post.title} | uMoya Journal` },
        { name: "description", content: desc },
        { property: "og:title", content: post.title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.img },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <Page seam="light">
      <article className="relative overflow-hidden bg-secondary text-secondary-foreground">
        <Ornament className="-right-52 -top-40 h-[30rem] w-[30rem]" />
        <div className="relative mx-auto max-w-3xl px-6 pt-36 pb-24 md:px-10 md:pt-44 md:pb-28">
          <p className="eyebrow text-accent">uMoya Journal · {post.date}</p>
          <h1 className="mt-6 text-4xl leading-[1.1] md:text-5xl">{post.title}</h1>
        </div>
      </article>

      <section className="relative overflow-hidden bg-card">
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <img
            src={post.img}
            alt={post.title}
            width={800}
            height={600}
            className="-mt-16 aspect-[4/3] w-full border border-border object-cover shadow-xl md:-mt-20"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-20">
          {post.body.map((b, i) =>
            b.type === "h" ? (
              <h2 key={i} className="mt-12 font-display text-2xl leading-snug tracking-wide text-primary first:mt-0 md:text-3xl">
                {b.text}
              </h2>
            ) : b.type === "li" ? (
              <p key={i} className="mt-3 flex gap-4 font-light leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-accent/60" />
                <span>{b.text}</span>
              </p>
            ) : (
              <p key={i} className="mt-6 font-light leading-[1.8] text-muted-foreground md:text-lg">
                {b.text}
              </p>
            )
          )}

          <div className="mt-16 border-t border-accent/30 pt-10">
            <p className="font-display text-2xl leading-snug">
              If any of this feels like your life right now, a first conversation is simply that — a conversation.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="eyebrow mt-8 inline-flex items-center gap-3 text-primary transition hover:opacity-70"
            >
              Begin with a conversation <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl md:text-4xl">More from the journal</h2>
          <Link to="/blog" className="eyebrow text-primary transition hover:opacity-70">
            ← Back to the journal
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {others.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex flex-col border border-border bg-card p-6 transition hover:shadow-lg">
              <h3 className="text-xl leading-snug">{p.title}</h3>
              <p className="mt-3 flex-1 font-light text-muted-foreground">{p.excerpt.slice(0, 120)}…</p>
              <p className="eyebrow mt-6 opacity-60">{p.date}</p>
            </Link>
          ))}
        </div>
      </section>
    </Page>
  );
}
