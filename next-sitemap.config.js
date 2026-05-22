/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.hiislandwaste.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/404", "/500", "/_next/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (path === "/services" || path === "/service-area" || path === "/contact" || path === "/get-a-quote") priority = 0.9;
    else if (path.startsWith("/services/") || path.startsWith("/service-area/")) priority = 0.8;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
