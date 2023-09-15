import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Form.css';
import logo from '../../images/logo.svg';
import { EMAIL_PATTERN } from "../../utils/constants";

function Form({
    name,
    title,
    buttonText,
    redirectText,
    linkText,
    link,
    handleChangeInput,
    enteredValues,
    errors,
    isDisabled,
    onSubmit,
    isLoading,
}) {

    const currentPath = useLocation().pathname;

    return (
        <section className='form'>
            <Link to='/' title='Ha главную'>
                <img className='form__logo' src={logo} alt='Лого' />
            </Link>
            <h1 className='form__title'>{title}</h1>
            <form
                name={name}
                className='form__container'
                onSubmit={onSubmit}
                noValidate
            >
                <fieldset className='form__item'>
                    {currentPath === '/signup' ?
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
                                className='form__input'
                                onChange={handleChangeInput}
                                value={enteredValues.name || ""}
                            />
                        </label> : ''}
                    <span className='form__input-error'>{errors.name}</span>
                    <label htmlFor='email' className='form__label'>
                        E-mail
                        <input
                            id='email'
                            type='email'
                            name='email'
                            required
                            placeholder='pochta@yandex.ru'
                            className='form__input'
                            onChange={handleChangeInput}
                            pattern={EMAIL_PATTERN}
                            value={enteredValues.email || ""}
                        />
                    </label>
                    <span className='form__input-error'>{errors.email}</span>
                    <label htmlFor='password' className='form__label'>
                        Пароль
                        <input
                            id='password'
                            type='password'
                            name='password'
                            required
                            minLength='2'
                            maxLength='30'
                            placeholder='••••••••••••••'
                            className='form__input'
                            onChange={handleChangeInput}
                            value={enteredValues.password || ""}
                        />
                    </label>
                    <span className='form__input-error'>{errors.password}</span>
                </fieldset>
                <button
                    type='submit'
                    className='form__button'
                    disabled={isLoading || isDisabled ? true : false}
                >
                    {buttonText}
                </button>
                <p className='form__redirect'>{redirectText}
                    <Link to={link} className='form__redirect-link'>{linkText}</Link>
                </p>
            </form>
        </section>
    );
}
export default Form;