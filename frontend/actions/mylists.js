import * as APIUtil from '../utils/mylists';

export const RECEIVE_MYLISTS = 'RECEIVE_MYLISTS';
export const ADD_MYLIST = 'ADD_MYLIST';
export const REMOVE_MYLIST = 'REMOVE_MYLIST';

export const receiveMyLists = mylists => ({
    type: RECEIVE_MYLISTS,
    mylists
})

export const addMyList = mylist => ({
    type: ADD_MYLIST,
    mylist
})

export const removeMyList = mylist => ({
    type: REMOVE_MYLIST,
    mylist
})

export const fetchMyLists = () => dispatch => (
    APIUtil.fetchLists().then(mylists => (
      dispatch(receiveMyLists(mylists))
    ))
  );
  
  export const addToMyList = movie => dispatch => (
    APIUtil.postList(movie).then(mylist => (
      dispatch(addMyList(mylist))
    ))
  );

  export const removeFromMyList = mylistId => dispatch => (
    APIUtil.deleteList(mylistId).then(mylist => (
      dispatch(removeMyList(mylist))
    ))
  );