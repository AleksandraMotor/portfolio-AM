import React from 'react';
import responsiveDesign from '../../assets/img/responsiveDesign.png';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="home__graphic">
                <img src={responsiveDesign} alt='Grafika - RWD'/>
            </div>
            <div className="home__text">
                After graduating in technical physics from Cracow University of Technology,
                I started working for multiple
                <span className="home__text--highlight"> e-commerce </span>platforms using mostly
                <span className="home__text--highlight"> React </span>with 
                <span className="home__text--highlight"> TypeScript </span>and 
                <span className="home__text--highlight"> Angular </span>frameworks.
            </div>
            <div className="home__text">
                Working on complex projects and finding room for improvement within these brings me great joy.
                Currently I'm looking for a demanding yet satisfying job in an ambitious
                company where I can expand my knowledge.
            </div>
            <div className="home__text">
                Take a look at my <Link to='/portfolio-AM/skills' className="home__text--link">skills</Link> presented in the form of 
                <span className="home__text--highlight"> animated buttons </span>and don't forget to check out the 
                <span className="home__text--highlight"> interactive cards </span>with my <Link to='/portfolio-AM/projects' className="home__text--link">projects</Link>!
            </div>
            <div className="home__text">
                Feel free to contact me via the "<Link to='/portfolio-AM/contact' className="home__text--link">Contact</Link>" page in the menu and check out my socials below.
            </div>
        </div>
    );
};

export default Home;
