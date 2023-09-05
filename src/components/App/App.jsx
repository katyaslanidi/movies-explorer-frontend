import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import './App.css';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import ProfilePage from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';

import * as api from '../../utils/MainApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isAuthOk, setIsAuthOk] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  const [savedMovies, setSavedMovies] = useState([]);

  const [isUpdate, setIsUpdate] = useState(false);

  //проверка токена в лок.хранилище
  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      api
        .checkToken(jwt)
        .then((res) => {
          if (res) {
            localStorage.removeItem("allMovies");
            setIsLoggedIn(true);
          }
          navigate(path);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    api
      .login({ email, password })
      .then((res) => {
        if (res) {
          setIsAuthOk(true);
          localStorage.setItem("jwt", res.token);
          navigate('./movies');
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleRegistration = ({ name, email, password }) => {
    api
      .registration({ name, email, password })
      .then(() => {
        setIsAuthOk(true);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
      })
  }

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("movieSearch");
    localStorage.removeItem("shortMovies");
    localStorage.removeItem("allMovies");
    localStorage.clear();
    navigate('/');
  }

  //проверка ошибки авторизации
  // const handleUnauthorisedErr = (err) => {
  //   if (err === 'Error: 401') {
  //     handleSignOut();
  //   }
  // }

  //получение инф о пользователе
  useEffect(() => {
    if (isLoggedIn) {
      api
        .getMyUser()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
      api
        .getMovies()
        .then((moviesData) => {
          setSavedMovies(moviesData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, navigate]);

  //обновление данных пользователя
  const handleUpdateUserInfo = (newData) => {
    setIsLoading(true);
    api
      .updateUserInfo(newData)
      .then((data) => {
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setIsUpdate(false);
        console.log(err);
        // handleUnauthorisedErr(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  //сохранение фильма
  const handleSaveMovie = (movie) => {
    api
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
        // handleUnauthorisedErr(err);
      });
  }

  const handleDeleteMovie = (movie) => {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => {
          state.filter((item) => item._id !== movie._id)
        })
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
        // handleUnauthorisedErr(err);
      });
  }

  // console.log(savedMovies, 'App')

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route path='/' element={
            <Main
              isLoggedIn={isLoggedIn}
            />
          }
          />
          <Route path='/movies' element={
            <ProtectedRoute
              Component={Movies}
              path='/movies'
              savedMovies={savedMovies}
              isLoggedIn={isLoggedIn}
              handleDeleteMovie={handleDeleteMovie}
              handleSaveMovie={handleSaveMovie}
            />
          }
          />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              Component={SavedMovies}
              path='/saved-movies'
              isLoggedIn={isLoggedIn}
              savedMovies={savedMovies}
              handleDeleteMovie={handleDeleteMovie}
            />
          }
          />
          <Route path='/profile' element={
            <ProtectedRoute
              Component={ProfilePage}
              path='/profile'
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              handleSignOut={handleSignOut}
              handleUpdateUserInfo={handleUpdateUserInfo}
            />
          }
          />
          <Route path='/signup' element={
            <Register
              handleRegistration={handleRegistration}
              isLoading={isLoading}
            />
          }
          />
          <Route path='/signin' element={
            <Login
              handleLogin={handleLogin}
              isLoading={isLoading}
            />
          }
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
