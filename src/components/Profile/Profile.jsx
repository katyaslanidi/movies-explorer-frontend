import React, { useEffect, useContext, } from "react";
import './Profile.css';
import useForm from '../../hooks/useForm';
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { EMAIL_PATTERN } from "../../utils/constants";

function Profile({
    handleUpdateUserInfo,
    isFormSubmitting,
    handleSignOut,
}) {

    const currentUser = useContext(CurrentUserContext);

    const {
        enteredValues,
        handleChangeInput,
        errors,
        isFormValid,
        setEnteredInputValues,
    } = useForm();

    useEffect(() => {
        setEnteredInputValues({
            ...enteredValues,
            name: currentUser.name || "",
            email: currentUser.email || "",
        });
    }, [currentUser, setEnteredInputValues]);

    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
            <form
                name='profile'
                className='profile__form'
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(true);
                    if (isFormValid) {
                        handleUpdateUserInfo(enteredValues);
                    }
                }}
                noValidate
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
                            value={enteredValues.name || ""}
                            disabled={isFormSubmitting}
                        />
                    </label>
                    <span class='profile__input-error'>{errors.name}</span>
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
                            value={enteredValues.email || ""}
                            disabled={isFormSubmitting}
                            pattern={EMAIL_PATTERN}
                        />
                    </label>
                    <span class='profile__input-error'>{errors.email}</span>
                </fieldset>
                <button
                    type='submit'
                    className='profile__button'
                    disabled={
                        !isFormValid ||
                        isFormSubmitting ||
                        (currentUser.name === enteredValues.name &&
                            currentUser.email === enteredValues.email)
                    }
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