import { weddingConfig } from '../../config';
import { LoveAnimation } from '../common/LoveAnimation';
import './Organizer.scss';

export const Organizer = () => {
  const organizer = weddingConfig.organizer;

  const handleCall = () => {
    window.location.href = `tel:${organizer.phone.replace(/\D/g, '')}`;
  };

  const handleTelegram = () => {
    if (organizer.telegram) {
      window.open(`https://t.me/${organizer.telegram}`, '_blank');
    }
  };

  return (
    <section className="bg-white-black py-4 position-relative overflow-hidden" id="organizer" style={{ zIndex: 1 }}>
      <LoveAnimation position="top-left" delay={1000} />
      <LoveAnimation position="bottom-right" delay={2500} />
      <div className="container text-center">
        <h2 className="font-esthetic mb-4" style={{ fontSize: '2.25rem' }}>
          Остались вопросы?
        </h2>

        <p className="mb-4" style={{ fontSize: '0.95rem' }}>
          По любым вопросам вы можете обратиться к нашему координатору:
        </p>

        <div
          className="bg-theme-auto rounded-4 shadow p-4 mx-auto"
          style={{ maxWidth: '320px' }}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>
            {organizer.name}
          </h3>
          <p className="text-secondary mb-3" style={{ fontSize: '0.85rem' }}>
            {organizer.role}
          </p>

          <div className="d-flex justify-content-center gap-2">
            <button
              className="btn btn-outline-auto btn-sm rounded-pill shadow-sm px-3"
              onClick={handleCall}
            >
              <i className="fa-solid fa-phone me-2"></i>
              Позвонить
            </button>

            {organizer.telegram && (
              <button
                className="btn btn-outline-auto btn-sm rounded-pill shadow-sm px-3"
                onClick={handleTelegram}
              >
                <i className="fa-brands fa-telegram me-2"></i>
                Написать
              </button>
            )}
          </div>

          <p className="mt-3 mb-0 text-secondary" style={{ fontSize: '0.8rem' }}>
            {organizer.phone}
          </p>
        </div>
      </div>
    </section>
  );
};
