const { description } = require('../../package')

module.exports = {
  title: 'Zest Framework',
  description: 'Zest Framework Documentation',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/zestframework/zestframework.github.io',
    editLinks: false,
    docsDir: '/src/',
    editLinkText: '',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Basic',
        link: '/basics/',
      },
      {
        text: 'Security',
        link: '/security/',
      },
      {
        text: 'Components',
        link: '/components/',
      },
      {
        text: 'Docker',
        link: '/docker/',
      },
      {
        text: 'AlphaSoftHub',
        link: 'https://alphasofthub.com/'
      }
    ],
    sidebar: {
      '/basics/': [
        {
          title: 'Basics',
          collapsable: true,
          children: [
            '',
            'installation',
            'controller',
            'routing',
            'views',
            'models',
            'validations',
            'sessions',
            'cookies',
            'logging',
            'localization',
            'input',
          ],
        }
      ],
      '/security/': [
        {

          title: 'Security',
          collapsable: false,
          children: [
            '',
            'hashing'
          ]
        }
      ],
      '/components/': [
        {

          title: 'Components',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
    },
    '/docker/': [
      {

        title: 'Docker',
        collapsable: false,
        children: [
          '',
        ]
      }
    ],
  },
  markdown: {
    lineNumbers: true
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],]
}
