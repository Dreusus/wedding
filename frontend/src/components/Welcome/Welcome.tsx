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
      className="loading-page bg-white-black"
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column text-center">
          <h2 className="font-esthetic mb-4" style={{ fontSize: '2.25rem' }}>
            Свадьба
          </h2>

          <img
            src={weddingConfig.images.background}
            alt="background"
            className="img-center-crop rounded-circle border border-3 border-light shadow mb-4 mx-auto"
          />

          <h2 className="font-esthetic mb-4" style={{ fontSize: '2.25rem' }}>
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </h2>

          {guestName && (
            <div className="m-2">
              <small className="mt-0 mb-1 mx-0 p-0">Уважаемый гость</small>
              <p className="m-0 p-0" style={{ fontSize: '1.25rem' }}>
                {guestName}
              </p>
            </div>
          )}

          <button
            type="button"
            className="btn btn-light shadow rounded-4 mt-3 mx-auto"
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
