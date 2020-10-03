import React, {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  ReactNode
} from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fontSizeState } from '../../state';

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  children: ReactNode;
  fontSize?: number;
  ref?: any;
};

const StyledLabel = styled.label<LabelProps>`
  font-size: ${props => props.fontSize}px;
  margin-bottom: 8px;
`;

export const Label = ({ children, ...props }: LabelProps) => {
  const fontSize = useRecoilValue(fontSizeState);

  return (
    <StyledLabel {...props} fontSize={fontSize}>
      {children}
    </StyledLabel>
  );
};
