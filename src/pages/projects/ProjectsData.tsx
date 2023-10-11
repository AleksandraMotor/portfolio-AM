import designSamplesScroller from '../../assets/thumbnails/designSamplesScroller.png';
import portfolio from '../../assets/thumbnails/portfolioAM.png';
import photogallery from '../../assets/thumbnails/photogallery.png';
import weatherApp from '../../assets/thumbnails/weatherApp.jpg';
import spaceRocket from '../../assets/thumbnails/spaceRocket.png';
import doggoBrowser from '../../assets/thumbnails/doggoBrowser.png';
import * as SiIcons from 'react-icons/si';

export const ProjectsData = [
    {
        name: 'Portfolio',
        source: 'https://github.com/AleksandraMotor/portfolio-AM',
        live_demo: 'https://aleksandramotor.github.io/portfolio-AM/',
        thumbnail: portfolio,
        technologies: [
            <SiIcons.SiReact/>,
            <SiIcons.SiTypescript/>,
            // <SiIcons.SiHtml5/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiWebpack/>,
            <SiIcons.SiBabel/>
        ],
        description: 
            `My portfolio project contains interactive cards with descriptions of my projects, 
            a list of my skills in the form of animated buttons, and an interactive contact form.`
    },
    {
        name: 'Doggo Browser',
        source: 'https://github.com/AleksandraMotor/doggo-browser',
        live_demo: 'https://aleksandramotor.github.io/doggo-browser/',
        thumbnail: doggoBrowser,
        technologies: [
            <SiIcons.SiJavascript/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiWebpack/>,
            <SiIcons.SiBabel/>,
            <div style={{fontSize: '10px', fontWeight: '600'}}>REST API</div>
        ],
        description: 
            `This web application was created using Dog API. 
            Go to Doggo Browser and select a breed from the list. 
            Your favorite breeds will stay next to the display for more convenient switching. 
            Cute doggos available on every device!`
    },
    // {
    //     name: 'Animated Hamburgers',
    //     source: 'https://github.com/AleksandraMotor/animatedHamburgers',
    //     live_demo: 'https://aleksandramotor.github.io/animatedHamburgers/',
    //     thumbnail: animatedHamburgers,
    //     technologies: [
    //         <SiIcons.SiHtml5/>,
    //         <SiIcons.SiCss3/>,
    //         <SiIcons.SiJavascript/>
    //     ],
    //     description: 'My first project while learning CSS. The website contains various animated buttons, mostly of the Hamburger menu type.'
    // },
    {
        name: 'Photogallery',
        source: 'https://github.com/AleksandraMotor/photogallery',
        live_demo: 'https://aleksandramotor.github.io/photogallery',
        thumbnail: photogallery,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>
        ],
        description: 'Responsive photo gallery using the lightbox library.'
    },
    {
        name: 'Weather App',
        // source: 'https://github.com/AleksandraMotor/weather-app',
        // live_demo: 'https://aleksandramotor.github.io/photogallery',
        thumbnail: weatherApp,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>,
            <div style={{fontSize: '10px', fontWeight: '600'}}>REST API</div>
        ],
        description: 'A simple weather app with an eye-catching layout.'
    },
    {
        name: 'space Rocket',
        source: 'https://github.com/AleksandraMotor/spaceRocket',
        // live_demo: 'https://aleksandramotor.github.io/photogallery',
        thumbnail: spaceRocket,
        technologies: [
            <SiIcons.SiCplusplus/>
        ],
        description: 
            `The "rock&Rockets" program creates rockets from scratch. 
            Using the "Builder" design pattern, we created an application that allows you to build a rocket tailored to your individual needs.`
    },
    {
        name: 'Design Samples Scroller',
        // source: 'https://github.com/AleksandraMotor/css-design-samples',
        // live_demo: 'https://aleksandramotor.github.io/photogallery',
        thumbnail: designSamplesScroller,
        technologies: [
            <SiIcons.SiJavascript/>,
            <SiIcons.SiHtml5/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiWebpack/>,
            <SiIcons.SiBabel/>,
        ],
        description: 'Scrolling app containing ideas for widgets, banners, carousels, product cards, buttons, etc., that I haven\'t had the opportunity to use in previous projects.'
    },
    // {
    //     name: 'Plan Shop Chloris',
    //     // source: 'https://github.com/AleksandraMotor/css-design-samples',
    //     // live_demo: 'https://aleksandramotor.github.io/photogallery',
    //     // thumbnail: spaceRocket,
    //     technologies: [
    //         <SiIcons.SiHtml5/>,
    //         <SiIcons.SiCss3/>,
    //         <SiIcons.SiJavascript/>,
    //         <SiIcons.SiTypescript/>,
    //         <SiIcons.SiAngular/>
    //     ],
    //     description: 'Online plant store. Noteworthy is the extended menu with space for advertising, convenient sorting of products, a list of favorite products and a detailed product card.'
    // }
];
