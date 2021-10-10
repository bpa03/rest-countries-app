/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

// eslint-disable-next-line no-multiple-empty-lines
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 55px 0 0 0;
`;

export const CountryFlag = styled.div`
  width: 100%;
  height: 260px;
  border-radius: 5px;
  overflow: hidden;

  & > img {
    vertical-align: bottom;
    object-fit: cover;
  }
`;

export const CountryName = styled.h1`
  margin: 40px 0;
  font-size: 2.22rem;
`;

export const CountryData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.385rem;
  gap: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 13.5px;
  }
`;
