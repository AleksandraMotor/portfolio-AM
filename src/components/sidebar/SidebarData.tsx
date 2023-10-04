import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import { VscFileSubmodule } from "react-icons/vsc";
import { TbCategory2 } from "react-icons/tb";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome/>
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <GiIcons.GiSkills/>
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <VscFileSubmodule/>
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <TbCategory2/>
    }
];
