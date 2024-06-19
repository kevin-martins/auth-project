import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignIn from '../pages/SignIn';
import LogIn from '../pages/LogIn';
import { UserProps } from '../models/user';

const App = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
