import React from 'react';

import BaseIcon from './icon.styles';

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
