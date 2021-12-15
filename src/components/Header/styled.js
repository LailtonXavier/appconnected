import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Containe = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  font-size: 2rem;
  margin-top: 3rem;
  max-width: 1440px;
  margin: auto;
  background: ${colors.greenRoot};

  .menuColumn {
    display: none;
  }

  a {
    margin: 0.5rem;
    color: white;
  }

  #logoIco {
    width: 58px;
    height: 89px;
    animation: ico 5s linear 2s infinite;
  }

  @keyframes ico {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 760px) {
    .menuRow {
      display: none;
    }
  }
`;
