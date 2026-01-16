import { useState, useEffect } from 'react';
import { weddingConfig } from '../../config';

export const DesktopSidebar = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = weddingConfig.images.desktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="sticky-top vh-100 d-none d-sm-block col-sm-5 col-md-6 col-lg-7 col-xl-8 col-xxl-9 overflow-y-hidden m-0 p-0">
      <div className="position-relative bg-white-black d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex position-absolute w-100 h-100">
          <div className="position-relative overflow-hidden vw-100">
            {slides.map((src, index) => (
              <div
                key={index}
                className={`position-absolute h-100 w-100 slide-desktop ${
                  index === activeSlide ? 'slide-desktop-active' : ''
                }`}
                style={{
                  opacity: index === activeSlide ? 1 : 0,
                  transition: 'opacity 1s ease-in-out',
                }}
              >
                <img
                  src={src}
                  alt="bg"
                  className="bg-cover-home"
                  style={{ maskImage: 'none', opacity: 0.3 }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-4 bg-overlay-auto rounded-5">
          <h2 className="font-esthetic mb-4" style={{ fontSize: '2rem' }}>
            {weddingConfig.groom.name} & {weddingConfig.bride.name}
          </h2>
          <p className="m-0" style={{ fontSize: '1rem' }}>
            {weddingConfig.wedding.dayOfWeek}, {weddingConfig.wedding.dateFormatted}
          </p>
        </div>
      </div>
    </div>
  );
};
