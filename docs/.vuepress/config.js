module.exports = {
  title: "灵时云·商户综合平台操作指南",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  base: "/docs/",
  description: "操作指南",
  dest: "./dist",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "引导", link: "/guide/" },
      {
        text: "操作指南",
        link: "/instruction/",
        items: [
          { text: "登录", link: "/instruction/login/" },
          { text: "任务管理", link: "/instruction/task/" },
          { text: "创客管理", link: "/instruction/maker/" },
          { text: "结算管理", link: "/instruction/settlement/" },
          { text: "我的账户", link: "/instruction/account/" },
          // { text: "我的协议", link: "/instruction/agreement/" },
          { text: "财务中心", link: "/instruction/finance/" },
          { text: "票税管理", link: "/instruction/bill/" },
          { text: "风控管理", link: "/instruction/risk/" },
          { text: "API对接", link: "/instruction/openapi/" },
        ],
      },
      { text: "API文档", link: "http://linsyun.gitee.io/openapi/", target: "_blank", rel: "noopener noreferrer" },
      { text: "商户综合平台", link: "http://s.linsyun.com", target: "_blank", rel: "noopener noreferrer" },
    ],
    displayAllHeaders: false,
    sidebar: {
      "/guide/": "auto",
      "/instruction/": [
        {
          title: "操作指南",
          collapsable: false,
          children: ["login/", "task/", "maker/", "settlement/", "account/", /* "agreement/", */"finance/", "bill/", "risk/", "openapi/"],
        },
      ],
    },
    smoothScroll: true,
    lastUpdated: "最后更新时间",
  },
  plugins: ["@vuepress/back-to-top", "@vuepress/medium-zoom", "mermaidjs"],
};
