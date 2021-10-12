import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';

export const BaseLink = styled(Link)`
  padding: 11px 32px;
  background-color: var(--bg-elements);
  color: var(--font);
  display: block;
  width: fit-content;
  font-weight: 500;
  font-size: 1.23rem;
  border-radius: 3px;
  transition: background .3s, color .3s;
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);

  @media only screen and (min-width: 996px) {
    font-size: 1rem;
  }
`;

export const IconLink = styled(Icon)`
  margin-right: 10px;
  margin-top: -3.6px;
`;
