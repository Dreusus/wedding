import { useEffect, useState } from 'react';
import { useApp } from '../../contexts/AppContext';
import { weddingConfig } from '../../config';
import './Loading.scss';

export const Loading = () => {
  const { isLoading, setIsLoading, setIsWelcomeVisible, loadingProgress, setLoadingProgress } = useApp();
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [setLoadingProgress]);

  useEffect(() => {
    if (loadingProgress >= 100) {
      // Fade out loading screen
      setTimeout(() => {
        setOpacity(0);
        setTimeout(() => {
          setIsLoading(false);
          setIsWelcomeVisible(true);
        }, 500);
      }, 300);
    }
  }, [loadingProgress, setIsLoading, setIsWelcomeVisible]);

  if (!isLoading && loadingProgress >= 100) {
    return null;
  }

  return (
    <div
      className="loading-page bg-white-black"
      style={{ opacity, transition: 'opacity 0.5s ease' }}
    >
      <div className="d-flex justify-content-center align-items-center vh-100 overflow-y-auto">
        <div className="d-flex flex-column width-loading text-center">
          <img
            src={weddingConfig.images.background}
            className="img-fluid mb-3 mx-auto object-fit-cover"
            alt="icon"
            style={{ width: '3.5rem', height: '3.5rem', borderRadius: '50%' }}
          />
          <div className="progress" role="progressbar" style={{ height: '0.5rem' }}>
            <div
              className="progress-bar"
              style={{ width: `${Math.min(loadingProgress, 100)}%` }}
            />
          </div>
          <small className="mt-1 text-theme-auto" style={{ fontSize: '0.8rem' }}>
            Загрузка...
          </small>
        </div>
      </div>
      <div className="text-center position-fixed w-100" style={{ bottom: '8%', left: 0 }}>
        <div className="d-flex flex-column">
          <small className="text-secondary">
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </small>
          <small className="text-theme-auto">31.08.2025</small>
        </div>
      </div>
    </div>
  );
};
