import React from "react";
import "./PopUp.css";

function PopUp({
    isOpen,
    onCloseOverlay,
    isSuccess,
    onClose,
}) {
    return (
        <div 
            className={`popup
                ${isOpen ? "popup_opened" : ""}
            `}
            onClick={onCloseOverlay}
        >
            <div className="popup__container">
                {isSuccess ?
                    (
                        <p className="popup__text">
                            Успешно!
                        </p>
                    ) : (
                        <p className="popup__text">
                            Что-то пошло не так. Попробуйте ещё раз!
                        </p>
                    )
                }
                <button 
                    className="popup__close-button"
                    type="button"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )
}

export default PopUp;