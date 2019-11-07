import React from 'react';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Gestor from './Components/Gestor'
import './index.css';
import * as serviceWorker from './serviceWorker';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const routing = (
    <Router>
      <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Gestor" component={Gestor} />

          <NotificationContainer/>
      </div>
    </Router>
  )



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
