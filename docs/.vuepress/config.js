module.exports = {
  title: 'SUI Docs',
  description: 'Just playing around',
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // mutate the config for client
    }
  },
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
            'getting-started',
            'button',
            'input',
            'select',
            'radio',
            'checkbox',
            'switch',
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