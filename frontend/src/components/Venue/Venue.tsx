import { weddingConfig } from '../../config';
import './Venue.scss';

export const Venue = () => {
  return (
    <section className="venue-section section-secondary" id="venue">
      <div className="container text-center">
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
    </section>
  );
};
