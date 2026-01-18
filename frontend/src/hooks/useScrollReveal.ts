import { useEffect, useState, useRef, RefObject } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollReveal = <T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T>, boolean] => {
  const { threshold = 0.2, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, threshold, rootMargin]);

  return [ref, isVisible];
};
