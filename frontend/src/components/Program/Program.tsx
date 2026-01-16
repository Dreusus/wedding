import { weddingConfig } from '../../config';
import './Program.scss';

export const Program = () => {
  const timeline = weddingConfig.program;

  return (
    <section className="bg-light-dark py-4" id="program">

      <div className="container">
        <h2 className="font-esthetic text-center mb-4" style={{ fontSize: '2.25rem' }}>
          Программа дня
        </h2>

        <p className="text-center mb-4" style={{ fontSize: '0.95rem' }}>
          Мы подготовили для вас насыщенную программу:
        </p>

        <div className="timeline-container">
          {timeline.map((event, index) => (
            <div
              key={index}
              className="timeline-item"
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="timeline-marker">
                <div className="timeline-icon bg-theme-auto shadow">
                  <i className={`fa-solid ${event.icon}`}></i>
                </div>
                {index < timeline.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-content bg-theme-auto rounded-4 shadow p-3">
                <div className="d-flex align-items-center mb-2">
                  <span className="badge bg-primary rounded-pill me-2">{event.time}</span>
                  <h4 className="m-0" style={{ fontSize: '1.1rem' }}>
                    {event.title}
                  </h4>
                </div>
                {event.description && (
                  <p className="m-0 text-secondary" style={{ fontSize: '0.85rem' }}>
                    {event.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
