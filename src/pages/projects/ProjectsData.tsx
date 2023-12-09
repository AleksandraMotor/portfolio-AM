import portfolio from '../../assets/thumbnails/portfolioAM.png';
import doggoBrowser from '../../assets/thumbnails/doggoBrowser.png';
import javaScriptSamples from '../../assets/thumbnails/javaScriptSamples.png';
import weatherApp from '../../assets/thumbnails/weatherApp.png';
import giarddesign from '../../assets/thumbnails/giarddesign.png';
import spaceRocket from '../../assets/thumbnails/spaceRocket.png';
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
            <SiIcons.SiSass/>,
            <SiIcons.SiWebpack/>,
            <SiIcons.SiBabel/>
        ],
        description: 
            `My portfolio website contains interactive cards with descriptions of my projects, 
            a list of my skills in the form of animated buttons, and an interactive contact form made using EmailJS.`
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
    {
        name: 'JavaScript Samples',
        source: 'https://github.com/AleksandraMotor/JavaScript-Samples',
        live_demo: 'https://aleksandramotor.github.io/JavaScript-Samples/',
        thumbnail: javaScriptSamples,
        technologies: [
            <SiIcons.SiJavascript/>,
            <SiIcons.SiHtml5/>,
            <SiIcons.SiSass/>,
            <SiIcons.SiWebpack/>,
            <SiIcons.SiBabel/>,
        ],
        description: 'JavaScript Samples is a collection of ideas for widgets, banners, carousels, product cards, buttons and many more.'
    },
    {
        name: 'Giard Design',
        source: 'https://github.com/AleksandraMotor/zadanie_rekrutacyjne_2023',
        live_demo: 'https://aleksandramotor.github.io/zadanie_rekrutacyjne_2023/',
        thumbnail: giarddesign,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiTailwindcss/>,
        ],
        description: 'Giard Design project is an exemplary website for a garden design company based on a mock-up provided by adRespect.pl agency.'
    },
    {
        name: 'Weather App',
        thumbnail: weatherApp,
        technologies: [
            <SiIcons.SiHtml5/>,
            <SiIcons.SiCss3/>,
            <SiIcons.SiJavascript/>,
            <SiIcons.SiReact/>,
            <div style={{fontSize: '10px', fontWeight: '600'}}>REST API</div>
        ],
        description: 'A simple weather app containing all the information one may need. Currently in the process of changing layout.'
    },
    {
        name: 'space Rocket',
        source: 'https://github.com/AleksandraMotor/spaceRocket',
        thumbnail: spaceRocket,
        technologies: [
            <SiIcons.SiCplusplus/>
        ],
        description: 
            `The "rock&Rockets" program creates rockets from scratch. 
            Using the "Builder" design pattern, we created an application that allows you to build a rocket tailored to your individual needs.`
    },
];
