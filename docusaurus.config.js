// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fandom Coders',
  url: "https://www.fancoders.com/",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fandom-coders', // Usually your GitHub org/user name.
  projectName: 'fandom-coders.github.io', // Usually your repo name.
  deploymentBranch: "main",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.dev/Fandom-Coders/fancoders.com',
        },
        blog: {
          path: 'blog',
          blogTitle: 'Fandom Coders Blog',
          blogDescription: 'Tech and coding posts from the members of Fandom Coders.',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Recent',
          routeBasePath: 'blog',
          postsPerPage: 10,
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Fandom Coders Blog',
            description: 'Tech and coding posts from the members of Fandom Coders.'
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: 'Fandom Coders',
        logo: {
          alt: '{FC}',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/Fandom-Coders',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Fandom Coders. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
