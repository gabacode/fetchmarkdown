import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Date({ data }) {
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
  query($date: Date!) {
    allMdx(filter: {frontmatter: {date: {eq: $date}}}) {
      edges {
          node {
              body
              slug
              frontmatter {
                title
                date
                author
              }
          }
      }
    }
  }
`