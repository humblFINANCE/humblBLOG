/**
 * @type {import("../config/siteConfig").UserConfig}
 */
export default {
  title: "humblBLOG",
  description: "Jennings Fantini's personal blog",
  author: "Jennings Fantini",
  logo: "/images/logo.png",
  // You might want to add a custom favicon
  // favicon: "/images/favicon.ico",
  showSidebar: true,
  // Additional configuration options
  navLinks: [
    { href: "/", name: "Home" },
    { href: "/blog", name: "Blog" },
    { href: "/about", name: "About" },
  ],
  
  // Social media links (modified to be an array)
//   social: [
//     { name: "twitter", href: "https://x.com/humblFINANCE" },
//     { name: "github", href: "https://github.com/humblFINANCE/humblBLOG" },
//     // Add more social media links as needed
//   ],
  search: {
    provider: "algolia",
    config: {
      appId: "URO1H3H6JJ",
      apiKey: "86db8c3cc8cb94e096f1faf8cf220d32",
      indexName: "",
    },
  },
};
