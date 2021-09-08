import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icon from 'components/icon/Icon';

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background: ${({ theme: { theme } }) => theme.backgroundElements};
  transition: background 0.3s;
  box-shadow: 0px -4px 10px 0px rgba(0, 0, 0, 0.4);
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  color: ${({ theme: { theme } }) => theme.fontColor};
  transition: color 0.3s;
  align-items: center;
`;

export const Title = styled(Link)`
  color: inherit;
  font-weight: bold;
  font-style: normal;
  font-size: 1.462rem;
  line-height: initial;
  letter-spacing: -0.96px;
`;

export const SwitchButton = styled.div`
  overflow: hidden;
  position: relative;
  display: block;
  width: auto;
  height: auto;
  font-size: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 20px;

  & > *::selection {
    background: none;
  }
`;

export const Mode = styled.span`
  font-size: inherit;
  margin: 0 0 0 12px;
  font-weight: 600;
`;

export const DarkModeIcon = styled(Icon)`
  transition: top .3s ease;
  transform: translateY(-50%);
  position: absolute;
  top: ${({ hide }) => (hide ? '200%' : '50%')};
  left: 0;
`;

export const LightModeIcon = styled(Icon)`
  transition: top .3s ease;
  transform: translateY(-50%);
  position: absolute;
  top: ${({ hide }) => (hide ? '50%' : '200%')};
  left: 0;
`;
