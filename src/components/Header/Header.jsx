import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import accountIcon from '../../images/account-icon.svg';

function Header({ isLoggedIn }) {
    return (
        <>
            {
                isLoggedIn ? (
                    < section className='header header__movies' >
                        <img className='header__logo' src={headerLogo} alt="logo" />
                        <ul className='header__list header__list-movies'>
                            <li>
                                <p className='header__list-movies_link'>Фильмы</p>
                            </li>
                            <li>
                                <p className='header__list-movies_link'>Сохранённые фильмы</p>
                            </li>
                        </ul>
                        <p className='header__account-link'>Аккаунт
                            <img className='header__account-link_icon' src={accountIcon} alt='account icon' />
                        </p>
                    </section >
                ) : (
                    <section className='header' >
                        <img className='header__logo' src={headerLogo} alt="logo" />
                        <ul className='header__list'>
                            <li>
                                <p className='header__list_link'>Регистрация</p>
                            </li>
                            <li>
                                <p className='header__list_link header__list_login'>Войти</p>
                            </li>
                        </ul>
                    </section>
                )
            }
        </>
    );
}

export default Header;