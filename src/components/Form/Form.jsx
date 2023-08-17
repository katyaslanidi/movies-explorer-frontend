import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';

function Form({ name, title, buttonText, redirectText, linkText, link }) {
    return (
        <section className='form'>
            <img className='form__logo' src={logo} alt='logo' />
            <h2 className='form__title'>{title}</h2>
            <form name={name} className='form__container'>
                <fieldset className='form__item'>
                    <label htmlFor='name' className='form__label'>
                        Имя
                        <input
                            id='name'
                            type='text'
                            name='name'
                            required
                            minLength='2'
                            maxLength='30'
                            placeholder='Виталий'
                            className='form__input form__input_error'
                        />
                        <span className='form__input-error'>Что-то пошло не так...</span>
                    </label>
                    <label htmlFor='name' className='form__label'>
                        E-mail
                        <input
                            id='email'
                            type='email'
                            name='email'
                            required
                            placeholder='pochta@yandex.ru'
                            className='form__input'
                        />
                        <span className='form__input-error'></span>
                    </label>
                    <label htmlFor='password' className='form__label'>
                        Пароль
                        <input
                            id='password'
                            type='password'
                            name='password'
                            required
                            placeholder='••••••••••••••'
                            className='form__input'
                        />
                        <span className='form__input-error'></span>
                    </label>
                </fieldset>
                <button type='submit' className='form__button'>{buttonText}</button>
                <p className='form__redirect'>{redirectText}
                    <Link to={link} className='form__redirect form__redirect_link'>{linkText}</Link>
                </p>
            </form>
        </section>
    );
}

export default Form;