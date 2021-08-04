import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Author({ data }) {
  const posts = data.posts.edges
  const author = data.author.edges[0].node.frontmatter
  return (
    <>
    <Helmet>
      <title>{author.name}'s posts</title>
    </Helmet>
    <Layout>
      <h1>{author.name}</h1>
      <h2>@{author.handle}</h2>
      <div>
        Other posts by {author.name}:
        <ul>
        {
          posts.map((post, index) => (
            <li key={index}>
              <Link to={`../../posts/${post.node.slug}`}>
              {post.node.frontmatter.title}
              </Link>
            </li>
          ))
        }
        </ul>
      </div>
    </Layout>
    </>
  )
}
export const query = graphql`
  query($author: String!) {
    posts: allMdx(filter: {frontmatter: {author: {eq: $author}}}) {
      edges {
          node {
              body
              slug
              frontmatter {
                title
                author
              }
          }
      }
    }
    author: allMdx(filter: {frontmatter: {name: {eq: $author}}}) {
      edges {
          node {
              frontmatter {
                name
                handle
              }
          }
      }
    }
  }
`