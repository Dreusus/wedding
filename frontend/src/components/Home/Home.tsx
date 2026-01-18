import { weddingConfig } from '../../config';
import { useCountdown } from '../../hooks/useCountdown';
import { FabricDivider } from '../FabricDivider/FabricDivider';
import './Home.scss';

export const Home = () => {
  const countdown = useCountdown(weddingConfig.wedding.date);

  return (
    <section id="home" className="home-section position-relative overflow-hidden p-0 m-0">
      {/* Decorative flowers - top */}
      <img
        src={weddingConfig.images.hero.flowers1}
        alt=""
        className="floating-decoration flowers-top-right"
      />
      <img
        src={weddingConfig.images.hero.flowers2}
        alt=""
        className="floating-decoration flowers-top-left"
      />

      {/* Main content */}
      <div className="home-content position-relative text-center">
        {/* Title SVG */}
        <div className="title-container pt-4">
          <img
            src={weddingConfig.images.svg.title}
            alt="Приглашение на свадьбу"
            className="title-svg"
          />
        </div>

        {/* Names SVG */}
        <div className="names-container my-3">
          <img
            src={weddingConfig.images.svg.names}
            alt={`${weddingConfig.groom.name} & ${weddingConfig.bride.name}`}
            className="names-svg"
          />
        </div>

        {/* Date SVG */}
        <div className="date-container my-3">
          <img
            src={weddingConfig.images.svg.date}
            alt={weddingConfig.wedding.dateFormatted}
            className="date-svg"
          />
        </div>
      </div>

      <FabricDivider/>

      {/* Burgundy section */}
      <div className="burgundy-section">
        {/* Invitation text */}
        <div className="invitation-text-container">
          <div className="invite-svg-container">
            <img
              src={weddingConfig.images.svg.invite}
              alt="Приглашаем"
              className="invite-svg"
            />
          </div>

          <p className="invitation-text">
            {weddingConfig.quotes[0].text}
          </p>

          <p className="invitation-text">
            {weddingConfig.quotes[1].text}
          </p>

          <p className="invitation-subtitle">
            Ждём вас на нашей свадьбе через:
          </p>

          {/* Countdown Timer */}
          <div className="countdown-timer">
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
