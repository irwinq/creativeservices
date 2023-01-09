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
            { text: 'Coding',
            items: [
                {text: 'Front-End', items:[
                    {text: 'p5.js', link: '/Code/Front-End/p5js/'},
                    {text: 'Vue', link: '/Code/Front-End/vuejs/'},
                ]},
                {text: 'Swift UI', items:[
                    {text: 'Pending', link: '/AE/'},
                    {text: 'Pending', link: '/Cinema 4D/Octane/'},
                ]},
            ]  
        },
        { text: '语法',
            items: [
                {text: '时态', link: '/Learn/Grammar/Tense/'},
                {text: 'Pending', link: '/Cinema 4D/Octane/'},
            ]  
        },
        { text: 'PT',
            items: [
                {text: 'Personal Training', link: '/Exercise/'},
                {text: 'CPT', link: '/Exercise/CPT/'},
                {text: 'Exercise Science', link: '/Exercise/ExerciseScience/'},
                {text: 'Human Anatomy', link: '/Exercise/Anatomy/'},
            ]  
        },
        { text:'Learn',
            items: [
                {text: '2021 Fall', items:[
                    {text: '3D', link: '/nyu/3D/'},
                    {text: 'Thesis', link: '/nyu/thesis/'},
                ]},
                {text: '2021 Spring', items:[
                    {text: 'Pre-Thesis', link: '/nyu/prethesis/'},
                ]},
                {text: '2020 Fall', items:[
                    {text: 'Creative Coding', link: '/nyu/creativecoding/'},
                    {text: 'VR', link:'/nyu/vr/'},
                    {text: 'UX', link:'/nyu/ux/'},
                    {text: 'I&P', link:'/nyu/IandP/'}
                ]},
            ] 
        },
            { text: 'Portfolio', link: 'https://irwinqi.com'},
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
