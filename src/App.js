import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/homepage/Header/NavComponent';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import AdminCreateProfile from './components/Account/SignUp';
import Chat from './components/Chat';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <NavComponent />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={AdminCreateProfile} />

        {/* Routes that must meet the login condition before being accessed */}
        <ProtectedRoute path="/feed" component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
