import { useState } from 'react';

import { useListener } from './useListener';

type UseWindowSizeReturn = {
  height: number;
  width: number;
};

export const useWindowSize = (): UseWindowSizeReturn => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const handleResize = () => {
    setSize({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  useListener(window, 'resize', handleResize);

  return size;
};
