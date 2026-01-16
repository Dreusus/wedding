import { useState } from 'react';
import { weddingConfig } from '../../config';
import './Gifts.scss';

export const Gifts = () => {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, '')).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <section className="bg-light-dark pb-3">
      <div className="container text-center">
        <h2 className="font-esthetic pt-3 mb-4" style={{ fontSize: '2.25rem' }}>
          Подарки
        </h2>
        <p className="mb-1" style={{ fontSize: '0.95rem' }}>
          Если вы хотите сделать нам подарок, можете воспользоваться следующими способами:
        </p>

        <div
          className="bg-theme-auto rounded-4 shadow p-3 mx-4 mt-4 text-start"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <i className="fa-solid fa-money-bill-transfer"></i>
          <p className="d-inline ms-2">Перевод</p>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="m-0 p-0" style={{ fontSize: '0.95rem' }}>
              <i className="fa-regular fa-user fa-sm me-1"></i>
              {weddingConfig.gifts.transfer.name}
            </p>
            <button
              className="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
              style={{ fontSize: '0.75rem' }}
              onClick={() => setShowTransfer(!showTransfer)}
            >
              <i className="fa-solid fa-circle-info fa-sm me-1"></i>
              Реквизиты
            </button>
          </div>

          {showTransfer && (
            <div className="mt-2">
              <hr className="my-2 py-1" />
              <p className="m-0" style={{ fontSize: '0.9rem' }}>
                <i className="fa-solid fa-building-columns me-1"></i>
                {weddingConfig.gifts.transfer.bank}
              </p>
              <div className="d-flex justify-content-between align-items-center mt-2">
                <p className="m-0 p-0" style={{ fontSize: '0.85rem' }}>
                  <i className="fa-solid fa-credit-card me-1"></i>
                  {weddingConfig.gifts.transfer.card}
                </p>
                <button
                  className="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
                  style={{ fontSize: '0.75rem' }}
                  onClick={() => copyToClipboard(weddingConfig.gifts.transfer.card, 'card')}
                >
                  <i className={`fa-solid ${copied === 'card' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Gift Contact */}
        <div
          className="bg-theme-auto rounded-4 shadow p-3 mx-4 mt-4 text-start"
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <i className="fa-solid fa-gift fa-lg"></i>
          <p className="d-inline ms-2">Подарок</p>

          <div className="d-flex justify-content-between align-items-center mt-2">
            <p className="m-0 p-0" style={{ fontSize: '0.95rem' }}>
              <i className="fa-regular fa-user fa-sm me-1"></i>
              {weddingConfig.gifts.contact.name}
            </p>
            <button
              className="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
              style={{ fontSize: '0.75rem' }}
              onClick={() => setShowContact(!showContact)}
            >
              <i className="fa-solid fa-circle-info fa-sm me-1"></i>
              Контакт
            </button>
          </div>

          {showContact && (
            <div className="mt-2">
              <hr className="my-2 py-1" />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="m-0 p-0" style={{ fontSize: '0.85rem' }}>
                  <i className="fa-solid fa-phone-volume me-1"></i>
                  {weddingConfig.gifts.contact.phone}
                </p>
                <button
                  className="btn btn-outline-auto btn-sm shadow-sm rounded-4 py-0"
                  style={{ fontSize: '0.75rem' }}
                  onClick={() => copyToClipboard(weddingConfig.gifts.contact.phone, 'phone')}
                >
                  <i className={`fa-solid ${copied === 'phone' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
