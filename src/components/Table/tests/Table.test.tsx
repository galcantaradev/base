import * as React from 'react';
import { cleanup, render } from '@testing-library/react';

import { Table } from '../Table';

describe('Table.test.tsx', () => {
  beforeEach(cleanup);

  it('should render empty table', () => {
    const { getByText } = render(
      <Table keyExtractor={(item: any) => item.id} values={[]}>
        <Table.Column header="Name" data={(item: any) => item.name} />
        <Table.Column header="Surname" data={(item: any) => item.surname} />
      </Table>
    );

    expect(getByText('Table is empty')).toBeInTheDocument();
  });

  it('should render table items', () => {
    const items = [
      {
        id: '1',
        name: 'Boris',
        surname: 'Brejcha'
      }
    ];

    const { getByText } = render(
      <Table keyExtractor={(item: any) => item.id} values={items}>
        <Table.Column header="Name" data={(item: any) => item.name} />
        <Table.Column header="Surname" data={(item: any) => item.surname} />
      </Table>
    );

    expect(getByText('Boris')).toBeInTheDocument();
    expect(getByText('Brejcha')).toBeInTheDocument();
  });
});
