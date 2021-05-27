import * as APIUtil from '../utils/genres';

export const RECEIVE_GENRE = 'RECEIVE_GENRE';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';;

const receiveGenre = genre => ({
    type: RECEIVE_GENRE,
    genre
})

const receiveGenres = genres => ({
    type: RECEIVE_GENRES,
    genres
})


export const fetchGenre = id => dispatch => (
    APIUtil.fetchGenre(id).then(genre => (
      dispatch(receiveGenre(genre))
    ))
);

export const fetchGenres = () => dispatch => (
    APIUtil.fetchGenres().then(genres => (
      dispatch(receiveGenres(genres))
    ))
);
