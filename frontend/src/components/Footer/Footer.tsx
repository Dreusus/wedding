import './Footer.scss';

export const Footer = () => {
  return (
    <section className="footer-section" id="footer">
      {/* Роза выезжает сверху */}
      <div className="footer-roses-container">
        <img
          src="/images/roses.png"
          alt=""
          className="footer-roses animate-from-top"
        />
      </div>

      {/* 1.svg выезжает из розы */}
      <div className="footer-svg1-container">
        <img
          src="/images/footer-1.svg"
          alt=""
          className="footer-svg1 animate-from-rose"
        />
      </div>

      {/* 2.svg выезжает снизу */}
      <div className="footer-svg2-container">
        <img
          src="/images/footer-2.svg"
          alt=""
          className="footer-svg2 animate-from-bottom"
        />
      </div>

      {/* End */}
      <div className="footer-end-container">
        <img
          src="/images/end.png"
          alt=""
          className="footer-end-image"
        />
      </div>
    </section>
  );
};
