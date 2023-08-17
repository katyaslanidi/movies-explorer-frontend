import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/how-to-learn' target='_blank' rel="noreferrer">Статичный сайт</a>
                </li>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/russian-travel' target='_blank' rel="noreferrer">Адаптивный сайт</a>
                </li>
                <li className='portfolio__list_item'>
                    <a className='portfolio__link' href='https://github.com/katyaslanidi/react-mesto-auth' target='_blank' rel="noreferrer">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;