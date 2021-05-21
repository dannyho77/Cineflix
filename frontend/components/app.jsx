import React from 'react';
import { Route,
        Redirect,
        Switch,
        Link,
        HashRouter
        } from 'react-router-dom';
        

import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import home from '../components/home/home_container';
import MoviesIndexContainer from './movie/movies_index_container';
import MovieShowContainer from '../components/movie/movie_show_container';
import GenreShowContainer from '../components/genre/genre_show_container';
import MyListContainer from './mylist/mylist_container';


const App = () => (
  <div>
     <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={home} />
      <ProtectedRoute exact path="/movies" component={MoviesIndexContainer} />
      <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
      <ProtectedRoute exact path="/genres/:genreId" component={GenreShowContainer} />
      {/* <ProtectedRoute exact path="/movies/mylist" component={MyListContainer} /> */}
    </Switch>
  </div>
);

export default App;