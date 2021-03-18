export const postUser = user => (
    $.ajax({
        url: '/users',
        method: 'POST',
        data: { user }
    })
);

export const postSession = user => (
    $.ajax({
        url: '/session',
        method: 'POST',
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        url: '/session',
        method: 'DELETE',
    })
);