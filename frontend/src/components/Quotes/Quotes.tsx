import { weddingConfig } from '../../config';
import './Quotes.scss';

export const Quotes = () => {
  return (
    <section className="bg-light-dark pt-2 pb-4">
      <div className="container text-center">
        <h2 className="font-esthetic pt-2 pb-1 m-0" style={{ fontSize: '2rem' }}>
          О любви
        </h2>

        {weddingConfig.quotes.map((quote, index) => (
          <div
            key={index}
            className="bg-theme-auto mt-4 p-3 shadow rounded-4"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <p className="p-1 mb-2" style={{ fontSize: '0.95rem' }}>
              {quote.text}
            </p>
            <p className="m-0 p-0 text-theme-auto" style={{ fontSize: '0.95rem' }}>
              — {quote.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
