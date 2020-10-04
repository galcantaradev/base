import React, { HTMLAttributes, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fontSizeState } from '../../state';

export type ContainerProps = React.DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  ref?: any;
  children: ReactNode;
  fontSize?: number;
};

const StyledContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  font-size: ${props => props.fontSize}px;
  background-color: ${props => props.theme.backgroundColor};
  height: 100vh;
  width: 100%;
`;

export const Container = ({
  children,
  className = '',
  ...props
}: ContainerProps) => {
  const fontSize = useRecoilValue(fontSizeState);

  return (
    <StyledContainer
      {...props}
      className={`container ${className}`}
      fontSize={fontSize}
    >
      {children}
    </StyledContainer>
  );
};
