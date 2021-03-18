export const home = email => (
    $.ajax({
        url: '/',
        method: 'GET',
        data: { email }
    })
);