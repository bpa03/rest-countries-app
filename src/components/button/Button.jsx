import React from 'react';

import { BaseLink, IconLink } from './Button.styles';

const LinkButton = ({ children, to, icon = '' }) => (
  <BaseLink to={to}>
    {icon && <IconLink icon={icon} />}
    {children}
  </BaseLink>
);

export default LinkButton;
