export const config = {
  siteMeta: {
    title: "FutonRSSFeeds",
    teamName: "@tokuchan0829",
    description: "俺の推しのRSSを見るサイト",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "GitHub",
      href: "https://github.com/yutakobayashidev/team-blog-hub-notion-api",
    },
  ],
};
