import { weddingConfig } from '../../config';
import './Organizer.scss';

export const Organizer = () => {
  const organizer = weddingConfig.organizer;

  const handleCall = () => {
    window.location.href = `tel:${organizer.phone.replace(/\D/g, '')}`;
  };

  return (
    <section className="organizer-section section-secondary py-5" id="organizer">
      <div className="container">
        {/* Section with images and organizer info */}
        <div className="organizer-layout">
          {/* Left side image */}
          <div className="organizer-side-image left">
            <img
              src={weddingConfig.images.gallery[3]}
              alt=""
              className="side-photo"
            />
          </div>

          {/* Center content */}
          <div className="organizer-center">
            {/* Gift info card */}
            <div className="organizer-card mb-4">
              <div className="card-inner">
                <img
                  src="https://static.tildacdn.com/tild6634-3564-4130-a363-333765306637/photo.png"
                  alt=""
                  className="gift-image"
                />
                <p className="gift-text">
                  {weddingConfig.gifts.description}
                </p>
              </div>
            </div>

            {/* Organizer info */}
            <div className="organizer-info">
              <p className="organizer-description">
                {organizer.description}
              </p>

              <h3 className="organizer-name">
                {organizer.name}
              </h3>

              <button
                className="btn btn-tilda-outline"
                onClick={handleCall}
              >
                <i className="fa-solid fa-phone me-2"></i>
                {organizer.phone}
              </button>
            </div>
          </div>

          {/* Right side image */}
          <div className="organizer-side-image right">
            <img
              src={weddingConfig.images.gallery[4]}
              alt=""
              className="side-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
