import React from 'react';

import { InputBase, InputIcon, Group } from './input.styles';

const Input = ({ inputType = '', placeholder = '' }) => (
  <Group>
    <InputIcon icon="search" />
    <InputBase type={inputType} placeholder={placeholder} />
  </Group>
);

export default Input;
