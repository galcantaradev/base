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
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  font-size: ${props => props.fontSize}px;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
`;

export const Container = ({ children, ...props }: ContainerProps) => {
  const fontSize = useRecoilValue(fontSizeState);

  return (
    <StyledContainer {...props} fontSize={fontSize}>
      {children}
    </StyledContainer>
  );
};
