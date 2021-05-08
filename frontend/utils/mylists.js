export const fetchLists = () => (
    $.ajax({
      method: 'GET',
      url: 'api/my_lists',
    })
);

export const postList = (movieId) => (
    $.ajax({
      method: 'POST',
      url: 'api/my_lists',
      data: { movieId }
    })
);

export const deleteList = (id) => (
    $.ajax({
      method: 'DELETE',
      url: `api/my_lists/${id}`,
    })
);