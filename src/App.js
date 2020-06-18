import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/homepage/Header/NavComponent';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Chat from './components/Chat';
import ProtectedRoute from './components/ProtectedRoute';
import SignUp from './components/Account/SignUp';

function App() {
  return (
    <div className="App">
      <NavComponent />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />

        {/* Routes that must meet the login condition before being accessed */}
        <ProtectedRoute path="/feed" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
