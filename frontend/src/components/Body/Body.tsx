import React from 'react';
import './Body.css';

const Body: React.FC = () => {
    return (
        <main className="body">
            <section id="about" className="section section-about">
                <h2 className="section-title">Наша история</h2>
                <div className="story-content">
                    <p>
                        Мы встретились в 2020 году, и с тех пор наша любовь
                        только крепнет с каждым днём. После долгих лет дружбы
                        и романтики мы решили связать наши судьбы навсегда.
                    </p>
                    <div className="timeline">
                        <div className="timeline-item">
                            <span className="year">2020</span>
                            <span className="event">Первая встреча</span>
                        </div>
                        <div className="timeline-item">
                            <span className="year">2022</span>
                            <span className="event">Первое свидание</span>
                        </div>
                        <div className="timeline-item">
                            <span className="year">2025</span>
                            <span className="event">Предложение</span>
                        </div>
                        <div className="timeline-item">
                            <span className="year">2026</span>
                            <span className="event">Свадьба</span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="details" className="section section-details">
                <h2 className="section-title">Детали торжества</h2>
                <div className="details-grid">
                    <div className="detail-card">
                        <div className="detail-icon">💒</div>
                        <h3>Церемония</h3>
                        <p className="detail-time">14:00</p>
                        <p>Торжественная регистрация брака</p>
                    </div>
                    <div className="detail-card">
                        <div className="detail-icon">🥂</div>
                        <h3>Фуршет</h3>
                        <p className="detail-time">15:30</p>
                        <p>Лёгкие закуски и шампанское</p>
                    </div>
                    <div className="detail-card">
                        <div className="detail-icon">🍽️</div>
                        <h3>Банкет</h3>
                        <p className="detail-time">17:00</p>
                        <p>Праздничный ужин и танцы</p>
                    </div>
                </div>
            </section>

            <section id="location" className="section section-location">
                <h2 className="section-title">Место проведения</h2>
                <div className="location-content">
                    <div className="location-info">
                        <h3>Ресторан "Усадьба"</h3>
                        <p className="address">г. Москва, ул. Примерная, д. 123</p>
                        <p className="location-note">
                            Живописное место с прекрасным видом на парк.
                            Парковка для гостей бесплатная.
                        </p>
                    </div>
                    <div className="location-map">
                        <div className="map-placeholder">
                            <span>Карта будет здесь</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-dresscode">
                <h2 className="section-title">Дресс-код</h2>
                <div className="dresscode-content">
                    <p>Мы выбрали нежную цветовую палитру для нашего праздника</p>
                    <div className="color-palette">
                        <div className="color-swatch" style={{backgroundColor: '#F5E6E8'}}></div>
                        <div className="color-swatch" style={{backgroundColor: '#D5C6E0'}}></div>
                        <div className="color-swatch" style={{backgroundColor: '#AAA1C8'}}></div>
                        <div className="color-swatch" style={{backgroundColor: '#967AA1'}}></div>
                        <div className="color-swatch" style={{backgroundColor: '#192A51'}}></div>
                    </div>
                    <p className="dresscode-note">
                        Просим воздержаться от белого и чёрного цветов
                    </p>
                </div>
            </section>

            <section id="rsvp" className="section section-rsvp">
                <h2 className="section-title">Подтвердите участие</h2>
                <div className="rsvp-content">
                    <p>Пожалуйста, сообщите о своём присутствии до 1 августа 2026</p>
                    <form className="rsvp-form">
                        <input type="text" placeholder="Ваше имя" className="rsvp-input" />
                        <input type="tel" placeholder="Телефон" className="rsvp-input" />
                        <select className="rsvp-select">
                            <option value="">Количество гостей</option>
                            <option value="1">1 гость</option>
                            <option value="2">2 гостя</option>
                            <option value="3">3 гостя</option>
                        </select>
                        <textarea
                            placeholder="Пожелания или ограничения по питанию"
                            className="rsvp-textarea"
                        ></textarea>
                        <button type="submit" className="rsvp-button">
                            Подтвердить участие
                        </button>
                    </form>
                </div>
            </section>

            <section className="section section-countdown">
                <h2 className="section-title">До свадьбы осталось</h2>
                <div className="countdown">
                    <div className="countdown-item">
                        <span className="countdown-number">210</span>
                        <span className="countdown-label">дней</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">12</span>
                        <span className="countdown-label">часов</span>
                    </div>
                    <div className="countdown-item">
                        <span className="countdown-number">45</span>
                        <span className="countdown-label">минут</span>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Body;
