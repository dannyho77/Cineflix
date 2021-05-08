import * as APIUtil from '../utils/mylists';

export const RECEIVE_MYLISTS = 'RECEIVE_MYLISTS';
export const ADD_MYLIST = 'ADD_MYLIST';
export const REMOVE_MYLIST = 'REMOVE_MYLIST';

export const receiveMyLists = movies => ({
    type: RECEIVE_MYLISTS,
    movies
})

export const addMyList = movieId => ({
    type: ADD_MYLIST,
    movieId
})

export const removeMyList = movieId => ({
    type: REMOVE_MYLIST,
    movieId
})

export const fetchMyLists = (movies) => dispatch => (
    APIUtil.fetchLists(movies).then(movies => (
      dispatch(receiveMyLists(movies))
    ))
  );
  
  export const addToMyList = movieId => dispatch => (
    APIUtil.postList(movieId).then(movie => (
      dispatch(addMyList(movie))
    ))
  );

  export const removeFromMyList = id => dispatch => (
    APIUtil.deleteList(id).then(movieId => (
      dispatch(removeMyList(movieId))
    ))
  );