import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import family  from './family.svg';
import { Provider } from 'react-redux';
import store from './redux-core/store';

import './App.css';
import Slogan from './components/Slogan'
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Notfound from './components/Notfound';
import Home from './containers/Home';
import EventDescription from './components/EventDescription';
import AboutPage from './components/AboutPage';



import CreateEvents from './containers/CreateEvents';
import DeletePage from './containers/CleaningBin';



function App() {


  return (
    <HashRouter>
      <Provider store={store}>

        <div className="App">
          <img src={family} className='App-logo' alt='family' />
          <Slogan />
          <Header />
          <Navigation />
           <br/>
            <Switch>
             <Route exact path='/' component={Home} />
             <Route exact path='/eventdescription/:id' component={EventDescription} />
             <Route exact path='/eventcreate' component={CreateEvents} />
             <Route exact path='/delete' component={DeletePage} />
             <Route exact path='/about' component={AboutPage} />

             <Route component={Notfound}></Route>

            </Switch>

          <Footer />
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
