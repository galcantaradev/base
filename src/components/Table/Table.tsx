import { darken, lighten } from 'polished';
import React, { Children, ReactElement, ReactNode, useMemo } from 'react';
import styled from 'styled-components';

import { Column, ColumnProps } from './Column';

type Header = {
  header?: ReactNode;
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
  border-collapse: separate;
  border-color: ${props => lighten('.1', props.theme.primary)};
  border-radius: 6px;
  box-shadow: 0 2px 8px 0 ${props => props.theme.shadowColor};
  border-style: solid;
  border-width: 1px;
  color: ${props => props.theme.textColor};
  min-width: 95%;
  text-align: left;

  thead,
  tbody {
    tr {
      line-height: 25px;

      th,
      td {
        vertical-align: middle;
      }
    }

    div {
      float: right;

      button {
        background-color: ${props => props.theme.backgroundColor};
        border: none;
        border-radius: 50%;
        cursor: pointer;
        margin-right: 10px;
        padding: 5px;

        svg {
          color: ${props => props.theme.textColor};
        }

        :focus {
          box-shadow: 0 0 0 1px ${props => props.theme.textColor};
          outline: none;
        }

        :last-child {
          margin-right: 0;
        }
      }
    }
  }

  thead {
    tr {
      th {
        border-bottom-color: ${props => lighten('.1', props.theme.primary)};
        border-bottom-width: 2px;
        border-style: solid;
        color: ${props => props.theme.textColor};
        padding: 10px;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 8px;

        :last-child {
          width: 120px;
        }
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

      :nth-child(even) {
        background-color: ${props => {
          return props.theme.themeId === 'light_theme'
            ? darken('.05', props.theme.backgroundColor)
            : props.theme.primary;
        }};
      }

      :hover {
        background-color: ${props => {
          return props.theme.themeId === 'light_theme'
            ? darken('.1', props.theme.backgroundColor)
            : lighten('.05', props.theme.primary);
        }};
        transition: all 0.2s linear;
      }
    }
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
