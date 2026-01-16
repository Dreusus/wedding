import { useEffect, useRef } from 'react';

interface LoveAnimationProps {
  position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  delay?: number;
}

export const LoveAnimation = ({ position, delay = 500 }: LoveAnimationProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (svgRef.current) {
        svgRef.current.classList.add('animate-love');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const positionStyles: Record<string, React.CSSProperties> = {
    'top-right': { top: '5%', right: '5%' },
    'bottom-left': { bottom: '15%', left: '5%' },
    'top-left': { top: '5%', left: '5%' },
    'bottom-right': { bottom: '15%', right: '5%' },
  };

  return (
    <div className="position-absolute" style={{ ...positionStyles[position], zIndex: 10 }}>
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="currentColor"
        className="opacity-50"
        viewBox="0 0 16 16"
      >
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
      </svg>
    </div>
  );
};
