import { useEffect, useRef, useState } from 'react';

type UseLoadingReturn = [boolean, (promise: Promise<any>) => Promise<any>];

export const useLoading = (): UseLoadingReturn => {
  const mounted = useRef(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  const fetch = (promise: Promise<any>): Promise<any> => {
    setLoading(true);

    return promise.finally(() => {
      if (mounted.current) {
        setLoading(false);
      }
    });
  };

  return [loading, fetch];
};
