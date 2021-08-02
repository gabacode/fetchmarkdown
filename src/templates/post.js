import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Post({ data }) {
  const post = data.allMdx.edges
  return (
    <Layout>
        <MDXRenderer>
          {post[0].node.body}
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
              frontmatter{
                hasBool
              }
          }
      }
    }
  }
`