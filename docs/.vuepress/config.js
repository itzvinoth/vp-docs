module.exports = {
  title: 'SUI Docs',
  description: 'Just playing around',
  dest: 'pages',
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
      { text: 'Github', link: 'https://github.com/mevinoth/slim-ui' },
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/',
          '/guide/installation'
        ]
      },
      {
        title: 'Base',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: 'General',
            collapsable: false,
            children: [
              '/general/button',
              '/general/color',
            ]
          },
          {
            title: 'Data entry',
            collapsable: false,
            children: [
              '/data-entry/radio',
              '/data-entry/switch',
              '/data-entry/input',
              '/data-entry/form',
              '/data-entry/checkbox',
              '/data-entry/otp'
            ]
          },
        ]
      },
      {
        title: 'View',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: 'Display',
            collapsable: false,
            children: [
              '/display/modal',
              '/display/toast',
              '/display/tabs',
              '/display/multiselect'
            ]
          },
          {
            title: 'Table',
            collapsable: false,
            children: [
              '/table/table',
              '/table/table-csv',
              '/table/table-limit',
              '/table/table-sorting',
              '/table/table-select',
              // '/table/table-toolbar',
              '/table/table-rowevents',
              '/table/table-search',
            ]
          },
        ]
      }
    ]
  }
}