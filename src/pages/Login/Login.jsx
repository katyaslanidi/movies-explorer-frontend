import React from 'react';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';

function Login({
    handleLogin,
    isLoading,
}) {

    const { enteredValues, errors, handleChangeInput, isFormValid } = useForm();

    function handleFormSubmit(event) {
        event.preventDefault();
        handleLogin({
            email: enteredValues.email,
            password: enteredValues.password,
        });
    }

    return (
        <main>
            <Form
                name='signin'
                title='Рады видеть!'
                buttonText='Войти'
                redirectText='Ещё не зарегистрированы?'
                linkText='Регистрация'
                link='/signup'
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
export default Login;