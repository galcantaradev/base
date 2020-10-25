import { useContext } from 'react';
import { v4 } from 'uuid';

import { NotificationValue } from '../components';
import { NotificationContext } from '../providers';

type UseNotificationReturn = (notification: NotificationValue) => void;

export const useNotification = (): UseNotificationReturn => {
  const { addNotification } = useContext(NotificationContext);

  const showNotification = (
    notification: Omit<NotificationValue, 'id'>
  ): void => {
    addNotification({
      ...notification,
      id: v4()
    });
  };

  return showNotification;
};
