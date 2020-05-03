import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './state/store';
import AlbumsList from './components/TopAlbums';
import AlbumDetails from './components/AlbumDetails';
import Favorites from './components/Favorites';
import './App.scss';

const root = process.env.PUBLIC_URL;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={`${root}/top-100`}>
            <AlbumsList />
          </Route>
          <Route exact path={`${root}/album-page/:id`}>
            <AlbumDetails />
          </Route>
          <Route exact path={`${root}/my-favorites`}>
            <Favorites />
          </Route>
          <Redirect to={`${root}/top-100`} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
