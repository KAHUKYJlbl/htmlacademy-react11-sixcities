import { RefObject, useEffect } from 'react';

export default function useClickOutside(ref: RefObject<HTMLElement>, cb: () => void) {
  const handleClick = (evt: MouseEvent) => {
    if (ref.current && !ref.current.contains(evt.target as Node)) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
}
