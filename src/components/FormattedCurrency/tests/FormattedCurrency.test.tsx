import React from 'react';

import { renderWithIntl } from '../../../utils';
import { FormattedCurrency } from '../FormattedCurrency';

describe('FormattedCurrency.test.tsx', () => {
  it('should render formatted value', () => {
    const { getByText } = renderWithIntl(<FormattedCurrency value={10} />);

    expect(getByText('R$ 10,00')).toBeInTheDocument();
  });
});
