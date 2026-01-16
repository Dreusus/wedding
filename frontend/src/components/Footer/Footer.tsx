import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-hearts">
                    <span>♥</span>
                    <span>♥</span>
                    <span>♥</span>
                </div>
                <p className="footer-message">
                    Мы будем счастливы видеть вас на нашем празднике!
                </p>
                <div className="footer-contact">
                    <p>По всем вопросам:</p>
                    <a href="tel:+79001234567">+7 (900) 123-45-67</a>
                </div>
                <div className="footer-hashtag">
                    #АннаИМихаил2026
                </div>
                <p className="footer-copy">
                    С любовью, Анна и Михаил
                </p>
            </div>
        </footer>
    );
};

export default Footer;
