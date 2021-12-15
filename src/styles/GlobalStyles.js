import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&family=Roboto+Mono:ital,wght@1,100&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;1,100&family=Readex+Pro:wght@200&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
  body, input, textarea, button {
    font: 400 1.5rem 'Readex Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }


  a {
    text-decoration: none;
  }
  li {
    list-style: none;


  }
  html{


     // Scroll
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  // color scroll
  ::-webkit-scrollbar-thumb {
    background: ${colors.greenRoot};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.greenDarckRoot};
  }

  }

  }


  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.success};
    color: white;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.error};
    color: white;
  }
`;

export const Container = styled.section`
  max-width: 1440px;
  margin: auto;
  overflow-x: hidden;

  background: linear-gradient(
    180deg,
    hsla(151, 68%, 48%, 1) 10%,
    hsla(0, 0%, 100%, 1) 40%
  );
`;
