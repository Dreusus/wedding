import { weddingConfig } from '../../config';
import './Gifts.scss';

export const Gifts = () => {
  const organizer = weddingConfig.organizer;

  const handleCall = () => {
    window.location.href = `tel:${organizer.phone.replace(/\D/g, '')}`;
  };

  return (
    <section className="gifts-section" id="gifts">
      <div className="gifts-images">
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
        <p className="organizer-description">
          {organizer.description}
        </p>
        <h3 className="organizer-name">{organizer.name}</h3>
        <button className="btn btn-tilda-outline" onClick={handleCall}>
          <i className="fa-solid fa-phone me-2"></i>
          {organizer.phone}
        </button>
      </div>

      {/* Вазы с анимацией выезда снизу */}
      <div className="vases-container">
        <img
          src="/images/vase.png"
          alt=""
          className="animated-vase vase-left"
        />
        <img
          src="/images/vase.png"
          alt=""
          className="animated-vase vase-right"
        />
      </div>
    </section>
  );
};
