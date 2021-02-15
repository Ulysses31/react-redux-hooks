import { FETCH_COMMENTS } from '../actions/comment-actions';

const initialState = {
  comments: []
};

export default function commentReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_COMMENTS:
      console.log('commentReducer', state, action);
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}
