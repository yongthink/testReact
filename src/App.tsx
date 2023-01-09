import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <Routes>
          <Route path="/Login" element={<Login />} />
      </Routes>
  );
}

export default App;
