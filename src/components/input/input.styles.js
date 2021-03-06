import styled from 'styled-components';

import Icon from 'components/icon/Icon';

export const InputBase = styled.input`
  height: auto;
  width: 100%;
  padding: 17px 40px 17px 60px;
  color: var(--font);
  background-color: var(--bg-elements);
  box-shadow: 0px 0px 5px 5px rgba(29, 44, 56, .1);
  font-family: inherit;
  font-weight: 600;
  border-radius: 3px;
  transition: background-color .3s, color .3s;

  @media only screen and (min-width: 768px) {
    padding: 17px 30px 17px 60px;
    width: auto;
  }

  &::placeholder {
    color: var(--font);
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
