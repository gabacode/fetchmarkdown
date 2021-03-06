module.exports = {
  pathPrefix: "/fetchmarkdown",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "fetchmarkdown",
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./content/authors`,
        name: `authors`,
      },
    },
    {
      resolve: `gatsby-plugin-no-sourcemaps`,
    },
  ],
};
