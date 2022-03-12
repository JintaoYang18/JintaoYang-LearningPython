// module.exports = {
//     // 站点配置
//     // base: '/JintaoYang-Blog/',
//     // lang: 'zh-CN',
//     title: 'Yang\'s Learning VuePress',
//     description: '日有寸进',
//     // head: [['link', { rel: 'icon', href: './images/logo2.png' }]],
//     // 主题和它的配置
//     // theme: '@vuepress/theme-default',
//     themeConfig: {
//         // navbar: [
//         //     // 嵌套 Group - 最大深度为 2
//         //     {
//         //       text: 'Guide',
//         //       children: [
//         //         {
//         //             text: '攻击1',
//         //             children: ['/group/sub/foo.md', '/group/sub/bar.md'],
//         //         },
//         //         {
//         //             text: '防御2',
//         //             children: ['/group/sub/foo.md', '/group/sub/bar.md'],
//         //           },
//         //       ],
//         //     },
//         //     // 控制元素何时被激活
//         //     {
//         //       text: 'Vuepress学习-暂无',
//         //       children: [
//         //         {
//         //           text: 'Always active',
//         //           link: '/',
//         //           // 该元素将一直处于激活状态
//         //           activeMatch: '/',
//         //         },
//         //         {
//         //           text: 'Active on /foo/',
//         //           link: '/not-foo/',
//         //           // 该元素在当前路由路径是 /foo/ 开头时激活
//         //           // 支持正则表达式
//         //           activeMatch: '^/foo/',
//         //         },
//         //       ],
//         //     },
//         // ],
//         docsDir: 'docs',
//         editLinks: true,
//         editLinkText: 'Edit this page on GitHub',
//         nav: [
//           { text: 'Guide', link: '/' },
//           { text: 'Config', link: '/config/' },
//         ],
//         logo: '/images/logo2.png',
//         sidebarDepth: 3,
//         sidebar: {
//           '/config/': [
//             '',
//             'front-matter',
//             'palette'
//           ],
//         },
//     },
//   }
module.exports = {
    base: '/JintaoYang-LearningPython/',
    title: 'Yang\'s Learning Python (unaccomplished)',
    description: 'fun',
    head: [['link', { rel: 'icon', href: './images/logo2.png' }]],
    themeConfig: {
        // repo: 'vuepressjs/vuepress-theme-blog',
        docsDir: 'docs',
        editLinks: false,
        editLinkText: 'Edit this page on GitHub',
        navbar: [
            { text: 'Yang\'s Blog', link: 'https://jintaoyang18.github.io/JintaoYang-Blog/' },
            { text: 'Guide', link: '/' },
            { text: 'Config', link: '/config/cop' },
        ],
        sidebarDepth: 3,
        sidebar: {
            '/config/': [
                // '',
                'cop',
                'front-matter',
                'palette'
            ],
        },
        smoothScroll: true,
        logo: '/images/logo2.png',
    },    
}