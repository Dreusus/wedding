import { useCountdown } from '../../hooks/useCountdown';
import { weddingConfig } from '../../config';
import './Countdown.scss';

export const Countdown = () => {
  const countdown = useCountdown(weddingConfig.wedding.date);

  return (
    <section className="countdown-section section-secondary py-5" id="wedding-date">
      <div className="container text-center">
        {/* Countdown SVG Title */}
        <div className="mb-4">
          <img
            src={weddingConfig.images.svg.countdown}
            alt="До свадьбы осталось"
            className="countdown-title-svg"
          />
        </div>

        {/* Countdown Timer */}
        <div className="countdown-timer mb-4">
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

        {/* Venue Section */}
        <div className="venue-section mt-5">
          {/* Location SVG */}
          <div className="mb-3">
            <img
              src={weddingConfig.images.svg.location}
              alt="Место проведения"
              className="location-svg"
            />
          </div>

          {/* Venue Name */}
          <div className="mb-3">
            <img
              src={weddingConfig.images.svg.venue}
              alt={weddingConfig.wedding.location.name}
              className="venue-svg"
            />
          </div>

          {/* Venue Image */}
          <div className="venue-image-container mb-4">
            <img
              src={weddingConfig.images.venue.main}
              alt={weddingConfig.wedding.location.name}
              className="venue-image"
            />
          </div>

          {/* Address */}
          <p className="venue-address mb-3">
            {weddingConfig.wedding.location.address}
          </p>

          {/* Map Button */}
          <a
            href={weddingConfig.wedding.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-tilda-outline"
          >
            <i className="fa-solid fa-map-location-dot me-2"></i>
            Посмотреть на карте
          </a>
        </div>
      </div>
    </section>
  );
};
