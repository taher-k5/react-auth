import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Layout from './pages/Layout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/about-us' element={<AboutUs />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
