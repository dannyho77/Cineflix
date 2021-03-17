export const postUser = user => (
    $.ajax({
        url: '',
        method: 'POST',
        data: { user }
    })
);

export const postSession = user => (
    $.ajax({
        url: '',
        method: 'POST',
        data: { user }
    })
);

export const deleteSession = () => (
    $.ajax({
        url: '',
        method: 'DELETE',
    })
);