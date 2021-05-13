module.exports = {
  siteMetadata: {
    title: `Gatsby Material UI Starter`,
    description: `Kick off your next, great Gatsby project with this Material UI starter. This barebones starter ships with the main Gatsby and Material UI configuration files you might need.`,
    author: `@dominicabela`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Poppins`,
                variants: [
                  `100;0`,
                  `200;0`,
                  `300;0`,
                  '400;0',
                  '500;0',
                  '600;0',
                  '700;0',
                  '800;0',
                  '900;0',
                ],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
