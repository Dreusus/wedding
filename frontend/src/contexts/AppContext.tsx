import { createContext, useContext, useState, useRef, useCallback, type ReactNode, type Dispatch, type SetStateAction } from 'react';

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
