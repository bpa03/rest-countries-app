import React from 'react';

import { Wrapper, ErrorTitle, ErrorDescription } from './errorView.styles';

const ErrorView = ({ title = '', description = '' }) => (
  <Wrapper>
    <ErrorTitle>
      {title}
    </ErrorTitle>
    <ErrorDescription>
      {description}
    </ErrorDescription>
  </Wrapper>
);

export default ErrorView;
