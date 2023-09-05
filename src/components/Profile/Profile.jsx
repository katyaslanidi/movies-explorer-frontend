import React from 'react';
import './Profile.css';

import { EMAIL_PATTERN } from "../../utils/constants";

function Profile({
    currentUser,
    handleFormSubmit,
    handleChangeInput,
    enteredValues,
    isFormValid,
    handleSignOut,
}) {
    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form 
                name='profile' 
                className='profile__form'
                onSubmit={handleFormSubmit}
            >
                <fieldset className='profile__item'>
                    <label htmlFor='name' className='profile__label'>
                        Имя
                        <input
                            id='name'
                            type='text'
                            name='name'
                            required
                            minLength='2'
                            maxLength='30'
                            placeholder='Виталий'
                            className='profile__input'
                            onChange={handleChangeInput}
                            value={enteredValues.name || ''}
                        />
                    </label>
                    <label htmlFor='email' className='profile__label profile__label_email'>
                        E-mail
                        <input
                            id='email'
                            type='text'
                            name='email'
                            required
                            placeholder='pochta@yandex.ru'
                            className='profile__input'
                            onChange={handleChangeInput}
                            value={enteredValues.email || ''}
                            pattern={EMAIL_PATTERN}
                        />
                    </label>
                </fieldset>
                <button 
                    type='submit' 
                    className='profile__button'
                    disabled={!isFormValid ? true : false}
                >
                    Редактировать
                </button>
                <button 
                    className='profile__button profile__button_signout'
                    onClick={handleSignOut}
                >
                    Выйти из аккаунта
                </button>
            </form>
        </section>
    );
}

export default Profile;