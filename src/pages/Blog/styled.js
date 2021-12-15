import styled from 'styled-components';

export const CenterBlog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 700px;
  margin: 2rem auto;
  box-shadow: 2px -23px 20px hsla(151, 68%, 48%, 0.9);
  border-radius: 100px;
  background: hsla(170, 15%, 95%, 0.7);

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
`;
