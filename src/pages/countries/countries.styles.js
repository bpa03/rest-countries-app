import styled from 'styled-components';

const Container = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  position: relative;
  color: ${({ theme: { theme } }) => theme.fontColor};
  transition: color .3s;
  padding: 25px 0;
`;

export default Container;