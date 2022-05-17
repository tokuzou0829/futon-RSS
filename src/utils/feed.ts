import RSS from "rss";
import { config } from "@site.config";
import posts from "@.contents/posts.json";

export const generateFeedXml = async () => {
  const feed = new RSS({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    site_url: config.siteRoot,
    feed_url: `${config.siteRoot}/feed`,
    language: "ja",
  });

  posts.forEach((post) => {
    posts?.forEach((post) => {
      feed.item({
        title: post.title,
        description: "null",
        date: new Date(post.isoDate),
        url: post.link,
      });
    });
  });

  // XML形式の文字列にする
  return feed.xml();
};
