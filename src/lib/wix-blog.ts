// Blog posts are loaded from Wix Blog (the central place to manage articles).
import { createServerFn } from "@tanstack/react-start";

export type Block = { type: "h" | "p" | "li"; text: string };
export type Post = {
  slug: string;
  title: string;
  date: string;
  img: string;
  excerpt: string;
  body: Block[];
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/wix";
const WIX_SITE_ID = "939799df-a289-49d2-83a5-b0150a384b63";

type Node = { type?: string; nodes?: Node[]; textData?: { text?: string } };

function textOf(n: Node): string {
  if (n.textData?.text) return n.textData.text;
  return (n.nodes ?? []).map(textOf).join("");
}

function toBlocks(nodes: Node[] = []): Block[] {
  const out: Block[] = [];
  for (const n of nodes) {
    if (n.type === "HEADING") {
      const t = textOf(n).trim();
      if (t) out.push({ type: "h", text: t });
    } else if (n.type === "BULLETED_LIST" || n.type === "ORDERED_LIST") {
      for (const li of n.nodes ?? []) {
        const t = textOf(li).trim();
        if (t) out.push({ type: "li", text: t });
      }
    } else if (n.type === "PARAGRAPH" || n.type === "BLOCKQUOTE") {
      const t = textOf(n).trim();
      if (t) out.push({ type: "p", text: t });
    }
  }
  return out;
}

function fmtDate(iso?: string) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
}

function imgUrl(raw: any): string {
  const id: string | undefined = raw?.media?.wixMedia?.image?.id;
  if (id) return `https://static.wixstatic.com/media/${id}/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/${id}`;
  return raw?.media?.wixMedia?.image?.url ?? "";
}

async function fetchPosts(): Promise<Post[]> {
  const lovableKey = process.env["LOVABLE_API_KEY"];
  const wixKey = process.env["WIX_API_KEY"];
  if (!lovableKey) throw new Error("LOVABLE_API_KEY is not configured");
  if (!wixKey) throw new Error("WIX_API_KEY is not configured");

  const res = await fetch(
    `${GATEWAY_URL}/blog/v3/posts?paging.limit=100&fieldsets=RICH_CONTENT&sort=PUBLISHED_DATE_DESC`,
    {
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": wixKey,
        "wix-site-id": WIX_SITE_ID,
      },
    }
  );
  if (!res.ok) {
    const body = await res.text();
    console.error(`Wix blog request failed [${res.status}]: ${body}`);
    throw new Error(`Wix blog request failed [${res.status}]`);
  }
  const data = (await res.json()) as { posts?: any[] };
  const posts: Post[] = (data.posts ?? []).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: fmtDate(p.firstPublishedDate),
    img: imgUrl(p),
    excerpt: p.excerpt ?? "",
    body: toBlocks(p.richContent?.nodes),
  }));
  return posts;
}

export const getPosts = createServerFn({ method: "GET" }).handler(() => fetchPosts());

export const getPost = createServerFn({ method: "GET" })
  .validator((slug: string) => String(slug))
  .handler(async ({ data }) => {
    const all = await fetchPosts();
    const post = all.find((p) => p.slug === data) ?? null;
    return { post, others: all.filter((p) => p.slug !== data).slice(0, 3) };
  });
