import { useState, useCallback } from "react";
const useForm = () => {
    const [enteredValues, setEnteredInputValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChangeInput = (event) => {
        const { target } = event;
        const name = target.name;
        const value = target.value;

        setEnteredInputValues({
            ...enteredValues,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: target.validationMessage,
        });

        setIsFormValid(target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsFormValid = false) => {
            setEnteredInputValues(newValues);
            setErrors(newErrors);
            setIsFormValid(newIsFormValid);
        },
        [setEnteredInputValues, setErrors, setIsFormValid]
    );
    return {
        enteredValues,
        handleChangeInput,
        isFormValid,
        errors,
        resetForm,
        setEnteredInputValues,
    };
};

export default useForm;