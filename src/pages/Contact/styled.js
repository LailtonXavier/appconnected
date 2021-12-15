import styled from 'styled-components';
import * as colors from '../../config/colors';

export const CenterContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  margin: auto 2rem auto 0;
  font-family: 'Roboto Mono', sans-serif;

  .up {
    position: fixed;
    top: 550px;
    right: 0px;
    color: ${colors.greenRoot};
    font-size: 3rem;
    border-radius: 50%;
    padding-top: 0.5rem;
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background: ${colors.greenRoot};
    padding: 5rem;
    color: white;
  }

  .about h4,
  .containerForm h4 {
    margin: 1rem 0;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: normal;
  }

  .about p {
    width: 322px;
    word-break: all;
    margin: 2rem 0;
  }

  .about span {
    margin: 0.5rem 0;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
  }

  .icons {
    border-radius: 50%;
    padding: 0.5rem 0;
    border: 1px solid white;
  }
  .about .icons {
    margin-right: 1rem;
  }
  a {
    color: white;
  }

  .containerForm {
    text-align: left;
    background: white;
    margin: auto;
    width: 600px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 5px;
  }

  .inptRow {
    display: flex;
  }

  label {
    margin: 1rem;
  }
  input {
    margin-top: 3px;
    padding-left: 1rem;
    padding-bottom: 0.3rem;
    height: 50px;
    border-radius: 15px;
    width: 100%;
    border: none;
    font-weight: bold;
    font-style: normal;
    font-size: 1.3rem;

    background: rgba(0, 123, 255, 0.1);
    color: rgba(0, 0, 0, 0.6);
    box-shadow: inset 2px 2px 11px rgba(0, 123, 255, 0.25);
    transition: all 0.8s linear;
  }

  textarea::placeholder,
  input::placeholder {
    color: rgba(161, 170, 168, 1);
    font-weight: normal;
    font-style: normal;
    font-size: 1rem;
    padding: 0.5rem;
  }

  textarea:focus,
  input:focus {
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 1px 1px 11px 5px rgba(0, 123, 255, 0.25);
    transition: all 1s linear;
  }

  textarea {
    width: 100%;
    height: 100px;
    padding-left: 1rem;
    margin-top: 0.5rem;
    border: none;
    resize: none;
    border-radius: 15px;
    background: rgba(0, 123, 255, 0.1);
    color: rgba(0, 0, 0, 0.6);
    box-shadow: inset 2px 2px 11px rgba(0, 123, 255, 0.25);
    transition: all 0.8s linear;
  }

  button {
    border-radius: 15px;
    background: ${colors.greenRoot};
    padding: 0.5rem;
    border: none;
    color: rgba(236, 247, 246, 0.8);
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
    box-shadow: inset 2px 2px 11px rgba(0, 123, 255, 0.25);
    transition: all 0.6s;
  }

  button:hover {
    transform: scale(1.1);
  }

  @media (max-width: 550px) {
    input::placeholder {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 760px) {
    .up {
      display: none;
    }
  }
`;
