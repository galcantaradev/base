import * as React from 'react';
import {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { darken, lighten } from 'polished';
import styled, { keyframes } from 'styled-components';

import { commonTheme } from '../../theme';

export type NotificationType = keyof typeof icons;

export type NotificationValue = {
  id?: string;
  message: string;
  type: NotificationType;
};

export type NotificationProps = {
  onDestroy: () => void;
  value: NotificationValue;
};

type StyledNotificationContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant: NotificationType;
};

type StyledNotificationIconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  variant: NotificationType;
};

const NOTIFICATION_TIME = 3;

export const StyledNotificationsContainer = styled.div`
  overflow: hidden auto;
  padding: 10px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1000;
`;

const fadeIn = keyframes`
  from {
    right: 0;
    opacity: 0;
  }

  to {
    right: 10px;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    right: 10px;
    opacity: 1;
  }

  to {
    right: 0;
    opacity: 0;
  }
`;

const StyledNotificationContainer = styled.div<
  StyledNotificationContainerProps
>`
  animation: ${fadeIn} 0.3s, ${fadeOut} 0.3s ${NOTIFICATION_TIME - 1}.5s;
  animation-fill-mode: forwards;
  background-color: ${props => lighten('.2', variants[props.variant])};
  border-color: ${props => variants[props.variant]};
  border-radius: 4px;
  border-style: solid;
  box-shadow: 0 4px 4px 0 ${props => darken('.1', props.theme.shadowColor)};
  color: ${props => darken('.3', variants[props.variant])};
  display: flex;
  flex-direction: row;
  font-size: 14px;
  height: 60px;
  justify-content: space-between;
  margin-top: 10px;
  width: 300px;

  :hover {
    animation-play-state: paused;
  }
`;

const StyledNotificationIcon = styled.div<StyledNotificationIconProps>`
  align-items: center;
  background-color: ${props => variants[props.variant]};
  border-radius: 4px 0 0 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  min-width: 30px;
`;

const StyledNotificationText = styled.div`
  flex: auto;
  padding: 10px;
  word-break: break-all;
`;

const StyledNotificationCloseButton = styled.div`
  display: flex;
  padding: 10px;

  svg {
    cursor: pointer;
  }
`;

const icons = {
  info: <FontAwesomeIcon icon="info" />,
  error: <FontAwesomeIcon icon="times" />,
  success: <FontAwesomeIcon icon="check" />,
  warning: <FontAwesomeIcon icon="exclamation" />
};

const variants: Record<NotificationType, string> = {
  info: commonTheme.infoColor,
  error: commonTheme.errorColor,
  warning: commonTheme.warningColor,
  success: commonTheme.successColor
};

export const Notification = ({ value, onDestroy }: NotificationProps) => {
  const timeout = useRef(0);
  const mounted = useRef(false);
  const [mouseIn, setMouseIn] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    (async () => {
      const reset = () => {
        return new Promise(resolve => {
          timeout.current = setTimeout(() => {
            setVisible(false);
            resolve();
          }, NOTIFICATION_TIME * 1000);
        });
      };

      await reset();

      mounted.current = true;
    })();

    return () => {
      clearTimeout(timeout.current);
    };
  }, []);

  useEffect(() => {
    if (mounted.current && mouseIn) {
      onDestroy();
    }
  }, [mouseIn, onDestroy]);

  const close = () => {
    setMouseIn(false);
    setVisible(false);
  };

  return visible || mouseIn ? (
    <StyledNotificationContainer
      variant={value.type}
      onMouseEnter={() => setMouseIn(true)}
      onMouseLeave={() => setMouseIn(false)}
    >
      <StyledNotificationIcon variant={value.type}>
        {icons[value.type]}
      </StyledNotificationIcon>
      <StyledNotificationText>{value.message}</StyledNotificationText>
      <StyledNotificationCloseButton onClick={close}>
        <FontAwesomeIcon icon="times" />
      </StyledNotificationCloseButton>
    </StyledNotificationContainer>
  ) : null;
};
