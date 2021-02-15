import { FETCH_POSTS } from '../actions/post-actions';

const initialState = {
  posts: []
};

export default function postReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log('postReducer', state, action);
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
}
