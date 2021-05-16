import styled from "styled-components"
import React from "react"

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 8px;
  background: white;
  margin-bottom: 8px;

  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
      font-weight: normal;
    }
  }
`

const BookItem = ({ authorName, bookSummary, bookTitle, children}) => {
  return (
    <BookItemWrapper>
      <h2>
        {bookTitle} <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      <div>
        {children}
      </div>
    </BookItemWrapper>
  )
}
export default BookItem;
