import { weddingConfig } from '../../config';
import { LoveAnimation } from '../common/LoveAnimation';
import './Couple.scss';

export const Couple = () => {
  return (
    <section className="bg-white-black text-center" id="bride">
      <h2 className="font-esthetic py-4 m-0" style={{ fontSize: '2rem' }}>
        Мы нашли друг друга
      </h2>
      <p className="pb-4 px-2 m-0" style={{ fontSize: '0.95rem' }}>
        С радостью приглашаем Вас разделить с нами счастье этого особенного дня:
      </p>

      <div className="overflow-x-hidden pb-4">
        <div className="position-relative">
          <LoveAnimation position="top-right" delay={500} />

          <div data-aos="fade-right" data-aos-duration="2000" className="pb-1">
            <img
              src={weddingConfig.groom.image}
              alt="groom"
              className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
            />
            <h2 className="font-esthetic m-0" style={{ fontSize: '2.125rem' }}>
              {weddingConfig.groom.name}
            </h2>
            <p className="mt-3 mb-1" style={{ fontSize: '1.25rem' }}>
              {weddingConfig.groom.role}
            </p>
          </div>

          <LoveAnimation position="bottom-left" delay={2000} />
        </div>

        <h2 className="font-esthetic mt-4" style={{ fontSize: '4.5rem' }}>
          &
        </h2>

        {/* Bride */}
        <div className="position-relative">
          <LoveAnimation position="top-right" delay={3000} />

          <div data-aos="fade-left" data-aos-duration="2000" className="pb-1">
            <img
              src={weddingConfig.bride.image}
              alt="bride"
              className="img-center-crop rounded-circle border border-3 border-light shadow my-4 mx-auto cursor-pointer"
            />
            <h2 className="font-esthetic m-0" style={{ fontSize: '2.125rem' }}>
              {weddingConfig.bride.name}
            </h2>
            <p className="mt-3 mb-1" style={{ fontSize: '1.25rem' }}>
              {weddingConfig.bride.role}
            </p>
          </div>

          <LoveAnimation position="bottom-left" delay={2500} />
        </div>
      </div>
    </section>
  );
};
