import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';

const Language: FC = ({ children }) => (
  <IntlProvider
    locale="en"
    messages={{}}
  >
    {children}
  </IntlProvider>
);

export default Language;
