import React from 'react';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';

function Register({
    handleRegistration,
    isLoading,
}) {

    const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

    function handleFormSubmit(event) {
        event.preventDefault();
        handleRegistration({
            name: enteredValues.name,
            email: enteredValues.email,
            password: enteredValues.password,
        });
    }

    return (
        <main>
            <Form
                name='signup'
                title='Добро пожаловать!'
                buttonText='Зарегистрироваться'
                redirectText='Уже зарегистрированы?'
                linkText='Войти'
                link='/signin'
                handleChangeInput={handleChangeInput}
                enteredValues={enteredValues}
                errors={errors}
                onSubmit={handleFormSubmit}
                isDisabled={!isFormValid}
                isLoading={isLoading}
            />
        </main>
    );
}
export default Register;