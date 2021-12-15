import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CenterMenu = styled.div`
  display: none;
  z-index: 1;
  .navbar {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .menu-bars {
    font-size: 2rem;
    background: none;
    cursor: pointer;
    transition: 1s;
  }

  .menu-bars.open {
    transition: 250ms;
  }

  .nav-menu {
    width: 75px;
    display: flex;
    justify-content: center;
    position: fixed;
    right: -100%; // Aqui dira esq ou dir
    transition: 450ms;
  }

  nav:hover {
    width: 210px;
  }

  .nav-menu.active {
    right: 0; /** Aqui dira esq ou dir */
    transition: 250ms;
  }

  .nav-text {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 8px 0px 8px 30px; */
    padding: 8px;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    background: ${colors.greenRoot};
    border: 2px double ${colors.white};
    color: white;
    font-size: 1.8rem;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 1rem;
    padding-top: 0.5rem;
    /* padding-left: 3.5rem; */
    border-radius: 10px;
    transition: all 400ms;
  }

  .nav-text a:hover {
    /* border-bottom: 2px solid #1a83ff; */
    box-shadow: inset 2px 2px 15px 5px ${colors.white};
  }

  .nav-menu-items {
    padding: 2rem 0;
    width: 100%;
    border-radius: 30px 0px 5px 30px;
    box-shadow: inset 2px 2px 100px 80px ${colors.white};
    border: 2px solid ${colors.greenRoot};
  }

  span + span {
    margin-left: 24px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 760px) {
    display: block;
  }
`;
