export const config = {
  siteMeta: {
    title: "FutonRSSFeeds",
    teamName: "tokuchan0829",
    description: "俺の推しのRSSを見るサイト",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://futon-rss.tokuzou.click"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Feed",
      href: "/feed",
    },
    {
      title: "GitHub",
      href: "https://github.com/tokuzou0829/futon-RSS",
    },
  ],
};
