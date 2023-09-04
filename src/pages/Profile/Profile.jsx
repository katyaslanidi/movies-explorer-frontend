import React, { useEffect, useContext, useState } from "react";
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

import useForm from '../../hooks/useForm';
// import { EMAIL_PATTERN } from "../../utils/constants";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProfilePage({
    isLoggedIn,
    isLoading,
    handleSignOut,
    handleUpdateUserInfo,
}) {

    const currentUser = useContext(CurrentUserContext);

    const { enteredValues, errors, handleChangeInput, isFormValid, resetForm } =
        useForm();

    const [isLastValues, setIsLastValues] = useState(false);

    // Сброс формы при обновлении текущего пользователя
    useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        }
    }, [currentUser, resetForm]);

    // Обработка отправки формы
    function handleFormSubmit(e) {
        e.preventDefault();
        handleUpdateUserInfo({
            name: enteredValues.name,
            email: enteredValues.email,
        });
    }

    // Проверка, являются ли текущие значения полей формы последними сохраненными значениями
    useEffect(() => {
        if (
            currentUser.name === enteredValues.name &&
            currentUser.email === enteredValues.email
        ) {
            setIsLastValues(true);
        } else {
            setIsLastValues(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enteredValues]);

    return (
        <>
            <Header
                isLoggedIn={isLoggedIn}
            />
            <main>
                <Profile 
                    currentUser={currentUser}
                    handleFormSubmit={handleFormSubmit}
                    handleChangeInput={handleChangeInput}
                    enteredValues={enteredValues}
                    errors={errors}
                    isFormValid={isFormValid}
                    isLoading={isLoading}
                    isLastValues={isLastValues}
                    handleSignOut={handleSignOut}
                />
            </main>
        </>
    );
}

export default ProfilePage;