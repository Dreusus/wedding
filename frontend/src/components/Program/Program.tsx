import { useEffect, useState, useRef } from 'react';
import './Program.scss';

export const Program = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="program-section" id="program">
      <img
        src="/images/program.png"
        alt="Программа дня"
        className={`program-image reveal ${isVisible ? 'visible' : ''}`}
      />
    </section>
  );
};
