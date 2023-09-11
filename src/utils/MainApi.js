const BASE_URL = "https://api.katyaslanidi.movies.nomoreparties.co";
export const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
};
//авторизация
export const login = ({ email, password }) => {
    return fetch(`${BASE_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    }).then((res) => checkResponse(res));
};

//регистрация
export const registration = ({ name, email, password }) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    }).then((res) => checkResponse(res));
};

export const checkToken = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    }).then((res) => checkResponse(res));
};
//получение данных пользователя
export const getMyUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => checkResponse(res));
};
//обновление данных пользователя
export const updateUserInfo = (data) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: data.name,
            email: data.email,
        }),
    }).then((res) => checkResponse(res));
};
//получение фильмов
export const getMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => checkResponse(res));
};
//сохранение фильма
export const createMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: "https://api.nomoreparties.co" + data.image.url,
            trailerLink: data.trailerLink,
            thumbnail: "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
        }),
    }).then((res) => checkResponse(res));
};
//удалить фильм
export const deleteMovie = (id) => {
    return fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            "Content-Type": "application/json",
        },
    }).then((res) => checkResponse(res));
};