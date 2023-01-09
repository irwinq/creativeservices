module.exports = {
    title: 'Creative Services',
    description: 'Creative Services',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Brand Center', link: 'https://brandcenter.med.nyu.edu/'},
        ],
        sidebar: 'auto'
    },
    plugins: [
        "vuepress-plugin-auto-sidebar",{
            nav: true
            },
        '@vuepress/medium-zoom',
        ],
};
