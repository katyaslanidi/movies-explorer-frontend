import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OverflowMoviesNav.css';
import accountIcon from '../../images/account-icon.svg';

function OverflowMoviesNav({ isActive, onClick }) {
    const currentPath = useLocation().pathname;

    return (
        <>
            <section className={`
                overflow
                ${isActive ? 'overflow__active' : ''}`}
            >
                <span className='overflow__close-icon'>
                    <button className='overflow__close-icon_button' onClick={onClick} />
                </span>
                <nav className='overflow__nav'>
                    <ul className='overflow__list'>
                        <li>
                            <Link to='/' className={`
                                overflow__link
                                ${currentPath === '/' ? 'overflow__link_active' : ''}`}
                            >Главная</Link>
                        </li>
                        <li>
                            <Link to='/movies' className={`
                                overflow__link
                                ${currentPath === '/movies' ? 'overflow__link_active' : ''}`}
                            >Фильмы</Link>
                        </li>
                        <li>
                            <Link to='/saved-movies' className={`
                                overflow__link
                                ${currentPath === '/saved-movies' ? 'overflow__link_active' : ''}`}
                            >Сохранённые фильмы</Link>
                        </li>
                    </ul>
                    <Link to='/profile' className='overflow__account-link'>
                        Аккаунт
                        <img className='overflow__account-link_icon' src={accountIcon} alt='account icon' />
                    </Link>
                </nav>

            </section>
        </>
    );
}

export default OverflowMoviesNav;