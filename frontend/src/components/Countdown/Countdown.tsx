import { useCountdown } from '../../hooks/useCountdown';
import { weddingConfig } from '../../config';
import { LoveAnimation } from '../common/LoveAnimation';
import './Countdown.scss';

export const Countdown = () => {
  const countdown = useCountdown(weddingConfig.wedding.date);

  return (
    <section className="bg-white-black pb-2" id="wedding-date">
      <div className="container text-center">
        <h2 className="font-esthetic py-4 m-0" style={{ fontSize: '2.25rem' }}>
          Счастливый день
        </h2>

        <div className="border rounded-pill shadow py-2 px-4 mt-2 mb-4">
          <div className="row justify-content-center">
            <div className="col-3 p-1">
              <p className="d-inline m-0 p-0" style={{ fontSize: '1.25rem' }}>
                {countdown.days}
              </p>
              <small className="ms-1 me-0 my-0 p-0 d-inline">Дней</small>
            </div>
            <div className="col-3 p-1">
              <p className="d-inline m-0 p-0" style={{ fontSize: '1.25rem' }}>
                {countdown.hours}
              </p>
              <small className="ms-1 me-0 my-0 p-0 d-inline">Часов</small>
            </div>
            <div className="col-3 p-1">
              <p className="d-inline m-0 p-0" style={{ fontSize: '1.25rem' }}>
                {countdown.minutes}
              </p>
              <small className="ms-1 me-0 my-0 p-0 d-inline">Минут</small>
            </div>
            <div className="col-3 p-1">
              <p className="d-inline m-0 p-0" style={{ fontSize: '1.25rem' }}>
                {countdown.seconds}
              </p>
              <small className="ms-1 me-0 my-0 p-0 d-inline">Секунд</small>
            </div>
          </div>
        </div>

        <p className="py-2 m-0" style={{ fontSize: '0.95rem' }}>
          Мы рады пригласить Вас на торжественную церемонию нашей свадьбы:
        </p>

        <div className="position-relative">
          <LoveAnimation position="top-right" delay={3000} />
        </div>

        <div className="overflow-x-hidden">
          <div className="py-2" data-aos="fade-right" data-aos-duration="1500">
            <h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem' }}>
              Церемония
            </h2>
            <p style={{ fontSize: '0.95rem' }}>
              {weddingConfig.wedding.ceremony.time} - {weddingConfig.wedding.ceremony.title}
            </p>
          </div>

          <div className="py-2" data-aos="fade-left" data-aos-duration="1500">
            <h2 className="font-esthetic m-0 py-2" style={{ fontSize: '2rem' }}>
              Банкет
            </h2>
            <p style={{ fontSize: '0.95rem' }}>
              {weddingConfig.wedding.banquet.time} - {weddingConfig.wedding.banquet.title}
            </p>
          </div>
        </div>

        <p className="py-2 m-0" style={{ fontSize: '0.95rem' }}>
          Для создания особой атмосферы просим придерживаться дресс-кода:
        </p>

        <div className="position-relative">
          <LoveAnimation position="top-left" delay={2000} />
        </div>

        <div className="py-2" data-aos="fade-down" data-aos-duration="1500">
          <div className="d-flex justify-content-center align-items-center mb-3">
            {weddingConfig.dressCode.colors.map((color, index) => (
              <div
                key={color}
                className="shadow rounded-circle border border-secondary"
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: color,
                  marginLeft: index > 0 ? '-1rem' : 0,
                }}
              />
            ))}
          </div>
          <p style={{ fontSize: '0.95rem' }}>{weddingConfig.dressCode.description}</p>
        </div>

        <div className="py-2" data-aos="fade-down" data-aos-duration="1500">
          <a
            href={weddingConfig.wedding.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-auto btn-sm rounded-pill shadow mb-2 px-3"
          >
            <i className="fa-solid fa-map-location-dot me-2"></i>
            Открыть карту
          </a>
          <small className="d-block my-1">{weddingConfig.wedding.location.address}</small>
        </div>
      </div>
    </section>
  );
};
