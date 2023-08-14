import React from "react";
import './NotFound.css';

function NotFound() {
    return (
        <main>
            <section className="not-found">
                <h2 className="not-found__title">404</h2>
                <p className="not-found__text">Страница не найдена</p>
                <span className="not-found__link">Назад</span>
            </section>
        </main>
    );
}

export default NotFound;