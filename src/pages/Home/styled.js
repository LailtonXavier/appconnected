import styled from 'styled-components';

export const CenterHome = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  @import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@600&display=swap');
  .box1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    line-height: 3rem;
    padding: 1.5rem;
  }

  .titles {
    font-family: 'Readex Pro', sans-serif;
    font-weight: 900;
    color: red;
    font-style: normal;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  .titles span {
    font-size: 7rem;
    color: white;
    border-left: 13px solid rgba(226, 54, 54, 0.7);
    text-shadow: 2px 2px 20px rgba(177, 51, 51, 1);
  }

  .titles span:nth-child(2) {
    color: rgba(242, 241, 241, 1);
    z-index: 1;
    margin: 1rem;
  }

  .desc {
    font-size: 1.5rem;
    font-style: normal;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 34px;
    word-spacing: 15px;
    font-weight: 100;
    margin-left: 1.3rem;
    margin-top: 1rem;
    color: white;
    text-shadow: 2px 8px 23px rgba(177, 51, 51, 1);
  }

  .btn {
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.2);
    margin-top: 1rem;
    padding: 1rem 1.3rem;
    box-shadow: inset 4px 2px 15px white;
    border: none;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 344ms;
  }

  .btn:hover {
    transform: translateY(-8px);
  }

  .btn a {
    color: white;
    width: 100%;
    text-align: center;
  }
  .box2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 740px;
  }

  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    .titles span {
      font-size: 5rem;
    }
  }
`;

export const Skill = styled.div`
  margin: 5rem auto 0 auto;
  padding-bottom: 5rem;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 1110px 1110px 0px 0px;
  background: linear-gradient(to bottom, #27ce7d, black);

  h4 {
    text-align: center;
    width: 100%;
    font-size: 5rem;
    color: white;
    display: inline;
    padding: 0.5rem;
    text-shadow: 2px 5px 20px hsla(151, 68%, 48%, 0.8);
    margin: 0.3rem;
  }

  .allIcons {
    margin: 1rem;
    padding: 0.5rem;
    box-shadow: inset 4px 7px 15px hsla(170, 15%, 95%, 1);
    transition: all 0.5s;
    border-radius: 50%;
    color: hsla(170, 15%, 95%, 1);
  }

  .allIcons:hover {
    transform: scale(1.2);
    z-index: 1;
    border-radius: 45%;
    background: hsla(151, 68%, 48%, 0.2);
    animation: icons 0.6s;
    cursor: pointer;
  }

  @keyframes icons {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    75% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @media (max-width: 600px) {
    .allIcons {
      width: 40%;
      padding: 1rem;
    }
  }
`;
