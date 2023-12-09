import React, { useState } from 'react';
import classNames from 'classnames';
import LinkButton from '../link-button/LinkButton';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';

import './Card.scss';

interface CardProps {
    name: string;
    source?: string;
    live_demo?: string;
    thumbnail?: string;
    technologies?: JSX.Element[];
    description?: string;
};

const Card: React.FC<CardProps> = ({ name, source, live_demo, thumbnail, technologies, description }) => {

    const [reverse, setReverse] = useState(true);

    const toggleClass = () => setReverse(!reverse);

    return (
        <div
            onClick={toggleClass}
            className={classNames({
                'card': true,
                'card--active': !reverse,
            })}
        >
            <div className='card__front'>
                <div
                    style={{backgroundImage: thumbnail ? `url(${thumbnail})`: `linear-gradient(red, blue)`}}
                    className='card__front__main'>
                </div>
                <div className='card__front__bottom'>
                    <div className='card__front__bottom__title'>{name}</div>
                    <div className='card__front__bottom__links'>
                        {source && (
                            <LinkButton link={source}>
                                <SiIcons.SiGithub/>
                            </LinkButton>      
                        )}
                        {live_demo && (
                            <LinkButton link={live_demo} >
                                <TbIcons.TbHeartRateMonitor/>
                            </LinkButton>
                        )}
                    </div>
                </div>
            </div>
            <div className='card__back'>
                <div className='card__back__top'>
                    <div className='card__back__top__title'>{name}</div>
                </div>
                <div className='card__back__technologies'>
                    {technologies?.map((button, index) => {
                        return (
                            <div className='card__back__technologies__button' key={index}>
                                {button}
                            </div>
                        )
                    })}
                </div>
                <div className='card__back__description'>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Card;
