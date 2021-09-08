import React from 'react';

import BaseIcon from './icon.styles';

// eslint-disable-next-line react/prop-types
const Icon = ({ icon = '', typeIcon = '', className = '' }) => (
  <BaseIcon
    className={`${
      typeIcon ? `material-icons-${typeIcon}` : 'material-icons'
    } ${className}`}
  >
    {icon}
  </BaseIcon>
);

export default Icon;
