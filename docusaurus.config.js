import {themes as prismThemes} from 'prism-react-renderer';

const academy = {
  en: {label: 'English', route: '/en', title: 'Learn to use vcards'},
  es: {label: 'Español', route: '/es', title: 'Aprende a usar vcards'},
};

export default {
  title: 'TicTAP Help Academy',
  tagline: 'Documentation for vcards by TicTAP',
  url: 'https://help.tictapcards.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  presets: [
    ['classic', {
      docs: {
        path: 'academy/en/learn-to-use-vcards',
        routeBasePath: 'en',
        sidebarPath: './sidebars.js',
        showLastUpdateTime: false,
      },
      blog: false,
      pages: false,
      theme: {customCss: './src/css/custom.css'},
    }],
  ],
  plugins: [
    ['@docusaurus/plugin-content-docs', {
      id: 'es',
      path: 'academy/es/aprende-a-usar-vcards',
      routeBasePath: 'es',
      sidebarPath: './sidebars.js',
      showLastUpdateTime: false,
    }],
  ],
  themeConfig: {
    navbar: {
      title: 'TicTAP Help Academy',
      items: [
        {to: academy.en.route, label: academy.en.label, position: 'left'},
        {to: academy.es.route, label: academy.es.label, position: 'left'},
        {href: 'https://help.tictapcards.com', label: 'Original Help Center', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Academy',
          items: [
            {label: academy.en.title, to: academy.en.route},
            {label: academy.es.title, to: academy.es.route},
          ],
        },
        {
          title: 'Links',
          items: [
            {label: 'TicTAP', href: 'https://tictapcards.com'},
            {label: 'Original Help Center', href: 'https://help.tictapcards.com'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TicTAP`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
