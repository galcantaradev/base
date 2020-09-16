import { useEffect, useRef } from 'react';

type Target = HTMLElement | Window | Document;
type EventName = keyof WindowEventMap;
type EventListener = (event: Event) => void;

export const useListener = (
  target: Target,
  eventName: EventName,
  callback: EventListener
): void => {
  const eventHandler = useRef<EventListener>();

  useEffect(() => {
    eventHandler.current = callback;
  }, [callback]);

  useEffect(() => {
    const eventListener = (event: Event) => eventHandler.current?.(event);

    target.addEventListener(eventName, eventListener);

    return () => {
      target.removeEventListener(eventName, eventListener);
    };
  }, [target, eventName]);
};
