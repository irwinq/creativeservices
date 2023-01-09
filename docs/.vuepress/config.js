module.exports = {
    title: 'ITDTP Notes',
    description: 'ITDTP Notes',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Motion',
            items: [
                {text: 'Cinema 4D', items:[
                    {text: 'C4D', link: '/Cinema 4D/'},
                    {text: 'Octane', link: '/Cinema 4D/Octane/'},
                ]},
                {text: 'After Effects', items:[
                    {text: 'AE', link: '/AE/'},
                    {text: 'Pending', link: '/Cinema 4D/Octane/'},
                ]},
            ]  
        },
        { text: '语法',
            items: [
                {text: '时态', link: '/Grammar/Tense/'},
                {text: 'Octane', link: '/Cinema 4D/Octane/'},
            ]  
        },
        { text: 'PT',
            items: [
                {text: 'CPT', link: '/Exercise/CPT/'},
                {text: 'Exercise Science', link: '/Exercise/ExerciseScience/'},
                {text: 'Anatomy', link: '/Exercise/Anatomy/'},
            ]  
        },
        { text:'Learn',
            items: [
                {text: 'Creative Coding', link: '/nyu/creativecoding/'},
                {text: 'VR', link:'/nyu/vr/'},
                {text: 'UX', link:'/nyu/ux/'}
            ] 
        },
            { text: 'Back to Portfolio', link: 'https://irwinqi.com'},
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
