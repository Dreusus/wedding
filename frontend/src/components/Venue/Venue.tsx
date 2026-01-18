import { useEffect, useState, useRef } from 'react';
import { weddingConfig } from '../../config';
import './Venue.scss';

export const Venue = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <section ref={sectionRef} className="venue-section section-secondary" id="venue">
      {/* Animated flowers */}
      <img src="/images/right_flower.webp" alt="" className={`venue-flower venue-flower-right ${isAnimated ? 'animate' : ''}`} />
      <img src="/images/right_flower.webp" alt="" className={`venue-flower venue-flower-left ${isAnimated ? 'animate' : ''}`} />

      <div className="container text-center">
        {/* Location SVG */}
        <div className={`mb-3 reveal ${isAnimated ? 'visible' : ''}`}>
          <img
            src={weddingConfig.images.svg.location}
            alt="Место проведения"
            className="location-svg"
          />
        </div>

        {/* Venue Image */}
        <div className={`venue-image-container mb-4 reveal reveal-delay-2 ${isAnimated ? 'visible' : ''}`}>
          <img
            src="/images/venue-1.webp"
            alt={weddingConfig.wedding.location.name}
            className="venue-image"
          />
        </div>

        {/* Address */}
        <p className={`venue-address mb-3 reveal reveal-delay-3 ${isAnimated ? 'visible' : ''}`}>
          {weddingConfig.wedding.location.address}
        </p>

        {/* Map Button */}
        <a
          href={weddingConfig.wedding.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-tilda-outline reveal reveal-delay-4 ${isAnimated ? 'visible' : ''}`}
        >
          <i className="fa-solid fa-map-location-dot me-2"></i>
          Посмотреть на карте
        </a>
      </div>
    </section>
  );
};
