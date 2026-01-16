import { useState } from 'react';
import './RSVP.scss';

interface RSVPForm {
  name: string;
  presence: string;
  comment: string;
}

export const RSVP = () => {
  const [form, setForm] = useState<RSVPForm>({
    name: '',
    presence: '0',
    comment: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldMap: Record<string, keyof RSVPForm> = {
      'form-name': 'name',
      'form-presence': 'presence',
      'form-comment': 'comment',
    };
    const field = fieldMap[id];
    if (field) {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async () => {
    if (!form.name || form.presence === '0') {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Store in localStorage
    localStorage.setItem(
      'wedding-rsvp',
      JSON.stringify({
        ...form,
        submittedAt: new Date().toISOString(),
      })
    );
  };

  if (submitted) {
    return (
      <section className="bg-light-dark py-4 position-relative" id="comment" style={{ zIndex: 0 }}>
        <div className="container">
          <div className="bg-theme-auto rounded-5 shadow p-4">
            <h2 className="font-esthetic text-center mt-2 mb-4" style={{ fontSize: '2.25rem' }}>
              Спасибо!
            </h2>
            <p className="text-center mb-0" style={{ fontSize: '0.95rem' }}>
              Ваш ответ был успешно отправлен. Мы очень рады, что вы будете с нами!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-light-dark py-4 position-relative" id="comment" style={{ zIndex: 0 }}>
      <div className="container">
        <div className="bg-theme-auto rounded-5 shadow p-4">
          <h2 className="font-esthetic text-center mt-2 mb-4" style={{ fontSize: '2.25rem' }}>
            Пожелания
          </h2>

          <div className="mb-3">
            <label htmlFor="form-name" className="form-label my-1">
              <i className="fa-solid fa-person me-2"></i>
              Ваше имя
            </label>
            <input
              dir="auto"
              type="text"
              className="form-control shadow-sm rounded-4"
              id="form-name"
              minLength={2}
              maxLength={50}
              placeholder="Введите ваше имя"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="form-presence" className="form-label my-1">
              <i className="fa-solid fa-person-circle-question me-2"></i>
              Присутствие
            </label>
            <select
              className="form-select shadow-sm rounded-4"
              id="form-presence"
              autoComplete="off"
              value={form.presence}
              onChange={handleChange}
            >
              <option value="0">Подтвердите присутствие</option>
              <option value="1">&#9989; Буду</option>
              <option value="2">&#10060; Не смогу</option>
            </select>
          </div>

          <div className="d-block mb-3">
            <label htmlFor="form-comment" className="form-label my-1">
              <i className="fa-solid fa-comment me-2"></i>
              Ваше пожелание
            </label>
            <div className="position-relative">
              <textarea
                dir="auto"
                className="form-control shadow-sm rounded-4"
                id="form-comment"
                rows={4}
                minLength={1}
                maxLength={1000}
                placeholder="Напишите пожелание молодожёнам"
                autoComplete="off"
                value={form.comment}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-grid">
            <button
              className="btn btn-primary btn-sm rounded-4 shadow m-1"
              onClick={handleSubmit}
              disabled={isSubmitting || !form.name || form.presence === '0'}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Отправка...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Отправить
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
