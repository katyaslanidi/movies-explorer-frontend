import React from 'react';
import { useLocation } from 'react-router-dom';
import './BurgerButton.css';

function BurgerButton({ onClick }) {
    const currentPath = useLocation().pathname;
    return (
        <>
            <button
                className={`
                    burger-button
                    ${currentPath === '/' ? 'burger-button_main' : ''}`}
                onClick={onClick}
            />
        </>
    );
}

export default BurgerButton;