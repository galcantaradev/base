import * as React from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type SpinnerProps = {
  size?: SizeProp;
};

export const Spinner = ({ size = 'lg' }: SpinnerProps) => {
  return <FontAwesomeIcon spin icon="spinner" size={size} />;
};
