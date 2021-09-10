import styled from 'styled-components';

export const Card = styled.div`
  width: auto;
  height: auto;
  background: ${({ theme: { theme } }) => theme.backgroundElements};
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);
  transition: background .3s, transform .3s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 15px 40px 30px;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 180px;
`;

export const CardData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  gap: 10px;
  margin: 22px 0 0 0;
`;

export const Data = styled.div`
  font-weight: 700;
  font-style: normal;
`;

export const Key = styled.p`
  font-weight: inherit;
  font-style: inherit;
  display: inline-block;
`;

export const Value = styled.span`
  font-weight: 400;
  font-style: normal;
  margin-left: 6px;
  display: inline-block;
`;

export const CardImage = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 5px 5px 0 0;
`;
