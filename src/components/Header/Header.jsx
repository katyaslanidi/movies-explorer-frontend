import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';

function Header() {
    return (
        <section className='header'>
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
    );
}

export default Header;