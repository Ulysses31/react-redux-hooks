import { combineReducers } from 'redux';
import commentReducer from './comment-reducer';
import postReducer from './post-reducer';

export default combineReducers({
  postState: postReducer,
  commentState: commentReducer
});
