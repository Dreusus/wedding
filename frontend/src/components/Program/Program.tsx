import { weddingConfig } from '../../config';
import './Program.scss';

export const Program = () => {
  const timeline = weddingConfig.program;

  return (
    <section className="program-section section-primary py-5" id="program">
      {/* Title */}
      <div className="container text-center">
        <div className="program-title-container mb-4">
          <img
            src={weddingConfig.images.svg.program}
            alt="Программа дня"
            className="program-title-svg"
          />
        </div>

        {/* Clock image */}
        <div className="clock-container mb-4">
          <img
            src={weddingConfig.images.program.clock}
            alt=""
            className="clock-image"
          />
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line-vertical"></div>

          {timeline.map((event, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-icon-wrapper">
                <div className="timeline-icon">
                  <i className={`fa-solid ${event.icon}`}></i>
                </div>
              </div>

              <div className="timeline-content">
                <div className="timeline-time">{event.time}</div>
                <div className="timeline-title">{event.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
