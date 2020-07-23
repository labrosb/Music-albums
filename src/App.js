import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import AlbumsList from './components/TopAlbums';
import AlbumDetails from './components/AlbumDetails';
import Favorites from './components/Favorites';
import './App.scss';
/**
 * Project Router wrapped in redux provider
 * using HashRouter to be compatible wigh gh-pages
 */
function App() {
  return (
    <Provider store={store}>
      <Router basename="/">
        <Switch>
          <Route exact path="/top-100">
            <AlbumsList />
          </Route>
          <Route exact path="/album-page/:id">
            <AlbumDetails />
          </Route>
          <Route exact path="/my-favorites">
            <Favorites />
          </Route>
          <Redirect to="/top-100" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
