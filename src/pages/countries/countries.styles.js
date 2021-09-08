import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  color: ${({ theme: { theme } }) => theme.fontColor};
  transition: color .3s;
`;

export default Container;
