import React from 'react';
import { Route,
        Redirect,
        Switch,
        Link,
        HashRouter
        } from 'react-router-dom';
        

// import ReportIndexContainer from './reports/report_index_container';
// import CreateReportFormContainer from './reports/create_report_form_container';
// import EditReportFormContainer from './reports/edit_report_form_container';
// import ReportShowContainer from './reports/report_show_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={HomeContainer} />
      <ProtectedRoute exact path="/movies" component={MovieIndexContainer} />
      <ProtectedRoute exact path="/movies/:movieId" component={MovieShowContainer} />
      <ProtectedRoute exact path="/movies/savedMovies" component={SavedMoviesIndexContainer} />
      <ProtectedRoute exact path="/movies/:genre" component={GenreShowContainer} />
    </Switch>
  </div>
);

export default App;