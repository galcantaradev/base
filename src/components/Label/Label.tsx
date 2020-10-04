import React, {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  ReactNode
} from 'react';
import styled from 'styled-components';

export type LabelProps = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> & {
  children: ReactNode;
  ref?: any;
};

const StyledLabel = styled.label<LabelProps>`
  color: ${props => props.theme.textColor};
  margin-bottom: 8px;
`;

export const Label = ({ children, ...props }: LabelProps) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
