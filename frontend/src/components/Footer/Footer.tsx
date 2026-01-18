import { weddingConfig } from '../../config';
import './Footer.scss';

export const Footer = () => {
  return (
    <section className="footer-section" id="footer">
      {/* Background image with overlay */}
      <div
        className="footer-background"
        style={{
          backgroundImage: `url(${weddingConfig.images.footer.background})`,
        }}
      >
        <div className="footer-overlay"></div>
      </div>

      {/* Content */}
      <div className="footer-content">
        {/* Couple photo */}
        <div className="footer-couple-container">
          <img
            src={weddingConfig.images.footer.couple}
            alt={`${weddingConfig.groom.name} и ${weddingConfig.bride.name}`}
            className="footer-couple-image"
          />
        </div>

        {/* We're waiting text - using SVG */}
        <div className="footer-text-container">
          <img
            src={weddingConfig.images.svg.footer}
            alt="Ждём вас!"
            className="footer-text-svg"
          />
        </div>

        {/* Couple photos side by side */}
        <div className="footer-photos-row">
          <div className="footer-photo-wrapper left">
            <img
              src={weddingConfig.groom.image}
              alt={weddingConfig.groom.name}
              className="footer-side-photo"
            />
          </div>
          <div className="footer-photo-wrapper right">
            <img
              src={weddingConfig.bride.image}
              alt={weddingConfig.bride.name}
              className="footer-side-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
