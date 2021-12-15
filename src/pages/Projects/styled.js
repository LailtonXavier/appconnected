import styled from 'styled-components';

export const MyProjects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: auto;
  background: linear-gradient(to top, rgba(12, 13, 13, 1), black 30%);

  h4 {
    text-align: center;
    width: 100%;
    font-size: 5rem;
    color: white;
    display: inline;
    padding: 0.5rem;
    text-shadow: 2px 3px 15px hsla(151, 68%, 48%, 0.8);
    margin: 1rem;
  }

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .v1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem auto;
    color: white;
  }

  .desc {
    word-wrap: break-word;
    width: 350px;
    margin: 2rem;
    font-family: 'Roboto Mono', sans-serif;
  }

  .title {
    border-bottom: 1px solid white;
  }

  a {
    color: #ccc;
  }

  .as {
    color: white;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    box-shadow: inset 2px 3px 13px 4px rgba(241, 242, 242, 1);
    padding: 0.5rem;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .as:hover {
    transform: scale3d(1.2, 1.2, 1.2);
  }

  video {
    width: 55%;
    height: 100%;
    padding: 1rem;
    border-radius: 40px;
    box-shadow: 2px 2px 40px hsla(170, 5%, 75%, 1);
  }

  source {
    border-radius: 45px;
  }

  @media (max-width: 700px) {
    video {
      width: 100%;
    }
  }
`;
