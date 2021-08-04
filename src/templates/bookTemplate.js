// this component renders on separate Book item page from BE data(gatsby-node)
import React from "react";
import Layout from "../components/layout";
import BookItem from "../components/BookItem";
import { graphql } from "gatsby";

const BookTemplate = (props) => {
  console.log(props.data);
  return (
    <Layout>
      <BookItem
        authorName={props.data.book.author.name}
        bookSummary={props.data.book.summary}
        bookTitle={props.data.book.title}
        bookCover={props.data.book.localImage.childImageSharp.fixed}
      />
    </Layout>
  );
};

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: {eq: $bookId}){
      summary
      title
      id
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
            }
        }
      }
      author {
        name
      }
    }
  }
`;
export default BookTemplate;
