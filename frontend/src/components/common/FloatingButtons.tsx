import { useTheme } from '../../contexts/ThemeContext';
import { useApp } from '../../contexts/AppContext';

export const FloatingButtons = () => {
  const { toggleTheme, isAutoMode } = useTheme();
  const { isInvitationOpened, isAudioPlaying, toggleAudio } = useApp();

  if (!isInvitationOpened) {
    return null;
  }

  return (
    <div
      className="d-flex position-fixed flex-column"
      style={{ bottom: '10vh', right: '2vh', zIndex: 1030 }}
    >
      {/* Theme Button */}
      {isAutoMode && (
        <button
          type="button"
          className="btn bg-light-dark border btn-sm rounded-circle btn-transparent shadow-sm mt-3"
          aria-label="Change theme"
          onClick={toggleTheme}
        >
          <i className="fa-solid fa-circle-half-stroke"></i>
        </button>
      )}

      {/* Audio Button */}
      <button
        type="button"
        className="btn bg-light-dark border btn-sm rounded-circle btn-transparent shadow-sm mt-3"
        aria-label="Toggle audio"
        onClick={toggleAudio}
      >
        <i
          className={`fa-solid ${isAudioPlaying ? 'fa-circle-pause spin-button' : 'fa-circle-play'}`}
        ></i>
      </button>
    </div>
  );
};
