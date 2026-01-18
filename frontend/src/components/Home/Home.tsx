import { weddingConfig } from '../../config';
import './Home.scss';

export const Home = () => {
  const handleSaveToCalendar = () => {
    const formatDate = (d: string) =>
      new Date(d).toISOString().replace(/[-:]/g, '').split('.').shift();

    const url = new URL('https://calendar.google.com/calendar/render');
    const endDate = new Date(weddingConfig.wedding.date);
    endDate.setHours(endDate.getHours() + 6);

    const data = new URLSearchParams({
      action: 'TEMPLATE',
      text: `Свадьба ${weddingConfig.groom.name} и ${weddingConfig.bride.name}`,
      dates: `${formatDate(weddingConfig.wedding.date)}/${formatDate(endDate.toISOString())}`,
      details: `Приглашение на свадьбу ${weddingConfig.groom.name} и ${weddingConfig.bride.name}. ${weddingConfig.wedding.dateFormatted}`,
      location: weddingConfig.wedding.location.address,
      ctz: 'Europe/Moscow',
    });

    url.search = data.toString();
    window.open(url.toString(), '_blank');
  };

  return (
    <section id="home" className="home-section position-relative overflow-hidden p-0 m-0">
      {/* Decorative flowers - top */}
      <img
        src={weddingConfig.images.hero.flowers1}
        alt=""
        className="floating-decoration flowers-top-right"
      />
      <img
        src={weddingConfig.images.hero.flowers2}
        alt=""
        className="floating-decoration flowers-top-left"
      />

      {/* Main content */}
      <div className="home-content position-relative text-center">
        {/* Title SVG */}
        <div className="title-container pt-4">
          <img
            src={weddingConfig.images.svg.title}
            alt="Приглашение на свадьбу"
            className="title-svg"
          />
        </div>

        {/* Names SVG */}
        <div className="names-container my-3">
          <img
            src={weddingConfig.images.svg.names}
            alt={`${weddingConfig.groom.name} & ${weddingConfig.bride.name}`}
            className="names-svg"
          />
        </div>

        {/* Couple Photo */}
        <div className="couple-photo-container">
          <img
            src={weddingConfig.images.hero.couple}
            alt={`${weddingConfig.groom.name} и ${weddingConfig.bride.name}`}
            className="couple-photo"
          />
        </div>

        {/* Date SVG */}
        <div className="date-container my-3">
          <img
            src={weddingConfig.images.svg.date}
            alt={weddingConfig.wedding.dateFormatted}
            className="date-svg"
          />
        </div>
      </div>

      {/* Burgundy section */}
      <div className="burgundy-section">
        {/* Decorative couple images */}
        <div className="couple-images-container">
          <div className="couple-image-wrapper left">
            <img
              src={weddingConfig.images.gallery[2]}
              alt=""
              className="couple-small-image"
            />
          </div>
          <div className="couple-image-wrapper center">
            <img
              src={weddingConfig.images.gallery[0]}
              alt=""
              className="couple-center-image"
            />
          </div>
          <div className="couple-image-wrapper right">
            <img
              src={weddingConfig.images.gallery[1]}
              alt=""
              className="couple-small-image"
            />
          </div>
        </div>

        {/* Invitation text */}
        <div className="invitation-text-container">
          <div className="invite-svg-container">
            <img
              src={weddingConfig.images.svg.invite}
              alt="Приглашаем"
              className="invite-svg"
            />
          </div>

          <p className="invitation-text">
            {weddingConfig.quotes[0].text}
          </p>

          <p className="invitation-text">
            {weddingConfig.quotes[1].text}
          </p>

          <p className="invitation-subtitle">
            Ждём вас на нашей свадьбе через:
          </p>

          {/* Countdown placeholder - will be replaced by Countdown component */}
          <div className="countdown-preview">
            <img
              src={weddingConfig.images.svg.countdown}
              alt=""
              className="countdown-svg"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
          <div className="mouse-animation border border-2 rounded-5 px-2 py-1 opacity-50">
            <div className="scroll-animation rounded-4"></div>
          </div>
        </div>
        <p className="pb-4 m-0" style={{ fontSize: '0.825rem', opacity: 0.7 }}>
          Листайте вниз
        </p>
      </div>

      {/* Save to calendar button */}
      <div className="text-center pb-4">
        <button
          className="btn btn-tilda-outline btn-sm shadow rounded-pill px-4 py-2"
          style={{ fontSize: '0.825rem' }}
          onClick={handleSaveToCalendar}
        >
          <i className="fa-solid fa-calendar-check me-2"></i>
          Сохранить в календарь
        </button>
      </div>
    </section>
  );
};
