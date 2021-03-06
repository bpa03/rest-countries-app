import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled(Link)`
  width: auto;
  height: auto;
  background: var(--bg-elements);
  color: var(--font);
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);
  transition: background .3s, transform .3s, color .3s;
  border-radius: 5px;

  &:hover {
    transform: scale(1.03);
  }
`;

export const CardBody = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 15px 50px 30px;
`;

export const CardTitle = styled.h2`
  font-size: 1.6rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
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

  @media only screen and (min-width: 768px) {
    font-size: .89rem;
  }
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
