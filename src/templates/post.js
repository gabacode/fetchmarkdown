import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.allMdx.edges[0].node
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>Author: {post.frontmatter.author}</p>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
        <pre>{JSON.stringify(post, null, 4)}</pre>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
          node {
              body
              fields {
                  slug
              }
              frontmatter {
                title
                author
                hasBool
              }
          }
      }
    }
  }
`