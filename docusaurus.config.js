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
  clientModules: ['./src/modules/logoHref.js'],
  presets: [
    ['classic', {
      docs: {
        path: 'academy/en/learn-to-use-vcards',
        routeBasePath: 'en',
        sidebarPath: './sidebars.js',
        showLastUpdateTime: false,
          breadcrumbs: false,
      },
      blog: false,
      pages: {},
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
          breadcrumbs: false,
    }],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        docsRouteBasePath: ['/en', '/es'],
        indexBlog: false,
        indexPages: false,
        language: ['en', 'es'],
      },
    ],
  ],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'TicTAP Help Academy',
        src: 'img/logo.png',
        href: '/es/',
      },
      items: [
        {type: 'search', position: 'right'},
        {
          type: 'dropdown',
          position: 'right',
          html: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
          items: [
            {to: academy.en.route, label: academy.en.label},
            {to: academy.es.route, label: academy.es.label},
          ],
        },
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TicTAP`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  },
};
