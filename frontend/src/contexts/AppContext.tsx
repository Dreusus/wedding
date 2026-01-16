import { createContext, useContext, useState, useRef, useCallback, type ReactNode, type Dispatch, type SetStateAction } from 'react';
import confetti from 'canvas-confetti';

interface AppContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  loadingProgress: number;
  setLoadingProgress: Dispatch<SetStateAction<number>>;
  isWelcomeVisible: boolean;
  setIsWelcomeVisible: (visible: boolean) => void;
  isInvitationOpened: boolean;
  openInvitation: () => void;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  guestName: string | null;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Extract guest name from URL
  const getGuestName = () => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('to');
    return name ? decodeURIComponent(name) : null;
  };

  const [guestName] = useState<string | null>(getGuestName);

  const openInvitation = useCallback(() => {
    setIsInvitationOpened(true);
    setIsWelcomeVisible(false);

    // Heart shape for confetti
    const heart = confetti.shapeFromPath({
      path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
    });

    const colors = ['#FFC0CB', '#FF1493', '#C71585'];
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    // Initial burst
    confetti({
      origin: { y: 1 },
      zIndex: 1057,
    });

    // Falling hearts animation (15 seconds)
    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      colors.forEach((color) => {
        confetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: Math.max(50, 75 * (timeLeft / duration)),
          origin: {
            x: Math.random(),
            y: Math.abs(Math.random() - (timeLeft / duration)),
          },
          zIndex: 1057,
          colors: [color],
          shapes: [heart],
          drift: randomInRange(-0.5, 0.5),
          gravity: randomInRange(0.5, 1),
          scalar: randomInRange(0.5, 1),
        });
      });

      if (timeLeft > 0) {
        requestAnimationFrame(frame);
      }
    };

    setTimeout(frame, 1500);

    // Start playing audio
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsAudioPlaying(true);
      }).catch(() => {
        // Audio play failed (user interaction required)
      });
    }
  }, []);

  const toggleAudio = useCallback(() => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
        setIsAudioPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsAudioPlaying(true);
        }).catch(() => {
          // Audio play failed
        });
      }
    }
  }, [isAudioPlaying]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        loadingProgress,
        setLoadingProgress,
        isWelcomeVisible,
        setIsWelcomeVisible,
        isInvitationOpened,
        openInvitation,
        isAudioPlaying,
        toggleAudio,
        audioRef,
        guestName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
