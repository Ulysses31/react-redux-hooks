import React from 'react';
import { Provider } from 'react-redux';
import Comments from './components/comments';
import Posts from './components/posts';
import store from './state/store';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Posts />
        <Comments />
      </div>
    </Provider>
  );
}
