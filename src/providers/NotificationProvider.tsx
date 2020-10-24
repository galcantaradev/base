import React, { ReactNode, createContext, useState } from 'react';

import {
  Notification,
  NotificationValue,
  StyledNotificationsContainer
} from '../components';

type Props = {
  children: ReactNode;
};

export type NotificationContextProps = {
  addNotification: (notification: NotificationValue) => void;
};

export const NotificationContext = createContext({
  addNotification: (notification: NotificationValue) => {}
});

export const NotificationProvider = ({ children }: Props) => {
  const [notifications, setNotifications] = useState<NotificationValue[]>([]);

  const addNotification = (notification: NotificationValue) => {
    setNotifications(prevNotifications => [...prevNotifications, notification]);
  };

  const removeNotification = (index: number) => {
    setNotifications(prevNotifications => [
      ...prevNotifications.slice(0, index),
      ...prevNotifications.slice(index + 1)
    ]);
  };

  const toNotification = (notification: NotificationValue, index: number) => {
    return (
      <Notification
        key={`${notification.id}`}
        value={notification}
        onDestroy={() => removeNotification(index)}
      />
    );
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      <StyledNotificationsContainer>
        {notifications.map(toNotification)}
      </StyledNotificationsContainer>
      {children}
    </NotificationContext.Provider>
  );
};
