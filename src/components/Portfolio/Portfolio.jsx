import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/how-to-learn'>Статичный сайт</a>
                </li>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/russian-travel'>Адаптивный сайт</a>
                </li>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/react-mesto-auth'>Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;