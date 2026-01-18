import { useEffect, useState, useRef } from 'react';
import './Footer.scss';

export const   Footer = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <section ref={sectionRef} className="footer-section" id="footer">
      {/* Роза выезжает вниз из разделителя */}
      <div className="footer-roses-container">
        <img
          src="/images/roses.png"
          alt=""
          className={`footer-roses ${isAnimated ? 'animate-slide-down' : ''}`}
        />
      </div>

      {/* SVG контейнер */}
      <div className="footer-svgs-container">
        <img
          src="/images/footer-1.svg"
          alt=""
          className={`footer-svg1 ${isAnimated ? 'animate-from-rose' : ''}`}
        />
        <img
          src="/images/footer-2.svg"
          alt=""
          className={`footer-svg2 ${isAnimated ? 'animate-from-bottom' : ''}`}
        />
      </div>

      {/* End */}
      <div className="footer-end-container">
        <img
          src="/images/end.png"
          alt=""
          className="footer-end-image"
        />
      </div>
    </section>
  );
};
