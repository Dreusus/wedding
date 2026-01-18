import { useEffect, useRef, useState } from 'react';
import { weddingConfig } from '../../config';
import { useCountdown } from '../../hooks/useCountdown';
import { FabricDivider } from '../FabricDivider/FabricDivider';
import './Home.scss';

export const Home = () => {
  const countdown = useCountdown(weddingConfig.wedding.date);
  const [topVisible, setTopVisible] = useState(false);
  const [burgundyVisible, setBurgundyVisible] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const burgundyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerTop = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setTopVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    const observerBurgundy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setBurgundyVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (topRef.current) observerTop.observe(topRef.current);
    if (burgundyRef.current) observerBurgundy.observe(burgundyRef.current);

    return () => {
      observerTop.disconnect();
      observerBurgundy.disconnect();
    };
  }, []);

  return (
    <section id="home" className="home-section position-relative p-0 m-0">
      {/* Decorative flowers */}
      <img src="/images/flower.webp" alt="" className="flower flower-1" />
      <img src="/images/flower2.webp" alt="" className="flower flower-2" />
      <img src="/images/flower3.webp" alt="" className="flower flower-3" />

      {/* Main content */}
      <div ref={topRef} className="home-content position-relative text-center">
        {/* Title SVG */}
        <div className={`title-container pt-4 reveal ${topVisible ? 'visible' : ''}`}>
          <img
            src={weddingConfig.images.svg.title}
            alt="Приглашение на свадьбу"
            className="title-svg"
          />
        </div>

        {/* Names SVG */}
        <div className={`names-container my-3 reveal reveal-delay-2 ${topVisible ? 'visible' : ''}`}>
          <img
            src={weddingConfig.images.svg.names}
            alt={`${weddingConfig.groom.name} & ${weddingConfig.bride.name}`}
            className="names-svg"
          />
        </div>

        {/* Date SVG */}
        <div className={`date-container my-3 reveal reveal-delay-4 ${topVisible ? 'visible' : ''}`}>
          <img
            src={weddingConfig.images.svg.date}
            alt={weddingConfig.wedding.dateFormatted}
            className="date-svg"
          />
        </div>
      </div>

      <FabricDivider/>

      {/* Burgundy section */}
      <div ref={burgundyRef} className="burgundy-section">
        {/* Invitation text */}
        <div className="invitation-text-container">
          <div className={`invite-svg-container reveal ${burgundyVisible ? 'visible' : ''}`}>
            <img
              src={weddingConfig.images.svg.invite}
              alt="Приглашаем"
              className="invite-svg"
            />
          </div>

          <p className={`invitation-text reveal reveal-delay-1 ${burgundyVisible ? 'visible' : ''}`}>
            {weddingConfig.quotes[0].text}
          </p>

          <p className={`invitation-text reveal reveal-delay-2 ${burgundyVisible ? 'visible' : ''}`}>
            {weddingConfig.quotes[1].text}
          </p>

          <p className={`invitation-subtitle reveal reveal-delay-3 ${burgundyVisible ? 'visible' : ''}`}>
            Ждём вас на нашей свадьбе через:
          </p>

          {/* Countdown Timer */}
          <div className={`countdown-timer reveal reveal-delay-4 ${burgundyVisible ? 'visible' : ''}`}>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.days}</span>
              <span className="countdown-label">дней</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.hours}</span>
              <span className="countdown-label">часов</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.minutes}</span>
              <span className="countdown-label">минут</span>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <span className="countdown-value">{countdown.seconds}</span>
              <span className="countdown-label">секунд</span>
            </div>
          </div>
        </div>
      </div>

      <FabricDivider/>
    </section>
  );
};
