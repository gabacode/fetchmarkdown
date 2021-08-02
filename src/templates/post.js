import React from "react"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

export default function Post({ data }) {
  const post = data.allMdx.edges[0].node
  return (
    <>
    <Helmet>
      <title>
        {post.frontmatter.title}
      </title>
    </Helmet>
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <p>Author: <Link to={`../../author/${post.frontmatter.author}`}>{post.frontmatter.author}</Link></p>
        <MDXRenderer>
          {post.body}
        </MDXRenderer>
    </Layout>
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    allMdx(filter: { slug: { eq: $slug } }) {
      edges {
          node {
              body
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