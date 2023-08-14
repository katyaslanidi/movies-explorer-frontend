import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, Виталий!</h2>
            <form name='profile' className='profile__form'>
                <fieldset className='profile__form_item'>
                    <label htmlFor='name' className='profile__form_label'>
                        Имя
                        <input
                            id='name'
                            type='text'
                            name='name'
                            required
                            minLength='2'
                            maxLength='30'
                            placeholder='Виталий'
                            className='profile__form_input'
                        />
                    </label>
                    <label htmlFor='email' className='profile__form_label profile__form_label-email'>
                        E-mail
                        <input
                            id='email'
                            type='text'
                            name='email'
                            required
                            placeholder='pochta@yandex.ru'
                            className='profile__form_input'
                        />
                    </label>
                </fieldset>
                <button type='submit' className='profile__button'>Редактировать</button>
                <button type='button' className='profile__button profile__button_signout'>Выйти из аккаунта</button>
            </form>
        </section>
    );
}

export default Profile;