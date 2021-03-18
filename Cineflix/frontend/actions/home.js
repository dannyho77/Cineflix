import { home } from '../utils/home';

export const RECEIVE_EMAIL = 'RECEIVE_EMAIL';

const receiveEmail = email => ({
    type: RECEIVE_EMAIL,
    email
})


export const goToSignup = formEmail => dispatch => home(formEmail)
    .then(formEmail => dispatch(receiveEmail(formEmail)));