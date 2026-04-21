export default defineEventHandler(async (event) => {
  // Set the correct Content-Type so RSS readers recognise the feed.
  setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");

  const config = useRuntimeConfig(event);
  const siteUrl = config.public.siteUrl;
  const siteName = config.public.siteName;

  // Query published posts, newest first.
  // In server routes, queryCollection takes the event as the first argument.
  const posts = await queryCollection(event, "blog")
    .where("status", "=", "published")
    .order("date", "DESC")
    .all();

  // Build RSS 2.0 XML string.
  const items = posts
    .map((post) => {
      // post.path is always set by Nuxt Content (e.g. "/blog/my-post").
      // post.slug is optional frontmatter and can be undefined.
      const postUrl = `${siteUrl}${post.path}`;
      const pubDate = new Date(post.date).toUTCString();

      return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${postUrl}</link>
        <guid isPermaLink="true">${postUrl}</guid>
        <description><![CDATA[${post.summary}]]></description>
        <pubDate>${pubDate}</pubDate>
      </item>`.trim();
    })
    .join("\n    ");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${siteName}</title>
      <link>${siteUrl}</link>
      <description>Latest posts from ${siteName}</description>
      <language>en-us</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
      ${items}
    </channel>
  </rss>`;
});
