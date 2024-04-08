import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Login from './components/Login';
import HomePage from './pages/HomePage';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import Signup from './components/Singup';
import Profile from './pages/ProfilePage';


import './App.css'

function App() {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
    
  );
}
  


export default App;
