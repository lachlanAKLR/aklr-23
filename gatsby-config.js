/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `aklr-23`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "syj698ug",
      "dataset": "production"
    }
  },
"gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: ['G-V4NMHX1P8D'],
      gtagConfig: {
        optimize_id: 'OPT_CONTAINER_ID',
        anonymize_ip: true,
        cookie_expires: 0,
      },
      pluginConfig: {
        head: false,
        respectDNT: true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /images/,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: 'static/favicon.svg',
    },
  },
  {
    resolve: 'gatsby-omni-font-loader',
    options: {
      mode: 'render-blocking',
      enableListener: true,
      custom: [
        {
          name: ['Art-Company-Mono'],
          file: '/fonts/fonts.css',
        },
      ],
    },
  },
      ]
  
};