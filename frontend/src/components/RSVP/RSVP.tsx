import { useState } from 'react';
import { weddingConfig } from '../../config';
import './RSVP.scss';

interface RSVPForm {
  name: string;
  presence: string;
  partnerName: string;
}

export const RSVP = () => {
  const [form, setForm] = useState<RSVPForm>({
    name: '',
    presence: '',
    partnerName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.presence) {
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
      <section className="rsvp-section section-secondary" id="comment">
        <div className="container">
          <div className="rsvp-card text-center p-5">
            <h2 className="font-esthetic mb-4" style={{ fontSize: '2.5rem' }}>
              Спасибо за ваш ответ!
            </h2>
            <p className="mb-0" style={{ fontSize: '1rem' }}>
              Мы очень рады, что вы поделились своими планами с нами!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rsvp-section section-secondary" id="comment">
      <div className="container">
        {/* RSVP Title SVG */}
        <div className="text-center mb-4">
          <img
            src={weddingConfig.images.svg.rsvp}
            alt="Анкета"
            className="rsvp-title-svg"
          />
        </div>

        <p className="text-center mb-2" style={{ fontSize: '0.9rem' }}>
          просьба заполнить анкету до {weddingConfig.rsvp.deadline}
        </p>

        {/* RSVP Form */}
        <div className="rsvp-form-container">
          {/* Name Field */}
          <div className="form-group mb-4">
            <label className="form-label-tilda">
              {weddingConfig.rsvp.questions.name.label}
            </label>
            <input
              type="text"
              name="name"
              className="form-control-tilda"
              placeholder={weddingConfig.rsvp.questions.name.placeholder}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Presence Radio Buttons */}
          <div className="form-group mb-4">
            <label className="form-label-tilda mb-3">
              {weddingConfig.rsvp.questions.presence.label}
            </label>
            <div className="radio-group">
              {weddingConfig.rsvp.questions.presence.options.map((option, index) => (
                <label key={index} className="radio-tilda">
                  <input
                    type="radio"
                    name="presence"
                    value={option}
                    checked={form.presence === option}
                    onChange={handleChange}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Partner Name Field (conditional) */}
          {form.presence === 'Буду с парой!' && (
            <div className="form-group mb-4">
              <label className="form-label-tilda">
                {weddingConfig.rsvp.questions.partnerName.label}
              </label>
              <input
                type="text"
                name="partnerName"
                className="form-control-tilda"
                placeholder={weddingConfig.rsvp.questions.partnerName.placeholder}
                value={form.partnerName}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button
              className="btn btn-tilda px-5 py-3"
              onClick={handleSubmit}
              disabled={isSubmitting || !form.name || !form.presence}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" />
                  Отправка...
                </>
              ) : (
                'Отправить!'
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
