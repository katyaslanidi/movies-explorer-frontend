import React from 'react';
import Form from '../../components/Form/Form';

function Register() {
    return (
        <main>
            <Form
                name='signup'
                title='Добро пожаловать!'
                buttonText='Зарегистрироваться'
                redirectText='Уже зарегистрированы?'
                linkText='Войти'
            />
        </main>
    );
}

export default Register;