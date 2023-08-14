import React from 'react';
import Form from '../../components/Form/Form';

function Login() {
    return (
        <main>
            <Form
                name='signin'
                title='Рады видеть!'
                buttonText='Войти'
                redirectText='Ещё не зарегистрированы?'
                linkText='Регистрация'
            />
        </main>
    );
}

export default Login;