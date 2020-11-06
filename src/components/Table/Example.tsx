import React, { useState } from 'react';

import { Direction } from '../../types';
import { ActionButton, ActionsGroup } from '../ActionButton';
import { Table } from './Table';

type Music = {
  id: string;
  name: string;
  artist: string;
  album: string;
  [index: string]: string;
};

export const Example = () => {
  const [values, setValues] = useState<Music[]>([
    {
      id: '1',
      name: 'highest in the room',
      artist: 'travis scott',
      album: 'jackboys'
    },
    {
      id: '2',
      name: 'no idea',
      artist: 'don toliver',
      album: 'heaven or hell'
    },
    {
      id: '3',
      name: 'heaven or hell',
      artist: 'don toliver',
      album: 'heaven or hell'
    },
    {
      id: '4',
      name: 'sicko mode',
      artist: 'travis scott',
      album: 'astroworld'
    },
    {
      id: '5',
      name: 'astrothunder',
      artist: 'travis scott',
      album: 'astroworld'
    }
  ]);

  const handleSort = (name: string, direction: Direction): void => {
    setValues(prevValues => {
      return prevValues.sort((a, b) => {
        if (direction === 'asc') {
          if (a[name] > b[name]) {
            return 1;
          }

          if (a[name] < b[name]) {
            return -1;
          }

          return 0;
        }

        if (direction === 'desc') {
          if (a[name] > b[name]) {
            return -1;
          }

          if (a[name] < b[name]) {
            return 1;
          }

          return 0;
        }

        return 0;
      });
    });
  };

  return (
    <Table<Music>
      keyExtractor={p => p.id}
      values={values}
      onSort={handleSort}
      defaultSort={{ direction: 'asc', name: 'id' }}
    >
      <Table.Column<Music> header="id" name="id" data={p => p.id} />
      <Table.Column<Music> header="name" name="name" data={p => p.name} />
      <Table.Column<Music> header="artist" name="artist" data={p => p.artist} />
      <Table.Column<Music> header="album" name="album" data={p => p.album} />
      <Table.Column<Music>
        header=""
        data={p => (
          <ActionsGroup>
            <ActionButton icon="pencil-alt">Editar</ActionButton>
            <ActionButton icon="trash-alt">Excluir</ActionButton>
          </ActionsGroup>
        )}
      />
    </Table>
  );
};
