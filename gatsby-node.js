const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMdx {
          edges {
            node {
              slug
              frontmatter {
                title
                date(formatString:"yyyy-MM-DD")
                author
                category
                tags
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
        path: `/posts/${post.node.slug}`,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          slug: post.node.slug,
          previous,
          next,
        }});
      createPage({
          path: `/author/${post.node.frontmatter.author}`,
          component: path.resolve(`./src/templates/author.js`),
          context: {
            author: post.node.frontmatter.author,
        }});
      createPage({
          path: `/date/${post.node.frontmatter.date}`,
          component: path.resolve(`./src/templates/date.js`),
          context: {
            date: post.node.frontmatter.date,
        }});

        post.node.frontmatter.category && post.node.frontmatter.category.length > 0 ?
          post.node.frontmatter.category.forEach(cat => {
            createPage({
              path: `/category/${cat.toLowerCase().replace(/ /g,"_")}`,
              component: path.resolve(`./src/templates/category.js`),
              context: {
                category: cat,
            }});
          })
          : null
        
        post.node.frontmatter.tags && post.node.frontmatter.tags.length > 0 ?
        post.node.frontmatter.tags.forEach(tag => {
          createPage({
            path: `/tags/${tag.toLowerCase().replace(/ /g,"_")}`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              tags: tag,
            }});
          })
          : null
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    createNodeField({
      name: `type`,
      node,
      value: getNode(node.parent).sourceInstanceName
    });
  }
};