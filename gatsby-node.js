const path = require('path');

exports.createPages = ({ graphql, actions}) => {
  const {createPage} = actions;
  const bookTemplate = path.resolve('src/templates/bookTemplate.js')

  return graphql(`
  {
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
  `).then((result) => {
    if(result.errors){
      throw result.errors;
    }

    console.log('result', result);

    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`,
        component: bookTemplate,
        context: book.node
      })
    })
  })
}