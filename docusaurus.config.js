// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logz.io API docs',
  favicon: 'https://logz.io/wp-content/themes/Avada-Child-Theme-logz/theme_favicon/apple-touch-icon.png',

  // Set the production url of your site here
  url: 'https://docs.logz.io',
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Logzio", // Usually your GitHub org/user name.
  projectName: "logz-api", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "API",
        logo: {
          alt: "Logz.io API",
          src: "img/logz-logo.svg",
          href: '/docs/logz/logz-io-api',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {to: 'https://docs.logz.io/docs/category/send-your-data/', label: 'Ship data', position: 'left'},
          {to: '/docs/logz/logz-io-api', label: 'API', position: 'left'},
          {to: 'https://status.logz.io/', label: 'System status', position: 'left'},
          {to: 'https://logz.io/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://app.logz.io/',
            label: 'Login',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Additional Links',
            items: [
              {
                label: 'Blog',
                href: 'https://logz.io/blog/',
              },
              {
                label: 'Videos',
                href: 'https://logz.io/learn/video/',
              },
              {
                label: 'Notices for 3rd Party Software included with the Logz.io Platform',
                to: 'https://dytvr9ot2sszz.cloudfront.net/logz-docs/legal/3rd-party-software-included-with-the-logz.io-platform-sep-2022.pdf',
              },
              {
                label: 'Report a security issue',
                to: 'https://docs.logz.io/report-a-security-issue/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://logz.io/about-us/privacy-policy/',
              },
              {
                label: 'Terms of Use',
                href: 'https://logz.io/about-us/terms-of-use/',
              },
              {
                label: 'Sending Data to Logz.io',
                href: 'https://docs.logz.io/docs/category/send-your-data/',
              },
              {
                label: 'Trademark Legal Notice',
                href: 'https://logz.io/about-us/trademarks-legal-notice/',
              },
              {
                label: 'Contributers',
                to: 'https://docs.logz.io/credits.html',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/logz.io',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/logzio',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC9Rc1hpWHUju8O2rYHAUVXA',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/4831888',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/logzio',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Logshero Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
      languageTabs: [
        {
          highlight: "bash",
          language: "curl",
          logoClass: "bash",
        },
        {
          highlight: "python",
          language: "python",
          logoClass: "python",
          variant: "requests",
        },
        {
          highlight: "go",
          language: "go",
          logoClass: "go",
        },
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
        },
        {
          highlight: "ruby",
          language: "ruby",
          logoClass: "ruby",
        },
        {
          highlight: "csharp",
          language: "csharp",
          logoClass: "csharp",
          variant: "httpclient",
        },
        {
          highlight: "php",
          language: "php",
          logoClass: "php",
        },
        {
          highlight: "java",
          language: "java",
          logoClass: "java",
          variant: "unirest",
        },
        {
          highlight: "powershell",
          language: "powershell",
          logoClass: "powershell",
        },
      ],
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          logz: {
            specPath: "examples/logzio-public-api.yml",
            outputDir: "docs/logz",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            template: "api.mustache",
            hideSendButton: true,
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
