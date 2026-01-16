import { weddingConfig } from '../../config';
import './Footer.scss';

export const Footer = () => {
  return (
    <section className="bg-white-black py-2 no-gap-bottom">
      <div className="container text-center">
        <p className="pb-2 pt-4" style={{ fontSize: '0.95rem' }}>
          Благодарим вас за внимание и тёплые пожелания. Ваше присутствие — лучший подарок для нас!
        </p>

        <h2 className="font-esthetic" style={{ fontSize: '2rem' }}>
          С любовью, {weddingConfig.groom.name} и {weddingConfig.bride.name}
        </h2>

        <hr className="my-3" />

        <div className="row align-items-center justify-content-between flex-column pb-3">
          <div className="col-auto">
            <small>
              Сделано с<i className="fa-solid fa-heart mx-1"></i>любовью
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};
