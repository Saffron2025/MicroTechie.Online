import fs from "fs";

const domain = "https://microtechie.online";

const pages = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/privacy-policy",
  "/terms",
  "/return-policy",
  "/why-choose-us",
];

const urls = pages
  .map(
    (page) => `
  <url>
    <loc>${domain}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemap, "utf8");
console.log("✅ Sitemap generated: public/sitemap.xml");
