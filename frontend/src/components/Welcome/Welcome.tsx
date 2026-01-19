import { useState, useEffect } from 'react';
import { useApp } from '../../contexts/AppContext';
import { weddingConfig } from '../../config';
import './Welcome.scss';

export const Welcome = () => {
  const { isWelcomeVisible, openInvitation, guestName } = useApp();
  const [opacity, setOpacity] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isStickerCut, setIsStickerCut] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isLetterExpanding, setIsLetterExpanding] = useState(false);

  useEffect(() => {
    if (isWelcomeVisible) {
      setIsVisible(true);
      setTimeout(() => setOpacity(1), 50);
    } else if (isVisible) {
      setOpacity(0);
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isWelcomeVisible, isVisible]);

  // Cut sticker - then envelope opens and letter expands automatically
  const handleStickerCut = () => {
    if (isStickerCut) return;

    setIsStickerCut(true);

    // After ribbon cut, open envelope
    setTimeout(() => {
      setIsEnvelopeOpen(true);

      // After envelope opens, expand letter automatically
      setTimeout(() => {
        setIsLetterExpanding(true);

        // After letter expands, transition to main page
        setTimeout(() => {
          openInvitation();
        }, 800);
      }, 1500); // Wait for letter to rise and hearts to fly
    }, 300);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`welcome-page ${!isStickerCut ? 'scissors' : ''}`}
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      <div className="petals">
        {Array.from({ length: 12 }).map((_, idx) => (
          <span key={idx} className={`petal petal-${idx + 1}`} />
        ))}
      </div>

      {/* Guest name */}
      {guestName && (
        <div className="welcome-guest">
          <small>Уважаемый гость</small>
          <p className="guest-name">{guestName}</p>
        </div>
      )}

      {/* Names */}
      <div className="welcome-names">
        <span className="welcome-name">{weddingConfig.groom.name}</span>
        <span className="welcome-and">&</span>
        <span className="welcome-name">{weddingConfig.bride.name}</span>
      </div>

      {/* Envelope wrapper */}
      <div className="envelope-wrapper">
        <div className={`envelope ${isEnvelopeOpen ? 'open' : 'close'}`}>
          {/* Flap (top triangle that rotates) */}
          <div className="front flap"></div>

          {/* Pocket (main body) */}
          <div className="front pocket"></div>

          {/* Letter inside - just lines like original */}
          <div className={`letter ${isLetterExpanding ? 'expanding' : ''}`}>
            <div className="words line1"></div>
            <div className="words line2"></div>
            <div className="words line3"></div>
            <div className="words line4"></div>
          </div>

          {/* Hearts that fly out */}
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>

          {/* Ribbon/Sticker with animated hearts */}
          <div
            className={`ribbon ${isStickerCut ? 'cut' : ''}`}
            onClick={handleStickerCut}
          ></div>
        </div>
      </div>

      {/* Date */}
      <div className="welcome-date">
        <span>{weddingConfig.wedding.dateFormatted}</span>
      </div>

      {/* Hint */}
      {!isStickerCut && (
        <div className="welcome-hint">
        </div>
      )}
    </div>
  );
};
