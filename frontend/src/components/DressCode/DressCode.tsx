import { useEffect, useState, useRef } from 'react';
import './DressCode.scss';

const colorCircles = [
  { color: '#ffffff' },
  { color: '#8b6f5c' },
  { color: '#c9a88e' },
  { color: '#d4c4b5' },
  { color: '#f6ece3' },
  { color: '#4b0b22' },  // бордовый акцентный (right bottom)
];

export const DressCode = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimated) {
            setIsAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isAnimated]);

  return (
    <section ref={sectionRef} className="dresscode-section section-secondary" id="dresscode">
      <div className="container">
        {/* Title */}
        <div className={`dresscode-title-container text-center mb-4 reveal ${isAnimated ? 'visible' : ''}`}>
          <img
            src="https://static.tildacdn.com/tild3531-6137-4735-b936-396230343437/-.svg"
            alt="Дресс-код"
            className="dresscode-title-svg"
          />
        </div>

        {/* Description */}
        <p className={`dresscode-description text-center mb-4 reveal reveal-delay-2 ${isAnimated ? 'visible' : ''}`}>
          Мы очень ждём и с удовольствием готовимся к этому незабываемому дню! Поддержите нас вашими улыбками и объятиями, а также красивыми нарядами в палитре торжества:
        </p>

        {/* Main content - Girl with color circles */}
        <div className={`dresscode-content reveal reveal-delay-3 ${isAnimated ? 'visible' : ''}`}>
          <div className="dresscode-girl-wrapper">
            {/* Girl image */}
            <img
              src="https://static.tildacdn.com/tild3664-3564-4335-b365-353238663864/Airbrush-BG-CHANGER-.jpg"
              alt="Дресс-код"
              className="dresscode-girl-image"
            />

            {/* Color circles - all stacked in center, then animate out */}
            <div className={`color-circles-container ${isAnimated ? 'animated' : ''}`}>
              {colorCircles.map((circle, index) => (
                <div
                  key={index}
                  className={`color-circle circle-${index}`}
                  style={{ backgroundColor: circle.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
