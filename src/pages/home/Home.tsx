import React from 'react';
import responsiveDesign from '../../assets/img/responsiveDesign.png';

import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
            <div className="home__foto"></div>
            <div className="home__text">
                I started out working for multiple e-commerce platforms. Working on complex
                projects and finding room for improvement within those brings me great joy.
                At the moment I'm looking for a demanding yet satisfying job in an ambitious
                company where I can expand my knowledge.
            </div>
            <div className="home__graphic">
                <img src={responsiveDesign} alt='Grafika - RWD'/>
            </div>
        </div>
    );
};

export default Home;