import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchComments from '../state/actions/comment-actions';

export default function Comments() {
  const dispatch = useDispatch();
  const comments = useSelector(
    (state) => state.commentState.comments
  );

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  return (
    <>
      <h1>Comments</h1>
      <ul>
        {comments
          .map((comment) => (
            <li key={comment.id}>{comment.name}</li>
          ))
          .slice(0, 5)}
      </ul>
      <br />
    </>
  );
}
