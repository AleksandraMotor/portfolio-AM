import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import { VscFileSubmodule } from "react-icons/vsc";
import { TbCategory2 } from "react-icons/tb";

export const SidebarData = [
    {
        title: 'Home',
        // path: '/portfolio-AM/',
        path: '/',
        icon: <FaIcons.FaHome/>
    },
    {
        title: 'Skills',
        // path: '/portfolio-AM/skills',
        path: '/skills',
        icon: <GiIcons.GiSkills/>
    },
    {
        title: 'Projects',
        // path: '/portfolio-AM/projects',
        path: '/projects',
        icon: <VscFileSubmodule/>
    },
    {
        title: 'Contact',
        // path: '/portfolio-AM/contact',
        path: '/contact',
        icon: <TbCategory2/>
    }
];
