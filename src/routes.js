import React from 'react';
import { Route, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; // Importe Routes e Route

import './App.css';

import Home from './pages/home';
//import Login from './pages/login';
//import Cadastro from './pages/cadastro';


function router() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default router;