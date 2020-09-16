import { render } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

import { defaultLocale } from './LocaleUtils';

export const renderWithIntl = (children: ReactNode) => {
  return render(
    <IntlProvider locale={defaultLocale} defaultLocale={defaultLocale}>
      {children}
    </IntlProvider>
  );
};
