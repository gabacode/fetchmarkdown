const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMdx(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          limit: 1000
        ) {
          edges {
            node {
              slug
              fields {
                slug
              }
              frontmatter {
                title
                hasBool
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: `/posts${post.node.fields.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if ([`MarkdownRemark`, 'Mdx'].includes(node.internal.type)) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}