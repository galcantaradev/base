import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken, lighten } from 'polished';
import React, {
  Children,
  ReactElement,
  ReactNode,
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';

import { Direction, Sort } from '../../types';
import { Column, ColumnProps } from './Column';
import { getNextDirection, icons, initialSort } from './TableUtils';

type Header = {
  name?: string;
  header?: ReactNode;
};

type Data<T> = {
  data: (value: T, index: number) => ReactNode;
};

export type TableProps<T> = {
  values: T[];
  emptyMessage?: string;
  children: ReactElement<ColumnProps<T>>[];
  defaultSort?: Sort;
  onSort?: (name: string, direction: Direction) => void;
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
  }

  thead {
    tr {
      th {
        border-bottom-color: ${props => lighten('.1', props.theme.primary)};
        border-bottom-width: 2px;
        border-style: solid;
        color: ${props => props.theme.textColor};
        padding: 8px;

        svg {
          cursor: pointer;
          height: 12px;
        }
      }
    }
  }

  tbody {
    tr {
      div {
        visibility: hidden;
      }

      :hover {
        div {
          visibility: visible;
        }
      }

      td {
        padding: 4px 0 4px 8px;

        :last-child {
          width: 120px;
        }
      }

      :last-child {
        td {
          :first-child {
            border-bottom-left-radius: 8px;
          }

          :last-child {
            border-bottom-right-radius: 8px;
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
  emptyMessage = 'Table is empty',
  defaultSort = initialSort,
  onSort
}: TableProps<T>) => {
  const [sort, setSort] = useState(defaultSort);
  const [ths, tds] = useMemo(() => {
    const ths: Header[] = [];
    const tds: Data<T>[] = [];

    Children.forEach(children, child => {
      const { data, header, name } = child.props;

      tds.push({ data });
      ths.push({ header, name });
    });

    return [ths, tds];
  }, [children]);

  const handleSort = (name: string): void => {
    setSort(prevSort => {
      const direction = getNextDirection(prevSort, name);

      onSort?.(name, direction);

      return {
        name,
        direction
      };
    });
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          {ths.map((th: Header, index: number) => {
            const thKey = `${th.header}_${index}`;
            const direction = th.name === sort.name ? sort.direction : 'sort';

            return (
              <th key={thKey} data-testid={thKey}>
                {th.name && (
                  <FontAwesomeIcon
                    icon={icons[direction]}
                    onClick={() => handleSort(th.name!)}
                  />
                )}{' '}
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
