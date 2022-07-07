import { useState, useEffect } from 'react';

/**
 *
 * @returns scrollY
 * returns the yaxis position
 */
export const GetYposition = () => {
  const [scrollY, setScrollY] = useState(0);
  const setYaxis = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', setYaxis);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', setYaxis);
    };
  });

  return scrollY;
};

export const executeScrollToRef = (refRef) => refRef.current.scrollIntoView();
