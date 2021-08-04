import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Category({ data }) {
const posts = data.allMdx.edges
  return (
    <>
    <Layout>
        {
            posts.map((post, i) => (
                <div key={i}>
                    {JSON.stringify(post.node.slug)}
                </div>
            ))
        }
    </Layout>
    </>
  )
}
export const query = graphql`
  query($category: String!) {
    allMdx(filter: {frontmatter: {category: {eq: $category}}}) {
      edges {
          node {
              body
              slug
              frontmatter {
                title
                date
                author
                category
              }
          }
      }
    }
  }
`