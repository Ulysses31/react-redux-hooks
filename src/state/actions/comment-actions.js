export const FETCH_COMMENTS = 'FETCH_COMMENTS';

const apiUrl =
  'https://jsonplaceholder.typicode.com/comments';

export default function fetchComments() {
  return (dispatch) => {
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((resp) => {
        dispatch({
          type: FETCH_COMMENTS,
          payload: resp
        });
      })
      .catch((error) => console.log(error));
  };
}
