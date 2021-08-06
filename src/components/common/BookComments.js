import React, { useEffect, useState } from "react";
import {Input, Button } from '../common';
import moment from 'moment';
import styled from "styled-components";

const CommentForm = styled.form`
display: flex;
margin: 32px 0px;


${Input}{
  margin-right: 8px;
  margin-top: auto;
  margin-bottom: auto;
}

${Button}{
  margin: auto 0; 
}
`;

const CommentListItem = styled.div`
  > strong {
    font-size: 80%;
    color: #666;
  }

  border-bottom: 1px solid #ddd;
  padding: 4px 0;
`;

export const BookComments = ({ firebase, bookId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const unsubscribe = firebase.subscribeToBookCommens({
      bookId,
      onSnapshot: (snabshot) => {
        console.log(snabshot);
        const snapshotComments = [];
        snabshot.forEach((doc) => {
          snapshotComments.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setComments(snapshotComments);
      },
    });

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const handlePostCommentSubmit = (e) => {
    e.preventDefault();
    console.log('COMMENT', commentText)
    firebase.postComment({
      text: commentText,
      bookId
    })

  }

  return (
    <>
    <CommentForm onSubmit={(e) => handlePostCommentSubmit(e)}>
    <Input value={commentText} onChange={e => {
      e.persist();
      setCommentText(e.target.value);
    }}/>
    <Button type="submit">Post comment</Button>
    </CommentForm>

      <div>
        {comments.map((comment) => (
          <CommentListItem key={comment.id}>
            <strong>{comment.username}-{moment(comment.dateCreated.toDate()).format('HH:mm Do MMM YYYY')}</strong>
            <p>{comment.text}</p>
          </CommentListItem>
        ))}
      </div>
    </>
  );
};
