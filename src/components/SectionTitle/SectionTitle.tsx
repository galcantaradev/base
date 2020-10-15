import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export type SectionTitleProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  children: ReactNode;
  ref?: any;
};

const StyledSectionTitle = styled.h1`
  border-color: ${props => props.theme.textColor};
  border-style: solid;
  border-width: 0 0 1px 0;
  color: ${props => props.theme.textColor};
  margin-bottom: 40px;
`;

export const SectionTitle = ({ children, ...rest }: SectionTitleProps) => {
  return <StyledSectionTitle {...rest}>{children}</StyledSectionTitle>;
};
