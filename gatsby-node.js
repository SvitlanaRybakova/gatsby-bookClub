const path = require('path');

// extra config to firebase work
exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop-html" || stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["main"],
      },
    })
  } else {
    actions.setWebpackConfig({
      resolve: {
        mainFields: ["browser", "module", "main"],
      },
    })
  }
}

// create dynamicly Book item pages
exports.createPages = ({ graphql, actions}) => {
  const {createPage} = actions;
  const bookTemplate = path.resolve('src/templates/bookTemplate.js')

  return graphql(`
  {
    allBook {
      edges {
        node {
          id
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
        context: {bookId: book.node.id}
      })
    })
  })
}
