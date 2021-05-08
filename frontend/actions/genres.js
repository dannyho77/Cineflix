import * as APIUtil from '../utils/genres';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';

const receiveGenre = genre => ({
    type: RECEIVE_GENRE,
    genre
})


export const fetchGenre = genreId => dispatch => (
    APIUtil.fetchGenre(genreId).then(genre => (
      dispatch(receiveGenre(genre))
    ))
  );
