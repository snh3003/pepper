// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---packages-pepper-portfolio-src-template-pepper-js": () => import("./../../packages/pepper-portfolio/src/template/pepper.js" /* webpackChunkName: "component---packages-pepper-portfolio-src-template-pepper-js" */),
  "component---src-pepper-portfolio-pages-intro-mdx": () => import("./../src/pepper-portfolio/pages/intro.mdx" /* webpackChunkName: "component---src-pepper-portfolio-pages-intro-mdx" */)
}

