import React from 'react';
import * as All from 'react-icons/ai';
import { RiUserSearchFill, RiContactsFill } from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '#home',
    icon: <All.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Projetos',
    path: '#projects',
    icon: <All.AiFillProject />,
    cName: 'nav-text',
  },
  {
    title: 'Sobre',
    path: '#about',
    icon: <RiUserSearchFill />,
    cName: 'nav-text',
  },
  {
    title: 'Contato',
    path: '#contact',
    icon: <RiContactsFill />,
    cName: 'nav-text',
  },
];
