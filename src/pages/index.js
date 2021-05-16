import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookItem from "../components/BookItem"
import styled from 'styled-components'

const LinkButton = styled.div`
text-align: right;

a{
  padding: 8px;
  background: rebeccapurple;
  color: white;
  border-radius: 8px;
  text-decoration: none;

  &:hover{
    background: indigo;
  }
}
`;

const IndexPage = ({ data }) => {
  console.log(data.allBook.edges)

  return (
    <Layout>
      {data.allBook.edges.map(elem => (
        <BookItem
          authorName={elem.node.author.name}
          bookSummary={elem.node.summary}
          bookTitle={elem.node.title}
          key={elem.node.id}
        >
          <LinkButton>
            <Link to={`/book/${elem.node.id}`}>Join conversation</Link>
          </LinkButton>
        </BookItem>
      ))}
      //{" "}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allBook {
      edges {
        node {
          summary
          title
          id
          author {
            name
          }
        }
      }
    }
  }
`