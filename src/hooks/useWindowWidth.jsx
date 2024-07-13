import { useEffect, useState } from 'react';
import { debouce, getWindowWidth } from '../helpers';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleResize = debouce(() => {
      setWindowWidth(getWindowWidth());
    });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowWidth];
};

export default useWindowWidth;
