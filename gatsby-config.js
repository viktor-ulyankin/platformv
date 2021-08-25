module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "platformv",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-svg-sprite-loader",

    // Должен быть подключен последним
    "gatsby-plugin-no-javascript",
  ],
};