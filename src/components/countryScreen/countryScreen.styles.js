import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 55px 0 0 0;
  display: grid;
  
  @media only screen and (min-width: 996px) {
    grid-template-columns: 42% 50%;
    justify-content: space-between;
  }
`;

export const CountryFlag = styled.div`
  width: 100%;
  height: 330px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);
  overflow: hidden;

  & > img {
    vertical-align: bottom;
    object-fit: cover;
  }

  @media only screen and (min-width: 996px) {
    & {
      height: 340px;
    }
  }
`;

export const CountryName = styled.h1`
  margin: 40px 0;
  font-size: 2rem;

  @media only screen and (min-width: 996px) {
    & {
      margin: 0 0 28px 0;
    }
  }
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

  @media only screen and (min-width: 996px) {
    flex-direction: row;
    font-size: 1.125rem;
    gap: 50px;
  }
`;
