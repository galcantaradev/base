import * as React from 'react';
import { HTMLAttributes, ReactNode } from 'react';
import { lighten } from 'polished';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { fontSizeState } from '../../state';

export type FlexContainerProps = React.DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  ref?: any;
  children: ReactNode;
  fontSize?: number;
};

const StyledFlexContainer = styled.div<FlexContainerProps>`
  background-color: ${props => lighten('.05', props.theme.backgroundColor)};
  display: flex;
  flex-direction: column;
  font-size: ${props => props.fontSize}px;
  min-height: calc(100vh - 55px);
  overflow: hidden;
  width: 100%;
`;

export const FlexContainer = ({ children, ...props }: FlexContainerProps) => {
  const fontSize = useRecoilValue(fontSizeState);

  return (
    <StyledFlexContainer {...props} fontSize={fontSize}>
      {children}
    </StyledFlexContainer>
  );
};
