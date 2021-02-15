export const FETCH_POSTS = 'FETCH_POSTS';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export default function fetchPosts() {
  return (dispatch) => {
    return fetch(apiUrl)
      .then((res) => res.json())
      .then((resp) => {
        dispatch({
          type: FETCH_POSTS,
          payload: resp
        });
      })
      .catch((error) => console.log(error));
  };
}
