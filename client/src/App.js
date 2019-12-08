import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Notfound from './containers/Notfound';
import Home from './containers/Home';

import CreateEvents from './containers/CreateEvents';
import Eventinfo from './containers/Eventinfo';

function App() {
  return (
    <HashRouter>

    <div className="App">
    <Header />
    <Navigation />

    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/eventdetails' component={Eventinfo} />
    <Route exact path='/eventcreate' component={CreateEvents} />
    <Route component={Notfound}></Route>

    </Switch>


    <Footer />
    </div>,
    </HashRouter>
  );
}

export default App;
