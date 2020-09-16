import { render } from '@testing-library/react';
import React from 'react';

import { Column } from '../Column';

describe('Column.test.tsx', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<Column data={jest.fn()} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
