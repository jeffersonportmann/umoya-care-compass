import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, meta } from "../components/site";
import hero from "../assets/healing.jpg";

const posts = [
  {
    title: "Why Nature Heals: The Transformative Power of Beautiful Environments in Healing",
    date: "Jul 6",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/768427_7d1f3b8262784cc68fa7ed7e2f0b65ac~mv2.jpg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/768427_7d1f3b8262784cc68fa7ed7e2f0b65ac~mv2.jpg",
    url: "https://www.umoya.care/post/why-nature-heals-the-transformative-power-of-beautiful-environments-in-healing",
    excerpt:
      "Healing is about restoring a sense of safety, hope, and connection. The environment in which healing takes place can profoundly influence this process. Imagine waking to the sound of birdsong, breathing in fresh ocean air, and watching the morning light stretch across the mountains.",
  },
  {
    title: "Burnout Recovery: Healing the Mind, Body and Spirit",
    date: "Jul 5",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/nsplsh_9b78a902b06b4a009f07953c860484f9~mv2.jpg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/nsplsh_9b78a902b06b4a009f07953c860484f9~mv2.jpg",
    url: "https://www.umoya.care/post/burnout-recovery-healing-the-mind-body-and-spirit",
    excerpt:
      "Most people experience stress. Burnout is different. Burnout is a state of physical, emotional, and mental exhaustion that develops when stress becomes chronic and recovery is neglected. It often affects high-performing professionals, business leaders, healthcare workers, entrepreneurs, and caregivers.",
  },
  {
    title: "Sound Baths and the Water Within",
    date: "Jul 5",
    read: "3 min read",
    img: "https://static.wixstatic.com/media/768427_1821584d6daf4815a0ffe1c61c01a1f4~mv2.png/v1/fill/w_800,h_600,fp_0.50_0.50,q_95,enc_auto/768427_1821584d6daf4815a0ffe1c61c01a1f4~mv2.png",
    url: "https://www.umoya.care/post/sound-baths-and-the-water-within",
    excerpt:
      "“If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.” — Nikola Tesla. Imagine lying down in a warm, quiet room. A bowl begins to sing across the space. Something inside you starts to settle.",
  },
  {
    title: "What's in a Name?",
    date: "Jun 21",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/768427_f756d68ec34444579cdbc45e10b69a40~mv2.png/v1/fill/w_800,h_600,fp_0.50_0.50,q_95,enc_auto/768427_f756d68ec34444579cdbc45e10b69a40~mv2.png",
    url: "https://www.umoya.care/post/what-s-in-a-name",
    excerpt:
      "The uMoya origin story. uMoya is a Zulu word that means breath, life force, and spirit. It also embodies our vision for 'excellence in human care'. We have taken the best elements of the finest recovery centres in the world — and introduced warmth of the African heart.",
  },
  {
    title: "The Power of Holding Space",
    date: "Jun 20",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/nsplsh_616f63556b4d6378657149~mv2.jpg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/nsplsh_616f63556b4d6378657149~mv2.jpg",
    url: "https://www.umoya.care/post/the-power-of-holding-space",
    excerpt:
      "When someone walks into a healing session, they arrive with emotional baggage. And while the tools we use are powerful, the foundation is simpler. It's not about what we do. It's about how we are present.",
  },
  {
    title: "A Holistic Approach to Health and Well-Being",
    date: "Jun 20",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/nsplsh_f10f17cda05746338d23649ddcfa76eb~mv2.jpg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/nsplsh_f10f17cda05746338d23649ddcfa76eb~mv2.jpg",
    url: "https://www.umoya.care/post/a-holistic-approach-to-health-and-well-being",
    excerpt:
      "The modern world moves at relentless speed. Yet conventional medicine, though valuable, addresses symptoms rather than their origin. True healing demands we look deeper — beyond the physical body.",
  },
  {
    title: "Integrated Healing: Understand the Unknown Unknowns.",
    date: "Jun 20",
    read: "2 min read",
    img: "https://static.wixstatic.com/media/nsplsh_6f5137593163552d526c67~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/nsplsh_6f5137593163552d526c67~mv2_d_5760_3840_s_4_2.jpg",
    url: "https://www.umoya.care/post/integrated-healing-understand-the-unknown-unknowns",
    excerpt:
      "“If all you have is a hammer, everything looks like a nail.” — Maslow's Hammer. A human being is not a body alone. You are body, mind, and spirit — a complex integrated system.",
  },
  {
    title: "What Actually Happens in a Reiki Session",
    date: "Jun 20",
    read: "3 min read",
    img: "https://static.wixstatic.com/media/11062b_157009a2bf07431fa0203bc701dcd19f~mv2.jpeg/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/11062b_157009a2bf07431fa0203bc701dcd19f~mv2.jpeg",
    url: "https://www.umoya.care/post/what-actually-happens-in-a-reiki-session",
    excerpt:
      "Eastern philosophy understands us as a body-mind-spirit complex, animated by life force energy that illuminates the being. In order for the complex to function optimally, it needs to flow correctly.",
  },
];

export const Route = createFileRoute("/blog")({
  head: () =>
    meta(
      "Blog — uMoya Cape Town",
      "Thoughts on healing, recovery and holistic care from the uMoya team in Cape Town."
    ),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Page>
      <PageHero
        img={hero}
        eyebrow="uMoya Journal"
        title="Blogs"
        sub="Thoughts on healing, recovery and holistic care — from our team in Cape Town."
      />
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden border border-border bg-card transition hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-2xl leading-snug">{p.title}</h2>
                <p className="mt-4 flex-1 font-light text-muted-foreground">{p.excerpt}</p>
                <p className="eyebrow mt-6 opacity-60">
                  Umoya Care · {p.date} · {p.read}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </Page>
  );
}
