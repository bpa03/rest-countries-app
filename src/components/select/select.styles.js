import styled from 'styled-components';
import { nunitoSansFont } from 'config/fonts';

import Icon from 'components/icon/Icon';

export const ArrowIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transition: .3s transform;
  transform: ${({ show }) => (show ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)')};
`;

export const SelectBox = styled.div`
  position: relative;
  display: block;
  width: 220px;
  margin: 0 auto;
  color: var(--font);
  font-family: ${nunitoSansFont};
  margin: 20px 0 0 0;
`;

export const CurrentSelect = styled.div`
  font-family: inherit;
  position: relative;
  background-color: red;
  padding: 16px 18px;
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, 0.1);
  font-weight: 600;
  border-radius: 4px;
  background-color: var(--bg-elements);
  transition: background 0.3s;
  font-size: .875rem;
  cursor: pointer;
  outline: none;
`;

export const BoxInput = styled.input`
  display: none;
`;

export const BoxList = styled.ul`
  width: 100%;
  height: auto;
  padding: 18px 20px;
  border-radius: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background 0.3s, opacity .3s, top .3s;
  background-color: var(--bg-elements);
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, 0.1);
  opacity: ${({ show }) => (show ? '1' : '0')};
  top: ${({ show }) => (show ? '60px' : '70px')};
  z-index: 1;
`;

export const BoxListItem = styled.li`
  font-weight: 600;
  font-size: 14px;
`;

export const BoxLabel = styled.label`
  cursor: pointer;

  &::selection {
    background: transparent;
  }
`;
