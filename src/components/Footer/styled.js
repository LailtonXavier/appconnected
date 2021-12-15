import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Cente = styled.div`
  display: flex;
  align-items: center;
  /* background: hsla(151, 68%, 48%, 1); */
  background: ${colors.greenRoot};
  color: white;
  justify-content: center;
  padding: 1.3rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  border-top: 0.3px solid #ccc;
`;
