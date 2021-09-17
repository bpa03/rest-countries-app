import styled from 'styled-components';

import Icon from 'components/icon/Icon';

export const InputBase = styled.input`
  width: 100%;
  height: auto;
  padding: 17px 10px 17px 60px;
  color: ${({ theme: { theme } }) => theme.fontColor};
  background-color: ${({ theme: { theme } }) => theme.backgroundElements};
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);
  font-family: inherit;
  font-weight: 600;
  border-radius: 3px;
  transition: background-color .3s, color .3s;

  &::placeholder {
    color: ${({ theme: { theme } }) => theme.fontColor};
  }
`;

export const Group = styled.div`
  width: auto;
  height: auto;
  position: relative;
`;

export const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 20px;
`;
