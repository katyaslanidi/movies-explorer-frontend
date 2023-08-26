import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Main from '../../pages/Main/Main';
import Movies from '../../pages/Movies/Movies';
import SavedMovies from '../../pages/SavedMovies/SavedMovies';
import ProfilePage from '../../pages/Profile/Profile';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/signin' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
