import { useState } from 'react';
import { weddingConfig } from '../../config';
import './Gallery.scss';

export const Gallery = () => {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const firstHalf = weddingConfig.images.gallery.slice(0, 3);
  const secondHalf = weddingConfig.images.gallery.slice(3, 6);

  const handlePrev = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    total: number
  ) => {
    setter(current === 0 ? total - 1 : current - 1);
  };

  const handleNext = (
    setter: React.Dispatch<React.SetStateAction<number>>,
    current: number,
    total: number
  ) => {
    setter((current + 1) % total);
  };

  return (
    <section className="bg-white-black py-4" id="gallery">
      <div className="container">
        <div className="border rounded-5 shadow p-3">
          <h2 className="font-esthetic text-center py-2 m-0" style={{ fontSize: '2.25rem' }}>
            Галерея
          </h2>

          {/* First Carousel */}
          <div className="carousel slide mt-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="carousel-indicators">
              {firstHalf.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === activeIndex1 ? 'active' : ''}
                  onClick={() => setActiveIndex1(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner rounded-4">
              {firstHalf.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeIndex1 ? 'active' : ''}`}
                >
                  <img
                    src={src}
                    alt={`image ${index + 1}`}
                    className="d-block img-fluid cursor-pointer w-100"
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => handlePrev(setActiveIndex1, activeIndex1, firstHalf.length)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              onClick={() => handleNext(setActiveIndex1, activeIndex1, firstHalf.length)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* Second Carousel */}
          <div className="carousel slide mt-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="carousel-indicators">
              {secondHalf.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === activeIndex2 ? 'active' : ''}
                  onClick={() => setActiveIndex2(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="carousel-inner rounded-4">
              {secondHalf.map((src, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeIndex2 ? 'active' : ''}`}
                >
                  <img
                    src={src}
                    alt={`image ${index + 4}`}
                    className="d-block img-fluid cursor-pointer w-100"
                  />
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              onClick={() => handlePrev(setActiveIndex2, activeIndex2, secondHalf.length)}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              onClick={() => handleNext(setActiveIndex2, activeIndex2, secondHalf.length)}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
