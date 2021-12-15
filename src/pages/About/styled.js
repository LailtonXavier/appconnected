import styled from 'styled-components';

export const CenterAbout = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  margin: auto;
  background: linear-gradient(
    to top,
    rgba(236, 247, 246, 0),
    rgba(12, 13, 13, 1) 90%
  );
  h4 {
    text-align: center;
    width: 100%;
    font-size: 5rem;
    color: white;
    display: inline;
    padding: 0.5rem;
    text-shadow: 2px 5px 20px hsla(151, 68%, 48%, 0.8);
    margin-top: 5rem;
    margin-bottom: 3rem;
  }

  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    margin-bottom: 3rem;

    img {
      width: 400px;
      height: 500px;
      border-radius: 50%;
      object-fit: cover;
      margin: 1rem;
      cursor: pointer;
      box-shadow: 2px 2px 20px hsla(151, 68%, 48%, 0.9);
    }
  }

  span {
    padding: 1rem;
  }
  p {
    font-size: 2.3rem;
    text-indent: 100px;
    font-style: normal;
    font-weight: 200;
    font-family: 'Roboto Mono', monospace;
  }

  @media (max-width: 550px) {
    p {
      font-size: 1.5rem;
    }
  }
`;
