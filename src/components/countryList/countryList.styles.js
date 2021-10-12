import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 0 0 0;
  position: relative;
  z-index: 1;
`;

export const List = styled.div`
  width: auto;
  height: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 280px);
  gap: 55px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;
