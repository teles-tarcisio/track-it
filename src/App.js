import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

import { LoggedUserContext } from './contexts/contexts.js';

import SignUser from './components/SignUser/SignUser.js';
import Habits from './components/Habits/Habits.js';

export default function App() {
  const [loggedUser, setLoggedUser] = useState(
    {
      id: -1,
      name: "",
      email: "",
      image: "",
      token: ""
    }
  );

  
  return (
    <BrowserRouter>
      <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }} >
        <Routes>
          <Route path="/"
            element={<SignUser isNewUser={false} />}
          />

          <Route path="/cadastro"
            element={<SignUser isNewUser={true} />}
          />

          <Route path="/habitos"
            element={<Habits />}
          />
        </Routes>
      </LoggedUserContext.Provider>
    </BrowserRouter>
  );
}