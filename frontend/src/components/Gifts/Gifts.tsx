import { useEffect, useState, useRef } from 'react';
import { weddingConfig } from '../../config';
import './Gifts.scss';

export const Gifts = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const organizer = weddingConfig.organizer;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  const handleCall = () => {
    window.location.href = `tel:${organizer.phone.replace(/\D/g, '')}`;
  };

  return (
    <section ref={sectionRef} className="gifts-section" id="gifts">
      <div className={`gifts-images reveal ${isAnimated ? 'visible' : ''}`}>
        <img
          src="/images/det.svg"
          alt=""
          className="gifts-title"
        />
        <img
          src="/images/envelope.png"
          alt=""
          className="gifts-envelope"
        />
      </div>

      <div className="organizer-info">
        <p className={`organizer-description reveal reveal-delay-1 ${isAnimated ? 'visible' : ''}`}>
          {organizer.description}
        </p>
        <h3 className={`organizer-name reveal reveal-delay-2 ${isAnimated ? 'visible' : ''}`}>{organizer.name}</h3>
        <button className={`btn btn-tilda-outline reveal reveal-delay-3 ${isAnimated ? 'visible' : ''}`} onClick={handleCall}>
          <i className="fa-solid fa-phone me-2"></i>
          {organizer.phone}
        </button>
      </div>

      {/* Вазы с анимацией выезда снизу */}
      <div className="vases-container">
        <img
          src="/images/vase.png"
          alt=""
          className={`animated-vase vase-left ${isAnimated ? 'animate' : ''}`}
        />
        <img
          src="/images/vase.png"
          alt=""
          className={`animated-vase vase-right ${isAnimated ? 'animate' : ''}`}
        />
      </div>
    </section>
  );
};
