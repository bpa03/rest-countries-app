import styled from 'styled-components';

export const ListContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 40px 0 0 0;
`;

export const List = styled.div`
  width: auto;
  height: auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 280px);
  gap: 55px;
`;