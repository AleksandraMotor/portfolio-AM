import React from 'react';
import { Link } from "react-router-dom";

import './ButtonGoBack.scss';

const ButtonGoBack: React.FC= () => {

    return (
        <Link  className="go-back" to='/portfolio-AM/'>Go Back</Link>
    );
};

export default ButtonGoBack;
