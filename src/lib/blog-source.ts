import { createIsomorphicFn } from '@tanstack/react-start';
import { getPosts, getPost, type Post } from './wix-blog';

let staticPosts: Promise<Post[]> | undefined;
function readStaticPosts() {
  if (!staticPosts) {
    staticPosts = fetch('/blog-data.json').then(async (response) => {
      if (!response.ok) throw new Error(`Journal unavailable [${response.status}]`);
      return response.json() as Promise<Post[]>;
    }).catch((error) => { staticPosts = undefined; throw error; });
  }
  return staticPosts;
}

export const loadPosts = createIsomorphicFn()
  .server(() => getPosts())
  .client(() => import.meta.env.VITE_STATIC_EXPORT === 'true' ? readStaticPosts() : getPosts());

export const loadPost = createIsomorphicFn()
  .server((slug: string) => getPost({ data: slug }))
  .client(async (slug: string) => {
    if (import.meta.env.VITE_STATIC_EXPORT !== 'true') return getPost({ data: slug });
    const all = await readStaticPosts();
    return { post: all.find((post) => post.slug === slug) ?? null, others: all.filter((post) => post.slug !== slug).slice(0, 3) };
  });