module.exports = {
  title: '灵时云',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: '/docs/',
  description: '操作手册',
  dest: './dist',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '引言', link: '/foreword/' },
      { text: '概述', link: '/summary/' },
      { text: '使用', link: '/guide/' },
      { text: '商户端', link: 'http://s.linsyun.com', target: '_blank', rel: 'noopener noreferrer' }
    ],
    displayAllHeaders: true,
    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: '最后更新时间'
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
}
