import { render } from '@testing-library/react';
import React from 'react';

import { Row } from '../Row';

describe('Row.test.tsx', () => {
  it('should render children', () => {
    const { getByText } = render(<Row>any children</Row>);

    expect(getByText('any children')).toBeInTheDocument();
  });
});
