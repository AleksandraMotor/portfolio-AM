import bakery from '../../assets/thumbnails/portfolio.png';
import animatedHamburgers from '../../assets/thumbnails/animatedHamburgers.png';
import portfolio from '../../assets/thumbnails/portfolio.png';
import photogallery from '../../assets/thumbnails/photogallery.png';
import weatherApp from '../../assets/thumbnails/weatherApp.jpg';
import spaceRocket from '../../assets/thumbnails/spaceRocket.png';
import * as SiIcons from 'react-icons/si';

export const ProjectsData = [
    {
        name: 'Portfolio',
        source: 'https://github.com/AleksandraMotor/portfolio',
        live_demo: 'https://aleksandramotor.github.io/portfolio/',
        thumbnail: portfolio,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiTypescript/>
        ],
        description: `My portfolio project containing cards with a description of the projects I have completed so far, a list of my skills in the form of animated buttons and a contact form.`
    },
    {
        name: 'Cupcake Bakery',
        thumbnail: bakery,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiTypescript/>
        ],
        description: 'Cupcake bakery\'s online shop featuring a logo banner, welcome page and store information. After logging in, the user can add products to the shopping cart and place an order.'
    },
    {
        name: 'Animated Hamburgers',
        source: 'https://github.com/AleksandraMotor/animatedHamburgers',
        live_demo: 'https://aleksandramotor.github.io/animatedHamburgers/',
        thumbnail: animatedHamburgers,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>
        ],
        description: 'My first project while learning CSS. The website contains various animated buttons, mostly of the Hamburger menu type.'
    },
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
        source: 'https://github.com/AleksandraMotor/weather-app',
        thumbnail: weatherApp,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>
        ],
        description: 'A simple weather app with an eye-catching layout.'
    },
    {
        name: 'space Rocket',
        source: 'https://github.com/AleksandraMotor/spaceRocket',
        thumbnail: spaceRocket,
        technologies: [
            <SiIcons.SiCplusplus/>
        ],
        description: 'The "rock&Rockets" program creates rockets from scratch. Using the "Builder" design pattern, we created an application that allows you to build a rocket tailored to your individual needs.'
    },
    {
        name: 'css Design Samplescss Design Samples css Design Samplescss Design Samples',
        source: 'https://github.com/AleksandraMotor/css-design-samples',
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiTypescript/>,
            <SiIcons.SiReact/>
        ],
        description: 'All the ideas for buttons, product cards, widgets, banners, carousels, etc., that I haven\'t had the opportunity to use in previous projects.'
    },
    {
        name: 'Plan Shop Chloris',
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiTypescript/>,
            <SiIcons.SiAngular/>
        ],
        description: 'Online plant store. Noteworthy is the extended menu with space for advertising, convenient sorting of products, a list of favorite products and a detailed product card.'
    }
];
