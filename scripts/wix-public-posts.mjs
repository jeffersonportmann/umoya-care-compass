export async function fetchPublicPosts() {
  const projectKey = process.env.LOVABLE_API_KEY;
  const connectionKey = process.env.WIX_API_KEY;
  if (!projectKey || !connectionKey) throw new Error('Missing protected Wix blog credentials');
  const response = await fetch('https://connector-gateway.lovable.dev/wix/blog/v3/posts?paging.limit=100&fieldsets=RICH_CONTENT&sort=PUBLISHED_DATE_DESC', {
    headers: { Authorization: `Bearer ${projectKey}`, 'X-Connection-Api-Key': connectionKey, 'wix-site-id': '939799df-a289-49d2-83a5-b0150a384b63' },
  });
  if (!response.ok) throw new Error(`Wix blog export failed [${response.status}]`);
  const data = await response.json();
  const textOf = (node) => node.textData?.text ?? (node.nodes ?? []).map(textOf).join('');
  const blocks = (nodes = []) => nodes.flatMap((node) => {
    if (['BULLETED_LIST', 'ORDERED_LIST'].includes(node.type)) return (node.nodes ?? []).map((item) => ({ type: 'li', text: textOf(item).trim() })).filter((item) => item.text);
    const type = node.type === 'HEADING' ? 'h' : ['PARAGRAPH', 'BLOCKQUOTE'].includes(node.type) ? 'p' : undefined;
    const text = textOf(node).trim();
    return type && text ? [{ type, text }] : [];
  });
  return (data.posts ?? []).map((post) => {
    const image = post.media?.wixMedia?.image;
    return {
      slug: post.slug, title: post.title, excerpt: post.excerpt ?? '',
      date: post.firstPublishedDate ? new Date(post.firstPublishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }) : '',
      img: image?.id ? `https://static.wixstatic.com/media/${image.id}/v1/fill/w_800,h_600,fp_0.50_0.50,q_90,enc_auto/${image.id}` : image?.url ?? '',
      body: blocks(post.richContent?.nodes),
    };
  });
}