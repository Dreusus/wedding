import { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import { weddingConfig } from '../../config';
import './Welcome.scss';

export const Welcome = () => {
  const { isWelcomeVisible, openInvitation, guestName } = useApp();
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isWelcomeVisible) {
      setIsVisible(true);
      // Fade in
      setTimeout(() => setOpacity(1), 50);
    } else if (isVisible) {
      // Fade out
      setOpacity(0);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isWelcomeVisible, isVisible]);

  const handleOpen = () => {
    setOpacity(0);
    setTimeout(() => {
      openInvitation();
    }, 500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="loading-page welcome-tilda"
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      {/* Background decorations */}
      <img
        src={weddingConfig.images.hero.flowers1}
        alt=""
        className="welcome-decoration top-right"
      />
      <img
        src={weddingConfig.images.hero.flowers2}
        alt=""
        className="welcome-decoration top-left"
      />

      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center welcome-content">
          {/* Title */}
          <img
            src={weddingConfig.images.svg.title}
            alt="Приглашение на свадьбу"
            className="welcome-title mb-3"
          />

          {/* Couple Photo */}
          <img
            src={weddingConfig.images.hero.couple}
            alt={`${weddingConfig.groom.name} и ${weddingConfig.bride.name}`}
            className="welcome-photo mb-3 mx-auto"
          />

          {/* Names */}
          <img
            src={weddingConfig.images.svg.names}
            alt={`${weddingConfig.groom.name} & ${weddingConfig.bride.name}`}
            className="welcome-names mb-3"
          />

          {/* Guest name */}
          {guestName && (
            <div className="welcome-guest mb-3">
              <small>Уважаемый гость</small>
              <p className="guest-name">{guestName}</p>
            </div>
          )}

          {/* Open button */}
          <button
            type="button"
            className="btn btn-tilda mx-auto"
            onClick={handleOpen}
          >
            <i className="fa-solid fa-envelope-open fa-bounce me-2"></i>
            Открыть приглашение
          </button>
        </div>
      </div>
    </div>
  );
};
