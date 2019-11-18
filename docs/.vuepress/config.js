module.exports = {
  title: 'SUI Docs',
  description: 'Just playing around',
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // mutate the config for client
    }
  },
  plugins: ['@vuepress/back-to-top', 'vuepress-plugin-element-tabs'],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://zerodha.com' },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'installation',
            'color',
            'button',
            'input',
            'form',
            'select',
            'radio',
            'checkbox',
            'switch',
            'modal',
            'toast',
            'table',
            'table-sorting',
            'table-limit',
            'table-csv',
            'table-toolbar'
          ],
        },
      ],
    },
  }
}