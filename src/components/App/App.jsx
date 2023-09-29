import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation, Navigate } from "react-router-dom";
import './App.css';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import ProfilePage from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import PopUp from '../PopUp/PopUp';
import NotFound from '../../pages/NotFound/NotFound';
import * as api from '../../utils/MainApi';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthOk, setIsAuthOk] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setIsLoading(true);
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
        .finally(() => {
          setIsLoading(false);
        })
    }
  }, []);

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    api
      .login({ email, password })
      .then((res) => {
        if (res) {
          setPopUpOpen(true);
          setIsSuccess(true);
          setIsAuthOk(true);
          localStorage.setItem("jwt", res.token);         
          navigate('./movies');
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setPopUpOpen(true);
        setIsSuccess(false);
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
        setPopUpOpen(true);
        setIsSuccess(true);
        setIsAuthOk(true);
        handleLogin({ email, password });
      })
      .catch((err) => {
        setPopUpOpen(true);
        setIsSuccess(false);
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

  const handleUpdateUserInfo = (newData) => {
    setIsFormSubmitting(true);
    api
      .updateUserInfo(newData)
      .then((data) => {
        setPopUpOpen(true);
        setIsSuccess(true);
        setIsUpdate(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setPopUpOpen(true);
        setIsSuccess(false);
        setIsUpdate(false);
        console.log(err);
      })
      .finally(() => {
        setIsFormSubmitting(false);
      })
  }

  const handleSaveMovie = (movie) => {
    api
      .createMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
      });
  }

  const handleDeleteMovie = (movie) => {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setSavedMovies((state) => {
          return state.filter((item) => item._id !== movie._id)
        })
      })
      .catch((err) => {
        setIsAuthOk(false);
        console.log(err);
      });
  }

  function closeAllPopUps() {
    setPopUpOpen(false);
  }

  function closeByOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopUps();
    }
  }

  return (
    <div className='page'>
      {isLoading ? (
        <Preloader isPreloaderLoading={isLoading} position="main" />
      ) : (
        <CurrentUserContext.Provider value={currentUser}>
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
                isFormSubmitting={isFormSubmitting}
                handleSignOut={handleSignOut}
                handleUpdateUserInfo={handleUpdateUserInfo}
              />
            }
            />
            <Route path='/signup' element={
              isLoggedIn ?
                <Navigate to='/' /> :
                <Register
                  handleRegistration={handleRegistration}
                  isLoading={isLoading}
                />
            }
            />
            <Route path='/signin' element={
              isLoggedIn ?
                <Navigate to='/' /> :
                <Login
                  handleLogin={handleLogin}
                  isLoading={isLoading}
                />
            }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <PopUp
            isOpen={isPopUpOpen}
            onCloseOverlay={closeByOverlay}
            isSuccess={isSuccess}
            onClose={closeAllPopUps}
          />
        </CurrentUserContext.Provider>
      )}
    </div>
  );
}

export default App;
