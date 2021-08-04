import React from "react"
import Layout from "../components/layout"
import BookItem from '../components/BookItem'

const BookTemplate = props => {
  console.log(props);
  return (
    <Layout>
      <BookItem
      authorName={props.pageContext.author.name}
      bookSummary={props.pageContext.summary}
      bookTitle={props.pageContext.title}
      bookCover={props.pageContext.localImage.childImageSharp.fixed}
      />
    </Layout>
  )
}
export default BookTemplate
