import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import accountIcon from '../../images/account-icon.svg';
import BurgerButton from '../BurgerButton/BurgerButton';
import OverflowMoviesNav from '../OverflowMoviesNav/OverflowMoviesNav';

function Header({ isLoggedIn }) {
    const currentPath = useLocation().pathname;

    const [ isOverflowActive, setIsOverflowActive ] = useState(false);

    function handleBurgerBtnClick() {
      setIsOverflowActive(!isOverflowActive);
    }

    return (
        <>
            <section className={`
                header 
                ${currentPath === '/movies' 
                || currentPath === '/saved-movies'
                || currentPath === '/profile' 
                ? 'header__movies' : ''}`}
            >
                <Link to='/' title='На главную'>
                    <img className='header__logo' src={headerLogo} alt="logo" />
                </Link>
                {
                    isLoggedIn ? (
                        <>
                        <nav className='header__nav header__nav_movies'>
                            <ul className='header__list header__list-movies'>
                                <li>
                                    <Link to='/movies' className='header__list-movies_link'>Фильмы</Link>
                                </li>
                                <li>
                                    <Link to='/saved-movies' className='header__list-movies_link'>Сохранённые фильмы</Link>
                                </li>
                            </ul>
                            <Link to='/profile' className='header__account-link'>
                                Аккаунт
                                <img className='header__account-link_icon' src={accountIcon} alt='account icon' />
                            </Link>
                        </nav>
                        <BurgerButton onClick={handleBurgerBtnClick} />
                        <OverflowMoviesNav isActive={isOverflowActive} onClick={handleBurgerBtnClick} />
                        </>
                    ) : (
                        <nav className='header__nav'>
                            <ul className='header__list'>
                                <li>
                                    <Link to='/signup' className='header__list_link'>Регистрация</Link>
                                </li>
                                <li>
                                    <Link to='/signin' className='header__list_link header__list_login'>Войти</Link>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </section>
        </>
    );
}

export default Header;