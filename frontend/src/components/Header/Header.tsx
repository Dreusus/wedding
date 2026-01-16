import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-names">
                    <span className="name bride">Анна</span>
                    <span className="ampersand">&</span>
                    <span className="name groom">Михаил</span>
                </div>
                <div className="header-date">
                    15 августа 2026
                </div>
                <nav className="header-nav">
                    <a href="#about">О нас</a>
                    <a href="#details">Детали</a>
                    <a href="#location">Место</a>
                    <a href="#rsvp">Подтвердить</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
