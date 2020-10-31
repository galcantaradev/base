import { darken, lighten } from 'polished';
import React, { Children, ReactElement, ReactNode, useMemo } from 'react';
import styled from 'styled-components';

import { Column, ColumnProps } from './Column';

type Header = {
  header?: string;
};

type Data<T> = {
  data: (value: T, index: number) => ReactNode;
};

export type TableProps<T> = {
  values: T[];
  emptyMessage?: string;
  children: ReactElement<ColumnProps<T>>[];
  keyExtractor: (value: T, index: number) => string;
};

const StyledTable = styled.table`
  box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
  border-collapse: separate;
  color: ${props => props.theme.textColor};
  text-align: left;
  border-width: 1px;
  border-style: solid;
  min-width: 95%;
  border-color: ${props => lighten('.1', props.theme.primary)};
  border-radius: 6px;

  thead {
    th {
      border-bottom-color: ${props => lighten('.1', props.theme.primary)};
      border-bottom-width: 2px;
      border-style: solid;
      color: ${props => props.theme.textColor};
      padding: 10px;
    }
  }

  tbody {
    tr {
      :nth-child(even) {
        background-color: ${props => {
          return props.theme.themeId === 'light_theme'
            ? darken('.1', props.theme.backgroundColor)
            : props.theme.primary;
        }};
      }

      :last-child {
        td {
          :first-child {
            border-bottom-left-radius: 6px;
          }

          :last-child {
            border-bottom-right-radius: 6px;
          }
        }
      }
    }

    td {
      padding: 10px;
    }
`;

const StyledEmptyMessage = styled.tr`
  text-align: center;
`;

export const Table = <T extends any>({
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
    <StyledTable>
      <thead>
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

      <tbody>
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
          <StyledEmptyMessage>
            <td colSpan={12} data-testid="empty-message">
              {emptyMessage}
            </td>
          </StyledEmptyMessage>
        )}
      </tbody>
    </StyledTable>
  );
};

Table.Column = Column;
