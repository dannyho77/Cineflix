export const fetchGenre = id => (
    $.ajax({
      method: 'GET',
      url: `api/genres/${id}`
    })
);