import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons'; // posso mudar as cores de tds icons
import { CenterMenu } from './styled';
import { SidebarData } from './SideBarData';

export default function Menu() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <CenterMenu>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="menu-bars">
            {sidebar ? (
              <AiOutlineClose className="menu-bars" onClick={showSidebar} />
            ) : (
              <FaBars className="menu-bars open" onClick={showSidebar} />
            )}
          </div>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items">
            {SidebarData.map((items, index) => (
              <li key={String(index)} className={items.cName}>
                <AnchorLink href={items.path}>
                  <span>{items.icon}</span>
                  <span className="titles">{items.title}</span>
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </IconContext.Provider>
    </CenterMenu>
  );
}
