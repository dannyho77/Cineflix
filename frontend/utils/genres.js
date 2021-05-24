export const fetchGenre = id => (
    $.ajax({
      method: 'GET',
      url: `api/genres/${id}`
    })
);

export const fetchGenres = () => (
    $.ajax({
      method: "GET",
      url: "api/genres",
    })
);