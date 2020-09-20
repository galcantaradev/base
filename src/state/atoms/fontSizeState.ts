import { atom } from 'recoil';

export const fontSizeState = atom<number>({
  key: 'fontSize',
  default: 14
});
