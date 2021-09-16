import React from 'react';

import { Data, Value, Key } from './dataView.styles';

const DataView = ({ propertyKey, value }) => (
  <Data>
    <Key>
      {propertyKey}
      {': '}
    </Key>
    <Value>{value}</Value>
  </Data>
);

export default DataView;
