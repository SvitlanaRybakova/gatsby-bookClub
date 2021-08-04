import styled from "styled-components";
import React from "react";
import Img from "gatsby-image";

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 8px;
  background: white;
  margin-bottom: 8px;
  display: flex;

  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`;

const BookItemImageWrapper = styled.div`
min-width: 200px;
margin-right: 8px;

img{
  width: 100%;
}
`;
const BookItemContentWrapper = styled.div`
flex-grow: 1;
`;

const BookItem = ({
  authorName,
  bookSummary,
  bookTitle,
  bookCover,
  children,
}) => {
  console.log(bookCover);
  return (
    <BookItemWrapper>

      <BookItemImageWrapper>
        <Img fixed={bookCover} />
      </BookItemImageWrapper>

      <BookItemContentWrapper>
        <h2>
          {bookTitle} <small>{authorName}</small>
        </h2>
        <p>{bookSummary}</p>
        <div>{children}</div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  );
};
export default BookItem;
