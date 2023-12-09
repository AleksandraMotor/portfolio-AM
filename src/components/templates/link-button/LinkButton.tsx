import React from "react";
import { Link } from "react-router-dom";

import './LinkButton.scss';

interface LinkButtonProps {
    link: string;
    children: JSX.Element
};

const LinkButton: React.FC<LinkButtonProps> = ({ link , children}) => {
    return (
        <Link
            className="link"
            to={link}
            target="_blank"
        >
            {children}
        </Link>

    );
};

export default LinkButton;
