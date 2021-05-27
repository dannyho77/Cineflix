export const fetchLists = () => (
    $.ajax({
      method: 'GET',
      url: 'api/mylists',
    })
);

export const postList = (mylist) => (
    $.ajax({
      method: 'POST',
      url: 'api/mylists',
      data: { mylist }
    })
);

export const deleteList = (mylistId) => (
    $.ajax({
      method: 'DELETE',
      url: `api/mylists/${mylistId}`,
    })
);