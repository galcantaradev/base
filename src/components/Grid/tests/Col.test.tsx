import { render } from '@testing-library/react';
import React from 'react';

import { Col } from '../Col';

describe('Col.test.tsx', () => {
  it('should render children', () => {
    const { getByText } = render(<Col md={4}>any children</Col>);

    expect(getByText('any children')).toBeInTheDocument();
  });
});
