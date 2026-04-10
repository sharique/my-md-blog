export default defineSitemapEventHandler(async (event) => {
  const posts = await queryCollection(event, "blog")
    .where("status", "=", "published")
    .all();
  return posts.map((post) =>
    asSitemapUrl({
      loc: post.path,
      lastmod: post.date,
    })
  );
});
