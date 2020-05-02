import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import AlbumsList from './components/TopAlbums';
import AlbumDetails from './components/AlbumDetails';
import Favorites from './components/Favorites';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <AlbumsList />
          </Route>
          <Route exact path="/album-page/:id">
            <AlbumDetails />
          </Route>
          <Route exact path="/my-favorites">
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
