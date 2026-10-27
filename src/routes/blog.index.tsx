import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site";
import { loadPosts } from "@/lib/blog-source";
import hero from "@/assets/healing.jpg";

export const Route = createFileRoute("/blog/")({
  loader: () => loadPosts(),
  head: () =>
    meta(
      "Journal — uMoya Cape Town",
      "Thoughts on healing, recovery and holistic care from the uMoya team in Cape Town."
    ),
  component: BlogPage,
});

function BlogPage() {
  const posts = Route.useLoaderData();
  return (
    <>
      <PageHero
        img={hero}
        eyebrow="uMoya Journal"
        title="Blogs"
        sub="Thoughts on healing, recovery and holistic care — from our team in Cape Town."
      />
      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col overflow-hidden border border-border bg-card transition hover:shadow-xl"
            >
              <div className="m-5 mb-0 aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-2xl leading-snug">{p.title}</h2>
                <p className="mt-3 flex-1 font-light text-muted-foreground">{p.excerpt}</p>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
                  <p className="eyebrow opacity-60">{p.date}</p>
                  <span className="eyebrow inline-flex shrink-0 items-center gap-2 text-primary">
                    Read more
                    <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
