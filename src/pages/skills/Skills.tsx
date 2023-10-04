import React from 'react';
import ButtonAffinity from '../../components/buttons/button-affinity/ButtonAffinity';
import ButtonAngular from '../../components/buttons/button-angular/ButtonAngular';
import ButtonCss from '../../components/buttons/button-css/ButtonCss';
import ButtonCypress from '../../components/buttons/button-cypress/ButtonCypress';
import ButtonGit from '../../components/buttons/button-git/ButtonGit';
import ButtonHtml from '../../components/buttons/button-html/ButtonHtml';
import ButtonJs from '../../components/buttons/button-js/ButtonJs';
import ButtonPs from '../../components/buttons/button-ps/ButtonPs';
import ButtonReact from '../../components/buttons/button-react/ButtonReact';
import ButtonSass from '../../components/buttons/button-sass/ButtonSass';
import ButtonTailwind from '../../components/buttons/button-tailwind/ButtonTailwind';
import ButtonTs from '../../components/buttons/button-ts/ButtonTs';

import './Skills.scss';

const Skills: React.FunctionComponent = () => {
    return (
        <div className='skills'>
            <ButtonGit/>
            <ButtonReact/>
            <ButtonAngular/>
            <ButtonTs/>
            <ButtonTailwind/>
            <ButtonCss/>
            <ButtonSass/>
            <ButtonHtml/>
            <ButtonJs/>           
            <ButtonPs/>
            <ButtonAffinity/>
            <ButtonCypress/>
        </div>
    );
};

export default Skills;
