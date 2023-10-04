import React from 'react';
import classNames from 'classnames';
import { isDesktop } from 'react-device-detect';
import Card from '../../components/templates/card/Card';
import { ProjectsData } from './ProjectsData';

import './Projects.scss';

const Projects: React.FC = () => {
    return (
        <div
            className={classNames({
                'projects': true,
                'projects--desktop': isDesktop,
            })}
        >
            { ProjectsData.map((item, index) => {
                return (
                    <Card
                        key={index}
                        name={item.name}
                        source={item.source}
                        live_demo={item.live_demo}
                        thumbnail={item.thumbnail}
                        technologies={item.technologies}
                        description={item.description}
                    />
                )
            })}
        </div>
    )
}

export default Projects;
