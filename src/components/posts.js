import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchPosts from '../state/actions/post-actions';

export default function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(
    (state) => state.postState.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
          .slice(0, 5)}
      </ul>
      <br />
    </>
  );
}
