import React from 'react';

import useTheme from 'hooks/useTheme';

import {
  Container, Content, Title, SwitchButton, Mode, DarkModeIcon, LightModeIcon,
} from './header.styles';

const Header = () => {
  const { toggleTheme, isLightTheme } = useTheme();

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <header>
      <Container>
        <Content>
          <Title to="/">Where in the world?</Title>
          <SwitchButton onClick={handleClick}>
            <LightModeIcon />
            <LightModeIcon icon="light_mode" hide={isLightTheme} typeIcon="outlined" />
            <DarkModeIcon icon="dark_mode" hide={isLightTheme} />
            <Mode> Dark Mode </Mode>
          </SwitchButton>
        </Content>
      </Container>
    </header>
  );
};

export default Header;
