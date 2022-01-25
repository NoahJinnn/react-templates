import { useEffect } from 'react';

/**
 * Trigger function when window is resized
 */
const useWindowResize = (onResize: () => void): void => {
  const resize = () => {
    onResize();
  };
  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
};

export { useWindowResize };
