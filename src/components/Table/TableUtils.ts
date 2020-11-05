import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { Direction, Sort } from '../../types';

export const initialSort: Sort = {
  name: '',
  direction: 'sort'
};

export const icons: Record<string, IconProp> = {
  sort: 'sort',
  asc: 'sort-up',
  desc: 'sort-down'
};

export const nextDirection: Record<Direction, Direction> = {
  sort: 'asc',
  asc: 'desc',
  desc: 'sort'
};

export const getNextDirection = (
  previousSort: Sort,
  name: string
): Direction => {
  return previousSort.name === name
    ? nextDirection[previousSort.direction]
    : 'asc';
};
