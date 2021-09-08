import {
  whiteDarkModeTextAndLightModeElements,
  blueDarkModeElements,
  blueDarkModeBackground,
  blueLightModeText,
  grayLightModeInput,
  grayLightModeBackground,
} from 'config/colors';

export const lightTheme = {
  fontColor: blueLightModeText,
  backgroundElements: whiteDarkModeTextAndLightModeElements,
  inputBgColor: grayLightModeInput,
  background: grayLightModeBackground,
};

export const darkTheme = {
  fontColor: whiteDarkModeTextAndLightModeElements,
  backgroundElements: blueDarkModeElements,
  background: blueDarkModeBackground,
  inputBgColor: blueDarkModeElements,
};
