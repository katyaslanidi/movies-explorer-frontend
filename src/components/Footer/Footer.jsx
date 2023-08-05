import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section className='footer'>
            <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__year'>@ 2023</p>
                <ul className='footer__links'>
                    <li>
                        <a className='footer__link'>Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a className='footer__link'>Github</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Footer;