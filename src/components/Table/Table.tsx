import React, { Children, ReactElement, ReactNode, useMemo } from 'react';

import { Column, ColumnProps } from './Column';

type Header = {
  header?: string;
};

type Data<T> = {
  data: (value: T, index: number) => ReactNode;
};

type TableClasses = {
  className?: string;
  bodyClasses?: string;
  headerClasses?: string;
};

export type TableProps<T> = {
  values: T[];
  emptyMessage?: string;
  children: ReactElement<ColumnProps<T>>[];
  keyExtractor: (value: T, index: number) => string;
} & TableClasses;

export const Table = <T extends any>({
  className = '',
  bodyClasses = '',
  headerClasses = '',
  values = [],
  children,
  keyExtractor,
  emptyMessage = 'Table is empty'
}: TableProps<T>) => {
  const [ths, tds] = useMemo(() => {
    const ths: Header[] = [];
    const tds: Data<T>[] = [];

    Children.forEach(children, child => {
      const { data, header } = child.props;

      tds.push({ data });
      ths.push({ header });
    });

    return [ths, tds];
  }, [children]);

  return (
    <table className={className}>
      <thead className={headerClasses}>
        <tr>
          {ths.map((th: Header, index: number) => {
            const thKey = `${th.header}_${index}`;

            return (
              <th key={thKey} data-testid={thKey}>
                {th.header}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className={bodyClasses}>
        {values.length > 0 ? (
          values.map((value: T, index: number) => {
            const extractedKey = keyExtractor(value, index);

            return (
              <tr key={extractedKey}>
                {tds.map((td: Data<T>, index: number) => {
                  const tdKey = `${extractedKey}_${index}`;

                  return (
                    <td key={tdKey} data-testid={tdKey}>
                      {td.data(value, index)}
                    </td>
                  );
                })}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={12} data-testid="empty-message">
              {emptyMessage}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.Column = Column;
