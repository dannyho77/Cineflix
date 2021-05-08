import {combineReducers} from 'redux';
import users from './users_reducer';
import movies from './movies_reducer';
import genres from './genres_reducer';
import mylists from './mylists_reducer';

const entities = combineReducers({
    users,
    movies,
    genres,
    mylists,
});
  
export default entities;